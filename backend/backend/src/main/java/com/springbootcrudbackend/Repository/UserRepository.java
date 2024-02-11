package com.springbootcrudbackend.Repository;

import com.springbootcrudbackend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
