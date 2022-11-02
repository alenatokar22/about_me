import "./App.css";
import user from "./user.json";
import imgUrl from "./my_photo.jpg";
// import Slider from "react-slick";

function App() {
  const mailMe = "mailto:" + user.email;

  return (
    <main className="wrapper">
      <div className="art"> </div>
      <div className="container">
        <div className="content">
          <img src={imgUrl} alt="myPhoto" />
          <h1>About me</h1>
          <div className="name">
            {" "}
            <span>Name: </span> {user.name}
          </div>
          <div className="summary">
            <span>Summary: </span> {user.shortSummary}
          </div>
          <ul>
            <span>Skills: </span>
            {user.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <ul>
            <span>Hobbies: </span>
            {user.hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
          <a href={mailMe}>funtick-fantick</a>
          {/* <SimpleSlider /> */}
        </div>
      </div>
    </main>
  );
}
export default App;

// function SimpleSlider() {
//   const settings = {
//     dots: "true",
//     infinite: "true",
//     speed: "500",
//     slidesToShow: "1",
//     slidesToScroll: "1",
//   };

//   return (
//     <div>
//       <Slider {...settings}>
//         <div>
//           <a>Marcho</a>
//         </div>
//         <div>
//           <a>Boat</a>
//         </div>
//         <div>
//           <h3>Marketing</h3>
//         </div>
//         <div>
//           <h3>Portfolio</h3>
//         </div>
//         <div>
//           <h3>Glee</h3>
//         </div>
//         <div>
//           <h3>Apartment</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }
