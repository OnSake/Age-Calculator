const dayInput = document.getElementById("day-input"),
      dayLabel = document.getElementById("day-label"),
      daySpan = document.getElementById("day-span"),
      monthInput = document.getElementById("month-input"),
      monthSpan = document.getElementById("month-span"),
      monthLabel = document.getElementById("month-label"),
      yearInput = document.getElementById("year-input"),
      yearSpan = document.getElementById("year-span"),
      yearLabel = document.getElementById("year-label"),
      verificationStatut = document.getElementById("verification-statut")

var input_verification = 0

function dayInputVerification() {
  const errorMessage = document.getElementById("day-error-message")
  if (dayInput.value > 31 || dayInput.value < 1){
    dayInput.classList.add('error_input')
    dayLabel.classList.add('error_label')
    errorMessage.classList.add('active_error')
    input_verification += 1
  }
  else{
    dayInput.classList.remove('error_input')
    dayLabel.classList.remove('error_label')
    errorMessage.classList.remove('active_error')
    input_verification -= 1
  }
}

function monthInputVerification() {
  const errorMessage = document.getElementById("month-error-message")

  if (monthInput.value > 12 || monthInput.value < 1){
    monthInput.classList.add('error_input')
    monthLabel.classList.add('error_label')
    errorMessage.classList.add('active_error')
    input_verification += 1
  }
  else{
    monthInput.classList.remove('error_input')
    monthLabel.classList.remove('error_label')
    errorMessage.classList.remove('active_error')
    input_verification -= 1
  }
}

function yearInputVerification() {
  const errorMessage = document.getElementById("year-error-message")
  if(yearInput.value < 0 || yearInput.value === ""){
    yearInput.classList.add('error_input')
    yearLabel.classList.add('error_label')
    errorMessage.classList.add('active_error')
    input_verification += 1
  }
  else{
    yearInput.classList.remove('error_input')
    yearLabel.classList.remove('error_label')
    errorMessage.classList.remove('active_error')
    input_verification -= 1
  }
}

function inputVerification(){
  dayInputVerification()
  monthInputVerification()
  yearInputVerification()
}



function calculAge() {
  input_verification = 0
  inputVerification()
  if (input_verification === -3){
    const date = new Date(),
          day = date.getDate(),
          month = date.getMonth(),
          year = date.getFullYear()

    var yearAge = year - yearInput.value,
        monthAge = month - monthInput.value + 1,
        dayAge = day - dayInput.value

    if (monthAge < 0){
      yearAge -= 1
      monthAge += 12
    }
    if (dayAge < 0){
      monthAge -= 1
      if(monthAge === 2){
        dayAge += 28
      }
      if (monthAge%2 == 0){
        dayAge += 31
      }
      else{
        dayAge += 30
      }
    }
    yearSpan.textContent = yearAge
    monthSpan.textContent = monthAge
    daySpan.textContent = dayAge
  }
  else{
    return
  }
  
}