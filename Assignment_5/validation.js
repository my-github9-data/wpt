function validate(id, errorid, errorMessage) {
  
  var refToControl = document.getElementById(id);
  var refToErrorId = document.getElementById(errorid);

  if (refToControl.value == "") {
    refToErrorId.innerText = errorMessage;
  } else {
    refToErrorId.innerText = "";
    console.log(refToControl.value);
  }
}
