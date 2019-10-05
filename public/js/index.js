// Get references to parent.html page elements
var stuNameID = $(".stuNameID");
var pillarOne = $(".pilOne");
var pillarTwo = $(".pilTwo");
var pillarThree = $(".pilThree");
var pillarFour = $(".pilFour");
var missingWork = $(".pilFive");
var teacherComment = $(".comToPost");

// Get references to teacher.html page elements
var teacherStuName = $(".studentName");
var teacherStuId = $(".stuId");

// The API object contains methods for each kind of request we'll make.
var API = {
  // This function is ran when teacher enters id number (WORKS)
  getStudentbyId: function (id) {
    return $.ajax({
      url: `api/classrooms/${id}`,
      type: "GET"
    }).then(function (data) {
      teacherStuName.append("Student Name: " + data.name);
      teacherStuId.append(data.studentid)
      console.log("Student Name: " + data.name + "Student Id: " + data.studentid);
    });
  },
  // This function is ran when parent enters id number(WORKS)
  getClassroomsbyId: function (id) {
    return $.ajax({
      url: `/api/classrooms/${id}`,
      type: "GET"
    }).then(function (data) {
      stuNameID.append("Student Name: " + data.name + "<br>" + "Student Id: " + data.studentid);

      console.log("Student Name: " + data.name + "Student Id: " + data.studentid);

      pillarOne.append(data.pillar1);
      console.log("Pillar1: " + data.pillar1);

      pillarTwo.append(data.pillar2);
      console.log("Pillar2: " + data.pillar2);

      pillarThree.append(data.pillar3);
      console.log("Pillar3: " + data.pillar3);

      pillarFour.append(data.pillar4);
      console.log("Pillar4: " + data.pillar4);

      missingWork.append(data.missingwork);
      console.log("Missing Work: " + data.missingwork);

      var databaseColor = data.color;

      if (databaseColor === 'blue') {
        $('.behavColor').addClass('bg-primary');
       }else if(databaseColor === 'Green'){
        $('.behavColor').addClass('bg-success');
       }else if(databaseColor === 'Yellow'){
        $('.behavColor').addClass('bg-warning');
       }else if(databaseColor === 'Orange'){
        $('.behavColor').addClass('bg-orange');
       }else if(databaseColor === 'Red'){
        $('.behavColor').addClass('bg-danger');
       };
       console.log("Student average color: " + data.color);
       console.log("Student average color: " + databaseColor);

      teacherComment.append(data.descriptioncomments);
      console.log(data.descriptioncomments);
    });
  }
};







