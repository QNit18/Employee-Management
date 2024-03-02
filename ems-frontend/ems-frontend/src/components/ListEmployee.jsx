import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployee = () => {

    const [employees, setEmployees] = useState([]);
    const navigiator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    function getAllEmployees() {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployees() {
        navigiator('/add-employee');
    }

    function updateEmployee(id) {
        navigiator(`/edit-employee/${id}`);
    }

    function deleteEmployeeById(id) {
        console.log(id + ' was deleted');
        deleteEmployee(id).then(() => {
            getAllEmployees();
        }).catch(error =>
            console.error(error)
        );
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List Employees</h2>
            <button className='btn btn-primary mb-3' onClick={addNewEmployees}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee) =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                    <button className='btn btn-warning' onClick={() => deleteEmployeeById(employee.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployee