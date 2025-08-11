import { useState } from "react";
import "../styles/Sermons.css";
import { VideoInfo } from "../assets/type";
import { useQuery } from "@tanstack/react-query";

const Sermons = () => {
  const [activeTab, setActiveTab] = useState("latest");
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 3;

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
    enabled: !!CHANNEL_ID && !!YOUTUBE_API_KEY,
  });

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos?.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = videos ? Math.ceil(videos.length / videosPerPage) : 0;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const latestVideo = videos?.[0];

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
                {currentVideos?.map((video) => (
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
                ))}
              </div>
              {/* Pagination Controls */}
              {videos && videos.length > videosPerPage && (
                <div className="pagination">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="pagination-button"
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (number) => (
                      <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`pagination-number ${
                          currentPage === number ? "active" : ""
                        }`}
                      >
                        {number}
                      </button>
                    )
                  )}

                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="pagination-button"
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Sermons;
