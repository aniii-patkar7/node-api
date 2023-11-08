const express = require('express');
const student = require('./models/studentModel');
const app = express();
const PORT = 5000;

app.use(express.json());
require('./db')

app.get("/students", (req, res) => {
    res.send("Hello student bro!!...");
});
app.get("/faculty", (req, res) => {
    res.send("Hello faculty bro!!...");
});

app.post('/student', async (req, res) => {
    try {
        const studentList = await student.find();
        res.send(studentList);
        const data = req.body;
        const createdStudent = new student(data);
        await createdStudent.save();
        res.send("Student Created");
    }
    catch (error) {
        console.log(error);

    }

})

app.get('/student', async (req, res) => {
    try {
        const studentList = await student.find();
        res.send(studentList);
    }

    catch (error) {
        console.log(error);

    }

})

app.put("/student/:id", async (req, res) => {
    try {
        const studentId = req.params.id;
        await student.updateOne({ id: studentId}, { $set:
        req.body }); 
        res.send("Student Updated");
    }

    catch (error) {
        console.log(error);

    }

});

app.delete("/student/:id", async (req, res) => {
    try {
        
        await student.deleteOne({ id: req.params.id });
         
        res.send("Student deleted");
    }

    catch (error) {
        console.log(error);

    }

});

// create a resource
//app.post()
app.listen(PORT, function () {
    console.log(`Server is running on localhost:${PORT}`);
});