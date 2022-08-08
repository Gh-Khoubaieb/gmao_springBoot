package krobot.com.example.GMAO.Entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "emplacement")
@Data
public class Emplacement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "longitude")
    private String longitude;

    @Column(name = "latitude")
    private String latitude;

    @Column(name = "altitude")
    private String altitude;

    @Column(name = "libelle")
    private String libelle;

    @OneToMany(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "emplacement_id", referencedColumnName = "id")
    Set< Produit > produits = new HashSet<>();
}
