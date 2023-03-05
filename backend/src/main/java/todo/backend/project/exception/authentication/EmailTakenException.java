package todo.backend.project.exception.authentication;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
public class EmailTakenException extends RuntimeException {
    private String path;
    private String message;

    public EmailTakenException(String path, String message) {
        super();
        this.path = path;
        this.message = message;
    }

    public String getPath() {
        return path;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
