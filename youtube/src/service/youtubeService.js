
class YoutubeServer{
  constructor(key){
    this.key=key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }
  
  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=5&key=${this.key}`,
      this.getRequestOptions
    );
    console.log("////// response /////");
    console.log(response);
    const result = await response.json();
    return result.items;
  } //만들어진 프로미스 리턴

  async search(query) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    );
    const result = await response.json();
    return result.items.map(item => ({ ...item, id: item.id.videoId }));
  }
}

export default YoutubeServer;