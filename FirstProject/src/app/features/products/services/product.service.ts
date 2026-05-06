import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  private readonly apiUrl = 'https://fakestoreapi.com/products';

  products = signal<Product[]>([]);
  isLoading = signal<boolean>(false);
  selectedProduct = signal<Product | null>(null);
  isDetailLoading = signal<boolean>(false);

  loadProduct(): void {
    this.isLoading.set(true);

    this.http.get<Product[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.products.set(data);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error('Lỗi khi lấy danh sách sản phẩm:', error);
        this.isLoading.set(false);
      },
    });
  }

  getProductById(id: number): void {
    this.isDetailLoading.set(true);
    const currentProduct = this.products();
    const existingProduct = currentProduct.find((p) => p.id === id);
    if (existingProduct) {
      this.selectedProduct.set(existingProduct);
      this.isDetailLoading.set(false);
    } else {
      this.http.get<Product>(`${this.apiUrl}/${id}`).subscribe({
        next: (data) => {
          this.selectedProduct.set(data);
          this.isDetailLoading.set(false);
        },
        error: (err) => {
          console.error('Lỗi lấy chi tiết:', err);
          this.isDetailLoading.set(false);
        },
      });
    }
  }

  clearSelectedProduct(): void {
    this.selectedProduct.set(null);
  }
}
