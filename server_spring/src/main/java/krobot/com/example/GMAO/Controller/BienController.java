package krobot.com.example.GMAO.Controller;

import krobot.com.example.GMAO.Entity.Bien;

import krobot.com.example.GMAO.Service.BienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class BienController {

    @Autowired
    private BienService bienService;

    @GetMapping("/biens")
    public List<Bien> getBiens() {
        return bienService.getBiens();
    }

    @GetMapping("/biens/{id}")
    public Bien getBien(@PathVariable Long id) {
        return bienService.getBien(id);
    }

    @PostMapping("/biens")
    public Bien addBien(@RequestBody Bien bien) {
        return  bienService.addBien(bien) ;
    }

    @PutMapping("/biens/{id}")
    public Bien updateBien(@PathVariable Long id, @RequestBody Bien bien) {
        return bienService.updateBien(id, bien) ;
    }

    @DeleteMapping("/biens/{id}")
    public  String deleteBien(@PathVariable Long id) {
        return  bienService.deletebien(id) ;
    }
}
