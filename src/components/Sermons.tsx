import { useState } from "react";
import "../styles/Sermons.css";
import { VideoInfo } from "../assets/type";
import { useQuery } from "@tanstack/react-query";

const Sermons = () => {
  const [activeTab, setActiveTab] = useState("latest");

  console.log(import.meta.env);

  const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;
  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  const {
    data: videos,
    isLoading,
    isError,
    error,
  } = useQuery<VideoInfo[], Error>({
    queryKey: ["youtubeVideos", CHANNEL_ID],
    queryFn: async () => {
      const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`;
      const res = await fetch(url);

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error?.message || "Failed to fetch videos");
      }

      const data = await res.json();

      if (!data.items || data.items.length === 0) {
        throw new Error("No videos found for this channel");
      }

      return data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        publishedAt: new Date(item.snippet.publishedAt),
        channelTitle: item.snippet.channelTitle,
      }));
    },
    enabled: !!CHANNEL_ID && !!YOUTUBE_API_KEY
  });

  const latestVideo = videos?.[0];

  // useEffect(() => {
  //   const fetchLatestVideo = async () => {
  //     try {
  //       const url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`;
  //       console.log("Fetching URL:", url);

  //       const res = await fetch(url);

  //       if (!res.ok) {
  //         const errorData = await res.json();
  //         throw new Error(errorData.error?.message || "Failed to fetch video");
  //       }

  //       const data = await res.json();

  //       if (!data.items || data.items.length === 0) {
  //         throw new Error("No videos found for this channel");
  //       }

  //       const latestVideo = data.items[0];

  //       if (!latestVideo.id?.videoId) {
  //         throw new Error("Video ID not found in response");
  //       }

  //       // Extract all relevant video information
  //       const fetchedVideos: VideoInfo[] = data.items.map((item: any) => ({
  //         id: item.id.videoId,
  //         title: item.snippet.title,
  //         description: item.snippet.description,
  //         thumbnail: item.snippet.thumbnails.high.url,
  //         publishedAt: new Date(item.snippet.publishedAt),
  //         channelTitle: item.snippet.channelTitle,
  //       }));

  //       setVideos(fetchedVideos);
  //       if (fetchedVideos.length > 0) {
  //         setVideoInfo(fetchedVideos[0]);
  //         setVideoId(fetchedVideos[0].id);
  //       }
  //     } catch (err) {
  //       const error = err as Error;
  //       console.error("Failed to fetch video:", error.message);
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
            Be encouraged and inspired by God's Word through our weekly messages
            and sermon series.
          </p>
        </div>

        <div className="sermons-tabs">
          <button
            className={`tab ${activeTab === "latest" ? "active" : ""}`}
            onClick={() => setActiveTab("latest")}
          >
            Latest Message
          </button>
          <button
            className={`tab ${activeTab === "archive" ? "active" : ""}`}
            onClick={() => setActiveTab("archive")}
          >
            Message Archive
          </button>
        </div>

        <div className="sermons-content">
          {isLoading && (
            <div className="loading-message">Loading sermons...</div>
          )}

          {isError && (
            <div className="error-message">
              Error loading sermons: {error.message}
            </div>
          )}
          {activeTab === "latest" && latestVideo && (
            <div className="latest-message animate-fade-in">
              <div className="message-card">
                <div className="message-thumbnail">
                  <img src={latestVideo.thumbnail} alt={latestVideo.title} />
                  <div className="play-button">
                    <a
                      href={`https://www.youtube.com/watch?v=${latestVideo.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="play-button"
                    >
                      ▶
                    </a>
                  </div>
                </div>
                <div className="message-info">
                  <h3>{latestVideo.title}</h3>
                  <div className="message-meta">
                    <span>{latestVideo.channelTitle}</span>
                    <span>
                      {latestVideo.publishedAt.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span>Watch on YouTube</span>
                  </div>
                  <div className="scripture-reference">
                    <strong>Scripture: </strong>
                    Various Scripture
                  </div>
                  <p>{latestVideo.description}</p>
                  <div className="message-actions">
                    <a
                      href={`https://www.youtube.com/watch?v=${latestVideo.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Watch Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "archive" && (
            <div className="series-archive animate-fade-in">
              <div className="archive-grid">
                {videos?.map((video) => (
                  <div key={video.id} className="archive-video-card">
                    <div className="message-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="play-button"
                      >
                        ▶
                      </a>
                    </div>
                    <div className="message-info">
                      <h3>{video.title}</h3>
                      <div className="message-meta">
                        <span>{video.channelTitle}</span>
                        <span>
                          {video.publishedAt.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <p className="video-description">
                        {video.description.length > 100
                          ? `${video.description.substring(0, 100)}...`
                          : video.description}
                      </p>
                      <div className="message-actions">
                        <a
                          href={`https://www.youtube.com/watch?v=${video.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          Watch Now
                        </a>
                      </div>
                    </div>
                  </div>

                  //   <div
                  //     key={video.id}
                  //     className="latest-message animate-fade-in"
                  //   >
                  //     <div className="message-card">
                  //       <div className="message-thumbnail">
                  //         {video?.thumbnail ? (
                  //           <img
                  //             src={video?.thumbnail}
                  //             alt={video?.title || "Latest sermon"}
                  //           />
                  //         ) : (
                  //           <div className="thumbnail-placeholder">
                  //             Loading thumbnail...
                  //           </div>
                  //         )}
                  //         <div className="play-button">
                  //           {videoId && (
                  //             <a
                  //               href={`https://www.youtube.com/watch?v=${video.id}`}
                  //               target="_blank"
                  //               rel="noopener noreferrer"
                  //               className="play-button"
                  //             >
                  //               ▶
                  //             </a>
                  //           )}
                  //         </div>
                  //       </div>
                  //       <div className="message-info">
                  //         <h3>{video?.title || "Sermon"}</h3>
                  //         <div className="message-meta">
                  //           <span>
                  //             {video?.channelTitle ||
                  //               "Deliverance Church Utawala"}
                  //           </span>
                  //           <span>
                  //             {video?.publishedAt
                  //               ? new Date(
                  //                   video?.publishedAt
                  //                 ).toLocaleDateString("en-US", {
                  //                   weekday: "long",
                  //                   year: "numeric",
                  //                   month: "long",
                  //                   day: "numeric",
                  //                 })
                  //               : "Loading date..."}
                  //           </span>
                  //           <span>Watch on YouTube</span>
                  //         </div>
                  //         <div className="scripture-reference">
                  //           <strong>Scripture: </strong>
                  //           Various Scripture
                  //         </div>
                  //         <p>
                  //           {video?.description || "Loading description..."}
                  //         </p>
                  //         <div className="message-actions">
                  //           <a
                  //             href={`https://www.youtube.com/watch?v=${video.id}`}
                  //             target="_blank"
                  //             rel="noopener noreferrer"
                  //             className="btn btn-primary"
                  //           >
                  //             Watch Now
                  //           </a>
                  //         </div>
                  //       </div>
                  //     </div>
                  //   </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Sermons;
