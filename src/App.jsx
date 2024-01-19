import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log("puppyList: ", puppyList);

  function handleClick() {}
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <div className='App'>
      <div>
        <p>{featPupId}</p>
        {featPupId && (
          <div>
            <h2 style={{ color: "red" }}>{featuredPup.name}</h2>
            <ul>
              <li style={{ color: "yellow" }}>Age: {featuredPup.age}</li>
              <li style={{ color: "orange" }}>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
