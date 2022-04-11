import "./App.css";
import Box from "./components/Box";
import Button from "./components/Button";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const generateBox = () => {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  };
  const newNumberArray = () => {
    let number = [];
    for (let i = 0; i < 10; i++) {
      number.push(generateBox());
    }
    return number;
  };
  const handleBox = (id) => {
    newBox((oldBox) =>
      oldBox.map((box) => {
        return box.id === id
          ? {
              ...box,
              isHeld: !box.isHeld,
            }
          : box;
      })
    );
  };

  const boxRoll = () => {
    newBox((oldBox) =>
      oldBox.map((box) => {
        return box.isHeld === true ? box : generateBox();
      })
    );
  };

  const [box, newBox] = React.useState(newNumberArray());
  // const [imDisabled, nowImDisabled] = React.useState({
  //   color: 0,
  //   value: false,
  // });
  // React.useEffect(() => {
  //   let count = 0;
  //   box.forEach((element) => {
  //     if (element.isHeld) {
  //       count = count + 1;
  //     }
  //   });
  //   if (count === 6) {
  //     nowImDisabled({ value: true, color: 390099 });
  //   }
  // }, [box]);

  return (
    <div className="App">
      <h1>TENZIES</h1>
      <div className="main__app">
        {box.map((box) => {
          return (
            <Box
              value={box.value}
              handleBox={handleBox}
              id={box.id}
              isHeld={box.isHeld}
            />
          );
        })}
      </div>
      <Button
        boxRoll={boxRoll}
        // color={imDisabled.color}
        // imDisabled={imDisabled.value}
      />
    </div>
  );
}

export default App;
