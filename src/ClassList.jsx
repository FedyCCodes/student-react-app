// ClassList.jsx

import React, { useState, useEffect } from "react";
import studentList from './studentList.js';
import { StudentInfo } from './StudentInfo.jsx';
import { Link } from 'react-router-dom'

// 

export function ClassList() {
  
  const [students, setStudents] = useState([]);
  
  useEffect( () => {
    
    console.log("students", students);
    
    var runData = async () => {
      
      try {
        
        // let url = "https://json.link/oJbmHxLn8f.json";
        const url = `${import.meta.env.VITE_API_URL}/students`
        
        let res = await fetch(url);
        // gets the result
        
        let data = await res.json();
        // gets the json
        
        console.log("Success", data);
        
        setStudents(data.slice());
        
      } catch (e) {
        
        console.log("Error", e);
        
      }
    }
    
    runData();
    
  }, []);
  
  /*
  <button onClick={async () => {
        
        
      }}>Add a new Student</button>
      
  */
  
  return (
    <div className="flex flex-col h-screen my-auto items-center bgimg bg-cover">
      <h1 className="red-text">Welcome to CTP</h1>
      <p>List of Students</p>
      
      {students.map((student) => (
        <Link to={`/student/${student.sId}`} key={student.sId}>
        <StudentInfo {...student} key={student.sId} />
        </Link>
      ))}
      <Link to="/student/submit">
        Submit Student
      </Link>
      
      <button onClick={() => {
        
        
        setStudents(
          students.slice(0, students.length - 1)
          // (oldStudentList.length > 0 ? oldStudentList.slice(0, oldStudentList.length - 1) : [])
        );
        // he used a function because he wanted to refer to the old state
        
        
        
        
      }}>Remove last student</button>
      
    </div>
  );
}

// <StudentInfo firstName="Fedy" lastName="Cherif" sId={100} major="Computer Science" school="Queens College"/>
