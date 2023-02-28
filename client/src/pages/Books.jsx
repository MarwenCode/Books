import React, {useState, useEffect } from "react";
import axios from "axios"

const Books = () => {
  const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchAllBooks = async() => {
//       try {
//         const response = await fetch("/books");
//         const data = await response.json()

//         console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchAllBooks();
//   }, []);
useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:5500/books");
       console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);


  console.log(books)

  return <div>Books</div>;
};

export default Books;
