window.addEventListener('DOMContentLoaded', () =>{


    const date = new Date(),
          day = date.getDay(),
          hours = date.getHours(),
          minute = date.getMinutes(),
          seconds = date.getSeconds(),
          title = document.querySelectorAll('.item__title'),
          monday = document.querySelectorAll('.monday'),
          tuesday = document.querySelectorAll('.tuesday'),
          wednesday = document.querySelectorAll('.wednesday'),
          thursday = document.querySelectorAll('.thursday'),
          friday = document.querySelectorAll('.friday'),
          zvonki = document.querySelectorAll('.zvonki'),
          lesson = document.querySelector('.lesson'),
          columns = document.querySelectorAll('.item__column');

    function boxShadow(){
        if (day == 1){
            columns[1].style.boxShadow ='1px 3px 3px 4px cyan';
        }
        if (day == 2){
            columns[2].style.boxShadow ='1px 3px 3px 4px cyan';
        }
        if (day == 3){
            columns[3].style.boxShadow ='1px 3px 3px 4px cyan';
        }
        if (day == 4){
            columns[4].style.boxShadow ='1px 3px 3px 4px cyan';
        }
        if (day == 5){
            columns[5].style.boxShadow ='1px 3px 3px 4px cyan';
        }
    }
    function changeTimeColor() {
        function addClassSix(day){
            if (hours == 8 && minute >= 0 && minute < 40 ){
                day[0].classList.add('green');
            }
            if (hours == 8 && minute >= 45 || hours == 9 && minute < 25 ){
                day[1].classList.add('green');
            }
            if (hours == 9 && minute >= 40 || hours == 10 && minute < 20 ){
                day[2].classList.add('green');
            }
            if (hours == 10 && minute >= 30 || hours == 11 && minute < 10 ){
                day[3].classList.add('green');
            }
            if (hours == 11 && minute >= 20 || hours == 12 && minute < 0 ){
                day[4].classList.add('green');
            }
            if (hours == 12 && minute >= 10 && minute < 50 ){
                day[5].classList.add('green');
            }
        }
        function addClassSeven(day){
            if (hours == 8 && minute >= 0 && minute < 40 ){
                day[0].classList.add('green');
            }
            if (hours == 8 && minute >= 45 || hours == 9 && minute < 25 ){
                day[1].classList.add('green');
            }
            if (hours == 9 && minute >= 40 || hours == 10 && minute < 20 ){
                day[2].classList.add('green');
            }
            if (hours == 10 && minute >= 30 || hours == 11 && minute < 10 ){
                day[3].classList.add('green');
            }
            if (hours == 11 && minute >= 20 || hours == 12 && minute < 0 ){
                day[4].classList.add('green');
            }
            if (hours == 12 && minute >= 10 && minute < 50 ){
                day[5].classList.add('green');
            }
            if (hours == 13 && minute >= 0 && minute < 40 ){
                day[6].classList.add('green');
            }
        }
        if (day != 6 && day != 0) {
            if (day == 1){
                title[0].classList.add('green', 'italic');
                addClassSix(monday);
            }
            if (day == 2){
                title[1].classList.add('green', 'italic');
                addClassSeven(tuesday);
            }
            if (day == 3){
                title[2].classList.add('green', 'italic');
               addClassSix(wednesday);
            }
            if (day == 4){
                title[3].classList.add('green','italic');
                addClassSeven(thursday);
            }
            if (day == 5){
                title[4].classList.add('green','italic');
                addClassSix(friday);
            }
            if (hours == 8 && minute > 0 && minute < 40 ){
                zvonki[0].classList.add('red');
            }
            if (hours == 8 && minute >= 45 || hours == 9 && minute < 25 ){
                zvonki[1].classList.add('red');
            }
            if (hours == 9 && minute >= 40 || hours == 10 && minute < 20 ){
                zvonki[2].classList.add('red');
            }
            if (hours == 10 && minute >= 30 || hours == 11 && minute < 10 ){
                zvonki[3].classList.add('red');
            }
            if (hours == 11 && minute >= 20 || hours == 12 && minute < 0 ){
                zvonki[4].classList.add('red');
            }
            if (hours == 12 && minute >= 10 && minute < 50 ){
                zvonki[5].classList.add('red');
            }
            if (hours == 13 && minute >= 0 && minute < 40 ){
                zvonki[6].classList.add('red');
            }
        }
    }
    function changeLessonStatus() {
        if (day == 6 || day == 0){
            lesson.remove();
        }
        if (day != 6 && day != 0){
            if (hours == 8 && minute >= 40 && minute < 45 ){
                lesson.style.color = 'rgb(255 249 53)';
                lesson.textContent = 'Перемена';
            }
            if (hours == 9 && minute >= 25 && minute < 40 ){
                lesson.style.color = 'rgb(255 249 53)';
                lesson.textContent = 'Перемена';
            }
            if (hours == 10 && minute >= 20 && minute < 30 ){
                lesson.style.color = 'rgb(255 249 53)';
                lesson.textContent = 'Перемена';
            }
            if (hours == 11 && minute >= 10 && minute < 20 ){
                lesson.style.color = 'rgb(255 249 53)';
                lesson.textContent = 'Перемена';
            }
            if (hours == 12 && minute >= 0 && minute < 10 ){
                lesson.style.color = 'rgb(255 249 53)';
                lesson.textContent = 'Перемена';
            }
            if (hours == 12 && minute >= 50 && minute < 60 ){
                lesson.style.color = 'rgb(255 249 53)';
                lesson.textContent = 'Перемена';
            }
            if (hours == 13 && minute >= 40 || hours >= 14 && minute >= 0 || hours < 8){
                lesson.style.color = 'rgb(0 149 255)';
                lesson.textContent = 'Внешкольное время';
            }
        }
    }
    function nextDay(){
        if (day == 0){
            title[0].classList.add('nextDay');
        }
        if (day == 1){
            title[1].classList.add('nextDay');
        }
        if (day == 2){
            title[2].classList.add('nextDay');
        }
        if (day == 3){
            title[3].classList.add('nextDay');
        }
        if (day == 4){
            title[4].classList.add('nextDay');
        }
    }
   
    /************************************TIMER ************************/
    
          let timeMonday = 12 * 3600 + 50 * 60,
          timeTuesday  = 13 * 3600 + 40 * 60,
          timeWednesday = 12 * 3600 + 50 * 60,
          timeThursday = 13 * 3600 + 40 * 60,
          timeFriday = 12 * 3600 + 50 * 60;
          const timerHours = document.querySelector('.timer-hours'),
          timerMinutes = document.querySelector('.timer-minutes'),
          timerSeconds = document.querySelector('.timer-seconds');
    
    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }
    function getTimeRemaining(endtime) {
        let date = new Date(),
            hou = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            timeNowSeconds = (hou * 3600) + (min * 60) + sec;
        const t = endtime - timeNowSeconds,
            hours = Math.floor(t / 3600),
            minutes = Math.floor(t / 60) % 60,
            seconds = (t) % 60;
            
            return {
                'total':t,
                'hours':hours,
                'minutes':minutes,
                'seconds':seconds
            };
    }
    
    function setClock(endtime){
        const timeInterval = setInterval(updateClock, 1000);

          updateClock();

          function updateClock(){
              const t = getTimeRemaining(endtime);

              timerHours.textContent = getZero(t.hours);
              timerMinutes.textContent = getZero(t.minutes);
              timerSeconds.textContent = getZero(t.seconds);

              if (t.total <= 0){
                  clearInterval(timeInterval);
              }
          }
    }

    if (day == 1){
        setClock(timeMonday);
    }
    if (day == 2){
        setClock(timeTuesday);
    }
    if (day == 3){
        setClock(timeWednesday);
    }
    if (day == 4){
        setClock(timeThursday);
    }
    if (day == 5){
        setClock(timeFriday);
    }
    function hideTimer(){
        if (day == 6 || day == 0 || hours < 8 || 
            ((day == 2 || day == 4) && (hours == 13 && minute >= 40)) ||
            ((day == 1 || day == 3 || day == 5) && (hours == 12 && minute >= 50 || hours >= 13 && minute >= 0)) ||
             (hours >= 14)){
            document.querySelector('.timer').style.display = 'none';
        }
    }

/********************************TIMER in Lesson********************************* */
      let oneLesson = 8 * 3600 + 40 * 60,
          twoLesson = 9 * 3600 + 25 * 60,
          threeLesson = 10 * 3600 + 20 * 60,
          fourLesson = 11 * 3600 + 10 * 60,
          fiveLesson = 12 * 3600,
          sixLesson = 12 * 3600 + 50 * 60,
          sevenLesson = 13 * 3600 + 40 * 60;
          let oneBreak = 8 * 3600 + 45 * 60,
            twoBreak = 9 * 3600 + 40 * 60,
            threeBreak = 10 * 3600 + 30 * 60,
            fourBreak = 11 * 3600 + 20 * 60,
            fiveBreak = 12 * 3600 + 10 * 60,
            sixBreak = 13 * 3600;
          const timerMinutes2 = document.querySelector('.timer-minutes2'),
                timerSeconds2 = document.querySelector('.timer-seconds2'),
                timerBody = document.querySelector(".timerlesson__body");

            function setClockTwo(endtime){
                const timeInterval = setInterval(updateClock, 1000);
        
                    updateClock();
        
                    function updateClock(){
                        const t = getTimeRemaining(endtime);
        
                        timerMinutes2.textContent = getZero(t.minutes);
                        timerSeconds2.textContent = getZero(t.seconds);
    
                        if (t.total <= 0){
                            clearInterval(timeInterval);
                        }
                    }
            }

            function createTimerSixLesson(){
                if (hours == 8 && minute > 0 && minute < 40){
                    setClockTwo(oneLesson);
                    timerBody.classList.add('endLesson');
                }
                if (hours == 8 && minute >= 45 || hours == 9 && minute < 25){
                    setClockTwo(twoLesson);
                    timerBody.classList.add('endLesson');
                }
                if (hours == 9 && minute >= 40 || hours == 10 && minute < 20){
                    setClockTwo(threeLesson);
                    timerBody.classList.add('endLesson');
                }
                if (hours == 10 && minute >= 30 || hours == 11 && minute < 10){
                    setClockTwo(fourLesson);
                    timerBody.classList.add('endLesson');
                }
                if (hours == 11 && minute >= 20 || hours == 12 && minute < 0){
                    setClockTwo(fiveLesson);
                    timerBody.classList.add('endLesson');
                }
                if (hours == 12 && minute >= 10 && minute < 50){
                    setClockTwo(sixLesson);
                    timerBody.classList.add('endLesson');
                }
            }

            function createTimerSevenLesson(){
                if (hours == 8 && minute > 0 && minute < 40){
                    setClockTwo(oneLesson);
                    timerBody.classList.add('endLesson');
                }
                if (hours == 8 && minute >= 45 || hours == 9 && minute < 25){
                    setClockTwo(twoLesson);
                    timerBody.classList.add('endLesson');
                }
                if (hours == 9 && minute >= 40 || hours == 10 && minute < 20){
                    setClockTwo(threeLesson);
                    timerBody.classList.add('endLesson');
                }
                if (hours == 10 && minute >= 30 || hours == 11 && minute < 10){
                    setClockTwo(fourLesson);
                    timerBody.classList.add('endLesson');
                }
                if (hours == 11 && minute >= 20 || hours == 12 && minute < 0){
                    setClockTwo(fiveLesson);
                    timerBody.classList.add('endLesson');
                }
                if (hours == 12 && minute >= 10 && minute < 50){
                    setClockTwo(sixLesson);
                    timerBody.classList.add('endLesson');
                }
                if (hours == 13 && minute >= 0 && minute < 40 ){
                    setClockTwo(sevenLesson);
                    timerBody.classList.add('endLesson');
                }
            }

            if (day == 1){
                createTimerSixLesson();
                changeTimerTwoStatusFive();
            }
            if (day == 2){
                createTimerSevenLesson();
                changeTimerTwoStatusSix();
            }
            if (day == 3){
                createTimerSixLesson();
                changeTimerTwoStatusFive();
            }
            if (day == 4){
                createTimerSevenLesson();
                changeTimerTwoStatusSix();
            }
            if (day == 5){
                createTimerSixLesson();
                changeTimerTwoStatusFive();
            }
            /***************************Timer in school break********************** */

            

            
            
            function changeTimerTwoStatusSix(){
                if (hours == 8 && minute >= 40 && minute < 45){
                    setClockTwo(oneBreak);
                    timerBody.classList.add('endSchoolBreak');
                }
                if (hours == 9 && minute >= 25 && minute < 40){
                    setClockTwo(twoBreak);
                    timerBody.classList.add('endSchoolBreak');
                }
                if (hours == 10 && minute >= 20 && minute < 30){
                    setClockTwo(threeBreak);
                    timerBody.classList.add('endSchoolBreak');
                }
                if (hours == 11 && minute >= 10 && minute < 20){
                    setClockTwo(fourBreak);
                    timerBody.classList.add('endSchoolBreak');
                }
                if (hours == 12 && minute >= 0 && minute < 10){
                    setClockTwo(fiveBreak);
                    timerBody.classList.add('endSchoolBreak');
                }
                if (hours == 12 && minute >= 50 && minute < 60){
                    setClockTwo(sixBreak);
                    timerBody.classList.add('endSchoolBreak');
                }
            }
            function changeTimerTwoStatusFive(){
                if (hours == 8 && minute >= 40 && minute < 45){
                    setClockTwo(oneBreak);
                    timerBody.classList.add('endSchoolBreak');
                }
                if (hours == 9 && minute >= 25 && minute < 40){
                    setClockTwo(twoBreak);
                    timerBody.classList.add('endSchoolBreak');
                }
                if (hours == 10 && minute >= 20 && minute < 30){
                    setClockTwo(threeBreak);
                    timerBody.classList.add('endSchoolBreak');
                }
                if (hours == 11 && minute >= 10 && minute < 20){
                    setClockTwo(fourBreak);
                    timerBody.classList.add('endSchoolBreak');
                }
                if (hours == 12 && minute >= 0 && minute < 10){
                    setClockTwo(fiveBreak);
                    timerBody.classList.add('endSchoolBreak');
                }
            }

            /************************************************************************* */
            function hideTimerTwo(){
                if (day == 6 || day == 0 || hours < 8 || 
                    ((day == 2 || day == 4) && (hours == 13 && minute >= 40)) ||
                    ((day == 1 || day == 3 || day == 5) &&
                     (hours == 12 && minute >= 50 || hours >= 13 && minute >= 0)) ||
                      (hours >= 14)){
                    document.querySelector('.timerlesson').style.display = 'none';
                }
            }

/********************************Modal******************************** */


/****************************************************************** */
    hideTimerTwo();
    hideTimer();
    nextDay();
    changeLessonStatus();
    changeTimeColor();
    boxShadow();
});



