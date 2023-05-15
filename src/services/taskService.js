import { describe } from 'node:test'

let tasks = [
  {
    id: 1,
    name: 'Jono Padoa',
    description: 'Mission 3 Work',
    isComplete: false,
  },
]

export const getAllTasks = () => {
  return tasks
}

export const createOneTask = (name, description) => {
  const newTask = {
    id: tasks.length + 1,
    name,
    description,
    isCompleted: false,
  }
  tasks.push(newTask)

  return newTask
}

export const getOneTask = (taskId) => {
  const matchedTask = tasks.find((t) => t.id === taskId)
  if (!matchedTask) {
    res.status(404).send(`Task not found`)
  }
  return matchedTask
}

export const deleteTask = (taskId) => {
  const matchedTask = tasks.find((t) => t.id === taskId)

  if (!matchedTask) {
    res.send(404).send('Task is not found old boy')
  }
  tasks = tasks.filter((t) => t.id !== taskId)
  return `Task ${taskId} has been deleted sucessfully!`
}

export const updateTask =
  ('/:id',
  (taskID, name, description) => {
    const matchedTask = tasks.find((t) => t.id === taskId)
    if (!matchedTask) {
      res
        .status(404)
        .send('This task has unfortanutely not been found.  Try again')
    }
    matchedTask.name = name
    matchedTask.description = description
    return matchedTask
  })

export const updateTaskPartial = (taskId, name, description) => {
  const matchedTask = tasks.find((t) => t.id === taskId)
  if (!matchedTask) {
    res
      .status(404)
      .send('This task has unfortanutely not been found.  Try again')
  }
  matchedTask.name = name ?? matchedTask.name
  matchedTask.description = description ?? matchedTask.description
  return matchedTask
}
