package krobot.com.example.GMAO.Controller;


import krobot.com.example.GMAO.Entity.Employee;
import krobot.com.example.GMAO.Entity.Equipement;
import krobot.com.example.GMAO.Repository.EmployeeRepository;
import krobot.com.example.GMAO.Repository.EquipeRepository;
import krobot.com.example.GMAO.Service.EmployeeService;
import krobot.com.example.GMAO.Service.EquipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    private EquipeRepository equipeRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getEmployees() {
        return employeeService.getEmployees();
    }

    @GetMapping("/employees/{id}")
    public Employee getEmployee(@PathVariable int id) {
        return employeeService.getEmployee(id) ;
    }

    @PostMapping("/employees")
    public Employee addEmployee (@RequestBody Employee employee) {
        return employeeService.addEmployee(employee) ;
    }

    @PutMapping("/employees/{id}")
    public Employee updateEmployee(@RequestBody Employee employee, @PathVariable int id) {
        return employeeService.updateEmployee(employee, id);
    }

    @DeleteMapping("/employees/{id}")
    public String deleteArtisan( @PathVariable int id) {
        return employeeService.deleteEmployee( id);
     }

    @GetMapping("/equipes/{id}/employees")
    public Page<Employee> getAllEmployeesByEquipeId(@PathVariable Integer id, Pageable pageable) {
        //return equipementService.findByBienId(id, pageable);
        return  employeeRepository.findByEquipeId(id , pageable);
    }


    @PostMapping("/equipes/{idEquipe}/employees")
    public Employee createEmployee(@PathVariable  Integer  idEquipe,
                                       @RequestBody Employee employee) {
        return equipeRepository.findById(idEquipe).map(equipe -> {
            employee.setEquipe(equipe);
            return employeeRepository.save(employee);
        }).orElse(null) ;

    }

    @PutMapping("/equipes/{equipeId}/employees/{employeeId}")
    public Employee updateEmployee(@PathVariable (value = "equipeId") Integer equipeId,
                                    @PathVariable (value = "employeeId") Integer employeeId,
                                    @RequestBody Employee employee2) {

        return employeeService.updateEmployee(employee2, employeeId);
    }

    @DeleteMapping("/equipes/{equipeId}/employees/{employeeId}")
    public ResponseEntity<?> deleteEmployee(@PathVariable (value = "equipeId") Integer equipeId,
                                           @PathVariable (value = "employeeId") Integer employeeId) {
        return employeeRepository.findByIdAndEquipeId(employeeId, equipeId).map(employee -> {
            employeeRepository.delete(employee);
            return ResponseEntity.ok().build();
        }).orElse(null);
        //.orElseThrow(() -> new ResourceNotFoundException("Comment not found with id " + commentId + " and postId " + postId));
    }
}
