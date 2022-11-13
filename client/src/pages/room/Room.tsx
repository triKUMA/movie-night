import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles/Room.css";

interface RoomProps {}

const Room = (props: RoomProps) => {
  const location = useLocation();

  const roomID = location.state;

  useEffect(() => {
    console.log(`entered room ${roomID}`);
    return () => {
      console.log(`left room ${roomID}`);
    };
  }, []);

  return (
    <div className="room page">
      <div className="room-details">
        <p>User 1</p>
        <p>{roomID}</p>
        <p>User 2</p>
      </div>

      <div className="video-grid">
        <video autoPlay />
        <video autoPlay />
      </div>
    </div>
  );
};

export default Room;
