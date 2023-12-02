var posts=["2023/11/08/hello-world/","2023/12/02/LSM-tree/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };