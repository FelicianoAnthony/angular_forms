import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId:module.id, // moduleId lets you use user.component.html-- lets you use relative paths
  selector: 'user',
  templateUrl: `user.component.html`,
  providers: [PostsService]
})
export class UserComponent  { 
	name: string;
	email: string;
	address: address;
	hobbies: string[];
	showHobbies: boolean;
	posts:Post[];

	// makes sense of what was entered above? name, email, address??
	constructor(private postsService: PostsService) {
		this.name = 'John Doe';
		this.email = 'jon@gmail.com',
		this.address = {
			street: '12 Main Street',
			city: 'Boston',
			state: 'MA'
		}
		this.hobbies = ['music', 'movies','sports'];
		this.showHobbies=false;

		//getPosts defined in ./services/post.service.ts
		this.postsService.getPosts().subscribe(posts=> {
			this.posts = posts;
		});
	}

	//if the button is clicked show hidehobbies, else dont 
	toggleHobbies() {
		if(this.showHobbies==true){  
			this.showHobbies=false;
		} else {
			this.showHobbies=true;
		}
	}
	//append single hobby object to a hobbies list defined above 
	addHobby(hobby) {
		this.hobbies.push(hobby);
	}
	//make sure i=index in ngFor in html 
	deleteHobby(i) {
		this.hobbies.splice(i, 1);
	}
}


// create methods to unpack object that contains multiple elements?
interface address {
	street: string;
	city: string;
	state: string;
}

interface Post{
	id: number;
	title: string;
	body: string;
}