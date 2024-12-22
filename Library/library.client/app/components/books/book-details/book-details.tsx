"use client";
import { Book } from "@/app/models/books-model";
import axios from "axios";
import { useEffect, useState } from "react";

interface IProps {
  id: number;
}

const BookDetails = ({ id }: IProps) => {
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    axios
      .get<Book>(`/api/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return book ? (
    <div>Book Details Page Book id: {JSON.stringify(book)}</div>
  ) : (
    <>Loading...</>
  );
};

export default BookDetails;
