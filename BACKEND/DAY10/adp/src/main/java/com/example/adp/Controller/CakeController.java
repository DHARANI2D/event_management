package com.example.adp.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.example.adp.Dto.CakeDto;
import com.example.adp.Services.CakeService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/cakes")
public class CakeController {

    private CakeService cakeService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<CakeDto> createCake(@RequestBody CakeDto cakeDto) {
        CakeDto savedCake = cakeService.createCake(cakeDto);
        return new ResponseEntity<>(savedCake, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<CakeDto> getCakeById(@PathVariable("id") Long cakeId) {
        CakeDto cakeDto = cakeService.getCakeById(cakeId);
        return ResponseEntity.ok(cakeDto);
    }

    @GetMapping
    public ResponseEntity<List<CakeDto>> getAllCakes() {
        List<CakeDto> cakes = cakeService.getAllCakes();
        return ResponseEntity.ok(cakes);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<CakeDto> updateCake(@PathVariable("id") Long cakeId, @RequestBody CakeDto cakeDto) {
        CakeDto updatedCake = cakeService.updateCake(cakeId, cakeDto);
        return ResponseEntity.ok(updatedCake);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteCake(@PathVariable("id") Long cakeId) {
        cakeService.deleteCake(cakeId);
        return ResponseEntity.noContent().build();
    }
}
