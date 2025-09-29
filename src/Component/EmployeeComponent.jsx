import React ,{useState} from 'react'
import { createEmployee } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

export const EmployeeComponent = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const navigate = useNavigate();

    function saveEmployee(e){
        e.preventDefault();
        const employee = {firstName,lastName,email};
        console.log(employee);
        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigate('/employees');
        })

    }
  return (
    
    <div className='container'>
        <h2 className='text-center'>Add Employee</h2>
        <form>
            <div className='form-group mb-2'>
                <label className='form-label'>First Name :</label>
                <input 
                type='text'
                placeholder='Enter First Name'
                name='firstName'
                className='form-control'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                ></input>
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>Last Name :</label>
                <input 
                type='text'
                placeholder='Enter Last Name'
                name='lastName'
                className='form-control'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                ></input>
            </div>

            <div className='form-group mb-2'>
                <label className='form-label'>Email :</label>
                <input 
                type='text'
                placeholder='Enter Email'
                name='email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ></input>
            </div>
    </form>
            <button className='btn btn-success' onClick={saveEmployee} >Submit</button>
            </div>
  )
}
