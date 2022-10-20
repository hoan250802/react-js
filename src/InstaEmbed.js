import React from "react";
import "./InstaEmbed.css";
// import CopyrightIcon from '@material-ui/icons/Copyright';
// import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  
    large: {
      width: theme.spacing(8),
      height: theme.spacing(8),
    },
  }));

function InstaEmbed() {

    const classes = useStyles();


  return (
    <div className="instaEmbed">
      <img src="/images/header2.png" className="embed_image" />
    </div>
  );
}

export default InstaEmbed;
