import express from 'express'
const router = express.Router()

let tasks = [
  {
    id: 1,
    name: 'Jono Padoa',
    description: 'Mission 3 Work',
    isComplete: false,
  },
]

router.get('/', (req, res) => {
  res.send(tasks)
})

router.post('/', (req, res) => {
  const name = req.body.name
  const description = req.body.description

  const newTask = {
    id: tasks.length + 1,
    name,
    description,
    isCompleted: false,
  }
  tasks.push(newTask)

  res.send(newTask)
})

router.get(`/:id`, (req, res) => {
  const taskId = parseInt(req.params.id)

  const matchedTask = tasks.find((t) => t.id === taskId)
  if (!matchedTask) {
    res.status(404).send(`Task not found`)
  }
  res.send(matchedTask)
})

router.delete('/:id', (req, res) => {
  const taskId = parseInt(req.params.id)
  const matchedTask = tasks.find((t) => t.id === taskId)

  if (!matchedTask) {
    res.send(404).send('Task is not found old boy')
  }
  tasks = tasks.filter((t) => t.id !== taskId)
  res.send(`Task ${taskId} has been deleted sucessfully!`)
})

router.put('/:id', (req, res) => {
  const taskId = parseInt(req.params.id)

  const name = req.body.name
  const description = req.body.description

  const matchedTask = tasks.find((t) => t.id === taskId)
  if (!matchedTask) {
    res
      .status(404)
      .send('This task has unfortanutely not been found.  Try again')
  }
  matchedTask.name = name
  matchedTask.description = description
  res.send(matchedTask)
})

router.patch('/:id', (req, res) => {
  const taskId = parseInt(req.params.id)

  const name = req.body.name
  const description = req.body.description

  const matchedTask = tasks.find((t) => t.id === taskId)
  if (!matchedTask) {
    res
      .status(404)
      .send('This task has unfortanutely not been found.  Try again')
  }
  matchedTask.name = name ?? matchedTask.name
  matchedTask.description = description ?? matchedTask.description
  res.send(matchedTask)
})

export default router
