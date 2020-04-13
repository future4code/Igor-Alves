//produce a listing of student full name and how many courses he/she is taking
function produceReport(db, callback) {
    var students = db.collection('students');
    var courses = db.collection('courses');
    var instructors = db.collection('instructors');

    var studentsName = []
    for(i=0; i < students.length; i++){
        studentsName.push(students[i].name);
    }



    // After creating the listing into coursereport collection, call callback() function
    callback(studentsName);
}



module.exports = produceReport;