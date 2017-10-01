import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

//use inject decorator (Injectable) give added functionality (http capabilities) to a specific component (PostsService)
@Injectable()
export class PostsService {
	constructor(private http: Http){
		console.log('Posts Service init....')
	}

	//maps response from http request to json parser?
	getPosts(){
		return this.http.get('https://jsonplaceholder.typicode.com/posts')
			.map(res => res.json());
	}
}
