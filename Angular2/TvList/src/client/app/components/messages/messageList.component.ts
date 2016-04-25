import {Component,Input,OnInit} from 'angular2/core';
import {messageService} from './message.service';
import {Message} from './message.data';
import {Observable} from 'rxjs';
@Component({
    selector: 'messageList',
    templateUrl : './app/components/messages/messageList.template.html',
    
}
)
export class messageListComponent implements OnInit{

    @Input() primeraPeticion:string;
    @Input() id:number;

    comentarios:Message[]=[];
    
    
    ngOnInit():any {
        let listaComentarios:Observable<Message>=this._messageService[this.primeraPeticion](this.id);

        listaComentarios.subscribe((comentario)=>{
            this.comentarios.push(comentario);
        });
        
    }


    constructor(private _messageService:messageService){}


}