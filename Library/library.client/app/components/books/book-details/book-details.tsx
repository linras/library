"use client";
import { Book } from "@/app/models/books-model";
import { Button, Card, CardContent, CircularProgress } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import EditBook from "../edit-book/edit-book";

interface IProps {
  id: number;
}

const BookDetails = ({ id }: IProps) => {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [editingBook, setEditingBook] = useState<boolean>(false);

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

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/books/${id}`);
      setBook({} as Book);
    } catch (error) {
      console.error(error);
    }
  };

  //   const handleEdit = () => {
  //     setEditingBook(false);
  //   };
  const onCancelEditing = () => {
    setEditingBook(false);
  };

  return book ? (
    <>
      <Button onClick={handleDelete}>Delete this book</Button>
      <Button onClick={() => setEditingBook(true)}>Edit this book</Button>
      <Card>
        <CardContent>
          Book Details Page Book id:{" "}
          {<pre>{JSON.stringify(book, null, 2)}</pre>}
          Custom env: {process.env.TEST_ENV_VAR}
        </CardContent>
      </Card>
      {editingBook && <EditBook book={book} onCancel={onCancelEditing} />}
    </>
  ) : loading ? (
    <CircularProgress />
  ) : (
    "Book not found"
  );
};

export default BookDetails;
