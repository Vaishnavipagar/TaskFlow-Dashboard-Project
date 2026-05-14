import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="p-8 w-full">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-5">

          <div className="bg-blue-500 p-6 rounded text-white">
            <h2>Total Tasks</h2>
            <p className="text-3xl">25</p>
          </div>

          <div className="bg-green-500 p-6 rounded text-white">
            <h2>Completed</h2>
            <p className="text-3xl">18</p>
          </div>

          <div className="bg-red-500 p-6 rounded text-white">
            <h2>Pending</h2>
            <p className="text-3xl">7</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;