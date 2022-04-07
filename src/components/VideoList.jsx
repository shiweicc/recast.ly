import exampleVideoData from '../data/exampleVideoData.js';
// what's the relationship between videolistentry and view goes here
// what's props in this case, do we use props, and does that referring to examplevideodata
//

// ORIGINAL
<div className="video-list">
  <div><h5><em>videoListEntry</em> view goes here</h5></div>
  <div><h5><em>videoListEntry</em> view goes here</h5></div>
  <div><h5><em>videoListEntry</em> view goes here</h5></div>
  <div><h5><em>videoListEntry</em> view goes here</h5></div>
  <div><h5><em>videoListEntry</em> view goes here</h5></div>
</div>;

// ATTEMPT 1
// class VideoList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   renderVideo (entry) {
//     return (
//       <videoListEntry title={entry.title} description={entry.description}/>
//     )
//   }

//   render () {
//     exampleVideoData.map(renderVideo)
//     return (
//       <div></div>
//     )
//   }
// }

// ATTEMPT 2
var VideoList = (props) => {
  console.log(props);
  // var renderVideo = function (entry) {
  //   return (
  //     <videoListEntry title={entry.title} description={entry.description}/>
  //   );
  // };

  exampleVideoData.map(renderVideo);
  return (
    <div></div>
  );
};


// ----------

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
