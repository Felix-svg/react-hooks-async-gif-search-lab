import { useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GiftListContainer() {
  const [giphy, setGiphy] = useState([]);

  function getGiphy(input) {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=RtcsJKznKWld8mzWNn3f5dQjcrIqImTW&rating=g`
    )
      .then((resp) => resp.json())
      .then((data) => setGiphy(data.data));
  }

  function handleSearch(input) {
    getGiphy(input);
  }


  return (
    <>
      <GifList data={giphy} />
      <GifSearch onSearch={handleSearch} />
    </>
  );
}

export default GiftListContainer;
