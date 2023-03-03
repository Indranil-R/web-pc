import Router from "next/router";
import { useState } from "react";
import { FaUser, FaLock, FaUserCircle } from "react-icons/fa";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage("");
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);

    if (username === "indranil" && password === "indranil") {
      setErrorMessage("");
      Router.push("/");
    } else {
      setErrorMessage("Credential Incorrect");
    }
  };

  return (
    <div
      className="flex flex-col items-center h-screen justify-center"
      style={{
        backgroundImage: `url('background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div class="rounded-xl bg-white shadow-lg  backdrop-filter backdrop-blur-lg bg-opacity-30 p-8">
        <img
          className="h-28 w-28 rounded-full mx-auto border border-white border-4"
          src="profile.jpg"
          alt="Profile"
        />
        <form className="mt-8 flex flex-col" onSubmit={handleSubmit}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500">
                <FaUser />
              </span>
            </div>
            <input
              className="w-full px-10 py-2 text-sm text-gray-900 placeholder-gray-500 bg-white border-b border-gray-300 focus:outline-none focus:border-blue-500 rounded-md shadow-md"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <div className="mt-4 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500">
                <FaLock />
              </span>
            </div>
            <input
              className="w-full px-10 py-2 text-sm text-gray-900 placeholder-gray-500 bg-white border-b border-gray-300 focus:outline-none focus:border-blue-500 rounded-md shadow-md"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          <button
            className={`mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg border-b-4 border-blue-700 hover:border-blue-800 ${
              errorMessage && "cursor-not-allowed opacity-50"
            }`}
            disabled={errorMessage}
          >
            {errorMessage ? <p>{errorMessage}</p> : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
