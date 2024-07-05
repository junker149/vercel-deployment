import axios from "axios"

export function Todo({ id, user_id, title, setTodos }) {
    return <div className="my-4 h-6 flex mx-4 justify-between">
        <div className="bg-lime-400 text-black w-auto mr-8 truncate pt-1 pb-1 rounded-lg h-max px-4 border-solid border-2 border-lime-500">{title}</div>
        <button className="bg-red-500 rounded-xl w-8 h-8 p-1 text-center shadow shadow-black active:shadow-none" onClick={() => {
            axios.post("https://vercel-deployment-backend-orcin.vercel.app/delTodo", {
                id: id,
                user_id: user_id
            }).then((res) => {
                axios.get(`https://vercel-deployment-backend-orcin.vercel.app/${id}`)
                .then((res) => {
                    setTodos(res.data.user_todos);
                })
            })
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
        </button>
    </div>
}