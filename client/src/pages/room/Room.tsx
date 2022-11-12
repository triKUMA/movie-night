import { useLocation } from "react-router-dom";
import "./styles/Room.css";

interface RoomProps {}

const Room = (props: RoomProps) => {
  const location = useLocation();
  return <div className="room page">{location.state}</div>;
};

export default Room;
