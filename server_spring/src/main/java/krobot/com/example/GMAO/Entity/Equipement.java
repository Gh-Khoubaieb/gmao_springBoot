package krobot.com.example.GMAO.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "equipement")
@Getter
@Setter
public class Equipement {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private Integer CodeEquipement;
    private String        Statut;
    private String  Criticite;
    private String         TagQr;
    private String  Type;
    private String         Photo;
    private String  DocUrl;
    private Integer       NoSerie;
    private String  Classe;
    private String       BarCode;
    private String       nom;
    private Number       latitude;
    private Number       longitude;
    private Number       altitude;


    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "bien_id", nullable = true)
   // @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonBackReference

    private Bien bien;

//    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")


 //   @JsonIdentityReference(alwaysAsId=true)

    @ManyToMany(fetch = FetchType.LAZY
    )
    @JoinTable(name = "equipement_panne",
            joinColumns = {@JoinColumn(name = "equipement_id", referencedColumnName = "id")} ,
            inverseJoinColumns =  @JoinColumn(name = "panne_id", referencedColumnName = "id") )

    private Set<Panne> pannes = new HashSet<>();


    public void addPanne(Panne panne) {
       this.pannes.add(panne) ;
       panne.getEquipements().add(this) ;
    }

    public void  removePanne(long panneId) {
      Panne panne =  this.pannes.stream().filter(t ->t.getId() == panneId).findFirst().orElse(null) ;
        if(pannes != null ) {
            this.pannes.remove(panne) ;
         panne.getEquipements().remove(this);
        }
    }
}
