import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";

import Quote from "components/Typography/Quote.js";
// import ava from "assets/img/avatab.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTypographyHero() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="typography">
          <GridContainer>
            <div className={classes.typo}>
              <div className="titleHolder">
                {/*<div className="avaimg">*/}
                {/*  <img*/}
                {/*    id="ava"*/}
                {/*    src={ava}*/}
                {/*    alt="ava"*/}
                {/*    className={*/}
                {/*      classes.imgRoundedCircle + " " + classes.imgFluid*/}
                {/*    }*/}
                {/*  />*/}
                {/*</div>*/}
                <h2 className="avatitle">
                  Обучение игре на барабанах детей и взрослых.
                </h2>
              </div>
              <div className="mainText">
                <h4 className={classes.title}>
                  Индивидуальные занятия, мастер-классы, тренинги, специальные
                  сессии
                </h4>
                <h4 className={classes.title}>
                  Проект «Sangit-Drum» имеет несколько целей, связанных с игрой
                  на барабанах.
                </h4>
                <p>
                  1. Популяризация барабанов - познакомить как можно больше
                  людей с барабанным искусством.
                </p>
                <p>
                  2. Барабанная йога - как способ исследования своего тела и
                  психики через игру на барабанах.
                </p>
                <p>
                  3. Профессиональное обучение на барабанах, системный подход
                  для будущих барабанщиков.
                </p>
                <div className={classes.typo}>
                  <Quote text="Свою методику я называю барабанной йогой, поскольку игра на барабанах это искусство быть расслабленным и уметь осознанно управлять своим телом. Это внутренняя дисциплина, которая позволяет концентрироваться, удерживать внимание в нескольких направлениях, находясь в потоке ритма" />
                </div>
                <h3 className={classes.title}>Кто такой Сергей Табунщик?</h3>
                <p>
                  Профессиональный барабанщик, преподаватель, композитор, автор
                  проекта «Sangit-Drum», аранжировщик и музыкальный продюсер
                  этно-джазового проекта. Лауреат Республиканского конкурса
                  исполнителей на ударных инструментах - маримба, ксилофон,
                  вибрафон, барабаны, литавры(1991). Сотрудничал с музыкантами
                  из разных стран - Таисия Повалий, Млада, Katya Chilly, Злата
                  Огневич, Alloise, Cynthia Scott (США), Quique Gómez (Испания),
                  Bob Stoloff (США), Ingrid Arthur (США), Записал более 10-ти
                  пластинок с лучшими музыкантами Украины. Большой опыт
                  концертных выступлений и студийной работы в стилях фанк, рок,
                  поп, джаз. Образование: Киевский национальный университет
                  культуры и искусств (1994) - класс ударных профессора Г. В.
                  Черненко
                </p>
              </div>
            </div>
          </GridContainer>
        </div>
        <div className={classes.space50} />
        <div className={classes.space50} />
      </div>
    </div>
  );
}
