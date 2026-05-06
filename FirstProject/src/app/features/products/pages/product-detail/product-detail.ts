import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';
@Component({
  selector: 'app-product-detail',
  imports: [Button, Tag],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit, OnDestroy {
  productService = inject(ProductService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.productService.getProductById(Number(idParam));
    }
  }

  goBack() {
    this.router.navigate(['/products']);
  }
  ngOnDestroy() {
    this.productService.clearSelectedProduct();
  }
}
