import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  editedPost: any;
  postId!: number;

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {}

  ngOnInit() {
    const postIdParam = this.route.snapshot.paramMap.get('id');
    
    if (postIdParam !== null) {
      const postId = Number(postIdParam); // Try to convert the parameter to a number
  
      if (!isNaN(postId)) {
        // Check if it's a valid number
        this.postService.getPost(postId).subscribe(post => {
          this.editedPost = post;
          this.postId = postId; // Set the postId if it's a valid number
        });
      } else {
        // Handle the case where 'id' is not a valid number, e.g., show an error message
        console.error('Invalid post ID:', postIdParam);
        // You can also redirect to an error page or handle it according to your application's requirements.
      }
    } else {
      // Handle the case where 'id' is not present in the URL, e.g., show an error message
      console.error('Post ID not found in URL.');
      // You can also redirect to an error page or handle it according to your application's requirements.
    }
  }
  

  updatePost() {
    this.postService.updatePost(this.postId, this.editedPost).subscribe(() => {
      this.router.navigate(['/posts', this.postId]);
    });
  }
}
