import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import "../App.css";

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

  },
}));

export default function Cards({
  id,
  image,
  name,
  status,
  species,
  onChange,
  label
}) {
  const classes = useStyles();
  const onClick = () => {
    onChange(id, label);
  };

  return (
    <CardActionArea
      label={label}
      value={id}
      onClick={(e) => onClick(e.target.value, e.target.label)}
    >
      <Card className="root">
        <CardMedia className={classes.cover} image={image} title={name} />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography
              className={classes.titleMain}
              component="h5"
              variant="h5"
            >
              {name}
            </Typography>
            <Typography
              className={classes.titleSecundary}
              variant="subtitle1"
              color="textSecondary"
            >
              Status: {status} 
            </Typography>
            <Typography
              className={classes.titleSecundary}
              variant="subtitle1"
              color="textSecondary"
            >
              Species: {species}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </CardActionArea>
  );
}
