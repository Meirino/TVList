import {Component,Input} from 'angular2/core';
import {Message} from '../message.data';
import {user} from '../../user/user.data'
@Component({
    selector:'messageItem',
    templateUrl: './app/components/messages/messageItem/messageItem.template.html',
})
export class messageItemComponent{
    @Input() message:any;
    
}