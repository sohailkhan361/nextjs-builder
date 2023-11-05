import React from 'react'
import Todo from '@/model/Todo';
import dbConnect from '@/utils/dbConnect';
import { redirect } from 'next/navigation';

const edit = async ({ params }: { params: { id: string } }) => {
    // Find a record
    dbConnect();
    const todo = await Todo.findOne({ _id: params.id });

    // Update
    async function updateTodo(data: any) {
        'use server';
        let title = data.get('title')?.valueOf();
        let todo = data.get('todo')?.valueOf();
        let update = await Todo.findByIdAndUpdate({ _id: params.id}, { title, todo })

        console.log(update);
        redirect('/show');
    }
    return (
        <main className="flex min-h-screen flex-col p-10">
            <h2 className='text-xl font-bold'>Edit Data</h2>
            <div className='flex items-center justify-center flex-col m-5 p-5'>
                <form action={updateTodo} className='grid col-span-2 w-[100%]'>
                    <div className='flex justify-between items-center'>
                        <label htmlFor="title" className='texty-lg'>
                            Text
                        </label>
                        <input 
                            type="text" 
                            className='h-10 p-3 m-2 bg-slate-400 text-white' 
                            id='title' 
                            name='title'
                            defaultValue={todo?.title}
                        />
                    </div>
                    <div className='flex justify-between items-center'>
                        <label htmlFor="todo" className='texty-lg'>
                            Todo
                        </label>
                        <input
                            type="text"
                            className='h-10 p-3 m-2 bg-slate-400 text-white'
                            id='todo'
                            name='todo'
                            defaultValue={todo?.todo}
                        />
                    </div>
                    <button type="submit" className='p-3 font-bold bg-green-600 hover:bg-green-300 text-white'>
                        Edit
                    </button>
                </form>
            </div>
        </main>
    )
}

export default edit