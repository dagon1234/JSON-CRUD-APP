import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`);
  }

  getPost(postId: number): Observable<any> {
    const url = `${this.apiUrl}/posts/${postId}`; // Assuming your API URL structure is like '/posts/{postId}'
    return this.http.get(url);
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/posts`, post);
  }

  updatePost(post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/posts/${post.id}`, post);
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/posts/${postId}`);
  }
}
