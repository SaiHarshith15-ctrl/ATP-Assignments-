import { useContext } from "react";
import ContextProvider1, { counterContextObj } from "./contexts/ContextProvider1";

function App() {
  const { counter1, increment, decrement } = useContext(counterContextObj);

  return (
    <div className="bg-white min-h-screen text-white">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-center py-6 bg-amber-100 from-purple-600 to-pink-500 shadow-lg">
        Counter Dashboard
      </h1>

      <ContextProvider1 />

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 p-10">

        {/* Card */}
        {[1,2,3,4].map((item) => (
          <div key={item} className="p-8 text-center border rounded-2xl bg-gray-800 shadow-xl hover:scale-105 transition duration-300">
            
            <h1 className="text-2xl font-semibold mb-2">
              Counter {item}
            </h1>

            <h1 className="text-4xl font-bold text-yellow-400 mb-4">
              {counter1}
            </h1>

            <button
              onClick={increment}
              className="bg-blue-500 hover:bg-blue-600 px-5 py-3 rounded-lg mr-3"
            >
              +
            </button>

            <button
              onClick={decrement}
              className="bg-red-500 hover:bg-red-600 px-5 py-3 rounded-lg"
            >
              -
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}

export default App;