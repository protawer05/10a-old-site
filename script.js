window.addEventListener('DOMContentLoaded', () =>{


    const date = new Date(),
          day = date.getDay(),
          hours = date.getHours(),
          minute = date.getMinutes(),
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
            columns[1].style.boxShadow ='1px 3px 3px 4px #98FF98';
        }
        if (day == 2){
            columns[2].style.boxShadow ='1px 3px 3px 4px #98FF98';
        }
        if (day == 3){
            columns[3].style.boxShadow ='1px 3px 3px 4px #98FF98';
        }
        if (day == 4){
            columns[4].style.boxShadow ='1px 3px 3px 4px #98FF98';
        }
        if (day == 5){
            columns[5].style.boxShadow ='1px 3px 3px 4px #98FF98';
        }
    }
    function changeTimeColor() {
        if (day != 6 && day != 0) {
            if (day == 1){
                title[0].classList.add('green', 'italic');
                if (hours == 8 && minute >= 0 && minute < 40 ){
                    monday[0].classList.add('green');
                }
                if (hours == 8 && minute >= 45 || hours == 9 && minute < 25 ){
                    monday[1].classList.add('green');
                }
                if (hours == 9 && minute >= 40 || hours == 10 && minute < 20 ){
                    monday[2].classList.add('green');
                }
                if (hours == 10 && minute >= 30 || hours == 11 && minute < 10 ){
                    monday[3].classList.add('green');
                }
                if (hours == 11 && minute >= 20 || hours == 12 && minute < 0 ){
                    monday[4].classList.add('green');
                }
                if (hours == 12 && minute >= 10 && minute < 50 ){
                    monday[5].classList.add('green');
                }
            }
            if (day == 2){
                title[1].classList.add('green', 'italic');
                if (hours == 8 && minute >= 0 && minute < 40 ){
                    tuesday[0].classList.add('green');
                }
                if (hours == 8 && minute >= 45 || hours == 9 && minute < 25 ){
                    tuesday[1].classList.add('green');
                }
                if (hours == 9 && minute >= 40 || hours == 10 && minute < 20 ){
                    tuesday[2].classList.add('green');
                }
                if (hours == 10 && minute >= 30 || hours == 11 && minute < 10 ){
                    tuesday[3].classList.add('green');
                }
                if (hours == 11 && minute >= 20 || hours == 12 && minute < 0 ){
                    tuesday[4].classList.add('green');
                }
                if (hours == 12 && minute >= 10 && minute < 50 ){
                    tuesday[5].classList.add('green');
                }
                if (hours == 13 && minute >= 0 && minute < 40 ){
                    tuesday[6].classList.add('green');
                }
            }
            if (day == 3){
                title[2].classList.add('green', 'italic');
                
            if (hours == 8 && minute >= 0 && minute < 40 ){
                wednesday[0].classList.add('green');
            }
            if (hours == 8 && minute >= 45 || hours == 9 && minute < 25 ){
                wednesday[1].classList.add('green');
            }
            if (hours == 9 && minute >= 40 || hours == 10 && minute < 20 ){
                wednesday[2].classList.add('green');
            }
            if (hours == 10 && minute >= 30 || hours == 11 && minute < 10 ){
                wednesday[3].classList.add('green');
            }
            if (hours == 11 && minute >= 20 || hours == 12 && minute < 0 ){
                wednesday[4].classList.add('green');
            }
            if (hours == 12 && minute >= 10 && minute < 50 ){
                wednesday[5].classList.add('green');
            }
            }
            if (day == 4){
                title[3].classList.add('green','italic');
                if (hours == 8 && minute >= 0 && minute < 40 ){
                    thursday[0].classList.add('green');
                }
                if (hours == 8 && minute >= 45 || hours == 9 && minute < 25 ){
                    thursday[1].classList.add('green');
                }
                if (hours == 9 && minute >= 40 || hours == 10 && minute < 20 ){
                    thursday[2].classList.add('green');
                }
                if (hours == 10 && minute >= 30 || hours == 11 && minute < 10 ){
                    thursday[3].classList.add('green');
                }
                if (hours == 11 && minute >= 20 || hours == 12 && minute < 0 ){
                    thursday[4].classList.add('green');
                }
                if (hours == 12 && minute >= 10 && minute < 50 ){
                    thursday[5].classList.add('green');
                }
                if (hours == 13 && minute >= 0 && minute < 40 ){
                    thursday[6].classList.add('green');
                }
            }
            if (day == 5){
                title[4].classList.add('green','italic');
                if (hours == 8 && minute >= 0 && minute < 40 ){
                    friday[0].classList.add('green');
                }
                if (hours == 8 && minute >= 45 || hours == 9 && minute <=25 ){
                    friday[1].classList.add('green');
                }
                if (hours == 9 && minute >= 40 || hours == 10 && minute < 20 ){
                    friday[2].classList.add('green');
                }
                if (hours == 10 && minute >= 30 || hours == 11 && minute < 10 ){
                    friday[3].classList.add('green');
                }
                if (hours == 11 && minute >= 20 || hours == 12 && minute < 0 ){
                    friday[4].classList.add('green');
                }
                if (hours == 12 && minute >= 10 && minute < 50 ){
                    friday[5].classList.add('green');
                }
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
                lesson.style.color = 'rgb(23, 151, 0)';
                lesson.textContent = 'Сейчас перемена';
            }
            if (hours == 9 && minute >= 25 && minute < 40 ){
                lesson.style.color = 'rgb(23, 151, 0)';
                lesson.textContent = 'Сейчас перемена';
            }
            if (hours == 10 && minute >= 20 && minute < 30 ){
                lesson.style.color = 'rgb(23, 151, 0)';
                lesson.textContent = 'Сейчас перемена';
            }
            if (hours == 11 && minute >= 10 && minute < 20 ){
                lesson.style.color = 'rgb(23, 151, 0)';
                lesson.textContent = 'Сейчас перемена';
            }
            if (hours == 12 && minute >= 0 && minute < 10 ){
                lesson.style.color = 'rgb(23, 151, 0)';
                lesson.textContent = 'Сейчас перемена';
            }
            if (hours == 12 && minute >= 50 && minute < 60 ){
                lesson.style.color = 'rgb(23, 151, 0)';
                lesson.textContent = 'Сейчас перемена';
            }
            if (hours == 13 && minute >= 40 || hours >= 14 && minute >= 0 || hours < 8){
                lesson.style.color = '#008B8B';
                lesson.textContent = 'Внешкольное время';
            }
        }
    }
    changeLessonStatus();
    changeTimeColor();
    boxShadow();
});



