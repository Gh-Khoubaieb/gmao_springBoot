package krobot.com.example.GMAO.Repository;

import krobot.com.example.GMAO.Entity.Equipement;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EquipementRepository extends JpaRepository<Equipement, Long> {
   // Equipement findByFk( int bien_id);
   Page<Equipement> findByBienId(Long bienId, Pageable pageable);
   Optional<Equipement> findByIdAndBienId(Long idEquipement, Long idBien);
   List<Equipement> findEquipementsByPannesId(long id) ;
}
