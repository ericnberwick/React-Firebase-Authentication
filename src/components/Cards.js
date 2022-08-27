import React from "react";
import CardItem from "../components/CardItem"
import "../css/Cards.css";
import Tomato from "../pics/notEdV3.jpg"
import Plants from "../pics/notEdV3.jpg"
import Carrots from "../pics/notEdV3.jpg"
import Cress from "../pics/notEdV3.jpg"
import Pots from "../pics/notEdV3.jpg"
import CompCardItem from "./cards/cardItems/computing/CompCardItem"
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
            <CompCardItem
              src={Carrots}
              text="HTML For Beginners"
              path="/html1"
              book= "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
            />
          
            <CompCardItem
              src={Tomato}
              text="CSS For Beginners"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book ="https://cdn-icons-png.flaticon.com/512/888/888847.png"
            />
            <CompCardItem
              src={Tomato}
              text="Developing Websites Locally"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
            />
            <CompCardItem
              src={Tomato}
              text="Improved Styling CSS"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book ="https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png"
            />
            
          </ul>
          <ul className="cards__items">
            <CompCardItem
              src={Carrots}
              text="Fundamentals of Web Design"
              path="/html1"
              book= "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/WHAT-IS-WEB-DESIGN.jpg?auto=format&q=60&w=1860&h=1395&fit=crop&crop=faces"
            />
          
            <CompCardItem
              src={Tomato}
              text="Making a Website Responsive"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book ="https://www.tutorialspoint.com/css/images/responsive.jpg"
            />
            <CompCardItem
              src={Tomato}
              text="JavaScript For Beginners"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book ="https://www.computerhope.com/jargon/j/javascript.png"
            />
            <CompCardItem
              src={Tomato}
              text="JavaScript For Intermediate"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book ="http://wfhutch.github.io/images/download.png"
            />
            
          </ul>
          <ul className="cards__items">
            <CompCardItem
              src={Carrots}
              text="JavaScript Testing"
              path="/html1"
              book= "https://camo.githubusercontent.com/58045a79a69afea4cab1cea6def6d911fba3956cf5fd683addf41c032aa64088/68747470733a2f2f636c6475702e636f6d2f78465646784f696f41552e737667"
            />
          
            <CompCardItem
              src={Tomato}
              text="Async JavaScript and HTTP Requests"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book ="https://yashints.dev/static/fb3883e15852de11a094b8a6a3d8aee8/47498/asyncawaitjs.jpg"
            />
            <CompCardItem
              src={Tomato}
              text="React"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            />
            <CompCardItem
              src={Tomato}
              text="Git"
              path="/art3"
              file="Limitless___Jim_Kwik.pdf"
              book ="https://avatars.githubusercontent.com/u/18133?s=200&v=4"
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
