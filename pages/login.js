import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import Router from "next/router";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.toLowerCase().trim() === "admin" && password.toLowerCase().trim() === "admin") {
      setErrorMessage("");
      Router.push("/");
    } else {
      setErrorMessage("Invalid Credentials");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('background.jpg')` }}>
      <div className="rounded-xl bg-white shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 p-8">
        <img className="h-28 w-28 rounded-full mx-auto border border-white border-4" src="profile.jpg" alt="Profile" />
        <form className="mt-8 flex flex-col" onSubmit={handleSubmit}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500">
                <FaUser />
              </span>
            </div>
            <input className="w-full px-10 py-2 text-sm text-gray-900 placeholder-gray-500 bg-white border-b border-gray-300 focus:outline-none focus:border-blue-500 rounded-md shadow-md" type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          </div>

          <div className="mt-4 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500">
                <FaLock />
              </span>
            </div>
            <input className="w-full px-10 py-2 text-sm text-gray-900 placeholder-gray-500 bg-white border-b border-gray-300 focus:outline-none focus:border-blue-500 rounded-md shadow-md" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          </div>

          <button className={`mt-4 font-bold py-2 px-4 rounded-lg border-b-4 ${errorMessage ? "cursor-not-allowed opacity-50 bg-red-100 text-red-700" : "bg-blue-500 hover:bg-blue-600 text-white border-blue-700 hover:border-blue-800"}`} disabled={errorMessage}>
            {errorMessage ? errorMessage : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
