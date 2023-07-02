"use client"

import { Grid, Link, Container } from "@mui/material";
import "../../../Assets/scss/components/_iconwithtext.scss";
import { memo } from "react";
import { IconWithTextData_01 } from "../../../functions/examples"
import { PropTypes } from "prop-types";
import Buttons from "../../Button/Buttons"
import { motion, m } from "framer-motion";
import {fadeIn} from '../../../functions/GlobalAnimations';


import "../../../Assets/scss/components/_textbox.scss";
import ListaIconeTexto from "../../Listas/ListaIconeTexto";
import PassoAPassoUm from "../../Listas/ListaEtapas/PassoAPassoUm";
import ListaSimples from "../../Listas/ListaSimples";
import {TextoAnimado} from "../../Texto/TextoAnimado";

const ContainerChamadaDois = (props) => {
  const {xs, sm, md, lg, xl} = props;
  const {dark} = props;
  const {btnExtra, btn, headline, text} = props.data;

  const click = () => {
    window?.gtag("event", "add_to_cart", {
      currency: "brl",
      value: 0,
      items: [
        {item_id: 'social-money', item_name: 'Social Money'}
      ]
    });

    //window?.fbq('track', 'AddToCart');
    window?.open('https://pay.kiwify.com.br/FUeA5Pp');
  };

  return (
      <div id="compre" className="bg-gradient-to-r from-[#7d2cc9] via-[#9c009f] to-[#b0027c] w-full py-[80px] lg:py-[80px] md:py-[65px] sm:py-[50px] xs:py-[40px]">

          <Grid container alignItems={"center"} justifyContent={"center"} alignContent={"center"} className="px-[26px] md:justify-center lg:justify-between xl:justify-between">

            <Grid lg={7} md={10} className="font-serif md:mb-20 sm:mb-14 xs:mb-14" item>
              <h2 className="heading-4 font-serif font-medium text-gray-100 mb-16 w-[100%] md:mb-12 xs:mb-16">
                {headline}
                <TextoAnimado duration={3000} className="font-semibold pl-2" color="#e0bcff" animation="type" data={["Aproveite"]}>
                    
                </TextoAnimado>
              </h2>
              
            </Grid>

            <Grid lg={4} md={10} className="items-center text-center landscape:px-[15px]" item>
                <div className="mt-[20px] items-center text-center md:mt-[20px] xs:mt-[20px] landscape:md:mt-[26px]">
                    <Buttons ariaLabel="link for pricing-packages" onClick={click} className="sm:mx-[14px] rounded-[4px] lg:w-[100%] sm:w-[90%] xs:w-[90%] items-center font-medium font-serif hover:text-gray-100 uppercase md:mb-[15px]" themeColor={["#4f1b7d", "#7637ad"]} size="xl" color="#fff" title={btn} />
                    {btnExtra ? <Buttons ariaLabel="link for modal button" className="font-medium font-serif xs:!p-0 uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-gray-300 hover:text-gray-400 text-gray-300" color="#ffffff" size="xl" title={btnExtra} /> : null}

                </div>
                <p className="w-[100%] mb-[40px] mt-2 md:mb-[45px] italic text-gray-300 xs:mb-[25px]">
                  {text}
                </p>
            </Grid>

          </Grid>

      </div>
  )
};


export default memo(ContainerChamadaDois);