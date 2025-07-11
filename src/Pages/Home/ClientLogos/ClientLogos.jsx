import React from 'react';
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start.png";
import logo7 from "../../../assets/brands/start-people 1.png";
import Marquee from 'react-fast-marquee';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientLogos = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl text-primary font-bold">Trusted by These Brands</h2>
      </div>

      <Marquee pauseOnHover speed={50} gradient={false}>
        {logos.map((logo, index) => (
          <div key={index} className="mx-[100px] flex items-center">
            <img
              src={logo}
              alt={`logo-${index}`}
              className="h-6 w-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ClientLogos;
