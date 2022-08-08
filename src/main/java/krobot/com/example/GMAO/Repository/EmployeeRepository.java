package krobot.com.example.GMAO.Repository;


import krobot.com.example.GMAO.Entity.Employee;
import krobot.com.example.GMAO.Entity.Equipement;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {
    Page<Employee> findByEquipeId(Integer bienId, Pageable pageable);
    Optional<Employee> findByIdAndEquipeId(Integer idEmployee, Integer idEquipe);
}
