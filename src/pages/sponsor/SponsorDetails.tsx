import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PageBreadcrumb } from "@/components/shared/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import algosdk from "algosdk";
import { PeraWalletConnect } from "@perawallet/connect";

interface Student {
  _id: string;
  fullName: string;
  course: string;
  fundingRequired: number;
  financialNeed: string;
  milestones: string[];
  walletAddress: string;
}

const navItems = [
  { label: "Browse Students", path: "/sponsor", icon: null },
];

const peraWallet = new PeraWalletConnect({
  chainId: 416002, // Algorand TestNet
});

const SponsorDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState<Student | null>(null);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/students/${id}`
        );
        const data = await res.json();
        setStudent(data);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleSponsorship = async () => {
    const sponsorWallet = localStorage.getItem("walletAddress");

    if (!sponsorWallet) {
      alert("Wallet not connected");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      alert("Enter valid amount");
      return;
    }

    if (!student?.walletAddress) {
      alert("Student wallet not found");
      return;
    }

    try {
      setLoading(true);

      // 🔹 Connect to Algorand TestNet
      const algodClient = new algosdk.Algodv2(
        "",
        "https://testnet-api.algonode.cloud",
        ""
      );

      const suggestedParams =
        await algodClient.getTransactionParams().do();

      const microAlgos = algosdk.algosToMicroalgos(
        Number(amount)
      );

      // ✅ FIXED: sender & receiver
      const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        sender: sponsorWallet,
        receiver: student.walletAddress,
        amount: microAlgos,
        suggestedParams,
      });

      // Encode transaction
      const encodedTxn =
        algosdk.encodeUnsignedTransaction(txn);

      // ✅ FIXED: TypeScript workaround
      const signedTxn = await peraWallet.signTransaction([
        {
          txn: encodedTxn,
          signers: [sponsorWallet],
        } as any,
      ]);

      // Send transaction
     const response = await algodClient
  .sendRawTransaction(signedTxn[0])
  .do();

const txId = response.txid;


      console.log("Transaction ID:", txId);

      // Wait for confirmation
      await algosdk.waitForConfirmation(
        algodClient,
        txId,
        4
      );

      alert("🎉 Sponsorship sent successfully on TestNet!");

      // Save sponsorship in backend
      await fetch("http://localhost:5000/api/sponsorships", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sponsorWallet,
          studentId: student._id,
          amount: Number(amount),
          txId,
        }),
      });

      setAmount("");

    } catch (error) {
      console.error("Error sending Algo:", error);
      alert("Transaction failed");
    } finally {
      setLoading(false);
    }
  };

  if (!student) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <DashboardLayout navItems={navItems} role="Sponsor Dashboard">
      <div className="space-y-6">
        <PageBreadcrumb
          crumbs={[
            { label: "Sponsor", path: "/sponsor" },
            { label: student.fullName },
          ]}
        />

        <h1 className="text-2xl font-bold">
          {student.fullName}
        </h1>

        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Funding Required:</strong> ₹{student.fundingRequired}</p>
        <p><strong>Financial Need:</strong> {student.financialNeed}</p>

        <div>
          <h3 className="font-semibold mt-4">Milestones:</h3>
          <ul className="list-disc pl-6">
            {student.milestones.map((m, index) => (
              <li key={index}>{m}</li>
            ))}
          </ul>
        </div>

        <div className="pt-6 space-y-3">
          <h3 className="font-semibold">
            Enter Sponsorship Amount (ALGO)
          </h3>

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full"
            placeholder="e.g. 1"
          />

          <Button
            onClick={handleSponsorship}
            disabled={loading}
          >
            {loading ? "Processing..." : "Sponsor This Student"}
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SponsorDetails;
