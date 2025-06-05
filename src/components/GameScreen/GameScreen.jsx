
import { useState } from "react";
import JoystickControl from "./JoystickControl";
// import poopIcon from "../assets/icons/poop-icon.png";
// import poopBag from "../assets/icons/poop-bag.png";
// import clockIcon from "../assets/icons/wall-clock.png";
// import pauseIcon from "../assets/icons/pause.png";
import "../styles/GameScreen.css"; // ak máš CSS osobitne

const GameScreen = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [carrying, setCarrying] = useState(false);
  const [poopCount, setPoopCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);

  const step = 5;

  const handleMove = (event) => {
    setPosition((prev) => {
      let newX = prev.x;
      let newY = prev.y;

      switch (event.direction) {
        case "up":
          newY -= step;
          break;
        case "down":
          newY += step;
          break;
        case "left":
          newX -= step;
          break;
        case "right":
          newX += step;
          break;
        default:
          break;
      }

      return { x: newX, y: newY };
    });
  };

  const handleStop = () => {
    // zastavenie pohybu
  };

  return (
    <div id="game-screen">
      {/* Horný panel */}
      <div id="top-menu">
        <div className="menu-left">
          <div className="poop-counter">
            <img src={poopIcon} alt="Poop" />
            <span id="poop-count">{poopCount}</span>
          </div>
          <div id="carrying-indicator" className={carrying ? "" : "hidden"}>
            <img src={poopBag} alt="Bag with poop" />
          </div>
        </div>

        <div className="menu-center">
          <div className="timer">
            <img src={clockIcon} alt="Clock" />
            <span id="time-left">{timeLeft}</span>s
          </div>
        </div>

        <div className="menu-right">
          <button id="pause-button">
            <img src={pauseIcon} alt="Pause" />
          </button>
        </div>
      </div>

      {/* Herná plocha */}
      <div id="game-area">
        {/* Psík */}
        <div
          id="dog"
          className="dog-walk-up dog-walk-left"
          style={{
            position: "absolute",
            top: position.y,
            left: position.x,
            width: 50,
            height: 50,
            backgroundColor: "brown",
            borderRadius: "50%",
          }}
        ></div>

        {/* Hráč */}
        <div id="player"></div>

        {/* Hovienko */}
        <div className="poop"></div>

        {/* Kôš */}
        <div id="trash-bin"></div>
      </div>

      {/* Pauzovacie menu */}
      <div id="pause-menu" className="hidden">
        {/* ...menu obsah neskôr */}
      </div>

      {/* Joystick */}
      <div style={{ position: "absolute", bottom: 20, left: 20 }}>
        <JoystickControl onMove={handleMove} onStop={handleStop} />
      </div>
    </div>
  );
};

export default GameScreen;
