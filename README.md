# AI Interview Agent 🎯

An AI‑powered interview preparation platform with integrated payment and credit system.  
Built using **React, Node.js, Express, MongoDB, and Razorpay**.

---

## 🚀 Features
- 🔐 Secure payments with Razorpay Checkout
- 💳 Credits system – purchase credits to unlock interview practice
- 🧠 AI Interview Agent – personalized Q&A sessions
- 📊 User dashboard – track credits and progress
- ⚡ Full‑stack integration – seamless frontend ↔ backend flow

---

## 🛠️ Tech Stack
- **Frontend:** React, Redux, Axios, Bootstrap  
- **Backend:** Node.js, Express.js, MongoDB  
- **Payments:** Razorpay Orders + Signature Verification  
- **Auth & Security:** JWT, bcrypt, environment variables  

---

## 🔄 Payment Flow
1. **Create Order** → Backend generates Razorpay order and saves in DB  
2. **Checkout** → Frontend opens Razorpay widget with order ID  
3. **Payment** → Razorpay processes transaction and returns signature  
4. **Verify** → Backend verifies signature, updates DB, adds credits  
5. **Success** → User sees updated credits in dashboard  

---

## ⚙️ Setup Instructions
```bash
# Clone the repo
git clone https://github.com/Adarsh00003/AI_Interview_Agent.git
cd AI_Interview_Agent

# Install dependencies
npm install

# Add environment variables in .env
VITE_RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_jwt_secret

# Run backend
npm run server

# Run frontend
npm run dev
