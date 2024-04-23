import React from "react";
import { useSelector } from "react-redux";
import lang from "./utils/languageConstants";

const VideoTitle = () => {
  const selector = useSelector((store) => store.appConfig?.langPreference);
  return (
    <div className="text-3xl text-black">
      <h2>{lang[selector]?.video_title}</h2>
      <button>{lang[selector]?.play}</button>
      <button>{lang[selector]?.more_info}</button>
    </div>
  );
};

export default VideoTitle;
