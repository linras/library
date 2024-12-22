import Link from "next/link";

interface BooksLayoutProps {
  children: React.ReactNode;
}

const BooksLayout = ({ children }: BooksLayoutProps) => {
  return (
    <>
      <Link href={`/books`} passHref key={"home"}>
        Go to the book list
      </Link>
      {children}
    </>
  );
};

export default BooksLayout;
