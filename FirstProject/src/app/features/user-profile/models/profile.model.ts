export interface UserProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  coverUrl: string;
  stats: {
    projects: number;
    followers: number;
    rating: number;
  };
}
