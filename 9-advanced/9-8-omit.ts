{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, "url" | "data">;

  function getVideo2(id: string): Video {
    return {
      id,
      title: "video",
      url: "httpl://",
      data: "byte-data..",
    };
  }

  function getVideoMetadata2(id: string): VideoMetadata {
    return {
      id: id,
      title: "title",
    };
  }
}
