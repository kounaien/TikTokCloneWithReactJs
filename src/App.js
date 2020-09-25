import React from "react";
import Video from "./Video";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="https://v19-web-newkey.tiktokcdn.com/6279ce5f768ac6f6d6c9add29c355e05/5f6da17d/video/tos/alisg/tos-alisg-pve-0037/629abc0416e645e7a6c18b291a01d5c7/?a=1988&br=2148&bt=1074&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=20200925015113010115004044041DBF51&lr=tiktok&mime_type=video_mp4&qs=0&rc=amU5azhsOGY2djMzMzgzM0ApNzg6OWQ6ZjxkN2ZoOjY3Omc2aDRqZ21lZzFfLS1fLzRzc2EwMTI1Mi5iNS4tNDJfXmM6Yw%3D%3D&vl=&vr="
          channel="fuji"
          description="wow this works"
          song="the song"
          likes={123}
          message={400}
          shares={200}
        />
        <Video
          url="https://v16-web-newkey.tiktokcdn.com/1c60617859f9b9b36e8c81632dc15717/5f6d9e2a/video/tos/alisg/tos-alisg-pve-0037c001/f10c6a031f93497cb568af7d8fcad27b/?a=1988&br=2448&bt=1224&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=20200925013654010234087038381BBA42&lr=tiktok&mime_type=video_mp4&qs=0&rc=anJ5ZGY1dnY2dzMzaTgzM0ApNWRkaWVmOGU0N2Q2Z2Q8ZmdjNm4tMGNzZmpfLS1iLzRzczAxMmE0MzAyNGIyYzBgMl46Yw%3D%3D&vl=&vr="
          channel="fuji"
          description="wow this works"
          song="the song"
          likes={123}
          message={400}
          shares={200}
        />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
