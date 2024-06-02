document.getElementById("calculateButton").addEventListener("click", calculateCGPA);

function calculateCGPA() {
    var semno = parseInt(document.getElementById("semno").value);
    var PCGPA = parseFloat(document.getElementById("pcgpa").value);
    var GPA = parseFloat(document.getElementById("gpa").value);

    var tGPA = PCGPA*(semno-1)+GPA;
    var cgpa = (tGPA / semno).toFixed(2);

    document.getElementById("result").innerHTML = "<center>Your CGPA is: " + cgpa + "</center>";
    
    // Prevent form submission
    return false;
}
