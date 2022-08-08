package krobot.com.example.GMAO.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.util.Date;
import java.sql.Time;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.Callable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Intervention")
@DynamicUpdate
public class Intervention {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id     ;
 private String   description ;
    private String         type;
    private String   priorite;

    private Date DateDeDebut;
    private Date DateDeFin;
    @JsonFormat(pattern="HH:mm")
  private Date heure;
    private String           codeIntervention ;
    private String           statut ;


    @ManyToMany(fetch = FetchType.LAZY,
    cascade ={CascadeType.PERSIST,
    CascadeType.MERGE},
    mappedBy = "interventions")
    @JsonIgnore

    private Set<Panne> pannes = new HashSet<>() ;
}
