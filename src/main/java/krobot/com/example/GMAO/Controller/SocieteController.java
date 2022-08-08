package krobot.com.example.GMAO.Controller;

import krobot.com.example.GMAO.Entity.Societe;
import krobot.com.example.GMAO.Service.SocieteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class SocieteController {

    @Autowired
    private SocieteService societeService;

    @GetMapping("/societes")
    public List<Societe> getSocietes() {
        return societeService.getSocietes();
    }

    @GetMapping("/societes/{id}")
    public Societe getSociete(@PathVariable int id) {
        return societeService.getSociete(id);
    }

    @PostMapping("/societes")
    public Societe addSociete(@RequestBody Societe societe) {
        return  societeService.addSociete(societe) ;
    }

    @PutMapping("/societes/{id}")
    public Societe updateSociete(@RequestBody Societe societe, @PathVariable int id) {
        return societeService.updateSociete(societe, id) ;
    }

    @DeleteMapping("/societes/{id}")
    public String deleleSociete( @PathVariable int id) {
        return societeService.deleteSociete( id);
    }
}
