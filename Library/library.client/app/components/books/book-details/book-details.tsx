interface IProps {
  id: number;
}

const BookDetails = ({ id }: IProps) => {
  return <div>Book Details Page Book id: {id}</div>;
};

export default BookDetails;
