import React from "react";
import UniversityCardItem from "./cardItems/university/UniversityCardItem";
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
            <UniversityCardItem
              src={Carrots}
              text="Dissertation"
              path="/html1"
              university="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIe9tSxyrUBf79-ud8_7jOueryXGNEU5Wzkw&usqp=CAU"
            />
          
            <UniversityCardItem
              src={Tomato}
              text="Computer Security"
              path="/art3"
              university="https://s3.wns.com/S3_5/Images/GenericHeaderBanner/MobileImg/19087/3093/Security-TRAC-Mobile-568x568px.jpg"
            />
            <UniversityCardItem
              src={Tomato}
              text="Software Testing"
              path="/art3"
              university="https://iconape.com/wp-content/png_logo_vector/eclipse-2.png"
            />
            <UniversityCardItem
              src={Tomato}
              text="ILP"
              path="/art3"
              university="https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png"
            />
          </ul>
          <ul className="cards__items">
            <UniversityCardItem
              src={Carrots}
              text="Introductory Machine Learning"
              path="/html1"
              university="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png"
            />
          
            <UniversityCardItem
              src={Tomato}
              text="Introduction To Databases"
              path="/art3"
              university="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
            />
            <UniversityCardItem
              src={Tomato}
              text="Professional Issues"
              path="/art3"
              university="https://devclass.com/wp-content/uploads/2020/02/shutterstock_635324807.jpg"
            />
            
          </ul>
          <ul className="cards__items">
          <UniversityCardItem
              src={Tomato}
              text="Introduction to Algorithms and Data Structures"
              path="/art3"
              university="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR01nG31pFCvhJsDbeHQwfALe-MCqzh-v_FFQ&usqp=CAU"
            />
          
            <UniversityCardItem
              src={Tomato}
              text="Introduction To Data Science"
              path="/art3"
              university="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07uP50xvydEHL8HNzvYFebsLeme0nFBDMAg&usqp=CAU"
            />
            <UniversityCardItem
              src={Tomato}
              text="Introduction To Linear Algebra"
              path="/art3"
              university="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Linear_subspaces_with_shading.svg/1200px-Linear_subspaces_with_shading.svg.png"
            />
            <UniversityCardItem
              src={Tomato}
              text="Introduction to Object Orientated Programming"
              path="/art3"
              university="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/0a/8cd7f1b14344618b75142593bc7af8/JavaCupLogo800x800.png?auto=format%2Ccompress&dpr=1"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
