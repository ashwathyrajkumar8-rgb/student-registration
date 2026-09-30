const express = require("express");

const app = express();

const PORT = 3000;

// Read 
app.use(express.urlencoded({ extended: true }));

// Serve HTML files
app.use(express.static("public"));

// Handle form submission
app.post("/register", (req, res) => {

    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const gender = req.body.gender;
    const course = req.body.course;
    const address = req.body.address;

    res.send(`
        <html>
        <head>
            <title>Registration Details</title>

            <style>
                body {
                    font-family: Arial;
                    background-color: lightblue;
                }

                .container {
                    width: 500px;
                    margin: 50px auto;
                    padding: 25px;
                    background-color: white;
                    border-radius: 10px;
                }

                h2 {
                    text-align: center;
                    color: green;
                }

                p {
                    font-size: 18px;
                    padding: 8px;
                }

                a {
                    display: block;
                    text-align: center;
                }
            </style>
        </head>

        <body>

        <div class="container">

            <h2>Registration Successful!</h2>

            <p><b>Name:</b> ${name}</p>

            <p><b>Email:</b> ${email}</p>

            <p><b>Phone:</b> ${phone}</p>

            <p><b>Gender:</b> ${gender}</p>

            <p><b>Course:</b> ${course}</p>

            <p><b>Address:</b> ${address}</p>

            <a href="/">Back to Registration</a>

        </div>

        </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});