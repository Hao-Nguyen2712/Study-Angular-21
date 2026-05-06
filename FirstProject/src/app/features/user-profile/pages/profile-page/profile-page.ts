import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ProfileView } from '../../components/profile-view/profile-view';
import { UserProfile } from '../../models/profile.model';
import { ProfileEditForm } from '../../components/profile-edit-form/profile-edit-form';

@Component({
  selector: 'app-profile-page',
  imports: [ProfileView, ProfileEditForm],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePage {
  isEditing = signal(false);

  onEditClicked() {
    this.isEditing.set(true);
  }

  onCancelEdit() {
    this.isEditing.set(false);
  }

  onSaveProfile(updatedProfile: UserProfile) {
    this.userProfile.set(updatedProfile);
    this.isEditing.set(false);
  }

  userProfile = signal<UserProfile>({
    id: '1',
    name: 'Hào Nguyễn',
    role: 'Software Engineer @ FirstProject',
    bio: 'Đam mê phát triển ứng dụng với Angular và xây dựng các hệ thống hiệu năng cao. Luôn thích khám phá các công nghệ mới và chia sẻ kiến thức.',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hao',
    coverUrl:
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop',
    stats: {
      projects: 128,
      followers: 1200,
      rating: 4.5,
    },
  });
}
