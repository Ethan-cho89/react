import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    //deconstruction으로 props안에 video가 있으면 바로 쓸수 있다
    // ({video : 새이름}) 이렇게 하면 video에 대한 변수명을 바꿀수 있다
    // ({ video: { snippet } }) 이렇게 하면 props내의 video안에 snippet을 잡는다
    const displayType = display === "list" ? styles.list : styles.grid;
    return (
      <li
        className={`${styles.container} ${displayType}`}
        onClick={() => {
          onVideoClick(video);
        }}
      >
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
            alt="video Thumbnail"
          ></img>
          {/* 웹페이지에서 직접보이지 않는 웹페이지 정보 or 데이터에 대한 데이터*/}
          <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
