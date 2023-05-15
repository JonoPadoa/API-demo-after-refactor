import * as taskService from '../services/taskService.js'

export const getAllTasks = (req, res) => {
  const tasks = taskService.getAllTasks()
  res.send(tasks)
}

export const createOneTask = (req, res) => {
  const name = req.body.name
  const description = req.body.description

  const newTask = taskService.createOneTask(name, description)

  res.send(newTask)
}

export const getOneTask = (req, res) => {
  const taskId = parseInt(req.params.id)

  const matchedTask = taskService.getOneTask(taskId)
  res.send(matchedTask)
}

export const deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id)
  const matchedTask = taskService.deleteTask(taskId)
  res.send(`Task ${taskId} has been deleted sucessfully!`)
}

export const updateTask =
  ('/:id',
  (req, res) => {
    const taskId = parseInt(req.params.id)

    const name = req.body.name
    const description = req.body.description

    const matchedTask = taskService.updateTask(taskID, name, description)
    res.send(matchedTask)
  })

export const updateTaskPartial = (req, res) => {
  const taskId = parseInt(req.params.id)

  const name = req.body.name
  const description = req.body.description

  const matchedTask = taskService.updateTaskPartial(taskId, name, description)
  res.send(matchedTask)
}
