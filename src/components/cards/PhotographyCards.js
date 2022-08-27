import React from "react";
import CardItem from "../../components/CardItem"

import PhotoCardItem from "./cardItems/photography/PhotoCardItem";
import "../../css/Cards.css"
import Tomato from "../../pics/notEdV3.jpg"
import Carrots from "../../pics/notEdV3.jpg"

/**
 * Function to return the cards section under the headers of the home page, Uses a react library called cards, pretty simple
 * Not implemented yet just renders the items
 * @returns 
 */
function Cards({section}) {
  return (
    <div className="cards">
      <h1>{section}</h1>
      <div className="cards__container">
        <div className="cards__wraper">
          <ul className="cards__items">
            <PhotoCardItem
              src={Carrots}
              text="Understanding Your Camera"
              path="/html1"
              photo="https://www.gadgetreview.com/wp-content/uploads/digital-camera-schematic.png"
            />
            <PhotoCardItem
              src={Carrots}
              text="Foundations of Photography"
              path="/html1"
              photo="https://www.69dropsstudio.co.uk/wp-content/uploads/2016/11/benefits-of-photography.jpg"
            />
            
            <PhotoCardItem
              src={Carrots}
              text="Exposure"
              path="/html1"
              photo="https://assets.entrepreneur.com/content/3x2/2000/20191009140007-GettyImages-1053962188.jpeg"
            />
          </ul>
          <ul className="cards__items">
            <PhotoCardItem
              src={Carrots}
              text="Low Light Photography"
              path="/html1"
              photo="https://cc-prod.scene7.com/is/image/CCProdAuthor/CODERED_B1_macro_P7a_690x455.jpg.img?$pjpeg$&jpegSize=200&wid=690"
            />

            <PhotoCardItem
              src={Carrots}
              text="Macro Photography"
              path="/html1"
              photo="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1568181378-macro-6.jpg"
            />

            <PhotoCardItem
              src={Carrots}
              text="Portrait Photography"
              path="/html1"
              photo="https://images.pexels.com/photos/8123643/pexels-photo-8123643.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=1"
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
