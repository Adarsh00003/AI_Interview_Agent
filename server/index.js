import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/connectDb.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'
import interviewRouter from './routes/interview.route.js'
import paymentRouter from './routes/payment.route.js'
dotenv.config()

const app = express()
//const cors = require("cors");

const allowedOrigins = [
  "http://localhost:5173",                  // Dev
  "https://ai-interview-agent-rho.vercel.app" // Vercel prod
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));


const PORT = process.env.PORT || 6000

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview",interviewRouter)
app.use("/api/payment",paymentRouter)

const startServer = async () => {
    await connectDb()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}

startServer()
