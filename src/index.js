/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

 let listVideo = document.querySelectorAll(".video-list .vid");
 let mainVideo = document.querySelector(".main-video video");
 let title = document.querySelector(".main-video .title");
 listVideo.forEach((video) => {
   video.onclick = () => {
     listVideo.forEach((vid) => vid.classList.remove("active"));
     video.classList.add("active");
     if (video.classList.contains("active")) {
       let src = video.children[0].getAttribute("src");
       mainVideo.src = src;
       let text = video.children[1].innerHTML;
       title.innerHTML = text;
     }
   };
 });
 
console.log('Happy hacking :)')
