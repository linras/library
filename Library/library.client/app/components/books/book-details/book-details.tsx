"use client";
import { Book } from "@/app/models/books-model";
import { Card, CardContent, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

interface IProps {
  id: number;
}

const BookDetails = ({ id }: IProps) => {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get<Book>(`/api/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return book ? (
    <Card>
      <CardContent>
        Book Details Page Book id: {<pre>{JSON.stringify(book, null, 2)}</pre>}
      </CardContent>
    </Card>
  ) : loading ? (
    <CircularProgress />
  ) : (
    "Book not found"
  );
};

export default BookDetails;
