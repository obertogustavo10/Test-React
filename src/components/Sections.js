import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import Table from "./TableEpisode";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

//Style
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  titleMain: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  titleSecundary: {
    fontSize: "10px",
  },
  alive: {
    height: "0.5rem",
    width: "0.5rem",
    marginRight: "0.375rem",
    background: "black",
    borderRadius: "50%",
  },
  charOne: {
    fontWeight: "bold",
    marginBottom: "2rem",
  },
  charTwo: {
    textAlign: "right",
    fontWeight: "bold",
    marginBottom: "2rem",
  },
  card: {
    padding: 10,
  },
}));

export default function Sections({ characters, episode }) {
  const classes = useStyles();

  //useState

  const [charOne, setCharOne] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [section, setSection] = useState("");


  let epi;
  let setSelTD = [];
  let fin = [];
  useEffect(() => {
    setCharOne(characters.splice(0, 10));
  }, [characters, epi]);
  const handleChange = (idx, labelx, valuex) => {
    console.log(` checkbox numbero ${idx} + ${labelx} +${valuex}`);
    setSection(idx);
    let id = [];
    labelx.forEach((url) => {
      let idUrl = url.split("https://rickandmortyapi.com/api/episode/");
      id.push(idUrl[1]);
      epi = String(id);
    });

    id.forEach((element) => {
      element.split(",").forEach((elm) => {
        fin.push(parseFloat(elm));
      });
    });
    fin.forEach((ep) => {
      setSelTD.push(episode.find((epis) => epis.id === ep));
    });
    setEpisodes(setSelTD);
  };
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {/* charters #1 */}

        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Card className={classes.card}>
            <Typography className={classes.charOne} component="h5" variant="h5">
              characters #1
            </Typography>
            <Grid container spacing={3}>
              {charOne.map((item) => (
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Cards
                    label={item.episode}
                    id="1"
                    onChange={handleChange}
                    name={item.name}
                    image={item.image}
                    status={item.status}
                    species={item.species}
                  />
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>

        {/* charters #2 */}
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Card className={classes.card}>
            <Typography className={classes.charTwo} component="h5" variant="h5">
              characters #2
            </Typography>
            <Grid container spacing={3}>
              {characters.map((item) => (
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Cards
                    label={item.episode}
                    id="2"
                    onChange={handleChange}
                    name={item.name}
                    image={item.image}
                    status={item.status}
                    species={item.species}
                  />
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
      {/* charters #1 */}

      <Table section={section} episodes={episodes} />
    </Container>
  );
}
