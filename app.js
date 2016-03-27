document.addEventListener('DOMContentLoaded', function() {
  var go = document.getElementById('go');
  var list = document.getElementById('list');
  var heading = document.getElementById('subHeading');

  go.addEventListener('click', function(event) {
    event.preventDefault();
    list.innerHTML = "";
    fizzBuzz(document.getElementById('number').value);
  });

  function fizzBuzz(num) {
    var number = parseInt(num);
    if (isNaN(number)) {
      heading.textContent = "Did you give me a whole number? Try again!";
      return;
    } else if (typeof number === "number") {
      var i = 1;
      while (i <= number) {
        if (i % 3 === 0 && i % 5 === 0) {
          list.innerHTML += "<li>FizzBuzz</li>";
        } else if (i % 3 === 0) {
          list.innerHTML += "<li>Fizz</li>";
        } else if (i % 5 ===0) {
          list.innerHTML += "<li>Buzz</li>";
        } else {
          list.innerHTML += "<li>" + i + "</li>"
        }
        i++
      } 
    }
  } 
});


