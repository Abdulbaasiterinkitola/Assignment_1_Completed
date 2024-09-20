import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        description: "compulsory"
    },
    status: {
        type: String,
        enum: ["pending", "done", "postponed", "cancelled"],
        default: "pending"
    }
}, {timestamps: true})

export const Todo = mongoose.model("todo", todoSchema)

export default todoSchema;