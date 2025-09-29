import axios from  'axios'

const REST_API_BASE_URL = 'http://localhost:8080/api/v1/employees';

export const list_getEmployees = () => axios.get(REST_API_BASE_URL+'/getAllEmployees');

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL+'/addEmployee',employee);

