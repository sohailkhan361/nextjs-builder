import React from 'react'
import Todo from '@/model/Todo';
import dbConnect from '@/utils/dbConnect';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const show = async () => {
    // Read the data
    dbConnect();
    const todos = await Todo.find();

    // Function: Delete the data
    async function deleteTodo(data: any) {
        'use server'
        let id = JSON.parse(data.get('id')?.valueOf());
        await Todo.deleteOne({ _id: id });
        redirect('/show');
    }

    return (
        <main className="flex min-h-screen flex-col p-10">
            <h1 className='font-bold text-xl m-2'>Todos</h1>
            <div className='m-2'>
                <ul className="flex font-bold p-2">
                    <li className="flex-1">Titles</li>
                    <li className="flex-1">Todos</li>
                    <li className="flex-1">Options</li>
                </ul>
                <hr />
                <div>
                    {todos.map(element => {
                        return (
                            <ul className="flex p-2 items-center" id={element._id} key={element._id}>
                                <li className="flex-1">{element.title}</li>
                                <li className="flex-1">{element.todo}</li>
                                <li className="flex-1">
                                    <div className="flex">
                                        <Link href={'/edit/' + element._id}>
                                            <button
                                                className="p-2 m-2 bg-blue-600 text-white hover:cursor-pointer hover:bg-blue-200 rounded-lg"
                                            >
                                                Edit
                                            </button>
                                        </Link>
                                        <form action={deleteTodo}>
                                            <input type='hidden' name='id' id='id' value={JSON.stringify(element._id)} />
                                            <button
                                                type='submit'
                                                className="p-2 m-2 bg-red-600 text-white hover:cursor-pointer hover:bg-red-400 rounded-xl"
                                            >
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default show;