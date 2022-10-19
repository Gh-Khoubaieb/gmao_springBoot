package krobot.com.example.GMAO.Repository;



import krobot.com.example.GMAO.Entity.Panne;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface PanneRepository extends JpaRepository<Panne, Long> {
List<Panne> findByEquipementsId (Long id) ;
}
