
// const Heading = () => {
//     return (
//         <h1>Learn web Development</h1>
//     )
// }
const h1 = React.createElement("h1" , {} , "Learn web Development")
const a = React.createElement("a" , {href : "https://developer.mozilla.org/en-US/docs/Learn"} , " the rest of MDN");
const p3 = React.createElement("p" , {} , "If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.");
const p2 = React.createElement("p" , {} , "The aim is not to take you from beginner to expert but to take you from beginner to comfortabl From there, you should be able to start making your way, learning from ", a , ", and other intermediate to advanced resources that assume a lot of previous knowledge.");
const P1 = React.createElement("p" , {} , "Welcome to the MDN learning area. This set of articles aims to provide complete beginners to web development with fundamental skills for coding websites." , p2 , p3);

// const para = ["Welcome to the MDN learning area. This set of articles aims to provide complete beginners to web development with fundamental skills for coding websites.", `The aim is not to take you from beginner to expert but to take you from beginner to comfortabl<a> From there, you should be able </a>ato start making your way, learning from the rest of MDN, and other intermediate to advanced resources that assume a lot of previous knowledge.`,"If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work."]



// const MainComponent = () => {
//     return (
//         <div style={{ width: "100%", height : "100vh", display :"flex" , justifyContent : "center" , alignItems :"center"}}>
//             <div style={{ width: "60%", backgroundColor: "gray", fontSize: "25px", padding: "10px", display :"flex" , justifyContent : "center" , alignItems :"center", flexDirection :"column" ,   textAalign: "justify"}}>
//                 <Heading />
//                 <P1/>
//             </div>
//         </div>


//     )
// }

const divStyle = {
    margin : "95px 150px",
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    flexDirection : "column",
    backgroundColor : "#cccccc",
    padding : "60px",
    fontSize : "20px",
    wordSpacing : "3px",
    
};

const MainComponent = React.createElement("div" , {style : divStyle} , [h1, P1])
ReactDOM.render(MainComponent, document.querySelector("#root"));