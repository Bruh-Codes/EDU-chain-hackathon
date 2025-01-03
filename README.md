# 🌟 EDU Fixed Yield Protocol

A decentralized fixed-yield protocol built on EDU Chain that enables users to earn guaranteed yields through staking and participating in educational activities. Stack your knowledge with your tokens - learn, earn, and earn FYT tokens on your EDU holdings through staking rewards and educational achievements.

## 🔧 Prerequisites

- Node.js v18+
- pnpm
- Git
- EDU testnet wallet
- IDE (VS Code recommended)

## 🚀 Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/Bruh-Codes/EDU-chain-hackathon.git
cd EDU-chain-hackathon
```

1. **Install dependencies for hardhat**

```bash
# Install root dependencies
pnpm install

# Install frontend dependencies
cd frontend
pnpm install
```

1. **Set up environment variables**

```bash
cd .. # // from frontend

# In the root directory
npx hardhat vars set ACCOUNT_PRIVATE_KEY
# Enter your wallet's private key when prompted
```

1. **Compile Smart Contracts**

```bash
# In the root directory
npx hardhat compile

# //it has already been deploy so there is no need. you can skip this step
npx hardhat deploy
```

1. **Run Tests**

```bash
npx hardhat test
```

```bash
# Run all tests with gas reporting

REPORT_GAS=true npx hardhat test

# Run coverage
npx hardhat coverage
```

1. **Start Frontend Development Server**

```bash
# In the frontend directory
cd frontend
pnpm install
pnpm run dev
```

1. **Access the Application**
   Open `http://localhost:3000` in your browser

## 📝 Contract Addresses (EDU Testnet)

YieldToken: `0x235a61846Cc52410948E37B1d426Cb82F41f940e`
YieldPool: `0xCbe4C05520F526FEFd0e0FC133bfA24a033546B8`

## 🔍 Features

- **Fixed Yield Generation**

  - 10% APY on all deposits
  - Automatic yield calculation
  - No impermanent loss risk

- **Flexible Staking Options**

  - Lock periods from 1 to 365 days
  - Early unstaking with 10% penalty
  - Multiple active positions per wallet

- **Learn & Earn System**

  - Answer educational questions
  - Earn rewards for correct answers
  - Progressive difficulty levels
  - Track learning progress

- **Security & Transparency**

  - Non-custodial protocol
  - Fully audited smart contracts
  - Real-time position tracking

- **User Experience**
  - Interactive analytics dashboard
  - Position management interface
  - Faucet for testnet tokens
  - Mobile-responsive design

## 🛠 Tech Stack

- **Frontend**: Next.js, TailwindCSS, shadcn/ui
- **Web3**: Reown AppKit, wagmi, viem
- **Smart Contracts**: Solidity, Hardhat
- **Testing**: Hardhat, Chai

## 📈 Local Development

1. **Start Local Hardhat Node**

```bash
npx hardhat node
```

1. **Deploy Contracts Locally**

```bash
npx hardhat ignition deploy ./ignition/modules/YieldPool.ts --['your network']
```

1. **Configure Frontend**

- Update contract addresses in `frontend/lib/utils.ts`
- Ensure your wallet is connected to localhost network or your preferred network.

1. **Handling Metamask Errors**
   Metamask currently has a bug so sometimes transactions will fail in cases like minting and switching addresses. This is because metamask tracks blocks which is not in sync with the local network and will sometimes throw errors like Internal JSON-RPC Error. to fix these errors

1. **Handling Connection Errors**
   sometimes connections to your metamask will not be detected. This is a reown library problem. to resolve this issue,

- Click on your metamask
- Click on the green dot on the top-right beside your options menu
- Disconnect and try again connecting on th site.

- Click on Metamask and go to settings
- Click on Advanced
- Click on Clear Activity Tab Data
- Click on Clear

NOTE: to switch your account address you must do that in you metamask wallet.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

---

Built by [Kamasah Dickson](https://kamasahdickson.vercel.app)
