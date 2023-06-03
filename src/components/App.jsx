
import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYoutube from '../lib/searchYoutube.js';

const App = () => {
  const [videos, setVideos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  // const [query, setQuery] = React.useState('');
  const [currentVideo, setCurrentVideo] = React.useState({ id: {videoId: null}, snippet: { title: null, description: null}});

  const fetchVideos = (query) => {
    searchYoutube(query, (res) => {
      setVideos(res);
      setLoading(false);
    });
  };

  const handleSelectVideo = (video) => {
    setCurrentVideo(video);
  };

  /* React.useEffect(() => {
    if (query.length) {
      fetchVideos();
    }
  }, [query]); */

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search fetchVideos={fetchVideos} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          {currentVideo && currentVideo.id && <VideoPlayer video={currentVideo} />}
        </div>
        <div className="col-md-5">
          <VideoList videos={videos} onSelect={handleSelectVideo} />
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
