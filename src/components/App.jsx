import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };

    // this.handleListItemClick = this.handleListItemClick.bind(this);
    // this.getYouTubeVideos = this.getYouTubeVideos.bind(this);
  }

  handleListItemClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  getYouTubeVideos(query) {
    searchYouTube(query, (videos) => {
      this.setState({
        videoList: videos,
        currentVideo: videos[0]
      });
    });
  }

  componentDidMount() {
    this.getYouTubeVideos('cats');
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleInputChange={this.getYouTubeVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {this.state.currentVideo ? <VideoPlayer video={this.state.currentVideo}/> : <div>Loading...</div>}
            {/* <VideoPlayer video={this.state.currentVideo}/> */}
          </div>
          <div className="col-md-5">
            {this.state.videoList ? <VideoList videos={this.state.videoList} handleListItemClick={this.handleListItemClick.bind(this)}/> : <div>Loading...</div>}
            {/* <VideoList videos={this.state.videoList} handleListItemClick={this.handleListItemClick.bind(this)}/> */}
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


/*
React state is built in suach a way that it wants to identify only the properties that have changed,
so that it can only rerender the components that must be rerendered. The component are presenting altered data.
setState -> create a brand new object to store the values that have changed, like currentVideo.
And it's going to consult the old state object, and copy over any values that didn't change, like videoList.
This is helping to optimize in rednering only the components that need to change.
*/