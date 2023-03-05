package todo.backend.project.service;

import org.springframework.stereotype.Service;
import todo.backend.project.entity.User;
import todo.backend.project.repository.UserRepository;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
