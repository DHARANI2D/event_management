package com.example.adp.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CartDto {
    private Long id;
    private String orderId;
    private String cake;
    private String venue;
    private String photography;
    private String food;
    private String entertainment;
    private String decorations;
    private String gift;
}
