import { Book } from "@/app/models/books-model";

interface EditBookProps {
  book: Book;
}

const EditBook = ({ book }: EditBookProps) => {
  return <pre>{JSON.stringify(book, null, 2)}</pre>;
};

export default EditBook;
