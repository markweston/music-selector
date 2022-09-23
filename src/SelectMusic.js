import React, { useState } from "react";

function SelectMusic() {
  const [selected, setSelected] = useState("No music selected");
  const musicList = [
    { artist: "Young Marco", title: "Dream House Vol 1 & 2" },
    { artist: "Young Marco", title: "Dream House Vol 3" },
    { artist: "Young Marco", title: "Planet Love Vol 1" },
    { artist: "Young Marco", title: "Planet Love Vol 2" },
  ];

  const selectMusic = () => {
    setSelected(musicList[Math.floor(Math.random() * musicList.length)]);
  };

  return (
    <div>
      <button onClick={selectMusic}>Select Some Music</button>
      <p>
        {selected.artist //could be a better way of doing this, like checking whether seletcted is a object
          ? `Artist: ${selected.artist}, Title: ${selected.title}`
          : selected}
      </p>
    </div>
  );
}

export default SelectMusic;
