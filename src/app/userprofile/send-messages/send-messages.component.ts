import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../../usuarios.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/messages.service';

@Component({
	selector: 'app-send-messages',
	templateUrl: './send-messages.component.html',
	styleUrls: ['./send-messages.component.css'],
})
export class SendMessagesComponent implements OnInit, OnDestroy {
	constructor(
		private fb: FormBuilder,
		private Usuario: UsuarioService,
		private Mensaje: MessagesService,
		private router: Router
	) {}
	usuarios!: { user_name: string }[];
	receivers: string[] = [];
	getUsersSubscription!: Subscription;
	sendMessageSubscription!: Subscription;

	ngOnInit(): void {
		this.getUsersSubscription = this.Usuario.getUsers('ALL').subscribe(
			(data) => {
				this.usuarios = data;
			}
		);
	}

	form: FormGroup = this.fb.group({
		receiver: [, [Validators.required]],
		content: [, [Validators.required]],
	});

	sendMessage() {
		console.log('invalido');
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}
		const message = {
			content: this.form.value.content,
			receiver: this.form.value.receiver,
		};
		this.sendMessageSubscription = this.Mensaje.sendMessages(
			sessionStorage.getItem('userName')!,
			parseInt(sessionStorage.getItem('id')!),
			message
		).subscribe((valid) => {
			console.log(valid);
		});
	}

	agregarUser() {
		if (
			this.form.value.receiver &&
			!this.receivers.find(
				(receiver) => receiver === this.form.value.receiver
			)
		) {
			this.receivers.push(this.form.value.receiver);
		}
	}

	ngOnDestroy(): void {
		this.getUsersSubscription.unsubscribe();
		this.sendMessageSubscription.unsubscribe();
	}
}
