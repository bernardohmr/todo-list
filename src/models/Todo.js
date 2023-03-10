const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    finished: {
        type: Boolean,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
