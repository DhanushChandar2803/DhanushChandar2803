let ampm = document.getElementById('ampm')
function displayTime(){
    let dateTime = new Date();
    let hour = dateTime.getHours();
    let min = padZero(dateTime.getMinutes());
    let sec = padZero(dateTime.getSeconds());
    if(hour>12){
        hour = hour - 12
        ampm.innerHTML = 'PM'
    }
       
    document.getElementById('hours').innerHTML = padZero(hour)
    document.getElementById('mins').innerHTML = min
    document.getElementById('seconds').innerHTML = sec
}

function padZero(num){
    return num<10?"0"+num:num
}

setInterval(displayTime,500)