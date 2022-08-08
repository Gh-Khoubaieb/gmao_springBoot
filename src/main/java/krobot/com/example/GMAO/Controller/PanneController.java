package krobot.com.example.GMAO.Controller;


import krobot.com.example.GMAO.Entity.Equipement;
import krobot.com.example.GMAO.Entity.Panne;
import krobot.com.example.GMAO.Repository.EquipementRepository;
import krobot.com.example.GMAO.Repository.PanneRepository;
import krobot.com.example.GMAO.Service.PanneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class PanneController {

    @Autowired
    private PanneService panneService;

    @Autowired
    private PanneRepository panneRepository ;

    @Autowired
    private EquipementRepository equipementRepository ;

    @GetMapping("/pannes")
    public List<Panne> getPannes() {
        return panneService.getPannes();
    }

    @GetMapping("/pannes/{id}")
    public Panne getPanne(@PathVariable Long id) {
        return panneService.getPanne(id);
    }

    @PostMapping("/pannes")
    public Panne addPanne(@RequestBody Panne panne) {
        return  panneService.addPanne(panne) ;
    }

    @PutMapping("/pannes/{id}")
    public Panne updatePanne(@PathVariable Long id, @RequestBody Panne panne) {
        return panneService.updatePanne(id, panne) ;
    }

    @DeleteMapping("/pannes/{id}")
    public  String deletePanne(@PathVariable Long id) {
        return  panneService.deletePanne(id) ;
    }


    @GetMapping("/euipements/{equipementId}/pannes")
    public List<Panne> getAllPannesByEquipementsId(@PathVariable Long idEquipement) {

       List<Panne> pannes = panneRepository.findByEquipementsId(idEquipement) ;
        return pannes;
    }

    @PostMapping("/equipements/{equipementId}/pannes")
    public Panne addPanneToEquipement(@PathVariable(value = "equipementId") long equipementId, @RequestBody Panne panneRequest) {
        Panne panne = equipementRepository.findById(equipementId).map( equipement -> {
            long panneRequestId = panneRequest.getId() ;

            if (panneRequestId != 0L){
                Panne _panne = panneRepository.findById(panneRequestId) .orElseThrow(null) ;
                equipement.addPanne(_panne);
                equipementRepository.save(equipement) ;
                return _panne ;
            }

            equipement.addPanne(panneRequest) ;
            return panneRepository.save(panneRequest);
        }).orElseThrow(null) ;
        return  panne ;
    }

    @DeleteMapping("/equipements/{equipementId}/pannes/{panneId}")
    public String deletePanneFromEquipement(@PathVariable long equipementId, @PathVariable long panneId){
        Equipement equipement = equipementRepository.findById(equipementId)
                .orElse(null) ;
        equipement.removePanne(panneId);
        equipementRepository.save(equipement) ;
        return "Panne " + panneId + " Deleted !!";
    }

    @PutMapping("/equipements/{equipementId}/pannes/{panneId}")
    public Panne updatePanneOfEquipement(@PathVariable Long equipementId,
                                         @PathVariable Long panneId,
                                         @RequestBody Panne panne) {
        return panneService.updatePanne(panneId, panne) ;
    }
}
