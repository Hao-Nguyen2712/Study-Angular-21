import { Component, inject, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, ModuleRegistry, themeQuartz } from 'ag-grid-community';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

ModuleRegistry.registerModules([AllCommunityModule]);
@Component({
  selector: 'app-product-list',
  imports: [AgGridAngular],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  productService = inject(ProductService);
  router = inject(Router);
  theme = themeQuartz;

  colDefs: ColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'image',
      headerName: 'Ảnh',
      width: 100,
      cellRenderer: (params: any) => {
        return `<img src="${params.value}" alt="img" class="h-8 object-contain" />`;
      },
    },
    { field: 'title', headerName: 'Tên Sản Phẩm', flex: 1, filter: true },
    { field: 'category', headerName: 'Danh Mục', width: 150, filter: true },
    {
      field: 'price',
      headerName: 'Giá ($)',
      width: 120,
      valueFormatter: (p) => `$${p.value}`,
    },
  ];

  ngOnInit(): void {
    this.productService.loadProduct();
  }

  onRowClick(event: any) {
    const clickedProduct = event.data;
    this.router.navigate(['/products', clickedProduct.id]);
  }
}
