import { Component, input, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { UserProfile } from '../../models/profile.model';

@Component({
  selector: 'app-profile-view',
  imports: [DecimalPipe],
  templateUrl: './profile-view.html',
  styleUrl: './profile-view.css',
})
export class ProfileView {
  profile = input.required<UserProfile>();
  editClick = output<void>();
}
