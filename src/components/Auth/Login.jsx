import React from "react";

const Login = () => {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 rounded-lg  border-violet-600 p-6">
                <h1 className="text-center text-2xl font-semibold mb-10">
                    Log In
                </h1>
                <form action="">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <input
                            type="email"
                            className="border-2 rounded-full py-3 px-4 border-purple-500 bg-transparent placeholder:text-white outline-none text-sm text-black w-60"
                            placeholder="Enter your email"
                        />
                        <input
                            type="password"
                            className="border-2 rounded-full py-3 px-4 border-purple-500 bg-transparent placeholder:text-white outline-none text-sm text-black w-60"
                            placeholder="Enter your password"
                        />
                        {/* <div className="flex justify-between">
                            <p>Rember me</p>
                            <p>forget pass</p>
                        </div> */}

                        <button>Log in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
