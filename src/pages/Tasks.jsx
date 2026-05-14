import { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AddTask from "../components/AddTask";
import StatsCards from "../components/StatsCards";
import Charts from "../components/Charts";
import RecentTasks from "../components/RecentTasks";

function Tasks() {

  const [darkMode, setDarkMode] = useState(false);

  const [tasks, setTasks] = useState([

    {
      id:1,
      title:"Design Landing Page",
      priority:"High",
      status:"Completed"
    },

    {
      id:2,
      title:"Fix Login Issue",
      priority:"Medium",
      status:"Pending"
    },

    {
      id:3,
      title:"Create Dashboard UI",
      priority:"Low",
      status:"Completed"
    }

  ]);

  const [taskName, setTaskName] = useState("");

  const [priority, setPriority] = useState("High");

  const [search, setSearch] = useState("");

  // ADD TASK

  const addTask = ()=>{

    if(taskName.trim()==="") return;

    const newTask = {

      id: Date.now(),

      title: taskName,

      priority: priority,

      status:"Pending"

    };

    setTasks([...tasks,newTask]);

    setTaskName("");

  };

  // DELETE TASK

  const deleteTask = (id)=>{

    setTasks(

      tasks.filter((task)=>task.id !== id)

    );

  };

  // COMPLETE TASK

  const completeTask = (id)=>{

    const updatedTasks = tasks.map((task)=>

      task.id === id

      ? { ...task, status:"Completed" }

      : task

    );

    setTasks(updatedTasks);

  };

  // FILTER

  const filteredTasks = tasks.filter((task)=>

    task.title.toLowerCase().includes(

      search.toLowerCase()

    )

  );

  // COUNTS

  const completedTasks = tasks.filter(

    task => task.status === "Completed"

  ).length;

  const pendingTasks = tasks.filter(

    task => task.status === "Pending"

  ).length;

  const highTasks = tasks.filter(

    task => task.priority === "High"

  ).length;

  return (

    <div className={

      darkMode

      ? "flex bg-[#0b1120] text-white min-h-screen"

      : "flex bg-[#f5f7fb] min-h-screen"

    }>

      <Sidebar darkMode={darkMode} />

      <div className="flex-1 p-8">

        <Topbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          search={search}
          setSearch={setSearch}
        />

        <AddTask
          darkMode={darkMode}
          taskName={taskName}
          setTaskName={setTaskName}
          priority={priority}
          setPriority={setPriority}
          addTask={addTask}
        />

        <StatsCards
          darkMode={darkMode}
          tasks={tasks}
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
          highTasks={highTasks}
        />

        <Charts
          darkMode={darkMode}
          completedTasks={completedTasks}
          pendingTasks={pendingTasks}
          highTasks={highTasks}
        />

        <RecentTasks
          darkMode={darkMode}
          filteredTasks={filteredTasks}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />

      </div>

    </div>

  );

}

export default Tasks;