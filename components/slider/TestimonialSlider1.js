'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>I struggled with dry, itchy skin for years, but this natural face bathing bar has been a game-changer! My face feels hydrated and smooth after every wash, with no irritation. I love the gentle, natural ingredients!.</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="/assets/images/gallery/review1.jpeg" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Joseph</h3>
                      {/* <span className="designation">Dog Trainer</span> */}
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>I have super sensitive skin, and most cleansers cause redness. This bar is so gentle and leaves my skin feeling clean and refreshed without any tightness. I’m hooked!</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="/assets/images/gallery/review2.jpeg" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Anjana</h3>
                      {/* <span className="designation">Dog Trainer</span> */}
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                {/* <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>I struggled with dry, itchy skin for years, but this natural face bathing bar has been a game-changer! My face feels hydrated and smooth after every wash, with no irritation. I love the gentle, natural ingredients!</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Robert Fox</h3>
                      <span className="designation">Dog Trainer</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>I struggled with dry, itchy skin for years, but this natural face bathing bar has been a game-changer! My face feels hydrated and smooth after every wash, with no irritation. I love the gentle, natural ingredients!.</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Robert Fox</h3>
                      <span className="designation">Dog Trainer</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>I struggled with dry, itchy skin for years, but this natural face bathing bar has been a game-changer! My face feels hydrated and smooth after every wash, with no irritation. I love the gentle, natural ingredients!</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Robert Fox</h3>
                      <span className="designation">Dog Trainer</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>I struggled with dry, itchy skin for years, but this natural face bathing bar has been a game-changer! My face feels hydrated and smooth after every wash, with no irritation. I love the gentle, natural ingredients!</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.png" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="far fa-star"></i></li>
                      </ul>
                      <h3>Robert Fox</h3>
                      <span className="designation">Dog Trainer</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide> */}
               
            </Swiper>
        </>
    )
}
