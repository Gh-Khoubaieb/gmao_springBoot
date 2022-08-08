package krobot.com.example.GMAO.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "employee")
@Getter
@Setter
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "nom")
    private String nom;

    @Column(name = "adresse")
    private String   adresse  ;

    @Column(name = "cin")
    private Integer   cin  ;

    @Column(name = "email")
    private String   email  ;

    @Column(name = "telephone")
    private Integer   telephone;

    @Column(name = "label")
    private String   label  ;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)


    private Equipe equipe ;
}
