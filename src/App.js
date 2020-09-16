import React from 'react';
import Topbar from './Topbar/Topbar';
import Homepage from './Homepage/Homepage';

class App extends React.Component {
  state = {
    totalLikes: 0,
    totalDislikes: 0,
    numberOfPosts: 0,
  }

  onLikeIncrement = () => {
    const updatedVal = this.state.totalLikes + 1;
    this.setState({totalLikes: updatedVal})
  }

  onLikeDecrement = () => {
    const updatedVal = this.state.totalLikes - 1;
    this.setState({totalLikes: updatedVal})
  }

  render() {
    return (
      <div className="App">
        <Topbar likesCount={this.state.totalLikes} />

        <Homepage onLikeIncrement={this.onLikeIncrement} onLikeDecrement={this.onLikeDecrement} />
      </div>
    );
  }
}

export default App;