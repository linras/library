interface Params {
  params: { id: number };
}

export default async function BookDetailsPage({ params }: Params) {
  const { id } = await params;
  return <div>Book Details Page Book id: {id}</div>;
}
