package krobot.com.example.GMAO.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Equipe")
@DynamicUpdate
public class Equipe {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id     ;
    //private Integer IdSociete    ;
    //private Integer IdEmplacement      ;
    //private Integer IdInspection     ;
    private String   Disponibilite ;
    private String        NomEquipe;
    private Date DateDeDebut;
    private Date DateDeFin;

    @OneToMany(cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    @JoinColumn(name = "equipe_id", referencedColumnName = "id")


    private Set<Employee> employees ;
}
