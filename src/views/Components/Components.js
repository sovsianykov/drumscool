import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
// import SectionBasics from "./Sections/SectionBasics.js";
// import SectionNavbars from "./Sections/SectionNavbars.js";
// import SectionTabs from "./Sections/SectionTabs.js";
// import SectionPills from "./Sections/SectionPills.js";
// import SectionNotifications from "./Sections/SectionNotifications.js";
// import SectionTypography from "./Sections/SectionTypography.js";
// import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
// import SectionLogin from "./Sections/SectionLogin.js";
// import SectionExamples from "./Sections/SectionExamples.js";
// import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";

import MoDalNews from "./Sections/MoDalNews";
// import SectionTypography from "./Sections/SectionTypography";
import SectionTypographyHero from "./Sections/SectionTypographyHero";
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand=" Drums for everyone"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg41.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  <span className="hero">Sangit Drums</span>
                </h1>
                {/*<h3 className={classes.subtitle}></h3>*/}

                <h3> Проект Сергея Табунщика</h3>
              </div>
            </GridItem>
            <GridItem>
              <MoDalNews />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridContainer>
          <GridItem md={12} className={classes.textCenter}>
            <SectionTypographyHero />
          </GridItem>
        </GridContainer>
        <SectionCarousel id="heroCarousel" />
      </div>

      <Footer />
    </div>
  );
}
