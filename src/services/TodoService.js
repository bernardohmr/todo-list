const Todo = require("../models/Todo");

module.exports = class TodoService {
    static async getAllTodos() {
        try {
            const allTodos = await Todo.find();
            return allTodos;
        } catch (err) {
            console.log(`Could not fetch todos ${err}`)
        }
    }

    static async createTodo(data) {
        try {
            const newTodo = {
                title: data.title,
                description: data.description,
                date: data.date,
                finished: data.finished,
            }

            const newObj = new Todo(newTodo);

            const result = await newObj.save();

            return result;
        } catch (err) {
            console.log(`Could not add todo ${err}`);
        }
    }

    static async updateTodo(id, data) {
        try {
            const todo = {
                title: data.title,
                description: data.description,
                date: data.date,
                finished: data.finished,
            }

            const result = await Todo.updateOne({
                _id: id,
            }, todo)

            return result;
        } catch (err) {
            console.log(`Could not update todo ${err}`);
        }
    }

    static async deleteTodo(id) {
        try {
            const result = await Todo.deleteOne({
                _id: id,
            });

            return result;
        } catch (err) {
            console.log(`Could not delete todo ${err}`);
        }
    }

    static async getById(id) {
        try {
            const result = await Todo.findOne({
                _id: id,
            });

            return result;
        } catch (err) {
            console.log(`Could not find todo ${err}`);
        }
    }
}
