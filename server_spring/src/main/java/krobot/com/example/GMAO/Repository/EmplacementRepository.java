package krobot.com.example.GMAO.Repository;

import krobot.com.example.GMAO.Entity.Emplacement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmplacementRepository extends JpaRepository<Emplacement, Long> {
}
