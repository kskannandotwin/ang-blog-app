import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private postService: PostsService) {
    this.postService.loadData().subscribe(val => {
      console.log(val);
    });
  }
}
