package krobot.com.example.GMAO.Controller;

import krobot.com.example.GMAO.Entity.Emplacement;
import krobot.com.example.GMAO.Repository.EmplacementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmplacementController {

    @Autowired
    private EmplacementRepository postRepository;

    @GetMapping("/emplacements")
    public Page<Emplacement> getAllEmplacements(Pageable pageable) {
        return postRepository.findAll(pageable);
    }

    @PostMapping("/emplacements")
    public Emplacement createPost(@RequestBody Emplacement post) {
        return postRepository.save(post);
    }

    @PutMapping("/emplacements/{emplacementId}")
    public Emplacement updateEmplacement(@PathVariable Long postId, @RequestBody Emplacement postRequest) {
        return postRepository.findById(postId).map(post -> {
            post.setLongitude(postRequest.getLongitude());
            post.setAltitude(postRequest.getAltitude());
            post.setLatitude(postRequest.getLatitude());
            post.setLibelle(postRequest.getLibelle());

            return postRepository.save(post);
        }).orElse(null);
              //  .orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
    }


    @DeleteMapping("/emplacements/{emplacementId}")
    public ResponseEntity<?> deleteEmplacement(@PathVariable Long postId) {
        return postRepository.findById(postId).map(post -> {
            postRepository.delete(post);
            return ResponseEntity.ok().build();
        }).orElse(null);
                //.orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
    }
}
