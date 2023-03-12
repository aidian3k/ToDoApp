package todo.backend.project.controller;

import org.springframework.web.bind.annotation.*;
import todo.backend.project.entity.User;
import todo.backend.project.exception.authentication.EmailTakenException;
import todo.backend.project.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/createUser")
    public User createUser(@RequestBody User newUser) throws EmailTakenException {
        return userService.addUser(newUser);
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{userId}")
    public User getUserById(@PathVariable Long userId) {
        return userService.getUserById(userId);
    }

}
