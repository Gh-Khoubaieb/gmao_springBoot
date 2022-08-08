package krobot.com.example.GMAO.Service;




import krobot.com.example.GMAO.Entity.Intervention;
import krobot.com.example.GMAO.Repository.InterventionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InterventionService {
    @Autowired
    private InterventionRepository interventionRepository;


    public List<Intervention> getInterventions(){
        return interventionRepository.findAll();
    }

    public Intervention getIntervention(Long id){
        return interventionRepository.findById(id).orElse(null);
    }

    public Intervention addIntervention(Intervention intervention) {
        return interventionRepository.save(intervention) ;
    }



    public Intervention updateIntervention(long id, Intervention intervention) {
        Intervention existIntervention =  getIntervention(id) ;
        if(intervention.getCodeIntervention() != null) {
            existIntervention.setCodeIntervention(intervention.getCodeIntervention());
        }

        if(intervention.getDescription() != null ) {
            existIntervention.setDescription(intervention.getDescription());
        }
        if(intervention.getDateDeDebut() != null) {
            existIntervention.setDateDeDebut(intervention.getDateDeDebut());
        }
        if(intervention.getHeure() != null) {
            existIntervention.setHeure(intervention.getHeure());
        }
        if(intervention.getType() != null) {
            existIntervention.setType(intervention.getType());
        }
        if(intervention.getPriorite() != null) {
            existIntervention.setPriorite(intervention.getPriorite());
        }
        if(intervention.getDateDeFin() != null) {
            existIntervention.setDateDeFin(intervention.getDateDeFin());
        }
        if(intervention.getStatut() != null) {
            existIntervention.setStatut(intervention.getStatut());
        }
        return interventionRepository.save(existIntervention) ;
    }

    public  String deleteIntervention(Long id) {
        interventionRepository.deleteById(id);
    return  "Intervention" +id+ "Deleted" ;
    }
}
