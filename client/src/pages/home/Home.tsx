import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useImmer } from "use-immer";
import { useFirebase } from "../../managers/FirebaseManager";
import "./styles/Home.css";

interface HomeProps {}

const Home = (props: HomeProps) => {
  const { db } = useFirebase();

  interface RoomsCollection {
    [key: string]: string | null;
  }

  const [rooms, setRooms] = useImmer<RoomsCollection>({});
  const [newRoomName, setNewRoomName] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "rooms")), (snapshot) => {
      setRooms((roomsDraft) => {
        snapshot.docChanges().forEach((docChange) => {
          const doc = docChange.doc;

          roomsDraft[doc.id] = docChange.type !== "removed" ? doc.get("roomName") : null;
        });
      });
    });
  }, []);

  return (
    <div className="home page">
      {Object.keys(rooms)
        .filter((roomID) => rooms[roomID] !== null)
        .sort((a, b) => rooms[a]!.localeCompare(rooms[b]!))
        .map((roomID) => (
          <Link to={`/room/${roomID}`} state={roomID} key={roomID}>
            {rooms[roomID]}
          </Link>
        ))}

      <button
        onClick={() => {
          addDoc(collection(db, "rooms"), {
            roomName: `Room ${Object.keys(rooms).filter((roomID) => rooms[roomID] !== null).length + 1}`,
          });
        }}
      >
        Create New Room
      </button>
    </div>
  );
};

export default Home;
