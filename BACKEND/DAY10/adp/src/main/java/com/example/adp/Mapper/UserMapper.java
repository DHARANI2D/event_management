package com.example.adp.Mapper;

import com.example.adp.Dto.UserDto;
import com.example.adp.Model.User;

public class UserMapper {

    public static UserDto mapToUserDto(User userInfo) {
        return new UserDto(
                userInfo.getId(),
                userInfo.getName(),
                userInfo.getContactNo(),
                userInfo.getEmail(), 
                userInfo.getCity(),
                userInfo.getPassword(),
                userInfo.getRole());
    }

    public static User mapToUser(UserDto userInfoDto) {
        return new User(
                userInfoDto.getId(),
                userInfoDto.getName(),
                userInfoDto.getContact_no(),
                userInfoDto.getEmail_id(), 
                userInfoDto.getCity(),
                userInfoDto.getPassword(),
                userInfoDto.getRole());
    }
}
