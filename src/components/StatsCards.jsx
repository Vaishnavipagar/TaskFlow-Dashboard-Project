function StatsCards({

  darkMode,
  tasks,
  completedTasks,
  pendingTasks,
  highTasks

}) {

  return (

    <div className="grid md:grid-cols-4 grid-cols-1 gap-6 mb-8">

      {

        [

          {
            title:"Total Tasks",
            value:tasks.length,
            color:"text-blue-500"
          },

          {
            title:"Completed",
            value:completedTasks,
            color:"text-green-500"
          },

          {
            title:"Pending",
            value:pendingTasks,
            color:"text-red-500"
          },

          {
            title:"High Priority",
            value:highTasks,
            color:"text-orange-500"
          }

        ].map((card,index)=>(

          <div
            key={index}
            className={

              darkMode

              ? "bg-[#172033] p-6 rounded-3xl"

              : "bg-white p-6 rounded-3xl shadow-sm"

            }
          >

            <h2 className="text-gray-400 text-xl">
              {card.title}
            </h2>

            <h1 className={`text-6xl font-bold mt-4 ${card.color}`}>

              {card.value}

            </h1>

          </div>

        ))

      }

    </div>

  );

}

export default StatsCards;