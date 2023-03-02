import express from "express";
import mysql from "mysql"
import dotenv from "dotenv";
import cors from "cors"

const app = express();
dotenv.config();
const passWord = process.env.passWord

app.use(express.json())
app.use(cors())

const DataBase = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"test",
    password:passWord
})

app.get("/", (req,res) => {
    res.json("mySQL connected")
})

app.use(express.json())

app.use(cors())

//get all books
// app.get("/books", (req, res) => {
//     const query = "SELECT * FROM books";
//     DataBase.query(query, (error, data) => {
//         // if(error) {
//         //    return res.json(error)
//         // }else {
//         //    return res.json(data)
//         // }
//         if (error) {
//             console.log(error);
//             return res.json(error);
//           }
//           return res.json(data);
        
//     })
// })
//get all books 
app.get("/books", (req, res) => {
    const query = "SELECT * FROM books";
    DataBase.query(query, (error, data) => {
      if (error) {
        console.log(error);
        return res.json({ error: error.message });
      }
      return res.json(data);
    })
  })
  

// app.get("/books", (req, res) => {
//     const query = "SELECT * FROM books";
//     DataBase.query(query, (error, data) => {
//       if (error) {
//         console.error(error);
//         return res.status(500).json({ error: "Failed to fetch books" });
//       }
  
//       return res.json(data);
//     });
//   });

// create a book
app.post("/books", (req,res) => {
    const query = "INSERT INTO books (`title`, `desc`, `cover`,`price`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price

    ]

    DataBase.query(query, [values], error => {
        if(error) {
            res.json(error)
        } else {
            return res.json("book created")
        }
    })
})

// delete a single book
app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const queri = "DELETE FROM books WHERE id = ?";

    DataBase.query(queri, [bookId], (error, data) => {
        if (error) {
            res.json(error)
        }else {
            res.json("Book has been deleted ")
        }
    })
})

//updata a book
app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const queri = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";;

    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
      ];

      DataBase.query(queri, [...values,bookId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
      });
})





app.listen(5500, () => {
    console.log("connected to backend")
})