package todo.backend.project.exception.authentication;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import todo.backend.project.controller.UserController;
import todo.backend.project.service.UserService;

import java.time.LocalDateTime;

@ControllerAdvice(basePackageClasses = {UserController.class, UserService.class})
public class AuthenticationErrorHandler {
    @ExceptionHandler(value = {EmailTakenException.class})
    public ResponseEntity<AuthenticationError> handleEmailTaken(EmailTakenException throwable) {
        AuthenticationError authenticationError = AuthenticationError
                .builder()
                .path(throwable.getPath())
                .message(throwable.getMessage())
                .dateTime(LocalDateTime.now())
                .httpStatus(HttpStatus.NOT_ACCEPTABLE)
                .build();

        return new ResponseEntity<>(authenticationError, HttpStatus.NOT_ACCEPTABLE);
    }
}
