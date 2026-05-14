import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = ()=>{

    if(email === "" || password === ""){

      alert("Please fill all fields");

      return;

    }

    // DEMO LOGIN

    localStorage.setItem("isLoggedIn", true);

    navigate("/tasks");

  };

  return (

    <div className="min-h-screen bg-[#0b1120] flex items-center justify-center p-6">

      <div className="bg-[#172033] w-full max-w-md rounded-3xl p-10">

        {/* LOGO */}

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-white">

            TaskFlow

          </h1>

          <p className="text-gray-400 mt-3">

            AI Task Manager

          </p>

        </div>

        {/* TITLE */}

        <h2 className="text-4xl text-white font-bold mb-8">

          Login

        </h2>

        {/* EMAIL */}

        <div className="bg-[#0b1120] flex items-center px-5 py-4 rounded-2xl mb-5">

          <FaEnvelope className="text-gray-400 mr-4" />

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="bg-transparent outline-none text-white w-full"
          />

        </div>

        {/* PASSWORD */}

        <div className="bg-[#0b1120] flex items-center px-5 py-4 rounded-2xl mb-8">

          <FaLock className="text-gray-400 mr-4" />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="bg-transparent outline-none text-white w-full"
          />

        </div>

        {/* BUTTON */}

        <button
          onClick={handleLogin}
          className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-white py-4 rounded-2xl text-xl font-bold"
        >

          Login

        </button>

      </div>

    </div>

  );
}

export default Login;