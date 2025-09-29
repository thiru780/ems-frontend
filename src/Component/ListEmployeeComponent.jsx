import React, { useEffect ,useState} from 'react'
import { list_getEmployees } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {

    const navigate = useNavigate();

    // Fetch employees from the API

    const [employees,setEmployees] = React.useState([])

    useEffect(() => {

        list_getEmployees()
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the employees!", error);
            })
    }, [])  
        

   function addNewEmployee(){
        navigate('/add-employee')
   }   
  return (
    <div className='container'>
    <h2>ListEmployeeComponent</h2>
    <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
<table className='table table-striped table-bordered'>
        
<thead>

            <tr>
                <th>Employee ID</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
            </tr>
        
</thead>
<tbody>
            { employees.map(employee => (
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                </tr>
            ))}
        </tbody>
</table>

</div>
  )
}

export default ListEmployeeComponent