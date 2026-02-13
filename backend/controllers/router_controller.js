const task = require("../models/task");

module.exports ={

    //create task
    createTask: async(req, res) =>{
        const newTask = new task(req.body);
        try {
            const savedTask = await newTask.save();
            res.status(201).json(savedTask);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //=================LIST TASK================================
    getAllTasks: async(req, res) =>{
        try {
            const allTasks = await task.find();
            res.status(200).json(allTasks)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //=============DELETE TASK==================================
    deleteTask: async(req, res) =>{
        try {
            await task.findByIdAndDelete(req.params.id);
            res.status(200).json("Task Successfully Deleted")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //update task
    updateTask: async(req, res) =>{
        try {
            const updatedTask = await task.findByIdAndUpdate(
                req.params.id , {
                    $set: req.body
                }, {new: true}
            );
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(500).json(error)
        } 
    }
}