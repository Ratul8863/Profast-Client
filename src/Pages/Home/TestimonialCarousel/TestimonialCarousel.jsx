import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TestimonialCarousel.css'; // We'll create this file for custom styles

const testimonials = [
  {
    id: 1,
    name: 'Awlad Hossin',
    position: 'Senior Product Designer',
    quote: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    id: 2,
    name: 'Rosel Ahamed',
    position: 'CTO',
    quote: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    id: 3,
    name: 'Nasir Uddin',
    position: 'CEO',
    quote: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
  },
  {
    id: 4,
    name: 'Jane Doe',
    position: 'Marketing Manager',
    quote: 'This product has significantly improved my daily comfort and posture. Highly recommended for anyone spending long hours at a desk!',
  },
  {
    id: 5,
    name: 'John Smith',
    position: 'Software Engineer',
    quote: 'I used to have constant back pain, but since using this posture corrector, I feel a remarkable difference. It\'s a game-changer!',
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="bg-gray-100 py-20 overflow-hidden relative">
      <div className="text-center mb-16">
        {/* Placeholder for the top illustration */}
        {/* Adjust mt-[-60px] to mt-[-80px] or more if needed, and ensure the image source is correct */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-[-80px] z-0">
          <img src="http://googleusercontent.com/file_content/0" alt="Illustration" className="w-40 h-auto" />
        </div>
        <h2 className="text-4xl text-primary font-bold mt-10">What our customers are sayings</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
        className="max-w-7xl mx-auto px-4 testimonial-swiper pt-12" // Added pt-12 here
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            {({ isActive }) => (
              <div
                className={`bg-white rounded-lg shadow-lg transition-all border  mt-20 duration-300 ease-in-out p-8 relative flex flex-col justify-between h-full ${
                  isActive ? 'scale-110 translate-y-[-2rem] z-10' : 'opacity-60'
                }`}
                style={{ minHeight: '280px' }}
              >
                <div className="absolute top-4 left-6 text-5xl text-gray-200 font-serif leading-none">“</div>
                <p className="text-gray-700 text-base mb-6 mt-8">
                  {item.quote}
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-teal-700 text-xl">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.position}</p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="flex justify-center items-center mt-12 space-x-4">
        <div className="swiper-button-prev-custom cursor-pointer w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center transition-colors duration-300 hover:bg-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        {/* Custom Pagination Dots */}
        <div className="swiper-pagination-custom flex space-x-2"></div>
        <div className="swiper-button-next-custom cursor-pointer w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center transition-colors duration-300 hover:bg-teal-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;