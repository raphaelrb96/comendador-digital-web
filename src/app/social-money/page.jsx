'use client'

import Script from 'next/script';
import { useEffect } from 'react';
import RootLayout from '../layout';
import Home from '../../layouts/Main';
import { DEBUG } from '../page';
import Main from '../../layouts/Main';


export default function SocialMoney() {

  if(DEBUG) {
    return (
      <RootLayout titulo="Social Money">
        <Main />
      </RootLayout>
    );
  }

  return (
    <RootLayout titulo="Social Money">

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NTXYGTVCJ1" />
        
        <Script id="gtag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-NTXYGTVCJ1');
            gtag('config', 'AW-815086144');
          `}
        </Script>

        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 1031519501606549);
              fbq('track', 'PageView');
            `,
          }}
        />

        <Script
          id="tt-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
            
              ttq.load('CID20ABC77U0O25FGA40');
              ttq.page();
            }(window, document, 'ttq');
            `,
          }}
        />
        
      <Main />
    </RootLayout>
  );
};
