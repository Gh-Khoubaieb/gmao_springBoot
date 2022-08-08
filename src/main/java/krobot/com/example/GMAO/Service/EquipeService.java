package krobot.com.example.GMAO.Service;

import krobot.com.example.GMAO.Entity.Equipe;
import krobot.com.example.GMAO.Repository.EquipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipeService {

    @Autowired
    public EquipeRepository equipeRepository;

    public List<Equipe> getEquipes() {
        return equipeRepository.findAll();
    }

    public Equipe getEquipe(int id) {
        return equipeRepository.findById(id).orElse(null) ;
    }

    public Equipe addEquipement(Equipe equipe) {
        return equipeRepository.save(equipe) ;
    }

    public Equipe updateEquipe(Equipe equipe, int id ) {
        Equipe existEquipe = getEquipe(id) ;
        if(equipe.getNomEquipe() != null) {
            existEquipe.setNomEquipe(equipe.getNomEquipe());
        }
        if(equipe.getDisponibilite() != null) {
            existEquipe.setDisponibilite(equipe.getDisponibilite());
        }
        if(equipe.getDateDeDebut() != null) {
            existEquipe.setDateDeDebut(equipe.getDateDeDebut());
        }
        if(equipe.getDateDeFin() != null) {
            existEquipe.setDateDeFin(equipe.getDateDeFin());
        }
        return equipeRepository.save(existEquipe) ;
    }

    public String deleteEquipe( int id){

        equipeRepository.deleteById(id);
        return "Equipe " + id + "Deleted" ;
    }
}
