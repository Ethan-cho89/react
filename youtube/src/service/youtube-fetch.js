class YoutubeServer {
  // axios를 사용해 봅시다
  // fetch 대용으로 사용할 수 있는 라이브러리 입니다.
  // axios는 결과를 일일이 변환하지 않아도 됩니다.

  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items;
  } //만들어진 프로미스 리턴

  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default YoutubeServer;
