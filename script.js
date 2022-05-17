console.log("Spotify music ");
// initialise variables
let songindex=1;
let audioelement= new Audio('songs/1.mp3');
let masterplay=document.getElementById("masterplay");
let mybar=document.getElementById("mybar");
let gif=document.getElementById("gif");
let mastersongname=document.getElementById("mastersongname");
// let songItems= Array.from(document.getElementsByClassName("songitem"));   add song name by js
let songs=[
    {songname :"Love Me Like You Do ",filepath:"songs/1.mp3"},
    {songname :"Tera Mera Rishta ",filepath:"songs/2.mp3"},
    {songname :"Aashita Aashita ",filepath:"songs/3.mp3"},
    {songname :"Besbriyaan ",filepath:"songs/4.mp3"},
    {songname :"Dhadak Title song ",filepath:"songs/5.mp3"},
    {songname :"Humnava ",filepath:"songs/6.mp3"},
    {songname :"Lo Maan Liya ",filepath:"songs/7.mp3"}
]
//  songItems.forEach((element, i)=>{  
//      element.getElementsByClassName("songname")[0].innerText = songs[i].songname; 
//  })

// handle play/pause click
masterplay.addEventListener("click",()=>{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.src="Images/pause.png" ;
        document.getElementById(`${songindex}`).src="Images/pause.png";
        gif.style.opacity=1;
    }
    else
    {
        audioelement.pause();
        masterplay.src="Images/play.png" ;
        for(i=1;i<=7;i++)
        document.getElementById(`${i}`).src="Images/play.png";
        gif.style.opacity=0;
    }
})

//Listen to events
audioelement.addEventListener("timeupdate",()=>{
    // update seekbar
    let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    mybar.value=progress;
})

mybar.addEventListener("change",()=>{
    audioelement.currentTime=mybar.value*audioelement.duration/100;
})

// Next button
document.getElementById('nextplay').addEventListener('click', ()=>{
    if(songindex>=7)
        songindex = 1;
    else
        songindex += 1;
    audioelement.src = `songs/${songindex}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    document.getElementById(`${songindex}`).src="Images/pause.png";
    if(songindex==1){
    document.getElementById("7").src="Images/play.png";
    mastersongname.innerText = songs[0].songname;}
    document.getElementById(`${songindex-1}`).src="Images/play.png";
    mastersongname.innerText = songs[songindex-1].songname;
    masterplay.src="Images/pause.png" ;
    gif.style.opacity=1;
})

// Previous button
document.getElementById('preplay').addEventListener('click', ()=>{
    if(songindex<=1)
        songindex = 7;
    else
        songindex -= 1;
    audioelement.src = `songs/${songindex}.mp3`;
    audioelement.currentTime = 0;
    audioelement.play();
    document.getElementById(`${songindex}`).src="Images/pause.png";
    if(songindex==7){
    document.getElementById("1").src="Images/play.png";
    mastersongname.innerText = songs[6].songname;}
    document.getElementById(`${songindex+1}`).src="Images/play.png";
    mastersongname.innerText = songs[songindex-1].songname;
    masterplay.src="Images/pause.png" ;  
    gif.style.opacity=1;
})

document.getElementById("1").addEventListener("click",()=>{
    audioelement.src="songs/1.mp3";
    audioelement.play();
    document.getElementById("1").src="Images/pause.png";
    if(document.getElementById("3").src="Images/pause.png")
      document.getElementById("3").src="Images/play.png";
    if(document.getElementById("2").src="Images/pause.png")
      document.getElementById("2").src="Images/play.png";
    if(document.getElementById("4").src="Images/pause.png")  
      document.getElementById("4").src="Images/play.png";
    if(document.getElementById("5").src="Images/pause.png")
      document.getElementById("5").src="Images/play.png";
    if(document.getElementById("6").src="Images/pause.png")
      document.getElementById("6").src="Images/play.png"; 
    if(document.getElementById("7").src="Images/pause.png")
      document.getElementById("7").src="Images/play.png";
    mastersongname.innerText = songs[0].songname;
    masterplay.src="Images/pause.png" ; 
    gif.style.opacity=1;
    songindex=1;
})
document.getElementById("2").addEventListener("click",()=>{
    audioelement.src="songs/2.mp3";
    audioelement.play();
    document.getElementById("2").src="Images/pause.png";
    if(document.getElementById("3").src="Images/pause.png")
      document.getElementById("3").src="Images/play.png";
    if(document.getElementById("4").src="Images/pause.png")
      document.getElementById("4").src="Images/play.png";  
    if(document.getElementById("1").src="Images/pause.png")
      document.getElementById("1").src="Images/play.png";
    if(document.getElementById("5").src="Images/pause.png")
      document.getElementById("5").src="Images/play.png";
    if(document.getElementById("6").src="Images/pause.png")
      document.getElementById("6").src="Images/play.png"; 
    if(document.getElementById("7").src="Images/pause.png")
      document.getElementById("7").src="Images/play.png";
    mastersongname.innerText = songs[1].songname;
    masterplay.src="Images/pause.png" ; 
    gif.style.opacity=1;
    songindex=2;
})
document.getElementById("3").addEventListener("click",()=>{
    audioelement.src="songs/3.mp3";
    audioelement.play();
    document.getElementById("3").src="Images/pause.png";
    if(document.getElementById("4").src="Images/pause.png")
      document.getElementById("4").src="Images/play.png";
    if(document.getElementById("2").src="Images/pause.png")
      document.getElementById("2").src="Images/play.png";  
    if(document.getElementById("1").src="Images/pause.png")
      document.getElementById("1").src="Images/play.png";
    if(document.getElementById("5").src="Images/pause.png")
      document.getElementById("5").src="Images/play.png";
    if(document.getElementById("6").src="Images/pause.png")
      document.getElementById("6").src="Images/play.png"; 
    if(document.getElementById("7").src="Images/pause.png")
      document.getElementById("7").src="Images/play.png";
    mastersongname.innerText = songs[2].songname;
    masterplay.src="Images/pause.png" ; 
    gif.style.opacity=1;
    songindex=3;
})
document.getElementById("4").addEventListener("click",()=>{
    audioelement.src="songs/4.mp3";
    audioelement.play();
    document.getElementById("4").src="Images/pause.png"; 
    if(document.getElementById("3").src="Images/pause.png")
      document.getElementById("3").src="Images/play.png";
    if(document.getElementById("2").src="Images/pause.png")
      document.getElementById("2").src="Images/play.png";  
    if(document.getElementById("1").src="Images/pause.png")
      document.getElementById("1").src="Images/play.png";
    if(document.getElementById("5").src="Images/pause.png")
      document.getElementById("5").src="Images/play.png";
     if(document.getElementById("6").src="Images/pause.png")
      document.getElementById("6").src="Images/play.png"; 
    if(document.getElementById("7").src="Images/pause.png")
      document.getElementById("7").src="Images/play.png";
    mastersongname.innerText = songs[3].songname;
    masterplay.src="Images/pause.png" ; 
    gif.style.opacity=1;
    songindex=4;
})
document.getElementById("5").addEventListener("click",()=>{
    audioelement.src="songs/5.mp3";
    audioelement.play();
    document.getElementById("5").src="Images/pause.png";
    if(document.getElementById("3").src="Images/pause.png")
      document.getElementById("3").src="Images/play.png";
    if(document.getElementById("2").src="Images/pause.png")
      document.getElementById("2").src="Images/play.png";  
    if(document.getElementById("1").src="Images/pause.png")
      document.getElementById("1").src="Images/play.png";
    if(document.getElementById("4").src="Images/pause.png")
      document.getElementById("4").src="Images/play.png";
    if(document.getElementById("6").src="Images/pause.png")
      document.getElementById("6").src="Images/play.png"; 
    if(document.getElementById("7").src="Images/pause.png")
      document.getElementById("7").src="Images/play.png";
    mastersongname.innerText = songs[4].songname;
    masterplay.src="Images/pause.png" ; 
    gif.style.opacity=1;
    songindex=5;
})
document.getElementById("6").addEventListener("click",()=>{
    audioelement.src="songs/6.mp3";
    audioelement.play();
    document.getElementById("6").src="Images/pause.png";
    if(document.getElementById("3").src="Images/pause.png")
      document.getElementById("3").src="Images/play.png";
    if(document.getElementById("2").src="Images/pause.png")
      document.getElementById("2").src="Images/play.png";  
    if(document.getElementById("1").src="Images/pause.png")
      document.getElementById("1").src="Images/play.png";
    if(document.getElementById("5").src="Images/pause.png")
      document.getElementById("5").src="Images/play.png";
    if(document.getElementById("4").src="Images/pause.png")
      document.getElementById("4").src="Images/play.png"; 
    if(document.getElementById("7").src="Images/pause.png")
      document.getElementById("7").src="Images/play.png";
    mastersongname.innerText = songs[5].songname;
    masterplay.src="Images/pause.png" ; 
    gif.style.opacity=1;
    songindex=6;
})
document.getElementById("7").addEventListener("click",()=>{
    audioelement.src="songs/7.mp3";
    audioelement.play();
    document.getElementById("7").src="Images/pause.png";
    if(document.getElementById("3").src="Images/pause.png")
      document.getElementById("3").src="Images/play.png";
    if(document.getElementById("2").src="Images/pause.png")
      document.getElementById("2").src="Images/play.png";  
    if(document.getElementById("1").src="Images/pause.png")
      document.getElementById("1").src="Images/play.png";
    if(document.getElementById("5").src="Images/pause.png")
      document.getElementById("5").src="Images/play.png";
    if(document.getElementById("6").src="Images/pause.png")
      document.getElementById("6").src="Images/play.png"; 
    if(document.getElementById("4").src="Images/pause.png")
      document.getElementById("4").src="Images/play.png";
    mastersongname.innerText = songs[6].songname;
    masterplay.src="Images/pause.png" ; 
    gif.style.opacity=1;
    songindex=7;
})