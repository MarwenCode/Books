import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
        console.log(res);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);


  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:5500/books/" + id)
      window.location.reload()
      
    } catch (error) {
      console.log(error)
      
    }
  }





  return (
    <div>
      <h1>Book app MySQL</h1>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.cover} alt="" />
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>${book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}   >
              Delete
            </button>
            <button className="update">
              <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>
  );
};

export default Books;
