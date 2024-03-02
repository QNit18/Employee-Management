import axios from 'axios';

const RES_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(RES_API_BASE_URL);

export const createEmploy = (employee) => axios.post(RES_API_BASE_URL, employee);

export const getEmployee = (employeeId) => axios.get(RES_API_BASE_URL + '/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(RES_API_BASE_URL + '/' + employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(RES_API_BASE_URL + '/' + employeeId);