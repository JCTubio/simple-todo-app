"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _find = _interopRequireDefault(require("lodash/find"));

var _reject = _interopRequireDefault(require("lodash/reject"));

var _tasks = _interopRequireDefault(require("../src/server/tasks.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 8088;
var app = (0, _express.default)();
var tasks = _tasks.default.tasks;
var taskId = tasks.length;

var findTask = function findTask(tasks, id) {
  return (0, _find.default)(tasks, ['id', id]);
};

app.use((0, _cors.default)(), _bodyParser.default.urlencoded({
  extended: true
}), _bodyParser.default.json());
/**
 * GET /tasks
 *
 * Return the list of tasks with status code 200.
 */

app.get('/tasks', function (req, res) {
  return res.status(200).json(tasks);
});
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

app.get('/task/:id', function (req, res) {
  var id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    var task = findTask(tasks, id);

    if (task !== null) {
      return res.status(200).json({
        task: task
      });
    } else {
      return res.status(404).json({
        message: 'Not found.'
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request.'
    });
  }
});
/**
 * PUT /task/update/:id/:title/:description
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

app.put('/task/:id/update', function (req, res) {
  var id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    var task = findTask(tasks, id);

    if (task !== null) {
      task.title = req.body.title;
      task.description = req.body.description;
      return res.status(204);
    } else {
      return res.status(404).json({
        message: 'Not found'
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request'
    });
  }
});
/**
 * POST /task/create/:title/:description
 * 
 * title: string
 * description: string
 * 
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */

app.post('/task/create', function (req, res) {
  taskId++;
  var task = {
    id: taskId,
    title: req.body.title,
    description: req.body.description
  };
  tasks.push(task);
  return res.status(201).json({
    message: 'Resource created'
  });
});
/**
 * DELETE /task/delete/:id
 * 
 * id: Number
 * 
 * Delete the task linked to the  given id.
 * If the task is found and deleted as well, return a status code 204.
 * If the task is not found, return a status code 404.
 * If the provided id is not a valid number return a status code 400.
 */

app.delete('/task/:id/delete', function (req, res) {
  var id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    var task = findTask(tasks, id);

    if (task !== null) {
      tasks = (0, _reject.default)(tasks, ['id', id]);
      return res.status(200).json({
        message: 'Updated successfully'
      });
    } else {
      return es.status(404).json({
        message: 'Not found'
      });
    }
  } else {
    return res.status(400).json({
      message: 'Bad request'
    });
  }
});
app.listen(port, function () {
  process.stdout.write("The server is available on http://localhost:".concat(port, "/\n"));
});