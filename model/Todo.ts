import mongoose, { Schema, Document, model, Model } from 'mongoose';

interface ITodo extends Document {
    title: string;
    todo: string;
    date: Date;
}

const todoSchema: Schema<ITodo> = new Schema({
    title: {
        type: String,
    },
    todo: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

// Checking if the model has already been defined
const TodoModel: Model<ITodo> = mongoose.models.Todos || model<ITodo>('Todos', todoSchema);

export default TodoModel;