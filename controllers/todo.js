import {Todo} from "../models/todo.js"
import { errorResponse } from "../utils/responses.js"
import { successResponse } from "../utils/responses.js"
import { StatusCodes } from "http-status-codes"

export const createTask = async (req, res) => {
    const {task, status} = req.body

    if(!task || !status) {
        return errorResponse(res, StatusCodes.UNPROCESSABLE_ENTITY, "missing parameter")
    }

    const newTask = await Todo.create({task, status})

    successResponse(res, StatusCodes.CREATED, "new task created successfully", newTask)
}

export const getTask = async (req, res) => {
    const taskId = req.params.id

    const task = await Todo.findOne({_id: taskId})

    if (!task) {
        return errorResponse(res, StatusCodes.NOT_FOUND, "job not founds")
    }
    successResponse(res, StatusCodes.OK, "task fetched successfully", task)
}

export const getAllTasks = async (req, res) => {
        const tasks = await Todo.find({})

    if (!tasks) {
        return errorResponse(res, 404, "no task found/available to do")
    }

    successResponse(res, StatusCodes.OK, "all tasks fetched successfully", tasks)
}

export const updateTask = async (req, res) => {
    const taskId = req.params.id

    const {status} = req.body

    const updatedTask = await Todo.findOneAndUpdate({_id: taskId}, {status: status}, {new: true, runValidators: true})

    if (!updatedTask) {
        return errorResponse(res, StatusCodes.BAD_REQUEST, "task does not exist")
    }

    successResponse(res, StatusCodes.OK, "task updated successfully")
}

export const deleteTask = async (req, res) => {
    const taskId = req.params.id

    const task = Todo.findOne({_id: taskId})

    if (!task) {
        return errorResponse(res, StatusCodes.BAD_REQUEST, "task not found")
    }

    successResponse(res, StatusCodes.OK, "task deleted successfully", null)
}