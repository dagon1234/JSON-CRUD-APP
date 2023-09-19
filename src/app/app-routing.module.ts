import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { PostUserComponent } from './post-user/post-user.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [AdminGuard],
    children: [
      { path: 'posts', component: PostListComponent },
      { path: 'posts/user', component: PostUserComponent, canActivate: [UserGuard] },
      { path: 'posts/:id', component: PostDetailComponent },
      { path: 'add', component: PostAddComponent },
      { path: 'edit/:id', component: PostEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
