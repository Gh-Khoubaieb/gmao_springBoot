package krobot.com.example.GMAO.Service;



import krobot.com.example.GMAO.Entity.Equipement;
import krobot.com.example.GMAO.Repository.EquipementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipementService {

    @Autowired
    public EquipementRepository equipementRepository;

    public List<Equipement> getEquipements() {
        return equipementRepository.findAll();
    }

    public Equipement getEquipement(Long id) {
        return equipementRepository.findById(id).orElse(null) ;
    }

    public Equipement addEquipement(Equipement equipement) {
        return equipementRepository.save(equipement) ;
    }

    public Equipement updateEquipement(Equipement equipement, Long id ) {
        Equipement existEquipement = getEquipement(id) ;
        if(equipement.getBarCode() != null) {
            existEquipement.setBarCode(equipement.getBarCode());
        }
        if(equipement.getClasse()  != null) {
            existEquipement.setClasse(equipement.getClasse());
        }

        if(equipement.getCriticite() != null) {
            existEquipement.setCriticite(equipement.getCriticite());
        }
        if(equipement.getCodeEquipement() != null) {
            existEquipement.setCodeEquipement(equipement.getCodeEquipement());
        }
        if(equipement.getStatut() != null) {
            existEquipement.setStatut(equipement.getStatut());
        }
        if(equipement.getDocUrl()!=null) {
            existEquipement.setDocUrl(equipement.getDocUrl());
        }
        if(equipement.getNoSerie()!=null) {
            existEquipement.setNoSerie(equipement.getNoSerie());
        }
        if(equipement.getPhoto()!=null) {
            existEquipement.setPhoto(equipement.getPhoto());
        }
        if(equipement.getTagQr()!=null) {
            existEquipement.setTagQr(equipement.getTagQr());
        }
        if(equipement.getType()!=null) {
            existEquipement.setType(equipement.getType());
        }
        if(equipement.getNom()!=null) {
            existEquipement.setNom(equipement.getNom());
        }
        return equipementRepository.save(existEquipement) ;
    }

    public String deleteEquipement( Long id){

        equipementRepository.deleteById(id);

        return "Equipement " + id + " Deleted" ;
    }

    /*
    public Page <Equipement> findByBienId(int id, Pageable  pageable) {
        return equipementRepository.findByIdBien(id, pageable) ;
    }

     */




}
