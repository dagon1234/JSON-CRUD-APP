import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { LikeService } from '../like.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[]=[];

  constructor(
    private postService: PostService, 
    private likeService: LikeService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe(() => {
      // Update the post list after deletion
      this.posts = this.posts.filter(post => post.id !== id);
    });
  }
}
