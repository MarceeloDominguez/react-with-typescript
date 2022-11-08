import { Images } from "../interfaces/gifsInterface";

interface Gifs {
  id: string;
  title: string;
  images: Images;
}

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=dkvKJlbNEg5OWKO1q5Ws7EbRsFxAV3nb&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((item: Gifs) => ({
    id: item.id,
    title: item.title,
    url: item.images.downsized_medium.url,
  }));

  return gifs;
};
