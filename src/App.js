import { useState } from "react";



function App() {
  const [dark,setDark]= useState(false)
  let mode = dark ?'dark':' ';
  return (
    <div className={mode}>
      
    <div className="text-blue-600 flex items-center justify-center h-screen w-screen dark:bg-black">
      <button onClick={()=> setDark(!dark)} 
      className="bg-orange-400 p-4 rounded-md font-bold text-white uppercase border-spacing-1  border-slate-500"
      > change theme</button>
    </div>
    </div>
  );
}

export default App;
