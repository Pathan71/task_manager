import express from 'express'
import authMiddlewear from '../middlewear/auth.js'
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from '../controllers/taskController.js'

const taskRouter = express.Router()

taskRouter.route('/tk')
    .get(authMiddlewear, getTasks)
    .post(authMiddlewear, createTask)

taskRouter.route('/:id/tk')
    .get(authMiddlewear, getTaskById)
    .put(authMiddlewear, updateTask)
    .delete(authMiddlewear, deleteTask)

export default taskRouter;    