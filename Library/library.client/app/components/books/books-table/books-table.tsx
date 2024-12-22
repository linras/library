"use client";
import { Book, BookCategory } from "@/app/models/books-model";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const BooksTable = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    axios
      .get<Book[]>("/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {books && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Lp.</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book, index) => (
                <TableRow
                  key={book.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {book.title}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {book.author}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {BookCategory[book.category]}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Link href={`/books/${book.id}`}>View</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default BooksTable;
