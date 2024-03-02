package net.Qnit18.emsbackend.service;

import net.Qnit18.emsbackend.dto.EmployeeDTO;
import net.Qnit18.emsbackend.entity.Employee;

import java.util.List;

public interface EmployeeService {
    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);

    EmployeeDTO getEmployeeById(Long employeeId);

    List<EmployeeDTO> getAllEmloyees();

    EmployeeDTO updatedEmployee(Long employeeId, EmployeeDTO updatedEmployee);

    void deleteEmployee(Long employeeId);
}
