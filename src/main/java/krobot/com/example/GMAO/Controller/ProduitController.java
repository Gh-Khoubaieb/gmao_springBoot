package krobot.com.example.GMAO.Controller;


import krobot.com.example.GMAO.Entity.Produit;
import krobot.com.example.GMAO.Repository.ProduitRepository;
import krobot.com.example.GMAO.Repository.EmplacementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ProduitController {
    @Autowired
    private ProduitRepository produitRepository;

    @Autowired
    private EmplacementRepository emplacementRepository;


    @PostMapping("/produits")
    public Produit createComment(@RequestBody Produit produit) {

            return produitRepository.save(produit);

    }

    @GetMapping("/emplacements/{produitId}/produits")
    public Page<Produit> getAllCommentsByPostId(@PathVariable(value = "produitId") Long produitId,
                                                Pageable pageable) {
        return produitRepository.findByEmplacementId(produitId, pageable);
    }

    @PostMapping("/emplacements/{produitId}/produits")
    public Produit createComment(@PathVariable (value = "postId") Long produitId,
                                  @RequestBody Produit produit) {
        return emplacementRepository.findById(produitId).map(emplacement -> {
            produit.setNomProduit(emplacement.getLongitude());
            return produitRepository.save(produit);
        }).orElse(null);
           //     .orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
    }

    @PutMapping("/emplacements/{produitId}/produits/{emplacementId}")
    public Produit updateComment(@PathVariable (value = "produitId") Long produitId,
                                 @PathVariable (value = "emplacementId") Long emplacementId,
                                 @RequestBody Produit commentRequest) {
        if(!emplacementRepository.existsById(produitId)) {
                return null ;
            //throw new ResourceNotFoundException("PostId " + postId + " not found");
        }

        return produitRepository.findById(emplacementId).map(comment -> {
            comment.setText(commentRequest.getText());
            return produitRepository.save(comment);
        }).orElse(null);
                //.orElseThrow(() -> new ResourceNotFoundException("CommentId " + commentId + "not found"));
    }

    @DeleteMapping("/emplacements/{produitId}/produits/{emplacementId}")
    public ResponseEntity<?> deleteComment(@PathVariable (value = "produitId") Long postId,
                                           @PathVariable (value = "commentId") Long commentId) {
        return produitRepository.findByIdAndEmplacementId(commentId, postId).map(comment -> {
            produitRepository.delete(comment);
            return ResponseEntity.ok().build();
        }).orElse(null);
                //.orElseThrow(() -> new ResourceNotFoundException("Comment not found with id " + commentId + " and postId " + postId));
    }

}
