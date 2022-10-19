package krobot.com.example.GMAO.Controller;



import krobot.com.example.GMAO.Entity.Equipement;
import krobot.com.example.GMAO.Repository.BienRepository;
import krobot.com.example.GMAO.Repository.EquipementRepository;
import krobot.com.example.GMAO.Service.EquipementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
//import krobot.com.jpa.exception.ResourceNotFoundException;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class EquipementController {

    @Autowired
    public EquipementService equipementService;

    @Autowired
    public BienRepository bienRepository;

    @Autowired
    public EquipementRepository equipementRepository;

    @GetMapping("/equipements")
    private List<Equipement> getEquipements() {
        return equipementService.getEquipements();
    }

    @GetMapping("/equipements/{id}")
    private Equipement getBien(@PathVariable  long id) {
        return  equipementService.getEquipement(id) ;
    }

    @PostMapping("/equipements")
    public Equipement addEquipement(@RequestBody Equipement equipement) {
        return equipementRepository.save(equipement) ;
    }

    @PutMapping("/equipements/{id}")
    private Equipement updateEquipement(@RequestBody Equipement equipement, @PathVariable Long id) {
        return equipementService.updateEquipement(equipement, id) ;
    }

    @DeleteMapping("/equipements/{id}")
    private  String deleteEquipement(@PathVariable Long id) {
        return equipementService.deleteEquipement(id) ;
    }



    @GetMapping("/biens/{id}/equipements")
    public Page<Equipement> getAllEquipementsByBienId(@PathVariable Long id, Pageable pageable) {
        //return equipementService.findByBienId(id, pageable);
        return  equipementRepository.findByBienId(id , pageable);
    }


    @PostMapping("/biens/{idBien}/equipements")
    public Equipement createEquipement(@PathVariable  Long  idBien,
                                  @RequestBody Equipement equipement) {
        return bienRepository.findById(idBien).map(bien -> {
            equipement.setBien(bien);
            return equipementRepository.save(equipement);
        }).orElse(null) ;
                //orElseThrow(() -> new ResourceNotFoundException("Bien Id " + idBien + " not found"));
    }



    @PutMapping("/biens/{bienId}/equipements/{equipementId}")
    public Equipement updateComment(@PathVariable (value = "bienId") Long bienId,
                                 @PathVariable (value = "equipementId") Long equipementId,
                                 @RequestBody Equipement equipement2) {
        /*
        if(!bienRepository.existsById(bienId)) {
            return null ;
            //throw new ResourceNotFoundException("PostId " + postId + " not found");
        }
*/
        return equipementService.updateEquipement(equipement2, equipementId) ;
             /*   equipementRepository.findById(equipementId).map(equipement -> {
       //     comment.setText(commentRequest.getText());

            Equipement existEquipement = equipement ;
            if(equipement2.getBarCode() != null) {
                existEquipement.setBarCode(equipement2.getBarCode());
            }
            if(equipement2.getClasse()  != null) {
                existEquipement.setClasse(equipement2.getClasse());
            }

            if(equipement2.getCriticite() != null) {
                existEquipement.setCriticite(equipement2.getCriticite());
            }
            if(equipement2.getCodeEquipement() != null) {
                existEquipement.setCodeEquipement(equipement2.getCodeEquipement());
            }
            if(equipement2.getStatut() != null) {
                existEquipement.setStatut(equipement2.getStatut());
            }
            if(equipement2.getDocUrl()!=null) {
                existEquipement.setDocUrl(equipement2.getDocUrl());
            }
            if(equipement2.getNoSerie()!=null) {
                existEquipement.setNoSerie(equipement2.getNoSerie());
            }
            if(equipement2.getPhoto()!=null) {
                existEquipement.setPhoto(equipement2.getPhoto());
            }
            if(equipement2.getTagQr()!=null) {
                existEquipement.setTagQr(equipement2.getTagQr());
            }
            if(equipement2.getType()!=null) {
                existEquipement.setType(equipement2.getType());
            }
            if(equipement2.getNom()!=null) {
                existEquipement.setNom(equipement2.getNom());
            }
            return equipementRepository.save(existEquipement) ;
           // return equipementService.updateEquipement(equipement2);
        }).orElse(null);

              */
        //.orElseThrow(() -> new ResourceNotFoundException("CommentId " + commentId + "not found"));
    }

    @DeleteMapping("/biens/{bienId}/equipements/{equipementId}")
    public ResponseEntity<?> deleteComment(@PathVariable (value = "bienId") Long bienId,
                                           @PathVariable (value = "equipementId") Long equipementId) {
        return equipementRepository.findByIdAndBienId(equipementId, bienId).map(comment -> {
            equipementRepository.delete(comment);
            return ResponseEntity.ok().build();
        }).orElse(null);
        //.orElseThrow(() -> new ResourceNotFoundException("Comment not found with id " + commentId + " and postId " + postId));
    }


}
