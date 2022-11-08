import { useGifs } from "../hooks/useGifs";
import GifItem from "./GifItem";

interface Gifs {
  id: string;
  title: string;
  url: string;
}

interface Props {
  category: string;
}

export default function GifGrid({ category }: Props) {
  const { images, isLoading } = useGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Loading...</h2>}

      <div className="card-grid">
        {images.map((image: Gifs) => (
          <GifItem key={image.id} image={image} />
        ))}
      </div>
    </>
  );
}
