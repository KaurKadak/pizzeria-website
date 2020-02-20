var timepicker = document.querySelector("#timepicker-input")
var dropdownTimes = document.querySelector(".dropdown-times")
var times = document.querySelectorAll(".time-btn")

timepicker.addEventListener("click", function(){
    dropdownTimes.classList.toggle("not-hidden")
})

for (let i = 0; i < times.length; i++){
    times[i].addEventListener("click", function(){
        var timeOfBooking = this.value
        timepicker.value = timeOfBooking
        timepicker.innerHTML = timeOfBooking
        dropdownTimes.classList.toggle("not-hidden")
    })
}
