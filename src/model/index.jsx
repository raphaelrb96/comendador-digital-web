"use client"

import { Grid, Link, Container } from "@mui/material";
import { memo } from "react";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion";
import {fadeIn} from '../../../functions/GlobalAnimations';


const funcao = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;
  return (
      <div className="">

          <Grid container alignItems={"center"} justifyContent={"center"} alignContent={"center"} className="">

            <Grid lg={12} md={12} sm={12} xs={12} className="" item>
              
              
            </Grid>

            <Grid lg={12} md={12} sm={12} xs={12} className="" item>
                
            </Grid>

          </Grid>

      </div>
  )
};


export default memo(funcao);