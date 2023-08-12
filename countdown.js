function countdown() {
    var dateEnd = new Date("2023-08-12 20:00:00"),
    dateNow = new Date(),
    date = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000);

    var dateLeft = date,
        dateTemp = 0;
    dateTemp = Math.floor(dateLeft / (24 * 60 * 60));
    dateLeft -= dateTemp * 24 * 60 * 60;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector("#days span").innerHTML = dateTemp + ":";
    
    dateTemp = Math.floor(dateLeft / (60 * 60));
    dateLeft -= dateTemp * 60 * 60;    
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector("#hours span").innerHTML = dateTemp + ":";    

    dateTemp = Math.floor(dateLeft / 60);
    dateLeft -= dateTemp * 60;    
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector("#minutes span").innerHTML = dateTemp + ":";    

    if (dateTemp < 10) dateTemp = '0' + dateLeft;
    document.querySelector("#seconds span").innerHTML = dateLeft;    

    if (dateEnd.getTime() <= dateNow.getTime()) window.location.href = "comingsoon.html" ;
}

var run = setInterval(countdown, 1000);
// nothing yet 111
