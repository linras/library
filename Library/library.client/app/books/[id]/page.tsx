import BookDetails from "@/app/components/books/book-details/book-details";

interface Params {
  params: Promise<{ id: number }>;
}

export default async function BookDetailsPage({ params }: Params) {
  const { id } = await params;
  return <BookDetails id={id} />;
}
