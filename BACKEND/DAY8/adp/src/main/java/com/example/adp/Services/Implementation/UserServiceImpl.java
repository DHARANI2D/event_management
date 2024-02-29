package com.example.adp.Services.Implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.adp.Dto.UserDto;
import com.example.adp.Exception.ResourceNotFoundException;
import com.example.adp.Mapper.UserMapper;
import com.example.adp.Model.User;
import com.example.adp.Repository.UserRepository;
import com.example.adp.Services.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(int userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(UserMapper::mapToUserDto).collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(int userId, UserDto userDto) {
        User existingUser = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        User updatedUser = UserMapper.mapToUser(userDto);
        updatedUser.setId(existingUser.getId());
        User savedUser = userRepository.save(updatedUser);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public void deleteUser(int userId) {
        userRepository.deleteById(userId);
    }
}
