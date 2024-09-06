# Lab-L-3

## Project Overview
This project is part of **Lab L-3** where we send and receive messages using the **Babbage SDK** and **PeerServ**. The goal of this lab is to gain hands-on experience with sending messages, listing incoming messages, and acknowledging them on the MetaNet blockchain.

## Features
- Send a message using the **Babbage SDK**.
- List incoming messages from a specified messageBox.
- Acknowledge messages after reading them.

## Prerequisites
To run this project, ensure you have the following installed:
- **Node.js** and **NPM**
- **MetaNet Client (MNC)**
- **PeerServ Service** (using the **staging-peerserv.babbage.systems** endpoint)

## How to Run the Project

### 1. Sending a Message
- To send a message to yourself or an external recipient, use the following command:
   ```bash
   node sendMessage.js
