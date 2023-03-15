package todo.backend.project.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "TASKS")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private Long days;
    private Long months;
    private Long hours;
    private boolean completed;
    @ManyToOne
    @JsonIgnore
    private User user;

    @Override
    public boolean equals(Object comparingObject) {
        return comparingObject instanceof Task
                && ((Task) comparingObject).id == this.id;
    }
}
