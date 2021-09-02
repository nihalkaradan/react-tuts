import React from "react";
import ReactDom from "react-dom";
const books = [
  {
    id: 1,
    title: "harrypotter",
    Author: "JK rowling",
    img: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
  },
  {
    id: 2,
    title: "harrypotter",
    Author: "JK rowling",
    img: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg",
  },
];
const Book = (props) => {
  const { title, img, Author } = props;
  return (
    <section>
      <h1>{title}</h1>
      <img src={img} alt="" />
      <h4>{Author}</h4>
    </section>
  );
};
const BookList = () => {
  return (
    <section>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
