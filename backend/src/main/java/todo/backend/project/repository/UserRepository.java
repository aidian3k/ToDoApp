package todo.backend.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import todo.backend.project.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
