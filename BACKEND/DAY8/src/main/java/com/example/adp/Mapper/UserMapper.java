package com.example.adp.Mapper;

import com.example.adp.Dto.UserDto;
import com.example.adp.Model.User;

public class UserMapper {

    public static UserDto mapToUserDto(User userInfo) {
        return new UserDto(
                userInfo.getId(),
                userInfo.getName(),
                userInfo.getContact(),
                userInfo.getEmail(),
                userInfo.getCity(),
                userInfo.getPassword(),
                userInfo.getRoles());
    }

    public static User mapToUser(UserDto userInfoDto) {
        return new User(
                userInfoDto.getId(),
                userInfoDto.getName(),
                userInfoDto.getContact(),
                userInfoDto.getEmail(),
                userInfoDto.getCity(),
                userInfoDto.getPassword(),
                userInfoDto.getRoles());
    }

}
