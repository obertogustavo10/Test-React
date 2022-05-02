import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
  titleTable: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
    backgroundColor: "#3f51b5",
    color: "#fff"
  },
  tableHead: {
    backgroundColor: "#ededed",
    fontWeight: "bold",
    paddingBottom: 6,
    paddingTop: 6,
  },
});

export default function TableEpisode({ episodes, section }) {
  const classes = useStyles();
  //State
  const [charactrs1, setCharactrs1] = useState([]);
  const [charactrs2, setCharactrs2] = useState([]);
  const [charactrs3, setCharactrs3] = useState([]);

  useEffect(() => {
    switch (section) {
      case "1":
        setCharactrs1(episodes);
        break;
      case "2":
        setCharactrs2(episodes);
        break;
      default:
        break;
    }
    setCharactrs3(charactrs1.concat(charactrs2));
  }, [charactrs1, charactrs2, episodes, section]);
  return (
    <Container style={{ textAlign: "center" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <TableContainer component={Paper}>
            <Typography
            className={classes.titleTable}
            component="h5"
            variant="h5"
          >
            characters #1- only Episodes
          </Typography>
            <Table className={classes.table} aria-label="simple table">
              
              <TableHead>
                <TableRow>
                  <TableCell>Episode</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="right">AirDate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {charactrs1.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="right">{row.air_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <TableContainer component={Paper}>
          <Typography
            className={classes.titleTable}
            component="h5"
            variant="h5"
          >
            characters (#1 y #2)-Shared episode
          </Typography>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Episode</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="right">AirDate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {charactrs3.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="right">{row.air_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <TableContainer component={Paper}>
          <Typography
            className={classes.titleTable}
            component="h5"
            variant="h5"
          >
            characters #2- only Episodes
          </Typography>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Episode</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="right">AirDate</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {charactrs2.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="right">{row.air_date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
