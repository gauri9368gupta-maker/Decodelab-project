const express = require("express");
const connectDB = require("./db");
const Intern = require("./model/Intern");

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.post("/interns", async (req, res) => {
    try {

        const { name, role } = req.body;

        const newIntern = new Intern({
            name,
            role
        });

        await newIntern.save();

        res.status(201).json({
            message: "Intern added successfully",
            intern: newIntern
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

module.exports = connectDB;

// get all interns
app.get("/interns", async (req, res) => {
    try {

        const interns = await Intern.find();

        res.json(interns);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// get intern by id
app.get("/interns/:id", async (req, res) => {
    try {

        const intern = await Intern.findById(req.params.id);

        if (!intern) {
            return res.status(404).json({
                message: "Intern not found"
            });
        }

        res.json(intern);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

// put{update intern by id}
app.put("/interns/:id", async (req, res) => {
    try {

        const { name, role } = req.body;

        const updatedIntern = await Intern.findByIdAndUpdate(
            req.params.id,
            { name, role },
            { new: true }
        );

        if (!updatedIntern) {
            return res.status(404).json({
                message: "Intern not found"
            });
        }

        res.json({
            message: "Intern updated successfully",
            intern: updatedIntern
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
}); 

// delete intern by id
app.delete("/interns/:id", async (req, res) => {
    try {

        const deletedIntern = await Intern.findByIdAndDelete(req.params.id);

        if (!deletedIntern) {
            return res.status(404).json({
                message: "Intern not found"
            });
        }

        res.json({
            message: "Intern deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});