import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

import { PowerStatsList } from "..";

export default function HeroCard({
  data: { id, name, image, powerstats, handleOpenModal },
}) {
  const classes = useStyles();

  return (
    <Card className={classes.container} onClick={() => handleOpenModal(id)}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {name}
          </Typography>
          {powerstats && (
            <PowerStatsList
              data={{
                list: powerstats,
              }}
            />
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    boxShadow: theme.customShadow.default,
    minWidth: 270,
    margin: [[10, 10, 24, 10]],
    [theme.breakpoints.up("sm")]: {
      minWidth: 210,
    },

    [theme.breakpoints.up("md")]: {
      minWidth: 286,
    },
  },
  media: {
    height: 140,
  },
}));
