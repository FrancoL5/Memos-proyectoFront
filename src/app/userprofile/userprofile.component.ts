import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IMessage } from '../interfaces/IMessages';
import { Subscription } from 'rxjs';
import { MessagesService } from '../messages.service';

@Component({
	selector: 'app-userprofile',
	templateUrl: './userprofile.component.html',
	styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit, OnDestroy {
	constructor(private router: Router, private messages: MessagesService) {}
	public id: string | null = sessionStorage.getItem('id');
	public mensajesRecibidos!: IMessage[];
	public mensajesRecivSubscription!: Subscription;
	displayedColumns: string[] = ['receiver', 'content', 'time'];

	ngOnInit(): void {
		if (this.id) {
			this.mensajesRecivSubscription = this.messages
				.getMessages(this.id, 'inbox')
				.subscribe((messages) => {
					this.mensajesRecibidos = messages;
				});
		} else {
			sessionStorage.clear();
			this.router
				.navigate(['/login'])
				.then(() => window.location.reload());
		}
	}

	obtenerMensajes(flow: 'sent' | 'inbox') {
		this.mensajesRecivSubscription.unsubscribe();
		if (this.id) {
			this.mensajesRecivSubscription = this.messages
				.getMessages(this.id, flow)
				.subscribe((messages) => {

					this.mensajesRecibidos = messages.map(message => ({...message, time: new Date(message.time).toLocaleDateString()}));
				});
		} else {
			sessionStorage.clear();
			this.router
				.navigate(['/login'])
				.then(() => window.location.reload());
		}
	}

	ngOnDestroy(): void {
		this.mensajesRecivSubscription.unsubscribe();
	}
}
