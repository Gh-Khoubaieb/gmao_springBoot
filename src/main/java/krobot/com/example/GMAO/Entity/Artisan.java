package krobot.com.example.GMAO.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Artisan")
@DynamicUpdate
public class Artisan {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer IdArtisan ;
   // private Integer IdEmplacement ;
    private String  Disponibilite;
    private  Integer       Telephone;
    private String Adresse;
    private  String        Specialite;
    private String Description;
    private String nom;
}
