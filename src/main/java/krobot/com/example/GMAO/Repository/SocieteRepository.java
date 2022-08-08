package krobot.com.example.GMAO.Repository;

import krobot.com.example.GMAO.Entity.Societe;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SocieteRepository extends JpaRepository<Societe, Long> {
  //  List<Tutorial> findByPublished(boolean published);

 //   List<Tutorial> findByTitleContaining(String title);

    List<Societe> findSocietesByFournisseursId(Long fournisseurId);

}
