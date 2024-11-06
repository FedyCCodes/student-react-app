// StudentSubmitPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'

async function addNewStudent(student) {
  
  console.log('Adding new student:', student);
  
  // student.sId = Math.floor(Math.random() * 0xffffff).toString().padStart('0', 8)
  
  await fetch('http://localhost:3000/students', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(student)
  });
  
  
}

function StudentSubmitPage({
  
}) {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [major, setMajor] = useState('');
  const [school, setSchool] = useState('');

  // console.log(student)
  
  
  // 1. add onChange handlers to each input to update the state
  // 2. add onSubmit handler to the form to submit the data

  
  return (
    <div>
      <h1>Add a student</h1>
      <form >
        <input type="text" placeholder="First Name" onChange={(e)=>{
          setFirstName(e.target.value)
        }}/>
        <input type="text" placeholder="Last Name" onChange={(e)=>{
          setLastName(e.target.value)
        }}/>
        <input type="text" placeholder="Major" onChange={(e)=>{
          setMajor(e.target.value)
        }}/>
        <input type="text" placeholder="School" onChange={(e)=>{
          setSchool(e.target.value)
        }}/>
        
        <button type="button" onClick={function(){
          addNewStudent({
            firstName,
            lastName,
            major,
            school
          })
        }}>Submit</button>
      </form>
      <Link to="/">Go back</Link>
    </div>  
  );
}

export default StudentSubmitPage;

