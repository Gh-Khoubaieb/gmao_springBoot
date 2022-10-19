package krobot.com.example.GMAO.Service;



import krobot.com.example.GMAO.Entity.Panne;
import krobot.com.example.GMAO.Repository.PanneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PanneService {
    @Autowired
    private PanneRepository panneRepository;


    public List<Panne> getPannes(){
        return panneRepository.findAll();
    }

    public Panne getPanne(Long id){
        return panneRepository.findById(id).orElse(null);
    }

    public Panne addPanne(Panne panne) {
        return panneRepository.save(panne) ;
    }



    public Panne updatePanne(Long id, Panne panne) {
        Panne existPanne =  getPanne(id) ;
        if(panne.getCode() != null) {
            existPanne.setCode(panne.getCode());
        }
        if(panne.getDate() != null) {
            existPanne.setDate(panne.getDate());
        }
        if(panne.getDescription() != null ) {
            existPanne.setDescription(panne.getDescription());
        }
        if(panne.getFrequence() != null) {
            existPanne.setFrequence(panne.getFrequence());
        }
        if(panne.getHeure() != null) {
            existPanne.setHeure(panne.getHeure());
        }
        if(panne.getType() != null) {
            existPanne.setType(panne.getType());
        }
        if(panne.getPriorite() != null) {
            existPanne.setPriorite(panne.getPriorite());
        }
        return panneRepository.save(existPanne) ;
    }

    public  String deletePanne(Long id) {
        panneRepository.deleteById(id);
    return  "Panne" +id+ "Deleted" ;
    }
}
