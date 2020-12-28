import { useState } from "react";
import {CourseCard} from "./components/CourseCard";

function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({name:"",grd:"A",crd:"1"});
  const [GPA, setGPA] = useState(4.0);

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA(cc) {
    // TODO
    var Real_GPA     = 0
    var Real_CREDIT  = 0 
    var cal_gpa      = 0
    cc.forEach((item) => {
      switch(item.grd){
        case 'A' :
          Real_GPA = 4
          Real_CREDIT += Number(item.crd) 
          cal_gpa += Real_GPA * Number(item.crd)
          break
        case 'B+' :
          Real_GPA = 3.5
          Real_CREDIT += Number(item.crd)
          cal_gpa += Real_GPA * Number(item.crd)
          break
        case 'B' :
          Real_GPA = 3
          Real_CREDIT += Number(item.crd)
          cal_gpa += Real_GPA * Number(item.crd)
          break
        case 'C+' :
          Real_GPA = 2.5
          Real_CREDIT += Number(item.crd)
          cal_gpa += Real_GPA * Number(item.crd)
          break
        case 'C' :
          Real_GPA = 2
          Real_CREDIT += Number(item.crd)
          cal_gpa += Real_GPA * Number(item.crd)
          break
        case 'D+' :
          Real_GPA = 1.5
          Real_CREDIT += Number(item.crd)
          cal_gpa += Real_GPA * Number(item.crd)
          break
        case 'D' :
          Real_GPA = 1
          Real_CREDIT += Number(item.crd)
          cal_gpa += Real_GPA * Number(item.crd)
          break
        case 'F' :
          Real_GPA = 0
          Real_CREDIT += Number(item.crd)
          cal_gpa += Real_GPA * Number(item.crd)
          break
      }  
    });
    setGPA(cal_gpa / Real_CREDIT) 
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event 
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    console.log(inputData.name)
    const course = [...myCourses,inputData]
    setMyCourse(course)
    // recalculate GPA
    calculateGPA(course);
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id 
   */
  function onDeleteCourse(id) {
    // TODO
    const course = myCourses.filter(item => {
      return item.name !== id
    })
    setMyCourse(course)
    calculateGPA(course)
  }

  return (
    <div className="container mx-auto h-screen">
      <h1 className="text-center text-4xl p-3 tracking-widest">
        GPA CALCULATOR
      </h1>
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
        <h1 className="text-2xl my-3">My courses</h1>
        {/* TODO display courses */}
        {myCourses.map(item => {
          return <CourseCard name ={item.name} grd = {item.grd} crd ={item.crd} del={onDeleteCourse} />
        })}
        <select onChange = { e => 
            setInputData({...inputData,crd: e.currentTarget.value}) 
          }>
          {credit.map(item => {
            return <option value={item}>{item}</option>
          })}
        </select>     
        <select onChange = { e => 
           setInputData({...inputData,grd: e.currentTarget.value}) 
          }>
          {grade.map(item => {
            return <option value={item}>{item}</option>
          })}
        </select>    
        <form onSubmit ={
          e => addCourse(e)}>
          <input type="text" onChange = { e => 
            setInputData({...inputData,name: e.currentTarget.value}) 
          }/>
            <button type="submit">+</button>
       </form>
      </div>
      {/* TODO add course input form */}
      {/* TODO display calculated GPA */}
      <p>{GPA}</p>
    </div>
  );
}

export default App;