import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilePage } from './profile-page';
// Import 'By' để hỗ trợ tìm kiếm element trên giao diện DOM
import { By } from '@angular/platform-browser';

describe('ProfilePage', () => {
  let component: ProfilePage;
  let fixture: ComponentFixture<ProfilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilePage);
    component = fixture.componentInstance;

    // YÊU CẦU QUAN TRỌNG: Ép Angular "vẽ" lại màn hình lần đầu tiên
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // --- PHẦN 1: TEST LOGIC CLASS ---
  describe('Logic Testing (Class behavior)', () => {
    it('mặc định isEditing phải là false', () => {
      expect(component.isEditing()).toBe(false);
    });

    it('hàm onEditClicked() phải đổi isEditing thành true', () => {
      component.onEditClicked();
      expect(component.isEditing()).toBe(true);
    });

    it('hàm onSaveProfile() phải cập nhật data và đổi isEditing về false', () => {
      const mockProfile = { ...component.userProfile(), name: 'Hào Đẹp Trai' };

      component.onSaveProfile(mockProfile);

      expect(component.userProfile().name).toBe('Hào Đẹp Trai');
      expect(component.isEditing()).toBe(false);
    });
  });

  // --- PHẦN 2: TEST GIAO DIỆN (DOM) ---
  describe('DOM Testing (UI behavior)', () => {
    it('mặc định phải hiển thị <app-profile-view> và ẩn <app-profile-edit-form>', () => {
      const viewElement = fixture.debugElement.query(By.css('app-profile-view'));
      const formElement = fixture.debugElement.query(By.css('app-profile-edit-form'));

      expect(viewElement).toBeTruthy();
      expect(formElement).toBeFalsy();
    });

    it('khi isEditing() là true, phải hiện Form và ẩn View', () => {
      component.isEditing.set(true);
      fixture.detectChanges();

      const viewElement = fixture.debugElement.query(By.css('app-profile-view'));
      const formElement = fixture.debugElement.query(By.css('app-profile-edit-form'));

      // 4. Kiểm tra
      expect(viewElement).toBeFalsy(); // View đã biến mất
      expect(formElement).toBeTruthy(); // Form đã xuất hiện
    });
  });
});
