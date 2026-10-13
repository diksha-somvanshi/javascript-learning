//destructuring 
const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor :"hitesh"
}
//course.courseInstructor--> repeatedly we have to do this while accessing properties

const {courseInstructor:instructor,coursename:name} = course
console.log(instructor)
console.log(name)
