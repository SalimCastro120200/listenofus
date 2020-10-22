import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//  Service
import { PostsService } from '../services/posts.service';
import { Posts } from '../models/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts();
    this.resetForm();
  }

  onSubmit(postsForm: NgForm){
    if(postsForm.value.$key == null){
      this.postsService.insertPosts(postsForm.value);
    }else{
    this.resetForm(postsForm);
    }
  }

  resetForm(postsForm?: NgForm)
  {
    if(postsForm != null){
      postsForm.reset();
      this.postsService.selectPosts = new Posts();
    }
  }

}
