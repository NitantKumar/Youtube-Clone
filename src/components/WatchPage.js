import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utlis/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [SearchParams] = useSearchParams();
  console.log(SearchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="m-4">
      <iframe
        width="1200"
        height="600"
        src={"https://www.youtube.com/embed/" + SearchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
