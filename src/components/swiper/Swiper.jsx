import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import Recommended from "../../pages/ProductItemPage/Recommended";
import { Context } from "../../Context";

export default function SwiperItem() {
  const {products, toggleFavorite} = useContext(Context)
  const recommendedItems = products.map((item, index)=>{
    if(index >= 10 && index <= 13){
        return(
          <SwiperSlide key={item.id}>
            <Recommended
                id={item.id}
                img={item.url} 
                title={item.name}
                ethprice={item.price.eth}
                setFavorite={toggleFavorite}
            />
          </SwiperSlide>
        )
      }
    })
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {recommendedItems}
      </Swiper>
    </>
  );
}
