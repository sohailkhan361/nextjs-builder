import Todos from '@/model/Todo';
import dbConnect from '@/utils/dbConnect';
import { redirect } from 'next/navigation';

export default function Home() {
  // Add the data
  async function newTodo(data: any) {
    'use server';
    let title = data.get('title')?.valueOf();
    let todo = data.get('todo')?.valueOf();

    try{
      dbConnect();
      let newTodo = new Todos({ title, todo});
      await newTodo.save();

      console.log(newTodo);
    } catch (error) {
      console.log(error);
    }

    redirect('/show');
  }

  return (
    <main className="flex min-h-screen flex-col p-10">
      <h2 className='text-xl font-bold'>CRUD Application</h2>
      <div className='flex items-center justify-center flex-col m-5 p-5'>
        <form action={newTodo} className='grid col-span-2 w-[100%]'>
          <div className='flex justify-between items-center'>
            <label htmlFor="title" className='texty-lg'>Text</label>
            <input type="text" className='h-10 p-3 m-2 bg-slate-400 text-white' id='title' name='title'/>
          </div>
          <div className='flex justify-between items-center'>
            <label htmlFor="todo" className='texty-lg'>Todo</label>
            <input type="text" className='h-10 p-3 m-2 bg-slate-400 text-white' id='todo' name='todo'/>
          </div>
        <button type="submit" className='p-3 font-bold bg-blue-800 hover:bg-blue-400 text-white'>Submit</button>
        </form>
      </div>
    </main>
  )
};