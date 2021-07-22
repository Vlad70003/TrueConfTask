import React, { useState } from "react";
import "../style/trafficLight.css";
let prewColor: string = "";

export function TrafficLight() {
  let [color, setColor] = useState("green");

  let interval = (incoming: string): number | undefined => {
    if (incoming === "green") {
      return 4000;
    } else if (incoming === "yellow") {
      return 1000;
    } else if (incoming === "red") {
      return 2000;
    }
  };
  function timerId(firstColor: string, secondColor: string): void {
    let timerId = setInterval(() => {
      prewColor = firstColor;
      setColor((color = secondColor));
    }, interval(firstColor));
    setTimeout(() => {
      clearInterval(timerId);
    }, interval(firstColor));
  }

  new Promise(function (): void {
    if (color === "green") {
      timerId("green", "yellow");
    } else if (color === "yellow" && prewColor === "green") {
      timerId("yellow", "red");
    } else if (color === "yellow" && prewColor === "red") {
      timerId("yellow", "green");
    } else if (color === "red") {
      timerId("red", "yellow");
    }
  });

  return (
    <section id="traffic-light">
      {color === "red" ? (
        <div className="circle red"></div>
      ) : (
        <div className="circle red opacity"></div>
      )}
      {color === "yellow" ? (
        <div className="circle yellow"></div>
      ) : (
        <div className="circle yellow opacity"></div>
      )}
      {color === "green" ? (
        <div className="circle green"></div>
      ) : (
        <div className="circle green opacity"></div>
      )}
    </section>
  );
}