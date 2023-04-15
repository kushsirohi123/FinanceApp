// LOAN CALCULATOR SCRIPT
// VARIBLES    

var LoanA = document.getElementById("loanA");
var time = document.getElementById("time");
var rate = document.getElementById("rate");
var Result = document.getElementById("result");

// CALC FUNCTION
function CALC() {
    // GETS THE VALUES FROM THE VARS ABOVE AND MAKES A NEW UPDATED ONES
    var loanAmount = parseFloat(LoanA.value);
    // CONVERTS YEARS TO MONTHS
    var loanTerm = parseFloat(time.value) * 12;
    // DIVIDES TO GET THE REAL NUMBER 5% = 0.05
    var interestRate = (parseFloat(rate.value) / 100) / 12;
    var monthlyPayment = ((loanAmount * interestRate * Math.pow((1 + interestRate), loanTerm)) / (Math.pow((1 + interestRate), loanTerm) - 1)).toFixed(2);

    Result.innerHTML = "Your monthly repayment amount is $" + monthlyPayment;
}
