import express  from "express";
import mysql2 from "mysql2";
import cors from "cors";

const app = express();
const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "printf()",
    database: "marketplace" 
}) 

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("hello, Backend is running");
});


app.get("/shoes", (req, res) => {

    const q = "SELECT * FROM shoes";
     
    db.query(q, (err,data) => {
        if(err) return res.json(err);
          return res.json(data);    
    })

})


// Register Account

app.post("/users_informations", (req, res) => {
    const q = "INSERT INTO users_informations (`fullName`, `email`, `contactNumber`, `address`, `username`, `password`) VALUES (?)"

    const values = [
        req.body.fullName || "",
        req.body.email || "",
        req.body.contactNumber || "",
        req.body.address || "",
        req.body.username || "",
        req.body.password || ""
    ]

    db.query(q, [values], (err) => {
        if(err){
            return res.json(err)
        }

        res.json("succesfully registered")
    })

})


// FOR LOG IN

// Login Route
app.post("/login", (req, res) => {
    const { emailLogin, passwordLogin } = req.body;

    const q = "SELECT * FROM users_informations WHERE username = ? AND password = ?";
    db.query(q, [emailLogin, passwordLogin], (err, data) => {
        if (err) return res.json({ success: false, message: "Database error", error: err });

        if (data.length > 0) {
            return res.json({ success: true, firstName: data[0].fullName });
        } else {
            return res.json({ success: false, message: "Invalid login" });
        }
    });
});



app.listen(8800, () => { 
    console.log("Server is running on port 8800");
});
