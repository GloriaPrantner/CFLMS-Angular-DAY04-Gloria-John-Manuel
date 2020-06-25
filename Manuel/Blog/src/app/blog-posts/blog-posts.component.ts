import { Component, OnInit } from '@angular/core';
import { posts } from '../posts';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent implements OnInit {

  posts = posts;

  constructor() { }

  ngOnInit(): void {
  }

}
