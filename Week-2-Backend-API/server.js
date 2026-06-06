// ===============================
// IMPORTS
// ===============================
const express = require("express");

// ===============================
// APP CONFIGURATION
// ===============================
const app = express();
const PORT = 3000;

app.use(express.json());

// ===============================
// SAMPLE DATA
// ===============================
const interns = [
    {
        id: 1,
        name: "Gauri Gupta",
        role: "Full Stack Developer Intern"
    },
    {
        id: 2,
        name: "Rohan Gupta",
        role: "Frontend Developer Intern"
    }
];

// ===============================
// GET ALL INTERNS
// ===============================
app.get("/", (req, res) => {
    res.send("Backend API is Running 🚀");
});

// ===============================
// GET ALL INTERN
// ===============================
app.get("/interns", (req, res) => {
    res.json(interns);
});

// ===============================
// post new intern
// ==============================
app.post("/interns", (req, res) => {

    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).json({
            message: "Name and Role are required"
        });
    }

    const newIntern = {
        id: interns.length + 1,
        name,
        role
    };

    interns.push(newIntern);

    res.status(201).json({
        message: "Intern added successfully",
        intern: newIntern
    });

}); 

// ===============================
// GET INTERN BY ID
// ===============================
app.get("/interns/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const intern = interns.find(
        intern => intern.id === id
    );

    if (!intern) {
        return res.status(404).json({
            message: "Intern not found"
        });
    }

    res.json(intern);

});

// ===============================
// DELETE INTERN
// ===============================
app.delete("/interns/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const index = interns.findIndex(
        intern => intern.id === id
    );

    if (index === -1) {
        return res.status(404).json({
            message: "Intern not found"
        });
    }

    interns.splice(index, 1);

    res.json({
        message: "Intern deleted successfully"
    });

});

// ==============================
// PUT UPDATE INTERN
// ==============================
app.put("/interns/:id", (req, res) => {

    const id = parseInt(req.params.id);
    const { name, role } = req.body;

    const intern = interns.find(
        intern => intern.id === id
    );

    if (!intern) {
        return res.status(404).json({
            message: "Intern not found"
        });
    }

    intern.name = name || intern.name;
    intern.role = role || intern.role;

    res.json({
        message: "Intern updated successfully",
        intern
    });

});

// ===============================
// START SERVER
// ===============================
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});