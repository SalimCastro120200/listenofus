import { Component, OnInit } from '@angular/core';

//  Service
import { PostsService } from '../services/posts.service';
import { Posts } from '../models/posts';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts();
  }

  onSubmit(postsForm: NgForm){
    this.postsService.insertPosts(postsForm.value);
  }

}
