import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent  implements OnInit {
  posts: any[]=[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
