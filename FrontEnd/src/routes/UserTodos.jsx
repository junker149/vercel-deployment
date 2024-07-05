import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Todo } from '../Components/Todo';
import axios from 'axios';
import { NewTodo } from '../Components/NewTodo';
import { Title } from '../Components/Title';

export function UserTodos() {
    const { id } = useParams();
    const [todos, setTodos] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        // Fetch user todos and name
        const fetchUserTodos = async () => {
            try {
                const res = await axios.get(`https://vercel-deployment-backend-orcin.vercel.app/${id}`);
                setTodos(res.data.user_todos);
                setName(res.data.name);
            } catch (err) {
                console.error("Error fetching user todos:", err);
            }
        };

        fetchUserTodos();
    }, [todos]);

    return <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] p-8">
        <div className=''>
            <div className='m-4'><Title></Title></div>

            <div className='flex ml-40'>
                <div className='flex flex-col w-1/4 mr-5 bg-gray-700  border-solid border-2 border-gray-800 pt-4 pl-4 pr-4 pb-16 mt-4 rounded-md h-max'>
                    <div className='text-2xl text-lime-500 mb-3'>Hello, <b>{name}</b></div>
                    <div className='bg-lime-500 border-solid border-2 border-lime-600 pt-4 px-6 rounded-md'><NewTodo id={id} setTodos={setTodos}></NewTodo></div>
                </div>

                <div className='bg-gray-700 mt-4 rounded-md w-3/6 ml-5 border-solid border-2 border-gray-800'>
                    {todos.map((todo) => {
                        return <Todo key={todo._id} user_id={id} id={todo._id} title={todo.title} setTodos={setTodos}/>
                    })}
                </div>
            </div>

        </div>
    </div>
}