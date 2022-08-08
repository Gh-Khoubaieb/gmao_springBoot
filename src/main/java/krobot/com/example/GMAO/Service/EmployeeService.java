package krobot.com.example.GMAO.Service;


import krobot.com.example.GMAO.Entity.Employee;
import krobot.com.example.GMAO.Repository.ArtisanRepository;
import krobot.com.example.GMAO.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

@Autowired
    private EmployeeRepository employeeRepository;

public List<Employee> getEmployees() {
    return employeeRepository.findAll();
}

public Employee getEmployee(int id) {
    return employeeRepository.findById(id).orElse(null) ;
}

public Employee addEmployee(Employee employee) {
    return employeeRepository.save(employee) ;
}

public Employee updateEmployee(Employee employee, int id){
    Employee existEmployee = getEmployee(id);
    if(employee.getAdresse()!=null) {
        existEmployee.setAdresse(employee.getAdresse());
    }
    if(employee.getEmail()!=null) {
        existEmployee.setEmail(employee.getEmail());
    }
    if(employee.getTelephone()!=null) {
        existEmployee.setTelephone(employee.getTelephone());
    }
    if(employee.getCin()!=null) {
        existEmployee.setCin(employee.getCin());
    };
    if(employee.getLabel()!=null) {
        existEmployee.setLabel(employee.getLabel());
    }
    if(employee.getNom()!=null) {
        existEmployee.setNom(employee.getNom());
    }
    if(employee.getPrenom()!=null) {
        existEmployee.setPrenom(employee.getPrenom());
    }
    return employeeRepository.save(existEmployee) ;
}

    public String deleteEmployee ( int id) {

        employeeRepository.deleteById(id);
        return  "Employee " + id + "deleted" ;
    }

}
