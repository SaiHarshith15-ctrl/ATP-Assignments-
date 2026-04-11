import {NavLink} from 'react-router'

function Header() {
  return (
    <nav className='flex justify-end text-2xl bg-gray-800 text-white gap-6 p-4'>
      <NavLink to="" className={({ isActive }) => isActive ? "text-blue-400  " : ""}>Home</NavLink>
      <NavLink to="create-emp" className={({ isActive }) => isActive ? "text-blue-400  " : ""}>CreateEmp</NavLink>
      <NavLink to="list-of-emps" className={({ isActive }) => isActive ? "text-blue-400  " : ""}>Employees</NavLink>
    </nav>

  )
}

export default Header