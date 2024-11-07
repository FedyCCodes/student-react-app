// StudentPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

async function fetchStudentData(id) {
  
  try {
    
    const response = await fetch(`${import.meta.env.VITE_API_URL}/students` + id);
    // gets the student data
    
    const data = await response.json();
    // gets the json data
    
    console.log(data);
    
    return data;
    
  } catch (error) {
    
    console.log(error);
    
  }
  
  return [];
  
}


function StudentPage({
  
}) {
  
  const [student, setStudent] = useState(null);
  
  console.log(student)
  
  const { id } = useParams();
  
  useEffect(()=>{
    
    const refetch = async function(){
      var data = await fetchStudentData(id);
      setStudent(data);
      console.log('got data')
    };
    
    refetch();
    
  }, [id])
  
  return (
    <div>{student != null ? 
    (<>
      <div>
        {student.lastName}, {student.firstName}
      </div>
      <ul>
        <li>
          <strong>ID:</strong> {student.sId}
        </li>
        <li>
          <strong>School:</strong> {student.school}
        </li>
        <li>
          <strong>Major:</strong> {student.major}
        </li>
        <li>
          <strong>Grade:</strong> {student.grade}
        </li>
      </ul>
      </>) : (
        <>
          Loading
        </>
      )}
      <Link to="/">Go back</Link>
    </div>  
  );
}

export default StudentPage;

