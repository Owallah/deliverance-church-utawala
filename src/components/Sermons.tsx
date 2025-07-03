import { useState } from 'react'
import "../styles/Sermons.css"
import { currentSeries, latestMessage, seriesArchive } from '../assets/data';

const Sermons = () => {
    const [activeTab, setActiveTab] = useState('latest');
    // const [videoId, setVideoId] = useState(null);

    // console.log(import.meta.env);
    

    // const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID
    // const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

    // console.log(CHANNEL_ID, ' ', YOUTUBE_API_KEY);
    

    // useEffect(() => {
    //   const fetchLatestVideo = async () => {
    //     try {
    //       const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=1`;
    //       console.log('Fetching URL:', url);
          
    //       const res = await fetch(url);
          
    //       if (!res.ok) {
    //         const errorData = await res.json();
    //         throw new Error(errorData.error?.message || 'Failed to fetch video');
    //       }
          
    //       const data = await res.json();
          
    //       if (!data.items || data.items.length === 0) {
    //         throw new Error('No videos found for this channel');
    //       }
          
    //       const latestVideo = data.items[0];
    //       if (latestVideo && latestVideo.id.videoId) {
    //         setVideoId(latestVideo.id.videoId);
    //       }
    //     } catch (err) {
    //       const error = err as Error;
    //       console.error('Failed to fetch video:', error.message);
    //     }
    //   };
    
    //   fetchLatestVideo();
    // }, [CHANNEL_ID, YOUTUBE_API_KEY]);




  
  return (
    <section id="sermons" className="sermons-section">
      <div className="container">
        <div className="sermons-header">
          <h2 className="animate-fade-in-up">Sermons & Messages</h2>
          <p className="animate-fade-in-up">
            Be encouraged and inspired by God's Word through our weekly messages and sermon series.
          </p>
        </div>

        <div className="sermons-tabs">
          <button 
            className={`tab ${activeTab === 'latest' ? 'active' : ''}`}
            onClick={() => setActiveTab('latest')}
          >
            Latest Message
          </button>
          <button 
            className={`tab ${activeTab === 'series' ? 'active' : ''}`}
            onClick={() => setActiveTab('series')}
          >
            Current Series
          </button>
          <button 
            className={`tab ${activeTab === 'archive' ? 'active' : ''}`}
            onClick={() => setActiveTab('archive')}
          >
            Series Archive
          </button>
        </div>

        <div className="sermons-content">
          {activeTab === 'latest' && (
            <div className="latest-message animate-fade-in">
              <div className="message-card">
                <div className="message-thumbnail">
                  <img src={latestMessage.thumbnail} alt={latestMessage.title} />
                  <div className="play-button">▶</div>
                </div>
                <div className="message-info">
                  <h3>{latestMessage.title}</h3>
                  <div className="message-meta">
                    <span>{latestMessage.pastor}</span>
                    <span>{latestMessage.date}</span>
                    <span>{latestMessage.duration}</span>
                  </div>
                  <div className="scripture-reference">
                    <strong>Scripture: </strong>{latestMessage.scripture}
                  </div>
                  <p>{latestMessage.description}</p>
                  <div className="message-actions">
                    <button className="btn btn-primary">Watch Now</button>
                    <button className="btn btn-secondary">Download Audio</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'series' && (
            <div className="current-series animate-fade-in">
              <div className="series-header">
                <h3>{currentSeries.title}</h3>
                <p>{currentSeries.description}</p>
                <div className="series-progress">
                  <span>Week {currentSeries.currentWeek} of {currentSeries.totalMessages}</span>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${(currentSeries.currentWeek / currentSeries.totalMessages) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="series-messages">
                {currentSeries.messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`series-message ${message.week <= currentSeries.currentWeek ? 'available' : 'upcoming'}`}
                  >
                    <div className="message-number">
                      {message.week <= currentSeries.currentWeek ? '✓' : message.week}
                    </div>
                    <div className="message-details">
                      <h4>{message.title}</h4>
                      <span className="message-date">{message.date}</span>
                    </div>
                    {message.week <= currentSeries.currentWeek && (
                      <button className="btn btn-secondary btn-small">Listen</button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'archive' && (
            <div className="series-archive animate-fade-in">
              <div className="archive-grid">
                {seriesArchive.map((series, index) => (
                  <div key={index} className="archive-card card">
                    <h4>{series.title}</h4>
                    <p>{series.description}</p>
                    <div className="archive-meta">
                      <span>{series.messages} messages</span>
                      <span>{series.year}</span>
                    </div>
                    <button className="btn btn-secondary">View Series</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Sermons