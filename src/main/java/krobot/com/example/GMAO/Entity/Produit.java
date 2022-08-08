package krobot.com.example.GMAO.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityReference;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "produit")
@Getter
@Setter
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String text;
    private String  reference;
    private Integer stock ;
    private String nomProduit ;
    private String description ;

    @ManyToOne(fetch = FetchType.LAZY, optional = false,cascade = CascadeType.PERSIST)

    @JoinColumn(name = "emplacement_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
//    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)

    private Emplacement emplacement;

}
