


//my globals lol w
var pageX = document.getElementById("x");
var pageY = document.getElementById("y");
var myList =[];
var pointName = '';

// this listens to the cite for button clicks and tracks the mouse movements
function onClac(btn) {
    var tracker = document.querySelector(".tracker");
    
    
    
    if(btn=="btn3"){ 
        tracker.style.backgroundColor= 'red';
        tracker.addEventListener("mousemove", updateDisplay, false);
        tracker.addEventListener("mouseenter", updateDisplay, false);
        tracker.addEventListener("mouseleave", updateDisplay, false);
        
    }
    if(btn=='btn4'){
        tracker.style.backgroundColor= 'bisque';
        sendList(myList);
    }
    if(btn=='btn5'){
        junkist = document.getElementById('textInput').value;
        pointName = junkist;
        sendList(myList);
        junkist.value='';
    }
    

    setTimeout(tOut(),600);
}
// lol apparently the timeout func requires a func as a field so im loggin it
function tOut(){
    console.log(' timeout is working');
}

// like the name implies this just updates the display also a lil thang to make sure we in bounds if u swipe real fast it messed up 
function updateDisplay(event) {
    var bnds = event.target.getBoundingClientRect();
    var x = event.clientX -bnds.left;
    var y = event.clientY - bnds.top;
    if(x<=0){
        x=0;
    } else if (x>= bnds.right){
        x= bnds.right;
    }
    if(y<=0){
        y=0;
    }
    pageX.innerText = Math.round(x);

    pageY.innerText = Math.round(y);   
    listMake(x,y);
    
}

// just pushes my coords to the list that i globaly defined
function listMake(x,y) {
    myList.push(x);
    myList.push(y);   
}
   // takes the list and post it in json format to db 
function sendList(maList) {
    var token = $('input[name="csrfToken"]').attr('value');
    $.ajaxSetup({
        beforeSend: function(xhr){
            xhr.setRequestHeader('Csrf-Token',token);
        }
    });

    $.ajax({
            type: "POST",
            url: 'http://127.0.0.1:8000/newCoords/',
            data: {pointName:'pointName',fieldPoints: 'maList'},
        });
}
