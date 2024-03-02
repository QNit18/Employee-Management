import React, { useEffect, useState } from 'react'
import { createEmploy, getEmployee, updateEmployee } from '../service/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const { id } = useParams();

    const navigator = useNavigate();

    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        if (validationForm()) {
            const employee = { firstName, lastName, email }
            console.log(employee);

            if (id) {
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(err => {
                    console.log(err);
                });
            } else {
                createEmploy(employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(err => {
                    console.log(err);
                });
            }
        }
    }

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.log(error);
            })
        }
    }, [id]);

    function validationForm() {
        let valid = true;

        const errorsCopy = { ...errors };

        if (firstName.trim().length > 0) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'Required';
            valid = false;
        }

        if (lastName.trim().length > 0) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = 'Required';
            valid = false;
        }

        if (email.trim().length > 0) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'Required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitles() {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            return <h2 className='text-center'>Add Employee</h2>
        }
    }


    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='card col-md-6 offset-md-3 '>
                    {
                        pageTitles()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>
                                <input
                                    type='text'
                                    placeholder='First Name'
                                    name='firstName'
                                    value={firstName}
                                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFirstName(e.target.value)}
                                >
                                </input>
                                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input
                                    type='text'
                                    placeholder='Last Name'
                                    name='lastName'
                                    value={lastName}
                                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                    onChange={(e) => setLastName(e.target.value)}
                                >
                                </input>
                                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email</label>
                                <input
                                    type='email'
                                    placeholder='Email Address'
                                    name='email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>

                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent 