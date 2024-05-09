function calculateBMI() {
  /*call DOM*/
    var weight = parseFloat(document.getElementById("weight").value);
 var height = parseFloat(document.getElementById("height").value) / 100;
 /*Konversi ke meter*/
  var bmi = weight / (height * height);
  var result = "BMI kamu: " + bmi.toFixed(2);
  /*check condition*/
    if (isNaN(bmi)) {
     result = "Silakan masukkan berat dan tinggi badan yang valid.";
    } else if (bmi < 18.5) {
   result += " (Berat badan kurang)";
    } else if (bmi >= 18.5 && bmi < 25) {
        result += " (Berat badan normal)";
    } else if (bmi >= 25 && bmi < 30) {
        result += " (Kegemukan)";
    } else {
        result += " (Obesitas)";
    }
/*show result BMI*/
    document.getElementById("result").innerHTML = result;
}
