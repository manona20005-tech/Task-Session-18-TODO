import { eq } from "drizzle-orm";
import { db } from "../db.js";
import { todos } from "../schema.js";

export async function getAllTodo(){
 const data = await db.select().from(todos)
 return data;
}

export async function getTodoById(id) {
    const data =await db.select()
.from(todos)
 .where(eq(todos.id, id)).limit(1)
 if (data.length) {return data[0];}
else { return false;}  
}

export async function deleteById(id){
const deletedData =await db.delete(todos).where(eq(todos.id, id))
  return deletedData;
}
export async function updateTodo(id,body){
const updatedData =await db.update(todos).set(body).where(eq(todos.id, id))
  return updatedData;
}
export async function createTodo({ title, body }){
  const result = await db.insert(todos).values({
    title: title,
    body: body,
  });
return result;
}
export async function toggleDoneTodo(id) {
  const data = await db
.select().from(todos)
.where(eq(todos.id, id)).limit(1);
if (data.length === 0) { return false;}
const result = await db
    .update(todos).set({
done: !data[0].done,}).where(eq(todos.id, id));
return result;
}