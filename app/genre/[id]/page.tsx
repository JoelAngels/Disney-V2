import { Button } from "@/components/ui/button";

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
    <div className="text-red-500">
      welcome to the genre with ID: {id} and name: {genre}
      <Button variant={"ghost"}>Click Me</Button>
    </div>
  );
}
export default genre;
