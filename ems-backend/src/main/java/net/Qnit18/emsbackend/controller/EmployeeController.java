package net.Qnit18.emsbackend.controller;

import lombok.AllArgsConstructor;
import lombok.Getter;
import net.Qnit18.emsbackend.dto.EmployeeDTO;
import net.Qnit18.emsbackend.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
@CrossOrigin("*")
public class EmployeeController {

    private EmployeeService employeeService;

    // Build Add Employee Rest API
    @PostMapping()
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDTO){
        EmployeeDTO savedEmployee = employeeService.createEmployee(employeeDTO);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }


    // Build get Employee REST API
    @GetMapping("{employeeId}")
    public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable Long employeeId){
        EmployeeDTO employeeDTO = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDTO);
    }

    // Build get All Employee REST API
    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAllEmployees() {
        List<EmployeeDTO> employees = employeeService.getAllEmloyees();
        return ResponseEntity.ok(employees);
    }

    // Build Update Employee Rest API
    @PutMapping("{employeeId}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable Long employeeId,
                                                      @RequestBody EmployeeDTO updatedEmployee){
      EmployeeDTO employeeDTO =  employeeService.updatedEmployee(employeeId, updatedEmployee);
        return ResponseEntity.ok(employeeDTO);
    }

    // Build Delete Employee Rest API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee id("+employeeId+") was deleted successfully!");
    }
}
