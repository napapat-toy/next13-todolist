"use server";

import { revalidatePath } from "next/cache";
import Todo from "../models/todo.model";
import { connectToDB } from "../mongoose";

interface Props {
  title: string;
  description?: string;
}

export const addTodolist = async ({ title, description }: Props) => {
  try {
    connectToDB();

    await Todo.create({
      title,
      description,
    });
    revalidatePath(`/`);
  } catch (error: any) {
    throw new Error(`Failed to create todo: ${error.message}`);
  }
};

export const fetchTodos = async () => {
  try {
    connectToDB();

    const todos = await Todo.find();

    return todos;
  } catch (error: any) {
    throw new Error(`Failed to fetch todos: ${error.message}`);
  }
};

export const fetchTodoById = async (todoId: string) => {
  try {
    connectToDB();

    const todo = await Todo.findById(todoId);

    return todo;
  } catch (error: any) {
    throw new Error(`Failed to fetch todo: ${error.message}`);
  }
};

export const deleteTodoById = async (todoId: string) => {
  try {
    connectToDB();

    await Todo.findByIdAndDelete(todoId);
    revalidatePath(`/`);
  } catch (error: any) {
    throw new Error(`Failed to delete todo: ${error.message}`);
  }
};

export const updateTodoById = async (todoId: string, todo: Props) => {
  try {
    connectToDB();

    await Todo.findByIdAndUpdate(todoId, todo);
    revalidatePath(`/`);
  } catch (error: any) {
    throw new Error(`Failed to delete todo: ${error.message}`);
  }
};
