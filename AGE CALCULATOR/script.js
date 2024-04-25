var calculate_btn = document.getElementById('calc_btn'),
    calc_age = document.getElementById('calculate_age');

calculate_btn.addEventListener('click', function(){
    var birthdate = document.getElementById('bd').value;
    birthdate = new Date(birthdate);
    //alert(birthdate);
    var todayDate = new Date();
    //alert(todayDate);
    total_age = Date.now() - birthdate.getTime();
    age_year = new Date(total_age);
    age_year = Math.abs(age_year.getUTCFullYear() - 1970);
    function agemonth(){
        if (todayDate.getMonth() >= birthdate.getMonth()){
            if(todayDate.getDate() >= birthdate.getDate()){
                return todayDate.getMonth() - birthdate.getMonth();
            }else{
                if((todayDate.getMonth() - 1) >= birthdate.getMonth()){
                    return(todayDate.getMonth() -1) - birthdate.getMonth();
                }else{
                    return ((todayDate.getMonth() -1) + 12) - birthdate.getMonth()
                }
            }
        }
    }

    function getday(){
        if (todayDate.getDate() > birthdate.getDate()){
            return todayDate.getDate() - birthdate.getDate();
        }else if(todayDate.getDate() == birthdate.getDate()){
            return todayDate.getDate() - birthdate.getDate();
        } else{
            var calDate = new Date(birthdate.getUTCFullYear(), birthdate.getMonth(),0);
            return (todayDate.getDate() + calDate.getDate()) - birthdate.getDate();
        }
    }
    calc_age.innerHTML = "Your Age "+ age_year + "Years " + agemonth() + " Months" +  getday() + " Days"
})