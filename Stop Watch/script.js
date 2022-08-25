// const startStopBtn = document.getElementById('startStopBtn');
// const resetBtn = document.getElementById('resetBtn');
// const timer = document.querySelector('.timer');
// let seconds = 0;
// let hours = 0;
// let minutes = 0;

// let leadingSeconds = 0;
// let leadingHours = 0;
// let leadingMinutes = 0;

// let timerInterval = null;
// let timerStatus = 'stopped';

// function stopWatch(){
//        seconds++;

//        if(seconds / 60 === 1){
//               seconds = 0;
//               minutes++;

//               if(minutes / 60 === 1){
//                      minutes = 0;
//                      hours++;
//               }
         
            
//        }
//        if(leadingSeconds < 10){
//               leadingSeconds = "0" + seconds.toString(); 
//        }else{
//               leadingSeconds = + seconds; 

//        }
//        if(leadingMinutes < 10){
//               leadingMinutes = "0" + minutes.toString(); 
//        } else{
//               leadingMinutes =  minutes; 
//        }
//        if(leadingHours < 10){
//               leadingHours = "0" + hours.toString(); 
//        }else{
//               leadingHours = hours; 

//        }
      
 

//        timer = timer.innerText = `${leadingHours} : ${leadingMinutes} : ${leadingSeconds}`;
   
//        console.log(timer);
// }


// startStopBtn.addEventListener('click', () =>{
//        if(timerStatus === 'stopped'){
//           timerInterval = window.setInterval(stopWatch, 1000);
//           document.getElementById('startStopBtn').innerHTML = `<i class='fa-solid fa-pause' id = 'pause'></i>` 
//           timerStatus = 'started';   
//        }else{
//           window.clearInterval(timerInterval);
//           document.getElementById('startStopBtn').innerHTML = `<i class= 'fa-solid fa-play' id='play'></i>`;
//           timerStatus = 'stopped';
//        }
// })

// resetBtn.addEventListener('click', () =>{
//        window.clearInterval(timerInterval);
//        seconds = 0;
//        hours = 0;
//        minutes = 0;
//        timer.innerHTML = '00: 00: 00'
// });

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const timer = document.querySelector('.timer');

let hours = 0;
let minutes = 0;
let seconds = 0;

let leadingHours = 0;
let leadingMinutes = 0;
let leadingSeconds = 0;

let timerStatus = 'stopped';
let timerInterval; 


function stopWatch(){
       seconds++; 
       if(seconds / 60 === 1){
              seconds = 0;
              minutes++;

              if(minutes / 60 === 1){
                     minutes = 0;
                     hours++;
              }
       }
      

       if(leadingSeconds < 10){
             leadingSeconds = "0" + seconds.toString();
       }else{
              leadingSeconds = seconds;
       }
       if(leadingMinutes < 10){
              leadingMinutes = "0" + minutes.toString();
        }else{
              leadingMinutes = minutes;
        }
       if(leadingHours < 10){
              leadingHours = "0" + hours.toString();
        }else{
              leadingHours = hours;
        }

        let display = timer.innerText = `${leadingHours} : ${leadingMinutes} : ${leadingSeconds}`;
        console.log(display);
}


startStopBtn.addEventListener('click', ()=>{
      if(timerStatus === 'stopped'){
       timerInterval = window.setInterval(stopWatch, 1000);
       document.getElementById('startStopBtn').innerHTML = `<i class='fa-solid fa-pause' id = 'pause'></i>` 
       // timerStatus = 'started';  
       console.log(timerStatus = 'started' ); 
      }else{
       window.clearInterval(timerInterval);
       document.getElementById('startStopBtn').innerHTML = `<i class= 'fa-solid fa-play' id='play'></i>`;
       timerStatus = 'stopped';
              console.log(timerStatus = 'stopped');

      }
})

resetBtn.addEventListener('click', () =>{
       window.clearInterval(timerInterval);
       seconds = 0;
       minutes = 0;
       hours = 0;
       timer.innerHTML = "00 : 00 : 00";

    
       
});