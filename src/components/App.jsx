import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // initialize the state of App to keep track of the videos in the video list and the current video in the player
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
      // Pass this state down as props to its children components
    };

    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListItemClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} handleListItemClick={this.handleListItemClick}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
