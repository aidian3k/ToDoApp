package todo.backend.project.exception.authentication;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class AuthenticationError {
    private HttpStatus httpStatus;
    private String message;
    private String path;
    private LocalDateTime dateTime;
}
