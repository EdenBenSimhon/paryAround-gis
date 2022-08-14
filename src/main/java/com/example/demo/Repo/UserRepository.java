package com.example.demo.Repo;

import com.example.demo.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends MongoRepository<User, Integer>{

    @Query(value = "{'users.email':?0}")
    User findByEmail(@Param("email") String email);


    //need fix
    // @Query(value = "SELECT * FROM User_data WHERE PASSWORD LIKE :password " , nativeQuery = true)
    //boolean findByPassword(@Param("password") String password);


  //  @Query(value = "SELECT * FROM User_data WHERE Email LIKE :email" , nativeQuery = true)
    //List <User> findAllUsers(@Param("email") String email);
}
