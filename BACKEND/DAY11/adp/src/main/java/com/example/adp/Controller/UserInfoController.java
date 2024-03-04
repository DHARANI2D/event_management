package com.example.adp.Controller;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.adp.Dto.UserInfoDto;
import com.example.adp.Services.UserInfoService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/userinfo")
public class UserInfoController {

    private UserInfoService userInfoService;

    @GetMapping("/{userId}")
    public ResponseEntity<UserInfoDto> getUserInfo(@PathVariable("userId") Integer userId) {
        UserInfoDto userInfoDto = userInfoService.getUserInfoById(userId);
        return ResponseEntity.ok(userInfoDto);
    }

    @PreAuthorize("hasAuthority('USER')")
    @PutMapping("/{userId}")
    public ResponseEntity<UserInfoDto> updateUserInfo(@PathVariable("userId") Integer userId, @RequestBody UserInfoDto userInfoDto) {
        UserInfoDto updatedUserInfo = userInfoService.updateUserInfo(userId, userInfoDto);
        return ResponseEntity.ok(updatedUserInfo);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUserInfo(@PathVariable("userId") Integer userId) {
        userInfoService.deleteUserInfo(userId);
        return ResponseEntity.noContent().build();
    }
}
