import { Component, OnInit } from '@angular/core';

//service
import { PostsService } from '../services/posts.service';

//Class post
import { Posts } from '../models/posts';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postsList: Posts[];

  constructor(
    private postsServices: PostsService
  ) { }

  ngOnInit(){
    this.postsServices.getPosts()
    .snapshotChanges()
    .subscribe(items => {
      this.postsList = [];
      items.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.postsList.push(x as Posts);
      });
    });
  }

}
