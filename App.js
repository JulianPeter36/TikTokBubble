import React, { useState, useEffect } from "react";

const videoData = {
  AfD: [
    "https://www.tiktok.com/embed/7465644129985236246",
    "https://www.tiktok.com/embed/7469092981321075990",
    "https://www.tiktok.com/embed/7443392586519268630",
  ],
  Grüne: ["https://www.tiktok.com/embed/1234567890"],
  Linke: ["https://www.tiktok.com/embed/0987654321"],
};

export default function TikTokBubbleApp() {
  const [selectedBubble, setSelectedBubble] = useState("AfD");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoUrl, setVideoUrl] = useState(videoData["AfD"][0]);

  useEffect(() => {
    setCurrentIndex(0);
    setVideoUrl(videoData[selectedBubble][0]);
  }, [selectedBubble]);

  const handleNextVideo = () => {
    const nextIndex = (currentIndex + 1) % videoData[selectedBubble].length;
    setCurrentIndex(nextIndex);
    setVideoUrl(videoData[selectedBubble][nextIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">TikTok Bubbles</h1>

      <div className="flex gap-4 mb-6">
        {Object.keys(videoData).map((bubble) => (
          <button
            key={bubble}
            className={`px-4 py-2 rounded-md border font-semibold transition ${
              selectedBubble === bubble
                ? "bg-blue-600 text-white border-blue-800"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setSelectedBubble(bubble)}
          >
            {bubble}
          </button>
        ))}
      </div>

      <div className="w-full max-w-lg bg-white p-4 rounded-xl shadow-xl">
        <iframe
          key={videoUrl} // Erzeugt das iframe neu bei jeder Änderung
          title="TikTok Video"
          width="325"
          height="605"
          src={videoUrl}
          allowFullScreen
        ></iframe>
      </div>

      <button
        className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
        onClick={handleNextVideo}
      >
        Nächstes Video
      </button>
    </div>
  );
}
