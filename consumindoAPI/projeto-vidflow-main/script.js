const api = fetch("http://localhost:3000/videos")
.then(res => {
    console.log(res.json());
})

























//json-server --watch backend/videos.json