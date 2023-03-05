package todo.backend.project;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import todo.backend.project.entity.User;
import todo.backend.project.repository.UserRepository;
import todo.backend.project.service.UserService;

import java.util.List;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner{

    private final UserService userService;

    public BackendApplication(UserService userService) {
        this.userService = userService;
    }

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println(userService.getUsers().size());
    }
}
