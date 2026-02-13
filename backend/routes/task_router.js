const router  = require("express").Router();
import router_controller from "../controllers/router_controller.js";


//get all task
router.get("/", router_controller.getAllTasks);

//create task
router.post("/", router_controller.createTask);

//delete task
router.delete("/:id", router_controller.deleteTask);

//update task
router.put("/:id", router_controller.updateTask);

module.exports = router;