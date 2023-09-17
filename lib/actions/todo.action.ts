"use server";

import Todo from "../models/todo.model";
import { connectToDB } from "../mongoose";

interface Props {
  title: string;
  description: string;
}

export const addTodolist = async ({ title, description }: Props) => {
  try {
    connectToDB();

    await Todo.create({
      title,
      description,
    });
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
