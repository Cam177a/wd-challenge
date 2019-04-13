/***************************************************************
 ::GET CURRENT DATE
***************************************************************/
var today = new Date();
var days =  ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var day = days[ today.getDay() ];

var dd = today.getDate();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[ today.getMonth() ];

var yyyy = today.getFullYear();

function nth(dd) {
    if (dd > 3 && dd < 21) return 'th';
    switch (dd % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }
var isToday = ' ' + day + ' ' + dd +nth(date)+ ' ' + month + ' ' + yyyy;
document.getElementById('date').value = isToday;

/***************************************************************
 :: GET TIME
***************************************************************/

var hours = today.getHours();
var minutes = today.getMinutes();
var time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
document.getElementById('time').value = ' '+time;
function updateDiv() {
    document.getElementById('time-container');
}
updateDiv();
window.setInterval(updateDiv, 60000);

/***************************************************************
::TODAY'S TASKS ARRAY[]
***************************************************************/
var array = [
    {
        "id": 1,
        "day": "Monday",
        "time": "08:00",
        "description": "Laugh to Your Heart’s Content"
    },
    {
        "id": 2,
        "day": "Monday",
        "time": "11:00",
        "description": "Dance Like No One’s Watching"
    },
    {
        "id": 3,
        "day": "Monday",
        "time": "16:00",
        "description": "Make Dinner for homeless guy"
    },
    {
        "id": 4,
        "day": "Tuesday",
        "time": "07:00",
        "description": "Change Your Morning Routine"
    },
    {
        "id": 5,
        "day": "Tuesday",
        "time": "10:00",
        "description": "Go People Watching"
    },
    {
        "id": 6,
        "day": "Tuesday",
        "time": "18:00",
        "description": "Do Something Stupid"
    },
    {
        "id": 7,
        "day": "Wednesday",
        "time": "08:00",
        "description": "Sing in the Shower"
    },
    {
        "id": 8,
        "day": "Wednesday",
        "time": "13:00",
        "description": "Listen to Nature Sounds"
    },
    {
        "id": 9,
        "day": "Wednesday",
        "time": "15:00",
        "description": "Join a Club"
    },
    {
        "id": 10,
        "day": "Thursday",
        "time": "06:00",
        "description": "Strike a Pose"
    },
    {
        "id": 11,
        "day": "Thursday",
        "time": "09:00",
        "description": " Challenge Yourself"
    },
    {
        "id": 12,
        "day": "Thursday",
        "time": "20:00",
        "description": "Reconnect with an Old Friend"
    },
    {
        "id": 13,
        "day": "Friday",
        "time": "09:00",
        "description": "Learn a Joke"
    },
    {
        "id": 14,
        "day": "Friday",
        "time": "12:00",
        "description": "Become an Expert"
    },
    {
        "id": 15,
        "day": "Friday",
        "time": "19:00",
        "description": "Take a Class"
    },
    {
        "id": 16,
        "day": "Saturday",
        "time": "07:00",
        "description": "Change Your Look"
    },
    {
        "id": 17,
        "day": "Saturday",
        "time": "12:00",
        "description": "Excite Your Palate"
    },
    {
        "id": 18,
        "day": "Saturday",
        "time": "21:00",
        "description": "Begin a Diary"
    },
    {
        "id": 19,
        "day": "Sunday",
        "time": "10:00",
        "description": "Embrace Your Curiosity"
    },
    {
        "id": 20,
        "day": "Sunday",
        "time": "11:00",
        "description": "Pretend to Be a Tourist"
    },
    {
        "id": 21,
        "day": "Sunday",
        "time": "17:00",
        "description": "Drive Away with No Destination in Mind"
    }
]

/***************************************************************
::SHOW TODAY'S TASK
***************************************************************/

var list = document.getElementById('list');
for(i=0; i< array.length; i++){
    if(day === array[i]['day']){
        list.insertAdjacentHTML('beforeend',
                                '<tr id='+array[i]['id']+'><td class="tblTime" contentEditable="false">'
                                 +array[i]['time']+
                                 ' </td><td class="tblTask" contentEditable="false">'
                                 +array[i]['description']+
                                 ' </td> <td class="center-in_tbl"><span class="edit"><i class="far fa-edit"></i></span></td><td class="center-in_tbl"><span class="delete"><i class="fas fa-trash-alt"></i></span></td></tr>'
                                );
    }
}

/***************************************************************
::SHOW TOMORROW TASKS
***************************************************************/
var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
var tomorrow_day = days[tomorrow.getDay()];

var list = document.getElementById('list-tomorrow');
for(i=0; i< array.length; i++){
    if(tomorrow_day === array[i]['day']){
        list.insertAdjacentHTML('beforeend',
                                '<tr id='+array[i]['id']+'><td>'
                                 +array[i]['time']+
                                 '</td><td>'
                                 +array[i]['description']+
                                 '</td></tr>'
                                );
    }
}

/***************************************************************
::CHANGE TITLE
***************************************************************/
function getTitle(){
    var newTitle = document.getElementById('newTitle').value;
    const h1 = document.getElementsByTagName('h1')[0];
    if(document.title != newTitle ||  h1.innerHTML != newTitle){
        document.title = newTitle;
        h1.innerHTML = newTitle;
    }
}
/***************************************************************
::CHANGE BACKGROUND
***************************************************************/
function backgroundColor(color){
    switch(color) {
          case "red":
            document.body.style.backgroundColor = "red";
            document.getElementById("date").style.backgroundColor = "red";
            document.getElementById("time").style.backgroundColor = "red";
              break;
          case "orange":
            document.body.style.backgroundColor = "orange";
            document.getElementById("date").style.backgroundColor = "orange";
            document.getElementById("time").style.backgroundColor = "orange";
              break;
          case "green":
            document.body.style.backgroundColor = "green";
            document.getElementById("date").style.backgroundColor = "green";
            document.getElementById("time").style.backgroundColor = "green";
              break;
          case "blue":
            document.body.style.backgroundColor = "blue";
            document.getElementById("date").style.backgroundColor = "blue";
            document.getElementById("time").style.backgroundColor = "blue";
              break;
      }
  }




/***************************************************************
::CURRENT WEATHER
***************************************************************/
$(document).ready(function(){
    var key = '40244efaab983d1944ec53d0b502f365';

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=copenhagen',
        dataType: 'JSON',
        type: 'GET',
        data: {appid: key, units : 'metric'}
    }).always(function(jDatas){
            var addWeatherDetails = '';

        jDatas['weather'].forEach((jData, key)=>{
            addWeatherDetails += ` <h3><b>${jDatas.name}</b><img src="http://openweathermap.org/img/w/${jData.icon}.png"></h3>
            ${jDatas.main.temp} &deg;C  | ' ${jData.main},
            ${jData.description}
            `
        })
        $('#showWeatherForecast').append(addWeatherDetails);
    })

/****************************
 ::Choose city's weather
***************************/
    $('#btnGetWeatherForecast').click(function(){
        var city = $('#city').val();
 console.log("city ", city);
        var key = '40244efaab983d1944ec53d0b502f365';

        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            dataType: 'JSON',
            type: 'GET',
            data: {q: city, appid: key, units : 'metric'}
        }).always(function(jDatas){
                var addWeatherDetails = '';
            jDatas['weather'].forEach((jData, key)=>{
                addWeatherDetails += ` <h3><b>${jDatas.name}</b><img src="http://openweathermap.org/img/w/${jData.icon}.png"></h3>
                ${jDatas.main.temp} &deg;C  | ' ${jData.main},
                ${jData.description}
                `


            })
            $('#showWeatherForecast').empty();
            $('#showWeatherForecast').append(addWeatherDetails);
        })
    })
})


/**************************************************************
 ::ANIMATIONS
***************************************************************/
document.addEventListener('DOMContentLoaded', ()=>{
     //LOADING ANIMATION
      anime({
        targets: '#line-animate',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 2300,
        delay: 1000,
        width: ['0%', '50%'],
    })
    //TABLES
     anime({
        targets: 'table',
        opacity: 1,
        easing: 'easeOutExpo',
        duration: 2300,
        delay: (el, i) => 2200 + 100 * i,
        translateY: ['-30px', '0px'],
    })

})


/****************************************************************
::CRUD
***************************************************************/
//TIME FORMAT FROM 12H TO 24H with timePicker
 var timepicker = new TimePicker('newTime', {
    lang: 'en',
    theme: 'dark'
  });
  timepicker.on('change', function(evt) {
    var value = (evt.hour || '00') + ':' + (evt.minute || '00');
    evt.element.value = value;
  });

//INSERT - READ
$(document).on('click', '#btnInsert', function(){
    var time = $('#newTime').val();
    var task = $('#newTask').val();
        $('#list').children().last().append(`<tr>
        <td class="tblTime" contentEditable="false">${time} </td>
        <td class="tblTask" contentEditable="false">${task} </td>
        <td class="center-in_tbl"><span class="edit"><i class="far fa-edit"></i></span></td>
        <td class="center-in_tbl "><span class="delete"><i class="fas fa-trash-alt"></i></span></td>
        </tr>`)
})

// UPDATE
$(document).on('click', '.edit', function(){
    if($(this).html() == '<i class="far fa-edit"></i>'){

        $(this).parent().parent().find('.tblTime').css('backgroundColor', 'grey');
        $(this).parent().parent().find('.tblTime').attr('contentEditable', true).focus()
        $(this).parent().parent().find('.tblTask').css('backgroundColor', 'grey');
        $(this).parent().parent().find('.tblTask').attr('contentEditable', true).focus()
    $(this).parent().css('backgroundColor', 'grey');
    $(this).parent().siblings().css('backgroundColor', 'grey');
    $(this).html('<i class="fas fa-check"></i>')
    }else{
        $(this).parent().parent().find('.tblTime').css('backgroundColor', '#7385FF');
        $(this).parent().parent().find('.tblTime').attr('contentEditable', false).focus()
        $(this).parent().parent().find('.tblTask').css('backgroundColor', '#7385FF');
        $(this).parent().parent().find('.tblTask').attr('contentEditable', false).focus()
    $(this).parent().css('backgroundColor', '#7385FF');
    $(this).parent().siblings().css('backgroundColor', '#7385FF');
    $(this).html('<i class="far fa-edit"></i>')
    }
})

//DELETE
$(document).on('click', '.delete', function(){
    var divToDelete = $(this).parent().parent('tr');
    $(divToDelete).remove()
})


/**********************
 ::QUOTES
**********************/

var quotes = [
    "Don't cry because it's over, smile because it happened.― Dr. Seuss",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. ― Marilyn Monroe",
    "Be yourself; everyone else is already taken. ― Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. ― Albert Einstein",
    "So many books, so little time. ― Frank Zappa",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind. ― Bernard M. Baruch",
    "A room without books is like a body without a soul. ― Marcus Tullius Cicero",
    "You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth. ― William W. Purkey",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams. ― Dr. Seuss",
    "You only live once, but if you do it right, once is enough. ― Mae West",
    "Be the change that you wish to see in the world. ― Mahatma Gandhi"
]


$(document).on('click','#btnQuote', function(){
    var randomQuotes = Math.floor(Math.random() * (quotes.length))
    if($('#display-quote') !== ' '){
        $('#display-quote p:last-child').remove();
    }
    $('#display-quote').append(`<p>"${quotes[randomQuotes]}"</p>`)

})



/******************
 :: RESPONSIVE MENU
 ******************/

function responsiveMenu() {
    var x = document.getElementById("menu-nav");
    const h1 = document.getElementsByTagName('h1')[0];
    var quote = document.getElementById('display-quote');
    var weather = document.getElementById('showWeatherForecast');
    if (x.className === "menu-nav") {
        x.className += " responsive";
        h1.style.padding = "1em";
        if(quote.innerHTML === ""){
            weather.style.padding = "0em";
            weather.style.marginTop = "0px";
        }else{
            weather.style.padding = "1em";
            weather.style.marginTop = "0px";
            quote.style.marginTop = "0px"
        }

    } else {
        x.className = "menu-nav";
        h1.style.paddingTop = "3em"

        if(quote.innerHTML === ""){
                weather.style.padding = "0em";
                weather.style.marginTop = "0px";
            }else{
                weather.style.padding = "1em";
                weather.style.marginTop = "0px";
            }

    }
  }
