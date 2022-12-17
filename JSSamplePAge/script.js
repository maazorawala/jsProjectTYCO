'use strict';
(
    function(){
        const second = 1000;
        const minute = second *60,
        hour = minute * 60,
        day = hour * 24;
        document.getElementById('event_Title').innerText = "Free Practice 1";


        let gpday = "Dec 03, 2023 15:00:00",
        countdown = new Date(gpday).getTime(),
        x = setInterval(function(){
            let now = new Date().getTime(),
            distance = countdown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day));

            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));

            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));

            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
                if (distance < 0) {
                    gpday = "Aug 29, 2021 18:30:00";
                    let rDay = new Date(gpday).getTime(); 
                    distance = rDay - now;
                    document.getElementById("days").innerText = Math.floor(distance / (day));

            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour));

            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute));

            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            document.getElementById('event_Title').innerText = "Race:";
            if(now > distance){
                clearInterval(x);
                document.getElementById("count-cont").style.opacity = "0";
                document.getElementById("content").style.display = "block";
            }

            }
        },0)
        
    }
());
document.onreadystatechange = () =>{
    if(document.readyState != "complete"){
        document.querySelector("#load").style.visibility="visible";
        document.body.style.visibility="hidden";
        
    }
    else{
        document.querySelector("#load").style.visibility="hidden"
        document.body.style.visibility="visible";
    }
}