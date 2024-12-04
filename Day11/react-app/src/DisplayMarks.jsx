import React from 'react'
import Marks from './Marks';
const DisplayMarks = () => {
    const students=[
        {name:'Abhishek',roll:87876,m1:98,m2:89,m3:58},
        {name:'Aviral',roll:87877,m1:98,m2:89,m3:58},
        {name:'Aditya',roll:87878,m1:98,m2:89,m3:58},
        {name:'Aakash',roll:87879,m1:98,m2:89,m3:58},
        {name:'Aadya',roll:87880,m1:98,m2:89,m3:58},
        {name:'Aryan',roll:87881,m1:98,m2:89,m3:58},
    ];
  return (
    <div>
    {students.map((Student,index)=>(<Marks key={index} name={Student.name} roll={Student.roll} m1={Student.m1} m2={Student.m2} m3={Student.m3}/>
        ))}
    </div>
  );
};

export default DisplayMarks