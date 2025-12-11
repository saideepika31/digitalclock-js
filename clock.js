function updateclock(){
    let now=new Date();
    let hrs=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();
    let ampm= hrs<12 ? "AM" : "PM";

    hrs=hrs%12;
    hrs=hrs?hrs:12;
    hrs=hrs<10 ? "0" +hrs:hrs;
    min=min<10 ? "0"+min:min;
    sec=sec<10 ? "0"+sec:sec;

    let greetingText="";
    let hour24=now.getHours();
    if(hour24>=5 && hour24<12){
        greetingText="Good Morning";
    }
    else if(hour24>=12 && hour24<17){
        greetingText="Good Afternoon";
    }
    else if(hour24>=17 && hour24<20){
        greetingText="Good Evening";
    }
    else{
        greetingText="Good Night";
    }

    document.getElementById("greeting").innerText=greetingText;

    document.getElementById("time").innerText=
    `${hrs}:${min}:${sec} ${ampm}`;

    let options={ weekday:"long",year:"numeric",month:"long",day:"numeric"};
    document.getElementById("date").innerText=now.toLocaleDateString("en-US",options);

    
}
setInterval(updateclock,1000);
updateclock();