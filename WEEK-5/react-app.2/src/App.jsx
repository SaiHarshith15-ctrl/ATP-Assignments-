import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UsersList from './components/UsersList'
import Counter from './components/counter'

function App(){
return (
  <div>
    <Navbar />
    <div m-16 min-h-screen>
      <UsersList />
    </div>
    <Footer />
    {/* <Counter />  */}
  </div>
)
}


// function App(){
//   //state
  

//   //return react element
//   return(
//     <div class="bg-amber-400">
//       <div className=" mt-15 bg-amber-500" >
       
//        <Counter/>
       
//       </div>
//       </div>
//   )

// }

export default App