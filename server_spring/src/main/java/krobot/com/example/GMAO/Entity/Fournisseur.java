package krobot.com.example.GMAO.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@Table(name = "fournisseur")
@DynamicUpdate

public class Fournisseur {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id ;
   // private  Integer  IdEmplacement;
    private String   Adresse  ;
    private String      Description ;
    private String NomFournisseur;
    private String   CodePostal;
    private String Ville;
    private Integer   Telephone;


    public Set<Societe> getSocietes() {
        return societes;
    }

    public void setSocietes(Set<Societe> societes) {
        this.societes = societes;
    }
    public void adSociete(Societe societe) {
        this.societes.add(societe);
        societe.getFournisseurs().add(this);
    }


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }



    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "fournisseurs")
    @JsonIgnore
    private Set<Societe> societes = new HashSet<>();

/*
    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER, mappedBy = "bien")
    @Column(nullable = true)
    @JsonManagedReference
    //@JsonManagedReference
   // @JsonIgnore
    public Set<Equipement> equipements = new HashSet<>();

 */

    /*
    @OneToMany(cascade = CascadeType.ALL)
   // @JoinColumn(name = "id_bien", referencedColumnName = "id_bien")
    List< Equipement > equipements = new ArrayList< >();

     */

}
