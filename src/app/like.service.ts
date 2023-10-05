import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private likes: { [postId: number]: number } = {};

  getLikes(postId: number): number {
    return this.likes[postId] || 0;
  }

  likePost(postId: number): void {
    this.likes[postId] = (this.likes[postId] || 0) + 1;
  }
}
