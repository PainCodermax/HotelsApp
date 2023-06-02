export const createError = (status, message) =>{
    const err = new Error()
    err.message = message;
    err.name = status;
    return err;
} 