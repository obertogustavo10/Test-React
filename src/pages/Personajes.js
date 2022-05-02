import React, { useState, useEffect } from "react";
import axios from "axios";
import Sections from "../components/Sections";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import Container from "@material-ui/core/Container";
import "../App.css";

export default function Personajes() {
  ////State variables
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [episodes, setEpisodes] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";
  const api = "https://rickandmortyapi.com/api/episode";

  //Call API characters
  const apiCharacter = (url) => {
    axios
      .get(url)
      .then((response) => {
        setCharacters(response.data.results);
        setInfo(response.data.info);
      })
      .catch((error) => console.log(error));
  };
  //call Api episode

  const apiEpisodes = (api) => {
    let allEpisodes = [];
    axios.get(api).then((response) => {
      allEpisodes = response.data.results;
      for (let index = 2; index <= response.data.info.pages; index++) {
        axios
          .get(`https://rickandmortyapi.com/api/episode?page=${index}`)
          // eslint-disable-next-line no-loop-func
          .then((response) => {
            allEpisodes = allEpisodes.concat(response.data.results);
            setEpisodes(allEpisodes);
          });
      }
    });
  };

  const onPrevious = () => {
    apiCharacter(info.prev);
  };
  const onNext = () => {
    apiCharacter(info.next);
  };

  useEffect(() => {
    apiCharacter(initialUrl);
    apiEpisodes(api);
  }, []);

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <Sections className="cards" episode={episodes} characters={characters} />
    </Container>
  );
}
