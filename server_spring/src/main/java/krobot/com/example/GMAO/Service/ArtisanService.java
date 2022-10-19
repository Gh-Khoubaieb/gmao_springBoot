package krobot.com.example.GMAO.Service;

import krobot.com.example.GMAO.Entity.Artisan;
import krobot.com.example.GMAO.Repository.ArtisanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class ArtisanService {

@Autowired
    private ArtisanRepository   artisanRepository;

public List<Artisan> getArtisans() {
    return artisanRepository.findAll();
}

public Artisan getArtisan(int id) {
    return artisanRepository.findById(id).orElse(null) ;
}

public Artisan addArtisan(Artisan artisan) {
    return artisanRepository.save(artisan) ;
}

public Artisan updateArtisan(Artisan artisan, int id){
    Artisan existArtisan = getArtisan(id);
    if(artisan.getAdresse()!=null) {
        existArtisan.setAdresse(artisan.getAdresse());
    }
    if(artisan.getDisponibilite()!=null) {
        existArtisan.setDisponibilite(artisan.getDisponibilite());
    }
    if(artisan.getTelephone()!=null) {
        existArtisan.setTelephone(artisan.getTelephone());
    }
    if(artisan.getDescription()!=null) {
        existArtisan.setDescription(artisan.getDescription());
    }
    if(artisan.getSpecialite()!=null) {
        existArtisan.setSpecialite(artisan.getSpecialite());
    }
    if(artisan.getNom()!=null) {
        existArtisan.setNom(artisan.getNom());
    }
    return artisanRepository.save(existArtisan) ;
}

    public String deleteArtisan ( int id) {

        artisanRepository.deleteById(id);
        return  "Artisan " + id + "deleted" ;
    }

}
