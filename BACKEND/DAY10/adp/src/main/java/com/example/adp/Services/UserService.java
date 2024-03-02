package com.example.adp.Services;

import java.util.List;

import com.example.adp.Dto.*;

public interface UserService {
    UserDto createUser(UserDto userDto);

    UserDto getUserById(int userId);

    List<UserDto> getAllUsers();

    UserDto updateUser(int userId, UserDto userDto);

    void deleteUser(int userId);
}
