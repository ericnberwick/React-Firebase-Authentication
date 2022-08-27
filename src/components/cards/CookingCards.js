import React from "react";
import CookCardItem from "./cardItems/cooking/CookingCardItem";
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
            <CookCardItem
              src={Carrots}
              text="Jamie Oliver's Authentic Italian Carbonara"
              path="/cook1"
              cook="https://www.thespruceeats.com/thmb/SX7AEAMQwKV676yMFKWoVSE95Go=/1000x1000/smart/filters:no_upscale()/pasta-carbonara-recipe-5210168-hero-01-80090e56abc04ca19d88ebf7fad1d157.jpg"
            />
          
            <CookCardItem
              src={Tomato}
              text="A Very Scottish Burrito"
              path="/cook2"
              cook="https://www.thespruceeats.com/thmb/0IgrfjD4r3BuZ6huYsFH_mpdsSI=/2696x2696/smart/filters:no_upscale()/vegetarian-bean-and-rice-burrito-recipe-3378550-hero-01-40ecbc08fcc84e80b8be853c1b779a13.jpg"
            />
            <CookCardItem
              src={Tomato}
              text="Legendary Chicken Pasta"
              path="/cook3"
              cook= "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F11%2F24%2Fone-pot-chicken-pasta-with-cajun-seasonings.jpg&q=60"
            />
          </ul>
          <ul className="cards__items">
          <CookCardItem
              src={Tomato}
              text="A Very Sexy Stir Fry"
              path="/cook4"
              cook= "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pork-noodle-stir-fry-3cb19c3.jpg"
            />
            <CookCardItem
              src={Tomato}
              text="Poke Poke Poke"
              path="/cook5"
              cook= "https://thehappypear.ie/wp-content/uploads/2021/09/IMG_4780-scaled.jpg"
            />
            <CookCardItem
              src={Tomato}
              text="Trindade Bolognese"
              path="/cook6"
              cook= "https://www.servingdumplings.com/wp-content/uploads/2021/12/red-pesto-spaghetti-bolognese-4-f9e7626c.jpg"
            />
          </ul>
          <ul className="cards__items">
          <CookCardItem
              src={Tomato}
              text="The Perfect Steak"
              path="/cook7"
              cook= "https://images.eatthismuch.com/img/386782_tabitharwheeler_47524742-555f-4d57-86f6-e0b76b4c3799.jpg"
            />
            <CookCardItem
              src={Tomato}
              text="Creamy Tuscan Chicken"
              path="/cook8"
              cook= "https://hips.hearstapps.com/hmg-prod/images/20191011-creamy-tuscan-chicken-delish-ehg-2521-1571259466.jpg"
            />
            <CookCardItem
              src={Tomato}
              text="Protein Brownies"
              path="/cook9"
              cook= "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-2-1200.jpg"
            />
          </ul>
          <ul className="cards__items">
          <CookCardItem
              src={Tomato}
              text="Protein Ice Cream"
              path="/cook10"
              cook= "https://christinebailey.co.uk/wp-content/uploads/2014/07/tn_chocolate-ice-cream-in-bowl.jpg"
            />
            <CookCardItem
              src={Tomato}
              text="Detox Smoothy"
              path="/cook11"
              cook= "https://joyfoodsunshine.com/wp-content/uploads/2019/07/green-smoothie-recipe-2.jpg"
            />
            <CookCardItem
              src={Tomato}
              text="Thai Green Curry"
              path="/cook12"
              cook= "https://www.simplyrecipes.com/thmb/H6mLVBkX01L9owE49DYYpz-Vyhs=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2016__08__2016-09-05-Green-Curry-8-0ae982ea53514675b3dc552ed130e62f.jpg"
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
