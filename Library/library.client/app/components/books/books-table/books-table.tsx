"use client";
import { Book } from "@/app/models/books-model";
import axios from "axios";
import { useEffect, useState } from "react";

const BooksTable = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get<Book[]>("api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      Books table
      {books && <pre>{JSON.stringify(books, null, 2)}</pre>}
    </>
  );
};

export default BooksTable;
