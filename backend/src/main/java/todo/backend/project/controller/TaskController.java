package todo.backend.project.controller;

import org.springframework.web.bind.annotation.*;
import todo.backend.project.entity.Task;
import todo.backend.project.entity.User;
import todo.backend.project.service.TaskService;
import todo.backend.project.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
public class TaskController {
    private final TaskService taskService;
    private final UserService userService;

    public TaskController(TaskService taskService, UserService userService) {
        this.taskService = taskService;
        this.userService = userService;
    }

    @GetMapping("/tasks")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @PostMapping("/tasks")
    public Task createNewTask(@RequestBody Task task) {
        taskService.createNewTask(task);

        return task;
    }

    @PutMapping("/users/{userId}/tasks/{taskId}")
    public Task assignTaskToUser(@PathVariable Long userId, @PathVariable Long taskId) {
        User foundUser = userService.getUserById(userId);
        Task foundTask = taskService.getTaskById(taskId);

        foundUser.getTasks().add(foundTask);
        userService.updateUser(foundUser);

        foundTask.setUser(foundUser);
        taskService.updateTask(foundTask);

        return foundTask;
    }

    @GetMapping("/users/{userId}/tasks")
    public List<Task> getUserTasks(@PathVariable Long userId) {
        User foundUser = userService.getUserById(userId);

        return foundUser.getTasks();
    }
}
