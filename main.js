var elmnt = document.getElementById("intro2");
var topicArray = [];

function start() {

  getTopics();

  // setUp();
  setUp2();
}

function addCards(topic) {
  var myNode = document.getElementById("actualCardHolder");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }
  var bar = document.createElement("div");
  bar.classList.add("scrollmenu");
  // for (let j = 0; j < videoArray.length; j++) {
  //   if (videoArray[j].topic === topic) {
  //     if(topic === topicArray[0]) {
  //       bar.appendChild(makeCard1(videoArray[j]));
  //     } else if (topic === topicArray[1]) {
  //       bar.appendChild(makeCard2(videoArray[j], j % 4));
  //     } else if (topic === topicArray[2]) {
  //       bar.appendChild(makeCard3(videoArray[j]));
  //     } else if (topic === topicArray[3]) {
  //       bar.appendChild(makeCard4(videoArray[j]));
  //     } else if (topic === topicArray[4]) {
  //       bar.appendChild(makeCard5(videoArray[j]));
  //     }
  //   }
  // }
  var index = topicArray.indexOf(topic);
  var functionId = index % 5; // amount of card designs
  for (let j = 0; j < videoArray.length; j++) {
    if (videoArray[j].topic === topic) {
        if(functionId === 0) {
          bar.appendChild(makeCard1(videoArray[j]));
        } else if (functionId === 1) {
          bar.appendChild(makeCard2(videoArray[j], j % 4));
        } else if (functionId === 2) {
          bar.appendChild(makeCard6(videoArray[j]));
        } else if (functionId === 3) {
          bar.appendChild(makeCard4(videoArray[j]));
        } else if (functionId === 4) {
          bar.appendChild(makeCard5(videoArray[j]));
        }
    }
  }

  document.getElementById("actualCardHolder").appendChild(bar);
}

function setUp2() {
  for (let i = 0; i < topicArray.length; i++) {
    let ta = document.createElement("a");
    ta.classList.add("ta");
    ta.innerHTML = topicArray[i];
    if (i === 0) {
      ta.style.color = "white";
    }
    ta.addEventListener('click', function() {
      addCards(topicArray[i]);
      var x = document.getElementsByClassName("ta");
      for (let i = 0; i < x.length; i++) {
        x[i].style.color = "#47445c";
      }
      ta.style.color = "white";
    });
    document.getElementById("topicScroll").appendChild(ta);
  }
}

// function setUp() {
//   for (let i = 0; i < topicArray.length; i++) {
//     var bar = document.createElement("div");
//     bar.classList.add("scrollmenu");
//     var head = document.createElement("div");
//     head.classList.add("row");
//
//     var col = document.createElement("div");
//     col.classList.add("col-xs-12");
//
//     var text = document.createElement("p");
//     text.classList.add("topicHead");
//     text.innerHTML = topicArray[i];
//
//     col.appendChild(text);
//     head.appendChild(col);
//     for (let j = 0; j < videoArray.length; j++) {
//       if (videoArray[j].topic === topicArray[i]) {
//         if(i === 0) {
//           bar.appendChild(makeCard1(videoArray[j]));
//         } else if (i === 1) {
//           bar.appendChild(makeCard2(videoArray[j], j % 4));
//         } else if (i === 2) {
//           bar.appendChild(makeCard3(videoArray[j]));
//         }
//       }
//     }
//
//     document.getElementById("intro2").appendChild(head);
//     document.getElementById("intro2").appendChild(bar);
//   }
// }

function getTopics() {
  for (let i = 0; i < videoArray.length; i++) {
    if (!topicArray.includes(videoArray[i].topic)) {
      topicArray.push(videoArray[i].topic);
    }
  }
  console.log(topicArray)
}

function scrollToTop() {
  elmnt.scrollIntoView({behavior: "smooth"}); // Top
}

function enterPressed() {
  document.getElementById("logo").classList.add("fade-out-bck");
  document.getElementById("title").classList.add("fade-out-bck");
  document.getElementById("subTitle").classList.add("fade-out-bck");
  document.getElementById("enterButton").classList.add("fade-out-bck");
  setTimeout(function() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("intro2").style.display = "block";
    addCards(topicArray[0]);
  }, 700)
}


function makeCard1(video) {
  var split = video.cardFront.split(" ", 2);
  if (split.length == 2) {
    var firstHalf = split[0];
    var secondHalf = split[1];
  } else {
    var firstHalf = "";
    var secondHalf = split[0];
  }

  var fc = document.createElement("div");
  fc.classList.add("flip-card", "roll-in-right");

  var fci = document.createElement("div");
  fci.classList.add("flip-card-inner");

  var fcf = document.createElement("div");
  fcf.classList.add("flip-card-front");


  // front card
  var c1i = document.createElement("div");
  c1i.classList.add("card1Image");
  c1i.style.backgroundImage = "url(" + video.image +  ")";

  var r1 = document.createElement("div");
  r1.classList.add("row", "text-center");

  var c1 = document.createElement("div");
  c1.classList.add("col-xs-8");

  var p1 = document.createElement("p");
  p1.classList.add("firstLine1");
  p1.innerHTML = firstHalf;

  c1.appendChild(p1);
  r1.appendChild(c1);

  var r2 = document.createElement("div");
  r2.classList.add("row", "text-center");

  var c2 = document.createElement("div");
  c2.classList.add("col-xs-8");

  var p2 = document.createElement("p");
  p2.classList.add("lastLine1");
  p2.innerHTML = secondHalf;

  c2.appendChild(p2);
  r2.appendChild(c2);

  var circle = document.createElement("div");
  circle.classList.add("circle1");

  var circle1Text = document.createElement("p");
  circle1Text.classList.add("circle1Text");
  circle1Text.innerHTML = video.topic.toUpperCase();

  circle.appendChild(circle1Text);

  /// finish front card
  fcf.appendChild(c1i);
  fcf.appendChild(r1);
  fcf.appendChild(r2);
  fcf.appendChild(circle);

  var fcb = document.createElement("div");
  fcb.classList.add("flip-card-back");


  var cont = document.createElement("div");
  cont.classList.add("container");

  var row = document.createElement("div");
  row.classList.add("row", "text-center");

  var col = document.createElement("div");
  col.classList.add("col-xs-12");

  var t = document.createElement("h3");
  t.classList.add("backTitle")
  t.innerHTML = video.title;

  col.appendChild(t);
  row.appendChild(col);

  var row2 = document.createElement("div");
  row2.classList.add("row", "text-center");

  var col2 = document.createElement("div");
  col2.classList.add("col-xs-12");

  var btn = document.createElement("button");
  btn.classList.add("btn", "btn-primary", "playButton");
  btn.innerHTML = "PLAY";
  btn.addEventListener('click', function() {
    playPressed(video);
  });

  col2.appendChild(btn);
  row2.appendChild(col2);


  fcb.appendChild(row);
  fcb.appendChild(row2);


  fci.appendChild(fcf);
  fci.appendChild(fcb);

  fc.appendChild(fci);

  return fc;
}

function makeCard2(video, num) {

  let bgColor0 = "linear-gradient(0deg, rgba(61,44,116,1) 35%, rgba(63,168,59,1) 36%)";
  let bgColor1 = "linear-gradient(0deg, rgba(190,84,134,1) 35%, rgba(103,71,147, 1) 36%)";
  let bgColor2 = "linear-gradient(0deg, rgba(77,30,26,1) 35%, rgba(223,121,74,1) 36%)";
  let bgColor3 = "linear-gradient(0deg, rgba(220,122,62,1) 35%, rgba(104,172,214,1) 36%)";

  var bgArr = [bgColor0, bgColor1, bgColor2, bgColor3];

  let topicColor0 = "#cc5589";
  let topicColor1 = "#d8c959";
  let topicColor2 = "#de433e";
  let topicColor3 = "#d47845";

  var tcArr = [topicColor0, topicColor1, topicColor2, topicColor3];

  var fc = document.createElement("div");
  fc.classList.add("flip-card", "roll-in-right");

  var fci = document.createElement("div");
  fci.classList.add("flip-card-inner");

  var fcf = document.createElement("div");
  fcf.classList.add("flip-card2-front");
  fcf.style.background = bgArr[num];

  var r1 = document.createElement("div");
  r1.classList.add("row", "text-center");

  var c1 = document.createElement("div");
  c1.classList.add("col-xs-12");

  var topic = document.createElement("p");
  topic.classList.add("card2Topic");
  topic.innerHTML = video.topic.toUpperCase();
  topic.style.color = tcArr[num];

  c1.appendChild(topic);
  r1.appendChild(c1);

  var img = document.createElement("div");
  img.classList.add("card2Image");
  img.style.backgroundImage = "url(" + video.image + ")";

  var r2 = document.createElement("div");
  r2.classList.add("row", "text-center");

  var c2 = document.createElement("div");
  c2.classList.add("col-xs-12");

  var eptitle = document.createElement("div");
  eptitle.classList.add("eptitle");
  eptitle.innerHTML = video.cardFront.toUpperCase();

  c2.appendChild(eptitle);
  r2.appendChild(c2);

  fcf.appendChild(r1);
  fcf.appendChild(img);
  fcf.appendChild(r2);

  var fcb = document.createElement("div");
  fcb.classList.add("flip-card2-back");

  var row = document.createElement("div");
  row.classList.add("row", "text-center");

  var col = document.createElement("div");
  col.classList.add("col-xs-12");

  var t = document.createElement("h3");
  t.classList.add("backTitle")
  t.innerHTML = video.title;

  col.appendChild(t);
  row.appendChild(col);

  var row2 = document.createElement("div");
  row2.classList.add("row", "text-center");

  var col2 = document.createElement("div");
  col2.classList.add("col-xs-12");

  var btn = document.createElement("button");
  btn.classList.add("btn", "btn-primary", "playButton");
  btn.innerHTML = "PLAY";
  btn.addEventListener('click', function() {
    playPressed(video);
  });

  col2.appendChild(btn);
  row2.appendChild(col2);



  fcb.appendChild(row);
  fcb.appendChild(row2);

  fci.appendChild(fcf);
  fci.appendChild(fcb);

  fc.appendChild(fci);

  return fc;
}

function makeCard3(video) {
  var fc = document.createElement("div");
  fc.classList.add("flip-card", "roll-in-right");

  var fci = document.createElement("div");
  fci.classList.add("flip-card-inner");

  var fcf = document.createElement("div");
  fcf.classList.add("flip-card3-front");

  var hol = document.createElement("div");
  hol.classList.add("holder");

  var c3i = document.createElement("div");
  c3i.classList.add("card3Image");
  c3i.style.backgroundImage = "url(" + video.image + ")";

  var img = document.createElement("img");
  img.classList.add("flag");
  img.setAttribute("src", "fanmailflag.png");

  var r1 = document.createElement("div");
  r1.classList.add("row", "text-right");

  var c1 = document.createElement("div");
  c1.classList.add("col-xs-12");

  var ept = document.createElement("div");
  ept.classList.add("eptitle3");
  ept.innerHTML = video.cardFront.toUpperCase();

  c1.appendChild(ept);
  r1.appendChild(c1);

  hol.appendChild(c3i);
  hol.appendChild(img);
  hol.appendChild(r1);

  fcf.appendChild(hol);

  var fcb = document.createElement("div");
  fcb.classList.add("flip-card3-back");

  var row = document.createElement("div");
  row.classList.add("row", "text-center");

  var col = document.createElement("div");
  col.classList.add("col-xs-12");

  var t = document.createElement("h3");
  t.classList.add("backTitle")
  t.style.color = "black";
  t.innerHTML = video.title;

  col.appendChild(t);
  row.appendChild(col);

  var row2 = document.createElement("div");
  row2.classList.add("row", "text-center");

  var col2 = document.createElement("div");
  col2.classList.add("col-xs-12");

  var btn = document.createElement("button");
  btn.classList.add("btn", "btn-primary", "playButton");
  btn.innerHTML = "PLAY";
  btn.addEventListener('click', function() {
    playPressed(video);
  });

  col2.appendChild(btn);
  row2.appendChild(col2);



  fcb.appendChild(row);
  fcb.appendChild(row2);

  fci.appendChild(fcf);
  fci.appendChild(fcb);

  fc.appendChild(fci);

  return fc;
}

function makeCard4(video) {
  var fc = document.createElement("div");
  fc.classList.add("flip-card", "roll-in-right");

  var fci = document.createElement("div");
  fci.classList.add("flip-card-inner");

  var fcf = document.createElement("div");
  fcf.classList.add("flip-card4-front");

  var hol = document.createElement("div");
  hol.classList.add("holder4");

  var c4i = document.createElement("div");
  c4i.classList.add("card4Image");
  c4i.style.backgroundImage = "url(" + video.image + ")";

  var r = document.createElement("div");
  r.classList.add("row", "text-center");

  var c = document.createElement("div");
  c.classList.add("col-xs-12");

  var p = document.createElement("p");
  p.classList.add("eptitle4");
  p.innerHTML = video.cardFront.toUpperCase();

  c.appendChild(p);
  r.appendChild(c);
  hol.appendChild(c4i);
  hol.appendChild(r);
  fcf.appendChild(hol);

  var fcb = document.createElement("div");
  fcb.classList.add("flip-card4-back");

  var row = document.createElement("div");
  row.classList.add("row", "text-center");

  var col = document.createElement("div");
  col.classList.add("col-xs-12");

  var t = document.createElement("h3");
  t.classList.add("backTitle")
  t.innerHTML = video.title;

  col.appendChild(t);
  row.appendChild(col);

  var row2 = document.createElement("div");
  row2.classList.add("row", "text-center");

  var col2 = document.createElement("div");
  col2.classList.add("col-xs-12");

  var btn = document.createElement("button");
  btn.classList.add("btn", "btn-primary", "playButton");
  btn.innerHTML = "PLAY";
  btn.addEventListener('click', function() {
    playPressed(video);
  });

  col2.appendChild(btn);
  row2.appendChild(col2);



  fcb.appendChild(row);
  fcb.appendChild(row2);

  fci.appendChild(fcf);
  fci.appendChild(fcb);

  fc.appendChild(fci);

  return fc;
}

function makeCard5(video) {
  var fc = document.createElement("div");
  fc.classList.add("flip-card", "roll-in-right");

  var fci = document.createElement("div");
  fci.classList.add("flip-card-inner");

  var fcf = document.createElement("div");
  fcf.classList.add("flip-card5-front");


  var c5i = document.createElement("div");
  c5i.classList.add("card5Image");
  c5i.style.backgroundImage = "url(" + video.image + ")";

  var r2 = document.createElement("div");
  r2.classList.add("row", "text-center");

  var c2 = document.createElement("div");
  c2.classList.add("col-xs-12");

  var p2 = document.createElement("p");
  p2.classList.add("title5");
  p2.innerHTML = video.cardFront.toUpperCase();

  var r = document.createElement("div");
  r.classList.add("row", "text-center");

  var c = document.createElement("div");
  c.classList.add("col-xs-12");

  var p = document.createElement("p");
  p.classList.add("topic5");
  p.innerHTML = video.topic.toUpperCase();

  c2.appendChild(p2);
  r2.appendChild(c2);

  c.appendChild(p);
  r.appendChild(c);
  fcf.appendChild(c5i);
  fcf.appendChild(r);
  fcf.appendChild(r2);

  var fcb = document.createElement("div");
  fcb.classList.add("flip-card5-back");

  var row = document.createElement("div");
  row.classList.add("row", "text-center");

  var col = document.createElement("div");
  col.classList.add("col-xs-12");

  var t = document.createElement("h3");
  t.classList.add("backTitle");
  t.style.color = "#ef242a";
  t.innerHTML = video.title;

  col.appendChild(t);
  row.appendChild(col);

  var row2 = document.createElement("div");
  row2.classList.add("row", "text-center");

  var col2 = document.createElement("div");
  col2.classList.add("col-xs-12");

  var btn = document.createElement("button");
  btn.classList.add("btn", "btn-primary", "playButton");
  btn.innerHTML = "PLAY";
  btn.addEventListener('click', function() {
    playPressed(video);
  });

  col2.appendChild(btn);
  row2.appendChild(col2);



  fcb.appendChild(row);
  fcb.appendChild(row2);

  fci.appendChild(fcf);
  fci.appendChild(fcb);

  fc.appendChild(fci);

  return fc;
}

function makeCard6(video) {
  var fc = document.createElement("div");
  fc.classList.add("flip-card", "roll-in-right");

  var fci = document.createElement("div");
  fci.classList.add("flip-card-inner");

  var fcf = document.createElement("div");
  fcf.classList.add("flip-card6-front");


  var c5i = document.createElement("div");
  c5i.classList.add("card6Image");
  c5i.style.backgroundImage = "url(" + video.image + ")";

  var r2 = document.createElement("div");
  r2.classList.add("row", "text-center");

  var c2 = document.createElement("div");
  c2.classList.add("col-xs-12");

  var p2 = document.createElement("p");
  p2.classList.add("title5");
  p2.innerHTML = video.cardFront.toUpperCase();

  var r = document.createElement("div");
  r.classList.add("row", "text-center");

  var c = document.createElement("div");
  c.classList.add("col-xs-12");

  var p = document.createElement("p");
  p.classList.add("topic6");
  p.innerHTML = video.topic.toUpperCase();

  c2.appendChild(p2);
  r2.appendChild(c2);

  c.appendChild(p);
  r.appendChild(c);
  fcf.appendChild(c5i);
  fcf.appendChild(r);
  fcf.appendChild(r2);

  var fcb = document.createElement("div");
  fcb.classList.add("flip-card6-back");

  var row = document.createElement("div");
  row.classList.add("row", "text-center");

  var col = document.createElement("div");
  col.classList.add("col-xs-12");

  var t = document.createElement("h3");
  t.classList.add("backTitle");
  t.style.color = "#00203f";
  t.innerHTML = video.title;

  col.appendChild(t);
  row.appendChild(col);

  var row2 = document.createElement("div");
  row2.classList.add("row", "text-center");

  var col2 = document.createElement("div");
  col2.classList.add("col-xs-12");

  var btn = document.createElement("button");
  btn.classList.add("btn", "btn-primary", "playButton");
  btn.innerHTML = "PLAY";
  btn.addEventListener('click', function() {
    playPressed(video);
  });

  col2.appendChild(btn);
  row2.appendChild(col2);



  fcb.appendChild(row);
  fcb.appendChild(row2);

  fci.appendChild(fcf);
  fci.appendChild(fcb);

  fc.appendChild(fci);

  return fc;
}


function playPressed(video) {
  // document.getElementById("intro").style.display = "none";
  // document.getElementById("intro2").style.display = "none";
  window.scrollTo(0, 0)
  document.getElementById("videoTitle").innerHTML = video.title;
  document.getElementById("videoScreen").style.display = "block";
  if (video.link.length < 30) {
    document.getElementById("videoEmbed").src = "https://www.youtube.com/embed/" + video.link.slice(17, video.link.length);
  } else {
    document.getElementById("videoEmbed").src = "https://www.youtube.com/embed/" + video.link.slice(32, video.link.length);
  }

  // youTubePlayer(video);
}

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//
// // 2. This code loads the IFrame Player API code asynchronously.
//
// var tag = document.createElement('script');
//
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
//
// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '80%',
//     width: '90%',
//     videoId: 'M7lc1UVf-VE',
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }
//
// // 4. The API will call this function when the video player is ready.
// function onPlayerReady(event) {
//   event.target.playVideo();
// }
//
// // 5. The API calls this function when the player's state changes.
// //    The function indicates that when playing a video (state=1),
// //    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//   if (event.data == YT.PlayerState.PLAYING && !done) {
//     setTimeout(stopVideo, 0001);
//     done = true;
//   }
//   if(event.data === 1) { // Started playing
//     setTimeout(function() {
//       console.log(player.getCurrentTime());
//     }, 3000)
//     var timer = setInterval(record,100);
//   } else {
//     clearInterval(timer);
//   }
// }
//
// var time = 0;
//
// function record(){
//      time = player.getCurrentTime || 0;
//      document.getElementById("videoTitle").innerHTML = time;
//   }
//
//
// function stopVideo() {
//   player.stopVideo();
// }
//
// function youTubePlayer(video) {
//   document.getElementById("player").style.display = "none";
//   document.getElementById("player").src = "https://www.youtube.com/embed/" + video.link.slice(17) + "?enablejsapi=1&widgetid=1";
//   setTimeout(function() {
//     document.getElementById("player").style.display = "block";
//   }, 1000);
//
// }

function backPressed() {
  document.getElementById("videoScreen").classList.add("slide-out-right");
  setTimeout(function() {
      document.getElementById("videoScreen").style.display = "none";
      document.getElementById("videoScreen").classList.remove("slide-out-right");
      document.getElementById("videoEmbed").src = "";
  }, 500)

}
