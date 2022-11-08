interface Gifs {
  id: string;
  title: string;
  url: string;
}

interface Props {
  image: Gifs;
}

export default function GifItem({ image }: Props) {
  const { url, id, title } = image;

  return (
    <div key={id} className="card">
      <img src={url} />
      <p>{title}</p>
    </div>
  );
}
