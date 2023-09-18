import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: any;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit() {
    const postIdParam = this.route.snapshot.paramMap.get('id');
    const postId = Number(postIdParam); // Try to convert the parameter to a number
  
    if (!isNaN(postId)) {
      // Check if it's a valid number
      this.postService.getPost(postId).subscribe(post => {
        this.post = post;
      });
    } else {
      // Handle the case where 'id' is not a valid number, e.g., show an error message
      console.error('Invalid post ID:', postIdParam);
      // You can also redirect to an error page or handle it according to your application's requirements.
    }
  }
  
}
