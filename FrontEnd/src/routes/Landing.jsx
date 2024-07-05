import { useNavigate } from "react-router-dom";
import { Title } from "../Components/Title";

export function Landing() {
    const navigate = useNavigate();

    return <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className="flex flex-col justify-center items-center">
            <div className="pt-52 pb-4">
                <Title></Title>
            </div>
            <div className="text-xl flex flex-col items-center">
                <button className="border-solid border-2 border-sky-800 bg-slate-900 w-28 mb-4 hover:bg-slate-950" onClick={() => {
                    navigate("/signup")
                }}>Sign Up</button>
                <button className="border-solid border-2 border-sky-800 bg-slate-900 w-28 hover:bg-slate-950" onClick={() => {
                    navigate("/login")
                }}>Log In</button>
            </div>
        </div>
    </div>
}