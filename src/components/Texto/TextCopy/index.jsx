"use client"

import { Container, Grid, Link } from "@mui/material"
import "../../../Assets/scss/components/_iconwithtext.scss"
import { memo, useEffect, useState } from "react"


import "../../../Assets/scss/pages/_startup.scss";



const TextCopy = (props) => {

  const {dark} = props;

  
    return (
      <section className="py-[120px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden bg-lightgray">
          <Grid container alignContent={'center'} alignItems={'center'} justifyContent={'center'} className="justify-center">
              <Grid sm={12} lg={10} item className="text-center mb-[26px]">
                  <h6 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} text-center font-medium mb-[15px] lg:mb-[15px]`}>
                    {props.data.subTitle}
                  </h6>
                  <h3 className={`font-serif ${dark ? ' text-white ' : ' text-darkgray '} text-center font-bold mb-[10px] lg:mb-[15px]`}>
                    <div className={`${dark ? ' text-white text-gradient bg-gradient-to-r from-[#c4a2e1] via-[#d9c3eb] to-[#a664df]' : ' text-gradient bg-gradient-to-r from-[#4e3167] via-[#6a3496] to-[#8828dc]'}`}>
                      {props.data.title}
                    </div>
                  </h3>
              </Grid>
              <Grid lg={6} sm={9} className="md:text-center md:mb-[40px] sm:mb[36px] xs:mb-[36px] pt-6" item>
                <h2 className="heading-4 font-sans leading-[3rem] text-darkgray font-semibold w-[100%] lg:w-full">
                  {props.data.headline}
                </h2>
              </Grid>
          </Grid>
      </section>
    );
  
};


export default memo(TextCopy)