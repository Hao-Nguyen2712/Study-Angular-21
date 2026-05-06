# Tài liệu API - Fake Store API

**Base URL:** `https://fakestoreapi.com`

Fake Store API là một REST API miễn phí cung cấp dữ liệu giả lập (mock data) cho các ứng dụng e-commerce hoặc shopping. Dưới đây là danh sách chi tiết các endpoints hiện có.

## 1. Products (Sản phẩm)

Quản lý dữ liệu liên quan đến sản phẩm (Product).

| Phương thức | Endpoint         | Mô tả                                              |
| ----------- | ---------------- | -------------------------------------------------- |
| **GET**     | `/products`      | Lấy danh sách toàn bộ sản phẩm.                    |
| **GET**     | `/products/{id}` | Lấy thông tin chi tiết của một sản phẩm theo `id`. |
| **POST**    | `/products`      | Thêm mới một sản phẩm.                             |
| **PUT**     | `/products/{id}` | Cập nhật thông tin của một sản phẩm đã có.         |
| **DELETE**  | `/products/{id}` | Xóa một sản phẩm theo `id`.                        |

**Cấu trúc dữ liệu Product (Model):**

```typescript
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string; // URL
}
```

## 2. Carts (Giỏ hàng)

Quản lý giỏ hàng của người dùng.

| Phương thức | Endpoint      | Mô tả                                  |
| ----------- | ------------- | -------------------------------------- |
| **GET**     | `/carts`      | Lấy danh sách toàn bộ giỏ hàng.        |
| **GET**     | `/carts/{id}` | Lấy chi tiết một giỏ hàng theo `id`.   |
| **POST**    | `/carts`      | Tạo mới một giỏ hàng.                  |
| **PUT**     | `/carts/{id}` | Cập nhật thông tin một giỏ hàng đã có. |
| **DELETE**  | `/carts/{id}` | Xóa một giỏ hàng.                      |

**Cấu trúc dữ liệu Cart (Model):**

```typescript
export interface Cart {
  id: number;
  userId: number;
  products: Product[];
}
```

## 3. Users (Người dùng)

Quản lý thông tin người dùng hệ thống.

| Phương thức | Endpoint      | Mô tả                                    |
| ----------- | ------------- | ---------------------------------------- |
| **GET**     | `/users`      | Lấy danh sách toàn bộ người dùng.        |
| **GET**     | `/users/{id}` | Lấy chi tiết một người dùng theo `id`.   |
| **POST**    | `/users`      | Thêm mới một người dùng.                 |
| **PUT**     | `/users/{id}` | Cập nhật thông tin một người dùng đã có. |
| **DELETE**  | `/users/{id}` | Xóa một người dùng.                      |

**Cấu trúc dữ liệu User (Model):**

```typescript
export interface User {
  id: number;
  username: string;
  email: string;
  password?: string;
}
```

## 4. Auth (Xác thực)

Xử lý các tác vụ liên quan đến xác thực và cấp token.

| Phương thức | Endpoint      | Mô tả               | Payload / Body                   | Response           |
| ----------- | ------------- | ------------------- | -------------------------------- | ------------------ |
| **POST**    | `/auth/login` | Đăng nhập tài khoản | `{ username: '', password: '' }` | `{ token: '...' }` |
