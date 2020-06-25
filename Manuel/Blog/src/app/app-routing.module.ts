import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
	{
		path: "", component: BlogPostsComponent
	},
	{
		path: "posts/:postId", component: PostDetailsComponent
	},
	{
		path: "about", component: AboutComponent
	},
	{
		path: "contact", component: ContactComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
