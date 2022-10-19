package krobot.com.example.GMAO.Controller;



import krobot.com.example.GMAO.Entity.Intervention;
import krobot.com.example.GMAO.Entity.Panne;
import krobot.com.example.GMAO.Repository.InterventionRepository;
import krobot.com.example.GMAO.Repository.PanneRepository;
import krobot.com.example.GMAO.Service.InterventionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class InterventionController {

    @Autowired
    private InterventionService interventionService;

    @Autowired
    private InterventionRepository interventionRepository;

    @Autowired
    private PanneRepository panneRepository;

    @GetMapping("/interventions")
    public List<Intervention> getInterventions() {
        return interventionService.getInterventions();
    }

    @GetMapping("/interventions/{id}")
    public Intervention getInterventione(@PathVariable Long id) {
        return interventionService.getIntervention(id);
    }

    @PostMapping("/interventions")
    public Intervention addIntervention(@RequestBody Intervention intervention) {
        return  interventionService.addIntervention(intervention) ;
    }

    @PutMapping("/interventions/{id}")
    public Intervention updateIntervention(@PathVariable Long id, @RequestBody Intervention intervention) {
        return interventionService.updateIntervention( id, intervention) ;
    }

    @DeleteMapping("/interventions/{id}")
    public  String deleteIntervention(@PathVariable Long id) {
        return  interventionService.deleteIntervention(id) ;
    }

    @GetMapping("/pannes/{panneId}/interventions")
    public List<Intervention> getAllInterventionsByPannes(@PathVariable Long panneId) {
        List<Intervention> interventions = interventionRepository.findByPannesId(panneId);
        return  interventions ;
    }

    @PostMapping("/pannes/{panneId}/interventions")
        public Intervention addInterventionToPanne(@PathVariable(value = "panneId") long panneId, @RequestBody Intervention interventionRequest) {
        Intervention intervention = panneRepository.findById(panneId).map( panne -> {
            long interventionIdRequest = interventionRequest.getId() ;
            if( interventionIdRequest !=0L) {
                Intervention _intervention = interventionRepository.findById(interventionIdRequest).orElseThrow(null) ;
                panne.addIntervention(_intervention);
                panneRepository.save(panne) ;
                return  _intervention ;
            }

            panne.addIntervention(interventionRequest);
            return interventionRepository.save(interventionRequest);

        }).orElseThrow(null);
        return intervention ;
}

    @DeleteMapping("/pannes/{panneId}/interventions/{interventionId}")
    public String deleteInterventionFromPanne(@PathVariable long panneId, @PathVariable long interventionId) {
        Panne panne = panneRepository.findById(panneId).orElseThrow(null);
        panne.removeIntervention(interventionId);
        panneRepository.save(panne) ;
        return "Intervention " + interventionId + " Deleted !! ";
    }

    @PutMapping("/pannes/{panneId}/interventions/{interventionId}")
    public Intervention updateInterventionOfPanne(
                                                  @PathVariable Long interventionId,
                                                  @RequestBody Intervention intervention){
        return interventionService.updateIntervention(interventionId, intervention) ;
    }
}
