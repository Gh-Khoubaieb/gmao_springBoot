package krobot.com.example.GMAO.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;


import java.time.Instant;
import java.time.OffsetTime;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Panne")
@DynamicUpdate
public class Panne {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id     ;
 private String   description ;
    private String         type;
    private String   priorite;
         private Date date;


    @JsonFormat(pattern="HH:mm")
  private Date heure;
    private String           code ;
    private String           frequence ;


    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "pannes")
    @JsonIgnore
    private Set<Equipement> equipements = new HashSet<>();


    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable( name = "panne_intervention",
    joinColumns = {@JoinColumn(name = "panne_id", referencedColumnName = "id")},
            inverseJoinColumns = @JoinColumn(name = "intervention_id", referencedColumnName = "id")
    )
    private Set<Intervention> interventions = new HashSet<>() ;

    public void addIntervention(Intervention intervention) {
        this.interventions.add(intervention) ;
        intervention.getPannes().add(this) ;
    }

    public void  removeIntervention(long interventionId) {
        Intervention intervention = this.interventions.stream().filter(t -> t.getId() == interventionId).findFirst().orElse(null);
        if (interventions != null) {
            this.interventions.remove(intervention);
            intervention.getPannes().remove(this);
        }
    }
}
