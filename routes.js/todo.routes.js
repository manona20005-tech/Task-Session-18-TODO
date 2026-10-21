import express from "express"
import { createTodo, deleteById, getAllTodo, getTodoById, toggleDoneTodo, updateTodo } from "../db/query/todo.query.js";
import { todosInsertSchema} from "../db/validate_schema.js"
export const todosRouter = express.Router()
// Get Todo
todosRouter.get("/",async (req,res)=>{
const data = await getAllTodo();
res.status(200).json({
 message: "success",
Data :data});
})
// Get Todo by Id
todosRouter.get("/:todo_id",async (req,res)=>{
     const id = req.params.todo_id;
    const get_Todo_id = await getTodoById(id);
if (!get_Todo_id){
return res.status(404).json({ message: "Todo not found" });
    }
res.status(200).json({
message: "success",
data: get_Todo_id
    })
})
// Create Todo
todosRouter.post("/",async(req,res)=>{
    //validation
const body = todosInsertSchema.parse(req.body)
     console.log(body);
    const newTodo = await  createTodo(body)
     res.status(201).json({
    message: "Todo  is created ",
        data : newTodo
    });
})
// Update Todo
todosRouter.patch("/:todo_id",async(req,res)=>{
    //validation
const body = todosInsertSchema.partial().parse(req.body)
const id =req.params.todo_id;

    const update_Todo = await  updateTodo(id,body)
     res.status(200).json({
        message :"Todo is updated",
        data : update_Todo
    });
})

// Delete Todo
todosRouter.delete("/:todo_id",async(req,res)=>{
const id =req.params.todo_id;
const existingTodo = await getTodoById(id);
if (!existingTodo) {
      return res.status(404).json({ message: "Todo not found" });
}
 await deleteById(id);
res.status(200).json({
message: "Todo deleted successfully",});
})

todosRouter.patch("/:todo_id/toggle_Todo",async(req,res)=>{
const id =req.params.todo_id;
    const toggle_Todo = await  toggleDoneTodo(id)
     res.status(200).json({
        message :"Todo is update false->true or true->false",
        data : toggle_Todo
    });
})