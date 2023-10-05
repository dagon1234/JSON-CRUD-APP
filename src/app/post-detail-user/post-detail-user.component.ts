import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { LikeService } from '../like.service';

@Component({
  selector: 'app-post-detail-user',
  templateUrl: './post-detail-user.component.html',
  styleUrls: ['./post-detail-user.component.css']
})

export class PostDetailComponentUser implements OnInit {
  post: any;
  likes: number = 0;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private likeService: LikeService
  ) {}

  ngOnInit() {
    const postIdParam = this.route.snapshot.paramMap.get('id');
    const postId = Number(postIdParam);

    if (!isNaN(postId)) {
      this.postService.getPost(postId).subscribe(post => {
        this.post = post;  
        // Get the like count from the LikeService
        this.likes = this.likeService.getLikes(postId);
      });
    } else {
      console.error('Invalid post ID:', postIdParam);
    }
  }

  likePost() {
    // Increment the like count and update the LikeService
    this.likes++;
    const postIdParam = this.route.snapshot.paramMap.get('id');
    const postId = Number(postIdParam);
    if (!isNaN(postId)) {
      this.likeService.likePost(postId);
    }
  }
}
