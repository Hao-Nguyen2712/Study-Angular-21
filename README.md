my-wms-app/
├── src/
│   ├── app/
│   │   │
│   │   ├── core/                        # 1. CORE: Trái tim của hệ thống (Chỉ load 1 lần)
│   │   │   ├── interceptors/            # - Nơi gắn Token JWT, bắt lỗi 401/500 (auth.interceptor.ts)
│   │   │   ├── guards/                  # - Chặn truy cập nếu không có quyền Admin (role.guard.ts)
│   │   │   └── services/                # - Chứa logic dùng chung toàn App (auth.service.ts, signalr.service.ts)
│   │   │
│   │   ├── shared/                      # 2. SHARED: Đồ nghề dùng chung (Không chứa Business Logic)
│   │   │   ├── components/              # - Nút bấm custom, Bảng AG-Grid dùng chung, Modal Popup
│   │   │   ├── directives/              # - Directive chặn nhập chữ vào ô số lượng (numbers-only.directive.ts)
│   │   │   └── utils/                   # - Các hàm format tiền tệ, định dạng ngày giờ (date.util.ts)
│   │   │
│   │   ├── features/                    # 3. FEATURES: Chia theo nghiệp vụ (Domain-Driven)
│   │   │   │
│   │   │   ├── inventory-adjustment/    # 👉 NGHIỆP VỤ: Điều chỉnh phiếu/Tồn kho
│   │   │   │   ├── components/          #   - Dumb components: Dùng để hiển thị (adjustment-form.component)
│   │   │   │   ├── pages/               #   - Smart components: Gắn vào Router (adjustment-list.page)
│   │   │   │   ├── services/            #   - Business Logic điều chỉnh (adjustment.service.ts)
│   │   │   │   ├── models/              #   - Interface TypeScript (receipt.model.ts)
│   │   │   │   └── adjustment.routes.ts #   - Khai báo các đường dẫn URL riêng của cụm này
│   │   │   │
│   │   │   └── pallet-management/       # 👉 NGHIỆP VỤ: Quản lý vị trí Pallet
│   │   │       ├── components/          #   - (pallet-card, pallet-grid...)
│   │   │       ├── pages/               #   - (pallet-dashboard.page)
│   │   │       ├── services/            #   - (pallet-api.service)
│   │   │       ├── models/              #   - (pallet.model.ts)
│   │   │       └── pallet.routes.ts     #   - URL cho pallet
│   │   │
│   │   ├── app.component.ts             # 4. ENTRY POINT: Component gốc của cả giao diện
│   │   ├── app.component.html           #    - Thường chỉ chứa <router-outlet></router-outlet>
│   │   ├── app.routes.ts                #    - File điều phối tổng (Lazy load các file .routes.ts ở Feature)
│   │   └── app.config.ts                #    - File đăng ký Provider, HTTP (Giống Program.cs của .NET)
│   │
│   ├── assets/                          # 5. TĨNH: Logo, Hình ảnh, i18n (Giống thư mục wwwroot)
│   └── environments/                    # 6. MÔI TRƯỜNG: Lưu URL API (environment.ts, environment.prod.ts)
│
├── angular.json                         # Cấu hình bộ build của Angular (Giống file .csproj)
├── package.json                         # Nơi khai báo các thư viện (Giống file NuGet)
└── tsconfig.json                        # Cấu hình biên dịch TypeScript (Gốc rễ của app)