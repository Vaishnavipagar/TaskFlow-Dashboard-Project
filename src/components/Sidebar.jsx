import {
  FaTasks,
  FaChartBar,
  FaClipboardList,
  FaCog,
  FaCalendarAlt,
  FaUsers,
  FaInbox,
  FaQuestionCircle,
  FaUser
} from "react-icons/fa";

function Sidebar({ darkMode }) {

  return (

    <div className={

      darkMode

      ? "w-[260px] bg-[#020617] text-white min-h-screen flex flex-col justify-between p-6"

      : "w-[260px] bg-[#081028] text-white min-h-screen flex flex-col justify-between p-6"

    }>

      {/* TOP */}

      <div>

        {/* LOGO */}

        <div className="mb-12">

          <h1 className="text-5xl font-bold">
            TaskFlow
          </h1>

          <p className="text-gray-400 mt-2">
            AI Task Manager
          </p>

        </div>

        {/* MENU */}

        <ul className="space-y-8 text-xl">

          <li className="bg-[#4f46e5] px-5 py-4 rounded-2xl flex items-center gap-4">

            <FaChartBar />

            Dashboard

          </li>

          <li className="flex items-center gap-4 hover:text-blue-400 transition">

            <FaTasks />

            Tasks

          </li>

          <li className="flex items-center gap-4 hover:text-blue-400 transition">

            <FaClipboardList />

            Kanban Board

          </li>

          <li className="flex items-center gap-4 hover:text-blue-400 transition">

            <FaCalendarAlt />

            Calendar

          </li>

          <li className="flex items-center gap-4 hover:text-blue-400 transition">

            <FaChartBar />

            Analytics

          </li>

          <li className="flex items-center gap-4 hover:text-blue-400 transition">

            <FaUsers />

            Team

          </li>

          <li className="flex items-center gap-4 hover:text-blue-400 transition">

            <FaCog />

            Settings

          </li>

        </ul>

      </div>

      {/* BOTTOM */}

      <div>

        {/* EXTRA MENU */}

        <div className="border-t border-gray-700 pt-6">

          <ul className="space-y-6 text-xl">

            <li className="flex items-center gap-4 hover:text-blue-400 transition">

              <FaUser />

              Profile

            </li>

            <li className="flex items-center gap-4 hover:text-blue-400 transition">

              <FaInbox />

              Inbox

            </li>

            <li className="flex items-center gap-4 hover:text-blue-400 transition">

              <FaQuestionCircle />

              Help & Support

            </li>

          </ul>

        </div>

        {/* USER PROFILE */}

        <div className="flex items-center gap-4 mt-10 bg-[#101935] p-4 rounded-2xl">

          {/* PROFILE IMAGE */}

          <img
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
            alt="profile"
            className="w-16 h-16 rounded-full border-2 border-blue-500 object-cover"
          />

          {/* USER INFO */}

          <div>

            <h2 className="font-bold text-lg">
              Vaishnavi Pagar
            </h2>

            <p className="text-gray-400 text-sm">
              Frontend Developer
            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Sidebar;