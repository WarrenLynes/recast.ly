import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

const SERVER = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';
var searchYouTube = (query, callback) => {
  $.ajax({
    // This is the url you should use to communicate with the API server.
    url: SERVER,
    type: 'GET',
    data: {
      q: query,
      'youtube_api_key': YOUTUBE_API_KEY
    },
    contentType: 'application/json',
    success: function(data) {
      callback(data.slice(0, 5));
    },
    error: function (error) {
      console.error('youtube: Failed to fetch video', error);
    }
  });
};

export default searchYouTube;