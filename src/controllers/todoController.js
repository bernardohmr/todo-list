const TodoService = require("../services/TodoService");
const HttpStatus = require("../shared/HttpStatus");

exports.get = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await TodoService.getById(id);

        return res
            .status(HttpStatus.OK)
            .json(result);
    } catch (err) {
        return res
            .status(HttpStatus.INTERNAL_ERROR)
            .json({ error: err });
    }
}

exports.getAll = async (req, res) => {
    try {
        const todos = await TodoService.getAllTodos();

        if (!todos || !todos.length) {
            return res
                .status(HttpStatus.NOT_FOUND)
                .json("No todos published yet!");
        }

        return res
            .status(HttpStatus.OK)
            .json(todos);
    } catch (err) {
        return res
            .status(HttpStatus.INTERNAL_ERROR)
            .json({ error: err });
    }
}

exports.add = async (req, res) => {
    try {
        const data = req.body;
        const todo = await TodoService.createTodo(data);

        return res
            .status(HttpStatus.CREATED)
            .json(todo);
    } catch (err) {
        return res
            .status(HttpStatus.INTERNAL_ERROR)
            .json({ error: err });
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const result = await TodoService.updateTodo(id, data);

        return res
            .status(HttpStatus.NO_CONTENT)
            .json(result);
    } catch (err) {
        return res
            .status(HttpStatus.INTERNAL_ERROR)
            .json({ error: err });
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await TodoService.deleteTodo(id);

        return res
            .status(HttpStatus.NO_CONTENT)
            .json(result);
    } catch (err) {
        return res
            .status(HttpStatus.INTERNAL_ERROR)
            .json({ error: err });
    }
}
