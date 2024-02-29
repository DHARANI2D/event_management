package com.example.adp.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.adp.Dto.WishlistDto;
import com.example.adp.Services.WishlistService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/wishlists")
public class WishlistController {

    private WishlistService wishlistService;

    @PostMapping
    public ResponseEntity<WishlistDto> createWishlistItem(@RequestBody WishlistDto wishlistDto) {
        WishlistDto savedWishlistItem = wishlistService.createWishlistItem(wishlistDto);
        return new ResponseEntity<>(savedWishlistItem, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<WishlistDto> getWishlistItemById(@PathVariable("id") Long wishlistItemId) {
        WishlistDto wishlistDto = wishlistService.getWishlistItemById(wishlistItemId);
        return ResponseEntity.ok(wishlistDto);
    }

    @GetMapping
    public ResponseEntity<List<WishlistDto>> getAllWishlistItems() {
        List<WishlistDto> wishlistItems = wishlistService.getAllWishlistItems();
        return ResponseEntity.ok(wishlistItems);
    }

    @PutMapping("{id}")
    public ResponseEntity<WishlistDto> updateWishlistItem(@PathVariable("id") Long wishlistItemId, @RequestBody WishlistDto wishlistDto) {
        WishlistDto updatedWishlistItem = wishlistService.updateWishlistItem(wishlistItemId, wishlistDto);
        return ResponseEntity.ok(updatedWishlistItem);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteWishlistItem(@PathVariable("id") Long wishlistItemId) {
        wishlistService.deleteWishlistItem(wishlistItemId);
        return ResponseEntity.noContent().build();
    }
}
