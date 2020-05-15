import React from "react";
import { Button, Paper, InputBase, Icon } from "@material-ui/core";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { makeStyles } from "@material-ui/styles";

import { spiderWebIcon } from "../../assets/icons";

export default function SearchField({
  data: { value, shakeField },
  actions: { handleChange, handleSubmit },
}) {
  const classes = useStyles();

  return (
    <Paper
      className={`${classes.container} ${
        shakeField ? classes.animatedSearchFieldError : ""
      }`}
    >
      <form onSubmit={handleSubmit} className={classes.form}>
        <InputBase
          id="outlined-basic"
          variant="outlined"
          fullWidth
          className={classes.searchField}
          placeholder="Search your favorite hero!"
          inputProps={{
            classes: classes.searchField,
          }}
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={value}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          onClick={handleSubmit}
        >
          <Icon
            component={SearchIcon}
            className={`icon-search ${classes.searchIcon}`}
          />
        </Button>
      </form>
    </Paper>
  );
}

const useStyles = makeStyles(({ customShape, customShadow, palette }) => ({
  container: {
    borderRadius: customShape && customShape.borderRadius.default,
    boxShadow: customShadow && customShadow.wide,
    overflow: "hidden",
  },
  form: {
    display: "flex",

    "& input[type='text']": {
      color: palette && palette.text.primary,
      fontFamily: "Permanent Marker",
      fontSize: 20,

      "&::placeholder": {
        opacity: 1,
      },
    },
  },
  searchField: {
    background: palette && palette.common.white,
    padding: [[16, 20]],
  },
  btn: {
    backgroundImage: `url(${spiderWebIcon})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    fill: palette && palette.common.white,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    padding: [[20, 36]],
  },
  icon: {
    alignItems: "center",
    color: palette && palette.common.white,
    display: "flex",
  },
  searchIcon: {
    height: 30,
    width: 30,
  },
  animatedSearchFieldError: {
    animation: "$shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
    transform: "translate3d(0, 0, 0)",
    backfaceVisibility: "hidden",
    perspective: 1000,
  },
  "@keyframes shake": {
    "10%, 90%": {
      transform: "translate3d(-1px, 0, 0)",
    },
    "20%, 80%": {
      transform: "translate3d(2px, 0, 0)",
    },
    "30%, 50%, 70%": {
      transform: "translate3d(-4px, 0, 0)",
    },
    "40%, 60%": {
      transform: "translate3d(4px, 0, 0)",
    },
  },
}));
