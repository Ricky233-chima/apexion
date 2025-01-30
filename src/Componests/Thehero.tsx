import React from "react";
import '../index.css'
import heroImageFirst from '../assets/Frame 6 (21).png' 
import heroImage2 from '../assets/Frame 6 (2).png'
import heroImage3 from '../assets/Frame 6 (3).png' 
import heroImage4 from '../assets/Frame 6 (4).png' 
import heroImage5 from '../assets/Frame 6 (5).png' 
import heroImage6 from '../assets/Frame 6 (6).png'
import heroImage7 from '../assets/Frame 6 (7).png' 
import heroImage8 from '../assets/Frame 6 (8).png'
import heroImage9 from '../assets/Frame 6 (9).png' 
import heroImage10 from '../assets/Frame 6 (10).png'
import heroImage11 from '../assets/Frame 6 (11).png' 
import heroImage12 from '../assets/Frame 6 (12).png'
import heroImage13 from '../assets/Frame 6 (13).png'
import heroImage14 from '../assets/Frame 6 (14).png'
import heroImage15 from '../assets/Frame 6 (15).png'
import heroImage16 from '../assets/Frame 6 (16).png'
import heroImage17 from '../assets/Frame 6 (17).png' 
import heroImage18 from '../assets/Frame 6 (18).png' 
import heroImage19 from '../assets/Frame 6 (19).png'
import heroImage20 from '../assets/Frame 6 (19).png'
import ratingSvg from '../assets/Ratings (7).png'

function Hero() {
  const Apexion = [
    { HeroesImages: heroImageFirst },
    { HeroesImages: heroImage2 },
    { HeroesImages: heroImage3 },
    { HeroesImages: heroImage4 },
    { HeroesImages: heroImage5 },
    { HeroesImages: heroImage6 },
    { HeroesImages: heroImage7 },
    { HeroesImages: heroImage8 },
    { HeroesImages: heroImage9 },
    { HeroesImages: heroImage10 },
    { HeroesImages: heroImage11 },
    { HeroesImages: heroImage12 },
    { HeroesImages: heroImage13 },
    { HeroesImages: heroImage14 },
    { HeroesImages: heroImage15 },
    { HeroesImages: heroImage16 },
    { HeroesImages: heroImage17 },
    { HeroesImages: heroImage18 },
    { HeroesImages: heroImage19 },
    { HeroesImages: heroImage20 },
  ];

  return (
    <div>
      <div className="grid gap-4 grid-cols-4 md:grid-cols-3 lg:grid-cols-4 justify-items-center pt-10">
        {Apexion.map((item, index) => (
          <div key={index} className="text-center">
            
            <img
              src={item.HeroesImages}
              alt=""
              className="w-64 h-42 rounded-lg pb-6 path"
            />
            <div className="flex justify-center items-center gap-1">
              <h1 className="pb-1">Half Moon Bay, California, US</h1>
              <div className="flex items-center">
                <img src={ratingSvg} alt="" className="w-3 h-3" />
                <h1 className="ml-1">5.0</h1>
              </div>
            </div>
            <h3 className="text-gray-500">Beach and Ocean Views</h3>
            <h3 className="text-gray-500">22-27 oct. Individual Host</h3>
            <h3 className="underline">$1,634 total</h3>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center pt-6">
        <h1 className="pb-2">Continue exploring amazing views</h1>
        <button className="btn bg-black text-white mt-2 animate-bounce">Show more</button>
      </div>
    </div>
  );
}

export default Hero;
