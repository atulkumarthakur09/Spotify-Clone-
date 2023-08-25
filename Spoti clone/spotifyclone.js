console.log("welcome To Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("Maan.mp3");   //isko un-comment krna h song play  k lea h ye
console.log("play me")
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let masterSongName = document.getElementsByClassName('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let song = [
   {songName:"maan", filepath:"F:\VS CODE\Spoti clone\.maan1.mp3", coverPath:"download22"},
   {songName:"Hamari Adhuri Kahani", filepath:"F:\VS CODE\Spoti clone\Hamari Adhuri Kahani.mp3", coverPath:"download22"},
   {songName:"Kahani Suno", filepath:"F:\VS CODE\Spoti clone\Kahani Suno.mp3", coverPath:"download22"},
]

songItem.forEach((element,i)=>{
   console.log(element,i);
element.getElementsByTagName('img')[0].src = song[i].coverPath+".jpg"
element.getElementsByClassName('songName')[0].innerText = song[i].songName;
})

// audioElement.play();
masterPlay.addEventListener('click',()=>{
   console.log("clicked")
    if(audioElement.paused || audioElement.currentTime<=0)
    { audioElement.play();
      masterPlay.classList.remove('fa-circle-play'); 
      masterPlay.classList.add('fa-circle-pause');
      gif.style.opacity=1; 
       
   }
   else{
      audioElement.pause();
      masterPlay.classList.add('fa-circle-play');
      masterPlay.classList.remove('fa-circle-pause'); }
      gif.style.opacity=0;
   }
)

//Listen To Event
audioElement.addEventListener('timeupdate', ()=>{
   console.log('timeupdate');
   progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
   console.log(progress);
   myProgressBar.value = progress;

})
myProgressBar.addEvent.Listener('change', ()=>{
   audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
   })

   const makeAllPlay = ()=>{
      Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element.classList.remove('fa-circle-pause');
      element.classList.add('fa-circle-play');
      })
   }
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
      element = addEventListener('click', (e)=>{
         makeAllPlays();
         masterSongName.innerText = songs[songIndex].songName; 
         index = parseInt(e.target.id);
         e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause');
         audioElement.src = 'song/${songIndex+1}.mp3';
         masterSongName.innerText = songs[songIndex].songName; 
         audioElement.currentTime = 0;
         audioElement,play();
         gif.style.opacity=1;
         masterPlay.classList.add('fa-circle-pause');
         masterPlay.classList.remove('fa-circle-play');
         
      })
   })

   document.getElementById('next').addEventListener('click', ()=>{
      if(songIndex>=3){
         songIndex = 0
      }
      else{
         songIndex += 1;
      }
      audioElement.src = 'song/${songIndex+1}.mp3';
      masterSongName.innerText = songs[songIndex].songName; 
      audioElement.currentTime = 0;
      audioElement,play();
      masterPlay.classList.add('fa-circle-pause');
      masterPlay.classList.remove('fa-circle-play');
   }
   )


   document.getElementById('previous').addEventListener('click', ()=>{
      if(songIndex<=0){
         songIndex = 0
      }
      else{
         songIndex -= 1;
      }
      audioElement.src = 'song/${songIndex+1}.mp3';
      masterSongName.innerText = songs[songIndex].songName; 
      audioElement.currentTime = 0;
      audioElement,play();
      masterPlay.classList.add('fa-circle-pause');
      masterPlay.classList.remove('fa-circle-play');
   }
   )

//update seekbar




// alt use to drag any line to anywhr
// ctrl+/  used to comment
// 