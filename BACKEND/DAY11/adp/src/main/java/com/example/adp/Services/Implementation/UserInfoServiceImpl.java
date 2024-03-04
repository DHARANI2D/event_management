package com.example.adp.Services.Implementation;

import com.example.adp.Dto.UserInfoDto;
import com.example.adp.Exception.ResourceNotFoundException;
import com.example.adp.Mapper.UserInfoMapper;
import com.example.adp.Model.UserInfo;
import com.example.adp.Repository.UserInfoRepository;
import com.example.adp.Services.UserInfoService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserInfoServiceImpl implements UserInfoService {

    private final UserInfoRepository userInfoRepository;

    @Override
    public UserInfoDto getUserInfoById(Integer userId) {
        UserInfo userInfo = userInfoRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User information not found with id: " + userId));
        return UserInfoMapper.mapToUserInfoDto(userInfo);
    }

    @Override
    public UserInfoDto updateUserInfo(Integer userId, UserInfoDto userInfoDto) {
        UserInfo existingUserInfo = userInfoRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User information not found with id: " + userId));
        existingUserInfo.setName(userInfoDto.getName());
        existingUserInfo.setEmail(userInfoDto.getEmail());
        existingUserInfo.setPassword(userInfoDto.getPassword());
        existingUserInfo.setContactNo(userInfoDto.getContactNo());
        existingUserInfo.setCity(userInfoDto.getCity());
        existingUserInfo.setRoles(userInfoDto.getRoles());
        UserInfo savedUserInfo = userInfoRepository.save(existingUserInfo);
        return UserInfoMapper.mapToUserInfoDto(savedUserInfo);
    }

    @Override
    public void deleteUserInfo(Integer userId) {
        if (!userInfoRepository.existsById(userId)) {
            throw new ResourceNotFoundException("User information not found with id: " + userId);
        }
        userInfoRepository.deleteById(userId);
    }
}
