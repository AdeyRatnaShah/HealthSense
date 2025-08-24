import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoutes.js'
import predictionRoutes from './routes/predictionRoutes.js'
import {connectDB} from './config/db.js'
import cors from 'cors'
const app = express()
app.use(express.json())
// import dotenv from "dotenv";
dotenv.config();
connectDB()

const PORT = process.env.PORT || 5000

app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/getprediction', predictionRoutes)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
