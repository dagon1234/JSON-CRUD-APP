import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent {
  newPost: any = {
    title: '',
    body: ''
  };

  constructor(private postService: PostService, private router: Router) {}

  addPost() {
    this.postService.addPost(this.newPost).subscribe(() => {
      this.router.navigate(['/posts']);
    });
  }
}
