import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Small from "components/Typography/Small.js";
// import Danger from "components/Typography/Danger.js";
// import Warning from "components/Typography/Warning.js";
// import Success from "components/Typography/Success.js";
// import Info from "components/Typography/Info.js";
// import Primary from "components/Typography/Primary.js";
// import Muted from "components/Typography/Muted.js";
// import Quote from "components/Typography/Quote.js";
//
// import image from "assets/img/faces/avatar.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypography() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography"></div>
      </div>
    </div>
  );
}
