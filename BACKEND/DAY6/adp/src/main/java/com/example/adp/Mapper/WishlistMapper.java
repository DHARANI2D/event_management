package com.example.adp.Mapper;

import com.example.adp.Dto.WishlistDto;
import com.example.adp.Model.Wishlist;

public class WishlistMapper {

    public static WishlistDto mapToWishlistDto(Wishlist wishlist) {
        return new WishlistDto(
                wishlist.getId(),
                wishlist.getItemName(),
                wishlist.getCategory(),
                wishlist.getImgUrl()
        );
    }

    public static Wishlist mapToWishlist(WishlistDto wishlistDto) {
        Wishlist wishlist = new Wishlist();
        wishlist.setId(wishlistDto.getId());
        wishlist.setItemName(wishlistDto.getItemName());
        wishlist.setCategory(wishlistDto.getCategory());
        wishlist.setImgUrl(wishlistDto.getImgUrl());
        return wishlist;
    }
}
