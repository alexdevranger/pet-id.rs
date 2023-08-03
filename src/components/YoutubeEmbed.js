import React from "react";

const YoutubeEmbed = () => {
  return (
    <div>
      <div className="video-responsive flex items-center justify-center mt-10">
        {/* <iframe src="https://youtube.com/shorts/h0PJl8yyYS4?feature=share&embedded=true"></iframe> */}
        <iframe
          width="315"
          height="560"
          src="https://www.youtube.com/embed/h0PJl8yyYS4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeEmbed;
