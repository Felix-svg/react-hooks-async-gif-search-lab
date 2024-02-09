export default function GifList({ data }) {
  const firstThreeGifs = data.slice(0, 3)
  return (
    <div style={{display:"flex"}}>
      {firstThreeGifs.map((gif) => (
        <img key={gif.id} src={gif.images.original.url} alt={gif.title} />
      ))}
    </div>
  );
}
