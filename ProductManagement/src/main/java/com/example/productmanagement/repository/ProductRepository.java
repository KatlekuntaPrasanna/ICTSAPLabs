package com.example.productmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.productmanagement.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}