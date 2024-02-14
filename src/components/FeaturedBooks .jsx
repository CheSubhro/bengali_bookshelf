"use client"
import { FeatureBooks  } from '../../data';
import Image from 'next/image';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

const FeaturedBooks  = () => {
    return (
        <>
            <div className='mx-20 my-10'>
            <h1 className='text-xl font-bold mb-5'>Featured Books</h1>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    keyboard={{
                    enabled: true,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                    FeatureBooks.map((book, i) => (
                        <SwiperSlide>
                        <div className='flex flex-col items-center'>
                            <a href={book.id}>
                            <Image src={book.book_cover} alt={book.title} width="100px" />
                            </a>
                            <p className='font-semibold'>Rs. {book.selling_price} <span className='line-through font-thin text-sm'>{book.mrp}</span> </p>
                        </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default FeaturedBooks 