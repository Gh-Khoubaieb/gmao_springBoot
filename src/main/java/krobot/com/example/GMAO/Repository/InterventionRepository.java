package krobot.com.example.GMAO.Repository;


import krobot.com.example.GMAO.Entity.Intervention;

import krobot.com.example.GMAO.Entity.Panne;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface InterventionRepository extends JpaRepository<Intervention, Long> {
        List<Intervention> findByPannesId(long id) ;
}
