import React from 'react'
var $ = require('jquery');
if(typeof window !== 'undefined'){
    window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic( () => import('react-owl-carousel'),
{
    ssr: false,
});

export default function Slider(props:any) {
  return (
    <OwlCarousel
        responsive={props.responsive}
    >{props.children}
    </OwlCarousel>
  )
}
