const hours = document.querySelector('.hour');
const mins = document.querySelector('.min');
const sec = document.querySelector('.sec');
const periods = document.querySelector('.period');
let codeDayCount = document.querySelector('.count');
let dayCounterText = document.querySelector('.count-day')
// Input data
let applyBtn = document.querySelector('.btn-set');
let inputDate = document.querySelector('#mydate')
let inputNumber = document.querySelector('#number');




  
function watch(){
    let timeFormate = 'PM'
    const currentDate =  new Date();
    //console.log(currentDate);
    let getHour = currentDate.getHours();
   
    let getMin = currentDate.getMinutes();
   
    let getSec = currentDate.getSeconds();
  
    if(getHour == 00){
        getHours = 12;
        timeFormate = 'AM';
    }
    if(getHour > 12){
        getHour = getHour - 12;
        timeFormate = 'PM';
    }
    getSec = getSec < 10 ? getSec = "0" + getSec: getSec
    getHour = getHour < 10 ? getHour = "0" + getHour : getHour
    getMin = getMin < 10 ? getMin = "0" + getMin : getMin


    periods.textContent = timeFormate;
    hours.textContent = getHour;
    mins.textContent = getMin;
    sec.textContent = getSec;
    
    setTimeout(watch, 1000);
}

watch();


function setDates(){
    var yourInputNumber = inputNumber.value;
    console.log(yourInputNumber);
    var dd = inputDate.value;
    var newDate = new Date(dd);
    var newDD = new Date(newDate);
    var final = newDD.setDate(newDD.getDate() + yourInputNumber);

    var storeDd = newDD.getDate();
    var storeMm = newDD.getMonth() + 1; 
    var storeYear = newDD.getFullYear();

    console.log(storeDd, storeMm, storeYear);

    codeDayCount.textContent = yourInputNumber;
    dayCounterText .innerHTML = `You started this challenge on this date ${dd} and challenge will be end on this date ${storeYear}-${storeMm}-${storeDd}.`
}

setDates();

function timeFormate(time){
    return time < 10 ? ` 0${time}` : time;
}
