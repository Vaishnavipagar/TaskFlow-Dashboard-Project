import {

  FaTrash,
  FaCheck

} from "react-icons/fa";

function RecentTasks({

  darkMode,
  filteredTasks,
  deleteTask,
  completeTask

}) {

  return (

    <div className={

      darkMode

      ? "bg-[#172033] rounded-3xl p-8"

      : "bg-white rounded-3xl shadow-sm p-8"

    }>

      <h2 className="text-4xl font-bold mb-8">
        Recent Tasks
      </h2>

      <div className="grid gap-6">

        {

          filteredTasks.map((task)=>(

            <div
              key={task.id}
              className={

                darkMode

                ? "bg-[#0f172a] rounded-3xl p-6 flex justify-between items-center"

                : "bg-[#f8fafc] rounded-3xl p-6 flex justify-between items-center"

              }
            >

              {/* LEFT */}

              <div>

                <h2 className="text-2xl font-bold mb-3">

                  {task.title}

                </h2>

                <div className="flex gap-4">

                  <span className="bg-red-100 text-red-500 px-4 py-2 rounded-full">

                    {task.priority}

                  </span>

                  <span className={

                    task.status === "Completed"

                    ? "bg-green-100 text-green-500 px-4 py-2 rounded-full"

                    : "bg-orange-100 text-orange-500 px-4 py-2 rounded-full"

                  }>

                    {task.status}

                  </span>

                </div>

              </div>

              {/* ACTIONS */}

              <div className="flex gap-4">

                <button
                  onClick={()=>completeTask(task.id)}
                  className="bg-green-500 text-white p-4 rounded-2xl"
                >

                  <FaCheck />

                </button>

                <button
                  onClick={()=>deleteTask(task.id)}
                  className="bg-red-500 text-white p-4 rounded-2xl"
                >

                  <FaTrash />

                </button>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default RecentTasks;