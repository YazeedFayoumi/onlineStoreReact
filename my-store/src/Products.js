// import Car from "./Car";
import React from "react";
import FanCar from './R(2).jpg';
import LexCar from './Lexus500.jpg';
import PickUp from './pickup.jpg';
import Zelly from './zely.jpg';
import Car from './car'
import carStyle from './styles.css';

function Products() {
    return(
        <div className="Apps">
    <div id='uno'>
    <Car class='cellR' src={FanCar} description='rich life dream, speed and status car but even if i had it i wont use daily' color='orange' brand='something fancy and pricey' />
      <Car class='cellL' src={LexCar} description='this is my true g=dream car if i had it  i will use it always ' color='silver' brand='Lexus' />
    </div>
    <div id='duos'>
    <Car class='cellF' src={PickUp} description='this is also in a weird way a dream car of mine, it was built strong and for the work and i really 
      like the design and prefer it to the ugly and fat american trucks which resemble the image of their people' color='blue' brand='ford' />
      <Car class='cellZ' src={Zelly} description='LOL' color= 'ukraine' brand='Zelensky Barrell'/>
    </div>
      
    </div>
    );
}

export default Products;