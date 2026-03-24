import {useState} from 'react';
function Counter(){
    const[count, setCount]=useState(0);
    //function to modify thr state
    const increment=()=>{
        setCount(count+1)
    };
    const reset=()=>{
        setCount(count-count)
    }
    const decrement=()=>{
        while(count>0){
        setCount(count-1)
        }
        setCount(count-count)
    };
    return(
        <div className="bg-amber-200 p-2.5 text-center">
            <h1 className="text-2xl  mx-5 my-3 px-6 py-4 bg-amber-600 rounded-3xl">count :{count}</h1>
            <button className=" text-3xl mx-6 px-6 py-4 bg-amber-100 rounded-3xl" onClick={increment}>+</button>
            <button className=" text-3xl mx-6 px-6 py-4 bg-amber-100 rounded-3xl" onClick={reset}>reset</button>
            <button className=" text-3xl mx-6 px-6 py-4 bg-amber-100 rounded-3xl" onClick={decrement}>-</button>
        </div>
    )
}
export default Counter