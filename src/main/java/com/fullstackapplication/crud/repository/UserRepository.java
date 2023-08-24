package com.fullstackapplication.crud.repository;

import com.fullstackapplication.crud.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {


}
