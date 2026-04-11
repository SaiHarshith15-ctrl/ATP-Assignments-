import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function CreateEmp() {

  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(null)
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true)

      const res = await fetch('http://localhost:4000/employee-api/employee', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj)
      })

      if (res.status === 201) {
        navigate("/list-of-emps") // ✅ correct
      } else {
        let errRes = await res.json()
        throw new Error(errRes.error)
      }

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <p className="text-center text-4xl text-blue-600">Loading...</p>
  }

  if (error) {
    return <p className="text-center text-4xl text-red-600">{error}</p>
  }

  return (
    <div>
      <h1 className='text-4xl text-center text-blue-700'>Create Employee</h1>

      <form className='max-w-md mx-auto mt-6' onSubmit={handleSubmit(onFormSubmit)}>
        <input {...register("name")} placeholder='Name' className='border p-3 w-full mb-3 rounded-lg'/>
        <input {...register("email")} placeholder='Email' className='border p-3 w-full mb-3 rounded-lg'/>
        <input {...register("mobile")} placeholder='Mobile' className='border p-3 w-full mb-3 rounded-lg'/>
        <input {...register("designation")} placeholder='Designation' className='border p-3 w-full mb-3 rounded-lg'/>
        <input {...register("companyName")} placeholder='Company' className='border p-3 w-full mb-3 rounded-lg'/>

        <button className="block m-auto mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Add Employee
        </button>
      </form>
    </div>
  )
}

export default CreateEmp