import { useState } from "react";
import { Title } from "../Components/Title";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate('');

    return <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="flex flex-col justify-center items-center">
            <div className="pt-52 pb-4">
                <Title></Title>
            </div>
            <div className="text-xl flex flex-col items-center">
                <input className="border-solid border-2 border-black text-black" placeholder="Username..." onChange={(e) => {
                    setUsername(e.target.value);
                }}></input>
                <input className="border-solid border-2 border-black text-black mt-4" placeholder="Password..." onChange={(e) => {
                    setPassword(e.target.value);
                }}></input>
                <button className="border-solid border-2 border-sky-800 bg-slate-900 w-28 hover:bg-slate-950 mt-4" onClick={() => {
                    axios.post('https://vercel-deployment-backend-orcin.vercel.app/signup', {
                        username: username,
                        password: password
                    }).then(() => {
                        navigate('/login');
                    })
                }}>SignUp</button>
            </div>
        </div>
    </div>
}