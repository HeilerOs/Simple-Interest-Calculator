function func1() {
    var principal = document.getElementById("principal").value;
    var interes = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * interes /100) ;
    var year1 = new Date().getFullYear()+parseInt(years);
    var texto = `if you deposit ${principal} at interest rate of ${interes} % you will recive an amount of ${interest}, in the year ${year1}`
   
    document.getElementById("interes").innerText= texto;
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
