import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

// var searchCallback = (videos) => {
//   // handle success of Ajax call
//   console.log('videos here: ', videos);
// };


var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: { q: query, 'youtube_api_key': YOUTUBE_API_KEY},
    contentType: 'application/json',
    success: (videos) => callback(videos),
    error: (error) => console.log('testing', error)
  });
};
// searchYouTube('cat', searchCallback);

export default searchYouTube;
