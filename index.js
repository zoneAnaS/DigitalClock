const hourE = document.getElementById("hour");
const minuteE = document.getElementById("minute");
const secondE = document.getElementById("second");
const ampmE = document.getElementById("ampm");

function clock(){
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    ampmE.innerText="am"
    
    if(hr>12){
        hr = hr-12;
        ampmE.innerText="pm"
    }
    if(hr<10){
        hr= "0"+hr;
    }
    if(sec<10){
        sec= "0"+sec;
    }
    if(min<10){
        min= "0"+min;
    }
    
    hourE.innerText=hr;
    minuteE.innerText=min;
    secondE.innerText=sec;
    setInterval(()=>{
        clock()
    },1000)
    // console.log(hr);
    // console.log(min);
    // console.log(sec);
}
clock();
