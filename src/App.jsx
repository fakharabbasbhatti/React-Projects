import "./App.css";
import Project from "./components/Project";

function App() {
  return (
    <>
      {/* 👇 Top Left Name */}
      <div className="fixed top-4 left-4 z-50">
        <h1 className="bg-[#0ea5e9]/20 text-[#38bdf8] border border-[#38bdf8]/50 px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase shadow-md backdrop-blur-sm hover:bg-[#0ea5e9]/30 transition-all duration-300">
          Fakhar Abbas
        </h1>
      </div>

      {/* 👇 Bottom Right Name */}
      <div className="fixed bottom-4 right-4 z-50">
        <h1 className="bg-[#0ea5e9]/20 text-[#38bdf8] border border-[#38bdf8]/50 px-4 py-2 rounded-full text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase shadow-md backdrop-blur-sm hover:bg-[#0ea5e9]/30 transition-all duration-300">
          Fakhar Abbas
        </h1>
      </div>

      {/* 👇 Main Project Content */}
      <Project />
    </>
  ); 

}

export default App;
