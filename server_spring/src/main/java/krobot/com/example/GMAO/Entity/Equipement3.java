package krobot.com.example.GMAO.Entity;

import com.fasterxml.jackson.annotation.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;



@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Equipement33")
@DynamicUpdate

public class Equipement3 {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
   private Integer IdEquipement    ;
  // private Integer IdBien      ;
  //private Integer  IdSociete   ;
   //private Integer IdFournisseur   ;
   //private Integer IdArtisan ;
   //private Integer IdEmplacement;
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

/*
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "bien")
    @OnDelete(action = OnDeleteAction.CASCADE)
   // @JsonManagedReference
    @JsonBackReference
    private Bien bien;



  //  @ManyToOne(fetch = FetchType.EAGER, optional = false)
  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "fk", nullable = false)
  @OnDelete(action = OnDeleteAction.CASCADE)
  @JsonIgnore
  private Bien bien;

 */
/*
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "id_bien", nullable = false, referencedColumnName = "idBien")
    @OnDelete(action = OnDeleteAction.CASCADE)
   // @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id_equipement")
    @JsonIdentityReference(alwaysAsId=true)

    private Bien bien;

 */
}
