import React, { useState } from "react";

function SelectMusic() {
  const [selected, setSelected] = useState("No music selected");
  const musicList = [
    "Dream House Vol 1 & 2",
    "Dream House Vol 3",
    "Planet Love Vol 1",
    "Planet Love Vol 2",
  ];

  const selectMusic = () => {
    setSelected(musicList[Math.floor(Math.random() * musicList.length)]);
  };

  return (
    <div>
      <button onClick={selectMusic}>Select Some Music</button>
      <p>{selected}</p>
    </div>
  );
}

export default SelectMusic;
