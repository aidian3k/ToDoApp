package todo.backend.project.service;

import org.springframework.stereotype.Service;
import todo.backend.project.entity.Task;
import todo.backend.project.entity.User;
import todo.backend.project.repository.TaskRepository;
import todo.backend.project.repository.UserRepository;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public TaskService(TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }

    public List<Task> getAllTasks() {
        return (List<Task>) taskRepository.findAll();
    }

    public Task createNewTask(Task task) {
        taskRepository.save(task);

        return task;
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElseThrow(IllegalArgumentException::new);
    }

    public Task updateTask(Task task) {
        taskRepository.save(task);

        return task;
    }

    public void dropSingleTask(Long taskId) {
        Task foundTask = getTaskById(taskId);

        taskRepository.delete(foundTask);
    }

    public Task updateUserTask(Long userId, Task updateTask) {
        User foundUser = userRepository.findById(userId).orElseThrow(IllegalArgumentException::new);

        if (!foundUser.getTasks().contains(updateTask)) {
            throw new IllegalStateException("User must have task to update task!");
        } else {
            foundUser.getTasks().add(updateTask);
            updateTask.setUser(foundUser);
            updateTask(updateTask);

            return updateTask;
        }
    }
}
