import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import find from 'lodash/find'
import reject from 'lodash/reject'
import toString from 'lodash/toString'
import map from 'lodash/map'
import tasksJson from '../src/server/tasks.json'

const port = 8080
const app = express()
let tasks = tasksJson.tasks

const findTask = (tasks, id) => {
  return find(tasks, ['id', id])
}

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json())

/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */
app.get('/tasks', (req, res) => {
  return res.status(200).json(tasks)
})

/**
 * Get /task/:id
 *
 * id: Number
 *
 * Return the task for the given id.
 *
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/task/:id', (req, res) => {
  const id = toString(req.params.id)

  if (id) {
    const task = findTask(tasks, id)

    if (task !== null) {
      return res.status(200).json({
        task,
      })
    } else {
      return res.status(404).json({
        message: 'Not found.',
      })
    }
  } else {
    return res.status(400).json({
      message: 'Bad request.',
    })
  }
})

/**
 * PUT /task/:id/update
 *
 * id: Number
 * title: string
 * description: string
 *
 * Update the task with the given id.
 * If the task is found and update as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.put('/task/:id/update', (req, res) => {
  const id = toString(req.params.id)

  if (id) {
    const task = findTask(tasks, id)

    if (task !== null) {
      tasks = Object.assign(
        tasks,
        map(tasks, (task) => {
          if (task.id == id) {
            task.title = req.body.task.title
            task.description = req.body.task.description
          }
          return task
        })
      )
      return res.status(201).json({
        message: 'Resource created',
      })
    } else {
      return res.status(404).json({
        message: 'Not found',
      })
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
    })
  }
})

/**
 * POST /task/create
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */
app.post('/task/create', (req, res) => {
  const task = {
    id: req.body.task.id,
    title: req.body.task.title,
    description: req.body.task.description,
  }

  tasks.push(task)

  return res.status(201).json({
    message: 'Resource created',
  })
})

/**
 * DELETE /task/:id/delete
 *
 * id: Number
 *
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */
app.delete('/task/:id/delete', (req, res) => {
  const id = toString(req.params.id)

  if (id) {
    const task = findTask(tasks, id)

    if (task !== null) {
      tasks = reject(tasks, ['id', id])
      return res.status(200).json({
        message: 'Updated successfully',
      })
    } else {
      return res.status(404).json({
        message: 'Not found',
      })
    }
  } else {
    return res.status(400).json({
      message: 'Bad request',
    })
  }
})

app.listen(port, () => {
  process.stdout.write(`The server is available on http://localhost:${port}/\n`)
})
