import React from "react";
// react plugin for creating date-time-picker
// import Datetime from "react-datetime";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";
import { LibraryMusicSharp } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

export default function MoDalNews() {
  const classes = useStyles();
  // const [anchorElLeft, setAnchorElLeft] = React.useState(null);
  // const [anchorElTop, setAnchorElTop] = React.useState(null);
  // const [anchorElBottom, setAnchorElBottom] = React.useState(null);
  // const [anchorElRight, setAnchorElRight] = React.useState(null);
  const [classicModal, setClassicModal] = React.useState(false);
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer>
              <GridItem xs={8} sm={8} md={4} lg={4}>
                {/*<h3 className={classes.subtitle}>УНИКАЛЬНАЯ МЕТОДИКА</h3>*/}
                <Button
                  color="danger"
                  block
                  onClick={() => setClassicModal(true)}
                  classes={{
                    button: classes.center,
                    // paper: classes.modal,
                  }}
                >
                  <LibraryMusicSharp className={classes.icon} />
                  <h5>УЗНАТЬ БОЛЬШЕ</h5>
                </Button>
                <Dialog
                  classes={{
                    root: classes.center,
                    // paper: classes.modal,
                  }}
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
                  <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
                    <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>побробуй сейчас</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    {" "}
                    <h2>Барабанная йога!</h2>
                    <p>
                      Узнай себя через барабаны! Вы можете быть человеком любой
                      профессии, но каким бы делом вы ни занимались, вам
                      необходимо уметь концентрировать свое внимание на одном
                      или нескольких действиях одновременно. Барабанная йога это
                      процесс гармоничного взаимодействия нашей психики и
                      физического тела через игру на барабанах. Синхронизация
                      различных действий в едином потоке ритма барабанов.
                      Барабанная йога это возвращение чувства расслабленности
                      через сознавание движений своего тела, это обретение
                      внутреннего комфорта. Индивидуальные встречи! 066 965 89
                      25 Студия «Eurovox» ул. Межигірська, 87А, ст. метро Т.
                      Шевченко КИЕВ
                    </p>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button color="transparent" simple>
                      ЗАПИСАТЬСЯ НА ПРОБНОЕ ЗАНЯТИЕ
                    </Button>
                    <Button
                      onClick={() => setClassicModal(false)}
                      color="danger"
                      simple
                    >
                      позже
                    </Button>
                  </DialogActions>
                </Dialog>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
