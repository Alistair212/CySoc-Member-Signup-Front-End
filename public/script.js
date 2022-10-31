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