package krobot.com.example.GMAO.Repository;


import krobot.com.example.GMAO.Entity.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {
    Page<Produit> findByEmplacementId(Long empalcementId, Pageable pageable);
    Optional<Produit> findByIdAndEmplacementId(Long id, Long empalcementid);
}
