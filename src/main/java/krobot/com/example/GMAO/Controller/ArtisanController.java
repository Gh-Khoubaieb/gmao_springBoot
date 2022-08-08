package krobot.com.example.GMAO.Controller;

import krobot.com.example.GMAO.Entity.Artisan;
import krobot.com.example.GMAO.Service.ArtisanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ArtisanController {

    @Autowired
    private ArtisanService artisanService;

    @GetMapping("/artisans")
    public List<Artisan> getArtisans() {
        return artisanService.getArtisans();
    }

    @GetMapping("/artisans/{id}")
    public Artisan getArtisan(@PathVariable int id) {
        return artisanService.getArtisan(id) ;
    }

    @PostMapping("/artisans")
    public Artisan addArtisan (@RequestBody Artisan artisan) {
        return artisanService.addArtisan(artisan) ;
    }

    @PutMapping("/artisans/{id}")
    public Artisan updateArtisan(@RequestBody Artisan artisan, @PathVariable int id) {
        return artisanService.updateArtisan(artisan, id);
    }

    @DeleteMapping("/artisans/{id}")
    public String deleteArtisan( @PathVariable int id) {
        return artisanService.deleteArtisan( id);
     }
}
