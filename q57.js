//Find the Average Grade: Given a list of grades, calculate the average grade.
// A list of grades
var grades = [88, 94, 75, 99, 77];
// Calculates the average grade
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
// Shows the average grade
console.log(averageGrade);
