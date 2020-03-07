let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0,
        total = 0;
        
        totalValue.innerHTML = '0';

        function calcPersonSum() {
            personSum = +this.value;
            total = (daysSum + personSum) * 4000;

            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        }

        function calcDaysSumm() {
            daysSum = +this.value;
            total = (daysSum + personSum) * 4000;

            if (persons.value == '' || restDays.value == '' ) {
                totalValue.innerHTML = 0;
            } else {
                totalValue.innerHTML = total;
            }
        }

        function calcPlace() {
            if (restDays.value == '' || persons.value == '') {
                totalValue.innerHTML = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
        }

        persons.addEventListener('change', calcPersonSum);
        restDays.addEventListener('change', calcDaysSumm);
        place.addEventListener('change', calcPlace);