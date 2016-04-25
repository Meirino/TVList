import {Component,Input} from 'angular2/core';
import {Message} from '../message.data';
@Component({
    selector:'messageItem',
    templateUrl: './app/components/messages/messageItem/messageItem.template.html',
})
export class messageItemComponent{
    @Input() message:Message;
}