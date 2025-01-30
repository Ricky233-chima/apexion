import React from 'react';  
import amazingView from '../assets/myImages/Amazing views.png'  
import cabins from '../assets/myImages/Cabins.png'  
import beachFront from '../assets/myImages/Beachfronts.png'  
import skilings from '../assets/myImages/Skiing.png'  
import grandPianos from '../assets/myImages/Grand pianos.png'  
import mantion from '../assets/myImages/Mansions.png' 
import mog from '../assets/myImages/OMG!.png' 
import amazingPools from '../assets/myImages/Icon (2).png'  
import luxe from '../assets/myImages/Luxe.png' 
import boasts from '../assets/myImages/Boats.png'  
import lakeFront from '../assets/myImages/Lakefrontt.png'  
import treeHouses from '../assets/myImages/Treehouses.png'  
import frame2 from '../assets/myImages/Frame (1).png';  

function SecondNavBar() {  
    const amazingViewPoint = [  
        { svgImages: amazingView, description: 'Amazing views' },  
        { svgImages: cabins, description: 'Cabins' },  
        { svgImages: beachFront, description: 'Beachfront' },  
        { svgImages: skilings, description: 'Skiing' },  
        { svgImages: grandPianos, description: 'Grand Pianos' },  
        { svgImages: mantion, description: 'Mansions' },  
        { svgImages: mog, description: 'MOG!' },  
        { svgImages: amazingPools, description: 'Amazing pools' },  
        { svgImages: luxe, description: 'Luxe' },  
        { svgImages: boasts, description: 'Boats' },  
        { svgImages: lakeFront, description: 'Lakefront' },  
        { svgImages: treeHouses, description: 'Treehouses' }  
    ];  

return (  
    <section className=''>  
    <div className='flex gap-6   justify-center pt-12'>     
    {amazingViewPoint.map((item, index) => (  
        <div key={index} className='flex flex-col items-center'>  
            <img src={item.svgImages} alt={item.description} className='w-4 h-5' />  
            <a href=""><p className='mt-1 hover:underline'>{item.description}</p> </a>
        </div>  
    ))}  
    <div className="">  
        <button className='btn flex items-center'>  
            <img src={frame2} alt="" />  
            <h1>Filters</h1>  
        </button>  
    </div>  
</div> 
    </section>  
);
}
export default SecondNavBar;

