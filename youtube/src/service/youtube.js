class YoutubeServer {
  // axios를 사용해 봅시다
  // fetch 대용으로 사용할 수 있는 라이브러리 입니다.
  // axios는 결과를 일일이 변환하지 않아도 됩니다.
  // 라이브러리 자체적으로 json으로 보내줍니다.
  // fetch와 달리 이전버전들이랑도 호환이 되기 때문에 활용도가 좋습니다.

  constructor(httpClient) {
    this.youtube = httpClient;
  }

  //스피너로 로딩화면 만들어보세요

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 20,
      },
    });
    return response.data.items;
  } //만들어진 프로미스 리턴

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 20,
        type: "video",
        q: query,
      },
    });

    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default YoutubeServer;
