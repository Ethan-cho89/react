import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import YoutubeService from "./service/youtube";
import axios from "axios";

//fetch 써보기

const httpClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});
const youtube = new YoutubeService(httpClient);
//API key는 노출되서는 안되는 정보이기 때문에 환경변수 파일 .env에 정의해놓고
// 위와 같이 불러옵니다. github에도 올라가서는 안되기 때문에 gitignore에도 올려줍니다.
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
