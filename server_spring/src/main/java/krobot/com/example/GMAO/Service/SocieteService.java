package krobot.com.example.GMAO.Service;

import krobot.com.example.GMAO.Entity.Societe;
import krobot.com.example.GMAO.Repository.SocieteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SocieteService {

    @Autowired
    private SocieteRepository societeRepository;

    public List<Societe> getSocietes() {
        return societeRepository.findAll();
    }

    public Societe getSociete(long id) {
        return  societeRepository.findById(id).orElse(null) ;
    }

    public Societe addSociete(Societe societe) {
        return societeRepository.save(societe) ;
    }

    public Societe updateSociete(Societe societe, int id) {
        Societe existSociete = getSociete(id);
        if(societe.getAdresse()!= null) {
            existSociete.setAdresse(societe.getAdresse());
        }
        if(societe.getCodePostal()!= null) {
            existSociete.setCodePostal(societe.getCodePostal());
        }
        if(societe.getDescription()!= null) {
            existSociete.setDescription(societe.getDescription());
        }
        if(societe.getTelephone()!=null) {
            existSociete.setTelephone(societe.getTelephone());
        }
        if(societe.getSite()!= null) {
            existSociete.setSite(societe.getSite());
        }
        if(societe.getNom()!=null) {
            existSociete.setNom(societe.getNom());
        }
        return societeRepository.save(existSociete) ;
    }

    public String deleteSociete( long id) {
        societeRepository.deleteById(id);
        return "Societe " + id + "deleted" ;
    }
}
