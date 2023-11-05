import React from 'react'
import Todo from '@/model/Todo';
import dbConnect from '@/utils/dbConnect';
import Link from 'next/link';

const show = async () => {
    // Read the data
    dbConnect();
    const todos = await Todo.find();

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
                            <>
                                <ul className="flex p-2" id={element._id}>
                                    <li className="flex-1">{element.title}</li>
                                    <li className="flex-1">{element.todo}</li>
                                    <li className="flex-1">
                                        <div className="flex">
                                            <button className="p-2 m-2 bg-red-600 text-white hover:cursor-pointer hover:bg-red-400">
                                                Delete
                                            </button>
                                            <Link href={'/edit/' + element._id}>
                                                <button className="p-2 m-2 bg-blue-600 text-white hover:cursor-pointer hover:bg-blue-200">
                                                    Edit
                                                </button>
                                            </Link>
                                            
                                        </div>
                                    </li>
                                </ul>
                            </>
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default show;