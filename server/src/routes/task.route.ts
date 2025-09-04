import { Router } from "express";
import {getAllTasks,getTaskById,createTask,updateTask,deleteTask} from '../controllers/task.controller'

import { validate } from "../middlewares/validate";
import { createTaskSchema, taskIdSchema, taskStatusSchema, updateTaskSchema } from "../validations/task.validation";
const router = Router();

router.get('/',validate({query : taskStatusSchema}),getAllTasks)
router.get('/:id',validate({params : taskIdSchema}),getTaskById)
router.post('/', validate({body : createTaskSchema}),createTask)
router.put('/:id',validate({body : updateTaskSchema,params : taskIdSchema}),updateTask)
router.delete('/:id',validate({params:taskIdSchema}),deleteTask)


export default router;