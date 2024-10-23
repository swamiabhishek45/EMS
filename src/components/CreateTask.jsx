import React from "react";

const CreateTask = () => {
    return (
        <div className="">
            <form
                action=""
                className="flex flex-wrap flex-col md:flex-row bg-[#1c1c1c] w-full items-start p-5 rounded-md mt-10 justify-between"
            >
                <div className=" w-full md:w-1/2">
                    <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                    <input
                        type="text"
                        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                        placeholder="Enter Title"
                    />

                    <h3 className="text-sm text-gray-300 mb-0.5 mt-3">Date</h3>
                    <input
                        type="date"
                        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                    />

                    <h3 className="text-sm text-gray-300 mb-0.5 mt-3">
                        Assign to
                    </h3>
                    <input
                        type="text"
                        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                        placeholder="employee name"
                    />

                    <h3 className="text-sm text-gray-300 mb-0.5 mt-3">
                        Category
                    </h3>
                    <input
                        type="text"
                        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                        placeholder="design, dev, etc"
                    />
                </div>

                <div className="flex flex-col w-full md:w-1/2">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5 mt-3">
                            Description
                        </h3>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            className="text-sm py-2 px-4 outline-none bg-transparent border-[1px] border-gray-400 w-full h-44"
                        ></textarea>
                    </div>

                    <button className="bg-emerald-400 font-bold rounded-sm p-2">
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;
