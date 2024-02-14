"use client"

import { Books } from '../../data';
import Image from 'next/image';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';


const TopSellingBooks  = () => {
    return (
        <>
            <div className='mx-20 my-10'>
                <h1 className='text-xl font-bold mb-5'>Top Selling Books</h1>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                    Books.map((book, i) => (
                        <SwiperSlide>
                        <div className='flex flex-col items-center'>
                            <a href={book.id}>
                            <Image src={book.book_cover} alt={book.title} width="10px" height={500}/>
                            </a>
                            <p className='font-semibold'>Rs. {book.price}</p>
                        </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default TopSellingBooks 