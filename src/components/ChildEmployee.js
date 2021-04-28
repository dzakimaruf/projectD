import React from 'react'

export default function ChildEmployee(props) {
    
    return (
        <div>
            <p>EmpId : {props.empId}</p>
            <p>Fullname : {props.empName}</p>
            <p>Salary : {props.salary}</p>
            <button type="button"
                onClick={()=>props.upSalary(props.empId)}
            >Up Salary</button>
            <button type="button"
                onClick={()=>props.downSalary(props.empId)}
            >Down Salary</button>
        </div>
    )
}