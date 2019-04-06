"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _find = _interopRequireDefault(require("lodash/find"));

var _reject = _interopRequireDefault(require("lodash/reject"));

var _toString = _interopRequireDefault(require("lodash/toString"));

var _map = _interopRequireDefault(require("lodash/map"));

var _tasks = _interopRequireDefault(require("../src/server/tasks.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 8080;
var app = (0, _express.default)();
var tasks = _tasks.default.tasks;

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
  var id = (0, _toString.default)(req.params.id);

  if (id) {
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

app.put('/task/:id/update', function (req, res) {
  var id = (0, _toString.default)(req.params.id);

  if (id) {
    var task = findTask(tasks, id);

    if (task !== null) {
      tasks = Object.assign(tasks, (0, _map.default)(tasks, function (task) {
        if (task.id == id) {
          task.title = req.body.task.title;
          task.description = req.body.task.description;
        }

        return task;
      }));
      return res.status(201).json({
        message: 'Resource created'
      });
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
 * POST /task/create
 *
 * title: string
 * description: string
 *
 * Add a new task to the array tasksContainer.tasks with the given title and description.
 * Return status code 201.
 */

app.post('/task/create', function (req, res) {
  var task = {
    id: req.body.task.id,
    title: req.body.task.title,
    description: req.body.task.description
  };
  tasks.push(task);
  return res.status(201).json({
    message: 'Resource created'
  });
});
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

app.delete('/task/:id/delete', function (req, res) {
  var id = (0, _toString.default)(req.params.id);

  if (id) {
    var task = findTask(tasks, id);

    if (task !== null) {
      tasks = (0, _reject.default)(tasks, ['id', id]);
      return res.status(200).json({
        message: 'Updated successfully'
      });
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
app.listen(port, function () {
  process.stdout.write("The server is available on http://localhost:".concat(port, "/\n"));
});