import express from "express"
import connectDB from "./config/db.js"
import { port } from "./config/db.js"
import todoRouter from "./router/todoRoute.js"

const app = express()
app.use(express.json())

app.use("/todo", todoRouter)

app.listen(port, async () => {
    await connectDB()
    console.log(`Server currently running on port: ${port} `)
})