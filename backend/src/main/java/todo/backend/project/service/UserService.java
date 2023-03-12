package todo.backend.project.service;

import org.springframework.stereotype.Service;
import todo.backend.project.entity.User;
import todo.backend.project.exception.authentication.EmailTakenException;
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

    public User addUser(User user) {
        validateUser(user);
        userRepository.save(user);

        return user;
    }

    public void updateUser(User foundUser) {
        userRepository.save(foundUser);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow(IllegalArgumentException::new);
    }

    private void validateUser(User newUser) {
        List<User> users = getUsers();

        for (User user : users) {
            if (user.getEmail().equals(newUser.getEmail())) {
                throw new EmailTakenException("/api/v1/createUser", "Email is already taken!");
            }
        }
    }
}
