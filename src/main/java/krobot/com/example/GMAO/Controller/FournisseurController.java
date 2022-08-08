package krobot.com.example.GMAO.Controller;

import krobot.com.example.GMAO.Entity.Equipement;
import krobot.com.example.GMAO.Entity.Fournisseur;
import krobot.com.example.GMAO.Entity.Societe;
import krobot.com.example.GMAO.Repository.FournisseurRepository;
import krobot.com.example.GMAO.Repository.SocieteRepository;
import krobot.com.example.GMAO.Service.FournisseurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RequestMapping("/api/v1")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FournisseurController {

    @Autowired
    private SocieteRepository societeRepository;

    @Autowired
    private FournisseurRepository fournisseurRepository;


    @Autowired
    public FournisseurService fournisseurService ;

    @GetMapping("/fournisseurs")
    public List<Fournisseur> getAllFournisseurs() {


      return   fournisseurService.getFournisseurs() ;


    }

    @GetMapping("/societes/{societeId}/fournisseurs")
    public List<Fournisseur> getAllFournisseursBySocieteId(@PathVariable Long societeId) {


        List<Fournisseur> fournisseurs = fournisseurRepository.findBySocietesId(societeId);
        return fournisseurs;
    }

    @GetMapping("/fournisseurs/{id}")
    public Fournisseur getFournisseursById(@PathVariable Long id) {

        return fournisseurService.getFournisseur(id);
    }

    @GetMapping("/fournisseurs/{fournisseurId}/societes")
    public List<Societe> getAllSocietesByFournisseurId( Long fournisseurId) {


        return     societeRepository.findSocietesByFournisseursId(fournisseurId);

    }

    @PostMapping("/societes/{societeId}/fournisseurs")
    public Fournisseur addFournisseur(@PathVariable(value = "societeId") Long societeId, @RequestBody Fournisseur fournisseurRequest) {
    /*
        return societeRepository.findById(societeId).map(el -> {
            fournisseurRequest.setSocietes((Set<Societe>) el);
            return fournisseurRepository.save(fournisseurRequest);
        }).orElse(null) ;

     */

        /*
       return societeRepository.findById(societeId).map(fourni -> {
           //     fourni.addFournisseur(fournisseurRequest);
           // fournisseurRequest.getSocietes().add(fourni);
            fournisseurRequest.adSociete( fourni);
            return fournisseurRepository.save(fournisseurRequest);
        }).orElse(null);

         */


        Fournisseur fournisseur1 = societeRepository.findById(societeId).map(societe -> {
            long fournisseurRequestId = fournisseurRequest.getId();

            // tag is existed

            if (fournisseurRequestId != 0L) {
                Fournisseur _fournisseur = fournisseurRepository.findById(fournisseurRequestId)
                        .orElseThrow(null);
                societe.addFournisseur(_fournisseur);
                societeRepository.save(societe);
                return _fournisseur;
            }

            // add and create new Tag
            societe.addFournisseur(fournisseurRequest);
            return fournisseurRepository.save(fournisseurRequest);
        }).orElseThrow(null);

        return fournisseur1;


    }
    @PostMapping("/fournisseurs")
    public Fournisseur addFournisseurs(@RequestBody Fournisseur fournisseur) {
        return fournisseurRepository.save(fournisseur) ;
    }


    @PutMapping("/fournisseurs/{id}")
    public Fournisseur updateFournisseur(@PathVariable("id") long id, @RequestBody Fournisseur fournisseur) {

      return   fournisseurService.updateFournisseur(id, fournisseur) ;

    }

    @DeleteMapping("/societes/{societeId}/fournisseurs/{fournisseurId}")
    public String deleteFournisseurFromSociete(@PathVariable Long societeId, @PathVariable Long fournisseurId) {
        Societe societe = societeRepository.findById(societeId)
                .orElseThrow(null);

        societe.removeFournisseur(fournisseurId);
        societeRepository.save(societe);

        return "Fournisseur " + fournisseurId + " Deleted !!";
    }

    @DeleteMapping("/fournisseurs/{id}")
    public String deleteFournisseur(@PathVariable("id") long id) {
        fournisseurRepository.deleteById(id);

        return "new ResponseEntity<>(HttpStatus.NO_CONTENT)";
    }

    @PutMapping("/societes/{societeId}/fournisseurs/{fournisseurId}")
    public Fournisseur updateFournisseur(@PathVariable (value = "societeId") Long societeId,
                                    @PathVariable (value = "fournisseurId") Long fournisseurId,
                                    @RequestBody Fournisseur fournisseur) {

        return fournisseurService.updateFournisseur(fournisseurId,fournisseur ) ;

    }
}
