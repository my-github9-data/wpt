function Addition() {
  var refToNum1 = document.getElementById("myNum1");
  var refToNum2 = document.getElementById("myNum2");
  console.log(typeof(refToNum1.value));
  var result = parseInt(refToNum1.value) + parseInt(refToNum2.value);

  var refToResult = document.getElementById("myRes");
  refToResult.value = result;
}

// The parseInt function is used because the value attribute of an HTML input element returns a string, not a number. If you try to perform mathematical operations directly on string values, JavaScript will concatenate the strings instead of performing arithmetic operations.

function Substraction() {
  var refToNum1 = document.getElementById("myNum1");
  var refToNum2 = document.getElementById("myNum2");
  var result = parseInt(refToNum1.value) - parseInt(refToNum2.value);

  var refToResult = document.getElementById("myRes");
  refToResult.value = result;
}

function Multiplication() {
  var refToNum1 = document.getElementById("myNum1");
  var refToNum2 = document.getElementById("myNum2");
  var result = parseInt(refToNum1.value) * parseInt(refToNum2.value);

  var refToResult = document.getElementById("myRes");
  refToResult.value = result;
}

function Division() {
  var refToNum1 = document.getElementById("myNum1");
  var refToNum2 = document.getElementById("myNum2");
  var result = parseInt(refToNum1.value) / parseInt(refToNum2.value);

  var refToResult = document.getElementById("myRes");
  refToResult.value = result;
}
