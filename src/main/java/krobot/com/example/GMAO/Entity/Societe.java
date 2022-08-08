package krobot.com.example.GMAO.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter

@AllArgsConstructor
@NoArgsConstructor
@Table(name = "societe")
@DynamicUpdate

public class Societe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id ;
    //private Integer  IdIntervention ;
    //private Integer IdEquipement ;
    private String nom;
    private String Site;
    private String   Description;
    private Integer Telephone;
    private String       Adresse;
    private Integer CodePostal;

    /*
    public Set<Fournisseur> getFourinsseurs() {
        return fournisseurs;
    }

    public void setFournisseurs(Set<Fournisseur> fournisseurs) {
        this.fournisseurs = fournisseurs;
    }

     */


    @ManyToMany(fetch = FetchType.LAZY
           )
    @JoinTable(name = "societe_fournisseur",
            joinColumns = {@JoinColumn(name = "societe_id", referencedColumnName = "id")} ,
            inverseJoinColumns =  @JoinColumn(name = "fournisseur_id", referencedColumnName = "id") )

    private Set<Fournisseur> fournisseurs = new HashSet<>();


    public void addFournisseur(Fournisseur fournisseur) {
        this.fournisseurs.add(fournisseur);
        fournisseur.getSocietes().add(this);
    }

    public void removeFournisseur(long fournisseurId) {
        Fournisseur fournisseur = this.fournisseurs.stream().filter(t -> t.getId() == fournisseurId).findFirst().orElse(null);
        if (fournisseur != null) {
            this.fournisseurs.remove(fournisseur);
            fournisseur.getSocietes().remove(this);
        }
    }
}
