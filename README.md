EduChain

A Decentralized Scholarship Sponsorship Platform Using Algorand Blockchain

1. Introduction

EduChain is a decentralized scholarship sponsorship platform designed to connect students seeking financial assistance with sponsors willing to fund their education. The system integrates a modern full-stack web application with blockchain technology to ensure transparency, trust, and secure fund transfers.

Unlike traditional scholarship systems that rely on centralized control and manual verification, EduChain uses wallet-based authentication and blockchain-backed transactions. Every sponsorship transaction is recorded on the Algorand TestNet, making the funding process verifiable and tamper-proof.

This project demonstrates the practical implementation of decentralized finance (DeFi) concepts in the education funding domain.

2. Problem Statement

Conventional scholarship sponsorship platforms suffer from:

Lack of transparency in fund transfers

Delays in payment processing

Manual and opaque verification procedures

Centralized control over fund management

No real-time tracking of sponsorship transactions

EduChain addresses these challenges by combining blockchain payments, wallet-based identity, and a structured backend system for application management.

3. System Overview

The platform consists of three main layers:

Frontend (User Interface) – Built using React and TypeScript

Backend (Application Server) – Built using Node.js, Express, and MongoDB

Blockchain Layer – Algorand TestNet for secure ALGO transfers

High-Level Workflow

User connects Algorand wallet using Pera Wallet.

Backend checks whether the wallet is already registered.

If new, the user selects a role (Student or Sponsor).

Students submit scholarship applications.

Sponsors browse student applications.

Sponsor selects a student and sends ALGO via blockchain.

Transaction is signed using Pera Wallet.

Transaction ID is stored in MongoDB for record keeping.

4. Technology Stack
Frontend

React (Vite + TypeScript)

Tailwind CSS

ShadCN UI Components

Lucide Icons

Pera Wallet Connect SDK

Algorand JavaScript SDK

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

Blockchain

Algorand TestNet

Pera Wallet

PyTeal (Smart Contract Development – Work in Progress)



Future Enhancements

Milestone-based escrow smart contract

Admin verification workflow

Partial funding by multiple sponsors

Real-time blockchain explorer integration

Dashboard analytics and reporting

On-chain milestone verification



