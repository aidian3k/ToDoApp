package todo.backend.project.controller;

import org.springframework.web.bind.annotation.*;
import todo.backend.project.entity.Task;
import todo.backend.project.entity.User;
import todo.backend.project.service.TaskService;
import todo.backend.project.service.UserService;

import java.util.List;
import java.util.stream.Collectors;

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

    @GetMapping("/users/{userId}/tasks/completed")
    public List<Task> getUserCompletedTasks(@PathVariable Long userId) {
        User foundUser = userService.getUserById(userId);

        return foundUser.getTasks()
                .stream()
                .filter(task -> !task.isCompleted())
                .collect(Collectors.toList());
    }

    @DeleteMapping("/tasks/{taskId}")
    public void deleteSingleTask(@PathVariable Long taskId) {
        taskService.dropSingleTask(taskId);
    }

    @PutMapping("/tasks/{taskId}")
    public Task updateTask(@PathVariable Long taskId) {
        return taskService.updateTask(taskService.getTaskById(taskId));
    }

    @PutMapping("/tasks/{taskId}/toggleCompletion")
    public Task setSpecificTaskCompleted(@PathVariable Long taskId) {
        return taskService.toggleCompletingTask(taskId);
    }
}
