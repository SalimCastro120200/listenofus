import { Injectable } from '@angular/core';

import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Posts } from '../models/posts';

@Injectable()
export class PostsService {
  postsList: AngularFireList<any>;
  selectPosts: Posts = new Posts();

  constructor(private firebase: AngularFireDatabase) { }

  getPosts(){
    return this.postsList = this.firebase.list('posts');
  }

  insertPosts(posts: Posts){
    this.postsList.push({
      contenido: posts.contenido,
      titulo: posts.titulo
    });
  }
}
