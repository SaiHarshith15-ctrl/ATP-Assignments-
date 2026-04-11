import exp from 'express'
import { employeeModel } from './models/EmployeeModel.js'

export const employeeApp = exp.Router()

// CREATE
employeeApp.post('/employee', async (req, res, next) => {
  try {
    const newEmp = new employeeModel(req.body)
    await newEmp.save()
    res.status(201).json({ message: "User Created" })
  } catch (err) {
    next(err)
  }
})

// READ
employeeApp.get('/employee', async (req, res, next) => {
  try {
    const employees = await employeeModel.find()
    res.status(200).json({ message: "Employees List", payload: employees })
  } catch (err) {
    next(err)
  }
})

// UPDATE  FIXED ROUTE
employeeApp.put('/employee/:id', async (req, res, next) => {
  try {
    const updated = await employeeModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )

    if (!updated) {
      return res.status(404).json({ message: "Employee not found" })
    }

    res.status(200).json({ message: "Employee updated", payload: updated })
  } catch (err) {
    next(err)
  }
})

// DELETE
employeeApp.delete('/employee/:id', async (req, res, next) => {
  try {
    const deleted = await employeeModel.findByIdAndDelete(req.params.id)

    if (!deleted) {
      return res.status(404).json({ message: "Employee not found" })
    }

    res.status(200).json({ message: "User deleted" })
  } catch (err) {
    next(err)
  }
})