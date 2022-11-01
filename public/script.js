function hide_student_details(){
    // document.getElementById('student_details').hidden = false;
    // document.getElementById('LoggingFAN').required = false;
    // document.getElementById('LoggingStudentID').required = false;
  }

function show_student_details(){
  //  document.getElementById('student_details').hidden = true;
  //  document.getElementById('LoggingFAN').required = true;
  //  document.getElementById('LoggingStudentID').required = true;
}


function initial_questions(){
  document.getElementById('initial_questions').hidden = true;
  document.getElementById('secondary_questions').hidden = false;
}

function secondary_questions(){
  console.log("secondary_questions");
  document.getElementById('initial_questions').hidden = true;
  document.getElementById('secondary_questions').hidden = false;
}



