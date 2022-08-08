package krobot.com.example.GMAO.Service;


import krobot.com.example.GMAO.Entity.Bien;
import krobot.com.example.GMAO.Repository.BienRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BienService {
    @Autowired
    private BienRepository bienRepository;


    public List<Bien> getBiens(){
        return bienRepository.findAll();
    }

    public Bien getBien(long id){
        return bienRepository.findById(id).orElse(null);
    }

    public Bien addBien(Bien bien) {
        return bienRepository.save(bien) ;
    }



    public Bien updateBien(Long id, Bien bien) {
        Bien existBien =  getBien(id) ;
        if(bien.getNom() != null) {
            existBien.setNom(bien.getNom());
        }
        if(bien.getAdresse() != null) {
            existBien.setAdresse(bien.getAdresse());
        }
        if(bien.getDisponibilite() != null ) {
            existBien.setDisponibilite(bien.getDisponibilite());
        }
        if(bien.getRegion() != null) {
            existBien.setRegion(bien.getRegion());
        }
        if(bien.getCodePostal() != null) {
            existBien.setCodePostal(bien.getCodePostal());
        }
        if(bien.getTelephone() != null) {
            existBien.setTelephone(bien.getTelephone());
        }
        if(bien.getType() != null) {
            existBien.setType(bien.getType());
        }
        return bienRepository.save(existBien) ;
    }

    public  String deletebien(long id) {
        bienRepository.deleteById(id);
    return  "Bien" +id+ "Deleted" ;
    }
}
