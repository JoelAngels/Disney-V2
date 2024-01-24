type Props = {
  params: {
    id: number;
  };
  searchParams: {
    genre: string;
  };
};

function genre({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <div>
      welcome to the genre with ID: {id} and name: {genre}
    </div>
  );
}
export default genre;
