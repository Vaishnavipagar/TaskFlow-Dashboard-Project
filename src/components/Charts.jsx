import {

  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar

} from "recharts";

function Charts({

  darkMode,
  completedTasks,
  pendingTasks,
  highTasks

}) {

  const analyticsData = [

    {
      name:"Week 1",
      completed: completedTasks + 2,
      pending: pendingTasks + 4
    },

    {
      name:"Week 2",
      completed: completedTasks + 4,
      pending: pendingTasks + 3
    },

    {
      name:"Week 3",
      completed: completedTasks + 5,
      pending: pendingTasks + 2
    },

    {
      name:"Week 4",
      completed: completedTasks,
      pending: pendingTasks
    }

  ];

  const priorityData = [

    {
      priority:"High",
      tasks: highTasks
    },

    {
      priority:"Medium",
      tasks:2
    },

    {
      priority:"Low",
      tasks:1
    }

  ];

  return (

    <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mb-8">

      {/* LEFT */}

      <div className={

        darkMode

        ? "md:col-span-2 bg-[#172033] rounded-3xl p-6"

        : "md:col-span-2 bg-white rounded-3xl shadow-sm p-6"

      }>

        <h2 className="text-4xl font-bold mb-8">
          Task Analytics
        </h2>

        <ResponsiveContainer width="100%" height={350}>

          <AreaChart data={analyticsData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="completed"
              stroke="#22c55e"
              fill="#22c55e"
            />

            <Area
              type="monotone"
              dataKey="pending"
              stroke="#ef4444"
              fill="#ef4444"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      {/* RIGHT */}

      <div className={

        darkMode

        ? "bg-[#172033] rounded-3xl p-6"

        : "bg-white rounded-3xl shadow-sm p-6"

      }>

        <h2 className="text-4xl font-bold mb-8">
          Priority Tasks
        </h2>

        <ResponsiveContainer width="100%" height={350}>

          <BarChart data={priorityData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="priority" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="tasks"
              fill="#6366f1"
              radius={[12,12,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default Charts;