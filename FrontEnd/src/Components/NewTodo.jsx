import axios from "axios";
import { useState } from "react";

export function NewTodo({ id, setTodos }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return <div className="flex flex-col items-center">
        <input className="mt-4 mb-2 h-10 w-64 bg-sky-100 text-black border-solid border-2 border-lime-600" placeholder="to-do..." onChange={(e) => {
            setTitle(e.target.value);
        }}></input>
        <button className="my-4 w-28 border-solid border-2 border-sky-800 bg-slate-900 shadow-2xl hover:bg-slate-950 p-1" onClick={() => {
            axios.post(`https://vercel-deployment-backend-orcin.vercel.app/todo/newTodo`, {
                title: title,
                user_id: id
            }).then(() => {
                axios.get(`https://vercel-deployment-backend-orcin.vercel.app/${id}`)
                    .then((res) => {
                        setTodos(res.data.user_todos);
                    })
            })
        }}>Add To-do</button>
    </div>
}