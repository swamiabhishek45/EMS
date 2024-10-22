import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e, "Form Submitted...");

        setEmail("");
        setPassword("");
    };
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 rounded-lg  border-violet-600 p-6">
                <h1 className="text-center text-2xl font-semibold mb-10">
                    Log In
                </h1>
                <form
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                    action=""
                >
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            type="email"
                            className="border-2 rounded-full py-3 px-4 border-purple-500 bg-transparent placeholder:text-gray-400 outline-none text-sm w-60"
                            placeholder="Enter your email"
                            required
                        />
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            type="password"
                            className="border-2 rounded-full py-3 px-4 border-purple-500 bg-transparent placeholder:text-gray-400 outline-none text-sm  w-60"
                            placeholder="Enter your password"
                            required
                        />
                        {/* <div className="flex justify-between">
                            <p>Rember me</p>
                            <p>forget pass</p>
                        </div> */}

                        <button className="border-none py-3 px-4 bg-purple-500 rounded-full w-full mt-5">
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
