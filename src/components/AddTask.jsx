import { useState, useEffect } from "react";

function AddTask({

  darkMode,
  taskName,
  setTaskName,
  priority,
  setPriority,
  addTask

}) {

  // LIVE DATE & TIME

  const [currentTime, setCurrentTime] = useState(

    new Date()

  );

  useEffect(()=>{

    const timer = setInterval(()=>{

      setCurrentTime(new Date());

    },1000);

    return ()=>clearInterval(timer);

  },[]);

  return (

    <div className={

      darkMode

      ? "bg-[#172033] p-6 rounded-3xl mb-8"

      : "bg-white p-6 rounded-3xl shadow-sm mb-8"

    }>

      {/* TOP */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-4xl font-bold">
            Add New Task
          </h2>

          {/* LIVE TIME */}

          <p className="text-gray-400 mt-2 text-lg">

            {

              currentTime.toLocaleDateString()

            }

            {" | "}

            {

              currentTime.toLocaleTimeString()

            }

          </p>

        </div>

      </div>

      {/* INPUTS */}

      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e)=>setTaskName(e.target.value)}
          className="flex-1 p-5 rounded-2xl border outline-none text-black"
        />

        <select
          value={priority}
          onChange={(e)=>setPriority(e.target.value)}
          className="p-5 rounded-2xl border text-black"
        >

          <option>High</option>
          <option>Medium</option>
          <option>Low</option>

        </select>

        <button
          onClick={addTask}
          className="bg-[#6366f1] hover:bg-[#4f46e5] text-white px-10 rounded-2xl"
        >

          Add Task

        </button>

      </div>

    </div>

  );

}

export default AddTask;