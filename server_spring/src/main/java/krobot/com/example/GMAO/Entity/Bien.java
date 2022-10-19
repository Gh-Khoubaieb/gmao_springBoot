package krobot.com.example.GMAO.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "bien")
@Getter
@Setter
public class Bien {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;


    @Column(name = "adresse")
    private String   adresse  ;

    @Column(name = "disponibilite")
    private String      disponibilite ;

    @Column(name = "codePostal")
    private String codePostal;

    @Column(name = "region")
    private String   region;

    @Column(name = "destypecription")
    private String type;

    @Column(name = "nom")
    private String nom;

    @Column(name = "telephone")
    private Integer   telephone;

    @OneToMany(cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    @JoinColumn(name = "bien_id", referencedColumnName = "id")
    @JsonManagedReference
    @OnDelete(action = OnDeleteAction.CASCADE)
   private Set<Equipement> equipements =new HashSet<>(); ;
}
