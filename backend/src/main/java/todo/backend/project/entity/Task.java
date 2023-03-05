package todo.backend.project.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "TASKS")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private Date endDate;
    @ManyToOne
    private User user;
}
