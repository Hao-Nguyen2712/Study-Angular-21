
## 🏗 Folder Structure

```text
my-wms-app/
├── src/
│   ├── app/
│   │   ├── core/                        # 1. CORE: Trái tim của hệ thống (Singleton)
│   │   │   ├── interceptors/            # - Xử lý Request/Response (Gắn Token JWT, lỗi 401/500)
│   │   │   ├── guards/                  # - Bảo vệ Route (Phân quyền Admin/User)
│   │   │   └── services/                # - Logic Global (AuthService, SignalRService)
│   │   │
│   │   ├── shared/                      # 2. SHARED: UI/Tiện ích dùng chung
│   │   │   ├── components/              # - Dumb UI (Nút bấm, Bảng AG-Grid, Modal Popup)
│   │   │   ├── directives/              # - Thao tác DOM (VD: chặn nhập chữ vào ô số lượng)
│   │   │   └── utils/                   # - Hàm Helper (Format tiền tệ, định dạng ngày giờ)
│   │   │
│   │   ├── features/                    # 3. FEATURES: Phân chia theo nghiệp vụ (Domain-Driven)
│   │   │   │
│   │   │   ├── inventory-adjustment/    #  Feature: Điều chỉnh phiếu/Tồn kho
│   │   │   │   ├── components/          #   - Dumb components (Chỉ hiển thị, VD: adjustment-form)
│   │   │   │   ├── pages/               #   - Smart components (Gắn vào Router, gọi Service)
│   │   │   │   ├── services/            #   - Business Logic & API calls của nghiệp vụ này
│   │   │   │   ├── models/              #   - Interface TypeScript (DTOs)
│   │   │   │   └── adjustment.routes.ts #   - Routing nội bộ của Feature
│   │   │   │
│   │   │   └── pallet-management/       #  Feature: Quản lý vị trí Pallet
│   │   │       ├── components/          #   - (pallet-card, pallet-grid...)
│   │   │       ├── pages/               #   - (pallet-dashboard)
│   │   │       ├── services/            #   - (pallet-api.service)
│   │   │       ├── models/              #   - (pallet.model.ts)
│   │   │       └── pallet.routes.ts     #   - Routing nội bộ của Feature
│   │   │
│   │   ├── app.component.ts             # 4. ENTRY POINT: Root component chứa <router-outlet>
│   │   ├── app.routes.ts                # - Điều phối tổng (Lazy load các file .routes.ts ở Feature)
│   │   └── app.config.ts                # - Cấu hình Provider, HTTP Client (Tương đương Program.cs)
│   │
│   ├── assets/                          # 5. ASSETS: Logo, Hình ảnh, i18n (Tương đương wwwroot)
│   └── environments/                    # 6. ENV: Cấu hình biến môi trường (Dev/Staging/Prod)
│
├── angular.json                         # Cấu hình bộ build Angular CLI
├── package.json                         # Quản lý thư viện NPM
└── tsconfig.json                        # Cấu hình biên dịch TypeScript
