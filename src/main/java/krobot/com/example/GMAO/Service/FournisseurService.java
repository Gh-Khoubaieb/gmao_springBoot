package krobot.com.example.GMAO.Service;


import krobot.com.example.GMAO.Entity.Fournisseur;
import krobot.com.example.GMAO.Repository.FournisseurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FournisseurService {
    @Autowired
    private FournisseurRepository fournisseurRepository;

    public List<Fournisseur> getFournisseurs(){
        return fournisseurRepository.findAll();
    }

    public Fournisseur getFournisseur(long id){
        return fournisseurRepository.findById(id).orElse(null);
    }

    public Fournisseur addFournisseur(Fournisseur fournisseur) {
        return fournisseurRepository.save(fournisseur) ;
    }



    public Fournisseur updateFournisseur(Long id, Fournisseur fournisseur) {
        Fournisseur existFournisseur =  getFournisseur(id) ;
        if(fournisseur.getNomFournisseur() != null) {
            existFournisseur.setNomFournisseur(fournisseur.getNomFournisseur());
        }
        if(fournisseur.getAdresse() != null ) {
            existFournisseur.setAdresse(fournisseur.getAdresse());
        }
        if(fournisseur.getDescription() != null) {
            existFournisseur.setDescription(fournisseur.getDescription());
        }
        if(fournisseur.getCodePostal() != null) {
            existFournisseur.setCodePostal(fournisseur.getCodePostal());
        }
        if(fournisseur.getTelephone() != null) {
            existFournisseur.setTelephone(fournisseur.getTelephone());
        }
        if(fournisseur.getVille() != null) {
            existFournisseur.setVille(fournisseur.getVille());
        }

        return fournisseurRepository.save(existFournisseur) ;
    }

    public  String deleteFournisseur(long id) {
        fournisseurRepository.deleteById(id);
        return  "Fournisseur" +id+ "Deleted" ;
    }
}
