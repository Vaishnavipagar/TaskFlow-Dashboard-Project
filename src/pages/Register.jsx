import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex justify-center items-center h-screen">

      <div className="bg-white p-8 shadow rounded w-[350px]">

        <h1 className="text-3xl font-bold mb-5 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
        />

        <button className="bg-green-600 text-white w-full p-3 rounded">
          Register
        </button>

        <p className="mt-4 text-center">
          Already Account ?
          <Link to="/" className="text-blue-600">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;