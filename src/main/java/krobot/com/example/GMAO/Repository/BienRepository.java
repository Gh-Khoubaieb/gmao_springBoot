package krobot.com.example.GMAO.Repository;

import krobot.com.example.GMAO.Entity.Bien;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BienRepository extends JpaRepository<Bien, Long> {

}
