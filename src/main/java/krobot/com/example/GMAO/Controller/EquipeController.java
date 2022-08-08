package krobot.com.example.GMAO.Controller;

import krobot.com.example.GMAO.Entity.Equipe;
import krobot.com.example.GMAO.Service.EquipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class EquipeController {

    @Autowired
    private EquipeService equipeService;



    @GetMapping("/equipes")
    public List<Equipe> getEquipes() {
        return equipeService.getEquipes();
    }

    @GetMapping("/equipes/{id}")
    public Equipe getEquipe(@PathVariable int id) {
        return equipeService.getEquipe(id) ;
    }

    @PostMapping("/equipes")
    public Equipe addEquipe(@RequestBody Equipe equipe){
        return equipeService.addEquipement(equipe) ;
    }

    @PutMapping("/equipes/{id}")
    public Equipe updateEquipe(@RequestBody Equipe equipe, @PathVariable int id) {
        return equipeService.updateEquipe(equipe, id) ;
    }

    @DeleteMapping("/equipes/{id}")
    public String deleteEquipe( @PathVariable int id) {

        return equipeService.deleteEquipe(id) ;
    }
}
