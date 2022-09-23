//Only called this SelectMusicClass because I'm testing the function version with hooks as well
import React from "react";

class SelectMusicClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: "No music selected" };
  }

  musicList = [
    "Dream House Vol 1 & 2",
    "Dream House Vol 3",
    "Planet Love Vol 1",
    "Planet Love Vol 2",
  ];

  selectMusic = () => {
    this.setState({
      selected:
        this.musicList[Math.floor(Math.random() * this.musicList.length)],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.selectMusic}>Select Some Music</button>
        <p>{this.state.selected}</p>
      </div>
    );
  }
}

export default SelectMusicClass;
