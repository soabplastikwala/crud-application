package com.fullstackapplication.crud.exception;

public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(Long id){
        super("could not found :"+id);
    }
}
