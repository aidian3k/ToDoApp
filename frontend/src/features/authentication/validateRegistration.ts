export function validateRegistrationData(emailInput: any, secondPasswordInput: any, passwordInput: any, setError: any): boolean {
    if (emailInput.current === null || passwordInput.current === null || secondPasswordInput.current === null) {
        setError({
            email: false,
            password: false,
            internal: true,
            message: 'Wrong data was given in the registration form!',
            secondPassword: false,
            any: false
        });

        return true;
    }

    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    const secondPassword = secondPasswordInput.current.value;
    let errorObject = {
        email: false,
        password: false,
        internal: false,
        message: '',
        secondPassword: false,
        any: false
    };

    if (password.length === 0) {
        errorObject = {...errorObject, password: true, any: true};
    }

    if (secondPassword !== password && password.length !== 0) {
        errorObject = {...errorObject, secondPassword: true, any: true};
    }

    if (!email.match('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')) {
        errorObject = {...errorObject, email: true, any: true};
    }

    setError(errorObject);

    return errorObject.any;
}