import {

  FaBell,
  FaMoon,
  FaSun,
  FaSearch

} from "react-icons/fa";

function Topbar({

  darkMode,
  setDarkMode,
  search,
  setSearch

}) {

  return (

    <div className="flex justify-between items-center mb-8">

      <div>

        <h1 className="text-6xl font-bold">
          Dashboard
        </h1>

      </div>

      <div className="flex items-center gap-5">

        {/* SEARCH */}

        <div className={

          darkMode

          ? "flex items-center bg-[#1e293b] px-5 py-4 rounded-2xl w-[350px]"

          : "flex items-center bg-white px-5 py-4 rounded-2xl shadow w-[350px]"

        }>

          <FaSearch className="text-gray-400 mr-3" />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className={

              darkMode

              ? "bg-transparent outline-none w-full text-white"

              : "bg-transparent outline-none w-full"

            }
          />

        </div>

        {/* DARK MODE */}

        <button
          onClick={()=>setDarkMode(!darkMode)}
          className="bg-[#6366f1] text-white p-4 rounded-2xl"
        >

          {

            darkMode

            ? <FaSun />

            : <FaMoon />

          }

        </button>

        {/* BELL */}

        <div className="relative">

          <FaBell className="text-2xl" />

          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">

            5

          </div>

        </div>

        {/* PROFILE */}

        <img
          src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
          className="w-16 h-16 rounded-full border-4 border-[#6366f1]"
        />

      </div>

    </div>

  );

}

export default Topbar;