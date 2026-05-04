import { Component, input, output, inject, OnInit } from '@angular/core';
import { UserProfile } from '../../models/profile.model';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-edit-form',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-edit-form.html',
  styleUrl: './profile-edit-form.css',
})
export class ProfileEditForm {
  profile = input.required<UserProfile>();
  cancel = output<void>();
  save = output<UserProfile>();
  private fb = inject(FormBuilder);

  profileForm!: FormGroup;

  ngOnInit() {
    const currentProfile = this.profile();

    this.profileForm = this.fb.group({
      name: [currentProfile.name, Validators.required],
      role: [currentProfile.role, Validators.required],
      bio: [currentProfile.bio, Validators.required],
      avatarUrl: [currentProfile.avatarUrl],
      coverUrl: [currentProfile.coverUrl],
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const updatedProfile: UserProfile = {
        ...this.profile(),
        ...this.profileForm.value,
      };

      this.save.emit(updatedProfile);
    }
  }
}
