package todo.backend.project.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import todo.backend.project.entity.Task;

@Repository
public interface TaskRepository extends CrudRepository<Task, Long> {
}
