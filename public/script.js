function hide_student_details(){
    document.getElementById('student_details').hidden = false;
    document.getElementById('LoggingFAN').required = false;
    document.getElementById('LoggingStudentID').required = false;
  }

function show_student_details(){
   document.getElementById('student_details').hidden = true;
   document.getElementById('LoggingFAN').required = true;
   document.getElementById('LoggingStudentID').required = true;
}


function initial_questions(){
  document.getElementById('initial_questions').hidden = false;
  document.getElementById('secondary_questions').hidden = true;
  document.getElementById('back_button').hidden = true;
  document.getElementById('next_button').hidden = false;
  document.getElementById('submit_button').hidden = true;
}

function secondary_questions(){
  console.log("secondary_questions");
  document.getElementById('initial_questions').hidden = true;
  document.getElementById('secondary_questions').hidden = false;
  document.getElementById('back_button').hidden = false;
  document.getElementById('next_button').hidden = true;
  document.getElementById('submit_button').hidden = false;
}



function fade(element) {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 50);
}

function unfade(element) {
  var op = 0.1;  // initial opacity
  element.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 10);
}