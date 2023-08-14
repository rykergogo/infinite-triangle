import './App.css';
import { useEffect, useState } from "react";



const triangleMap = [
   "*********************",
   " ******************* ",
   "  *****************  ",
   "   ***************   ",
   "    *************    ",
   "     ***********     ",
   "      *********      ",
   "       *******       ",
   "        *****        ",
   "         ***         ",
   "          *          "
];

var trianglesList = triangleMap.map(function(triangleMap) {
  return <p>{triangleMap}</p>;
})

const colorArr = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "yellow"];



  
function App() {
  const [color, setColor] = useState("black");

  useEffect(() => {
    document.body.style.color = color;
  }, [color])


  const click = color => {
    setColor(color)
  };

  const pickColor = () => {
    const pick = colorArr[Math.floor(Math.random() * colorArr.length)];
    return pick;
  };
  

  return (
    <div className="App">
      <header className="App-header">
      <title>Infinite Triangle</title>
      </header>
      <ul className="triangle">
        {trianglesList}
      </ul>

      <button type="button" onClick={
        () => click(pickColor())
      }>Change Color with React!</button>
      
    </div>
  );
}
export default App;
