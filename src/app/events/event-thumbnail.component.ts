import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';


@Component({
    selector:'event-thumbnail',
    template:`
        <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
            <!-- We specify ? symbol to handle the null values -->
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>

            <!-- Single styling for the element -->
            <!-- <div [class.green]="event?.time === '8:00 am'" [ngSwitch]="event?.time">Time: {{event?.time}} -->

            <!-- Multiple styles can be appiled using the ngClass -->
            <!-- <div [ngClass]="{green: event?.time === '8:00 am', bold:event?.time === '8:00 am'}" [ngSwitch]="event?.time">Time: {{event?.time}} -->
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: {{event?.price}}</div>
            <div *ngIf="event?.location">
            <!-- This will hidden the element/html but will be present in the DOM when you see in the inspect. Which will help in the performance improvement of the application -->
            <!-- <div [hidden]="!event?.location"> -->
                <span>Location: {{event?.location?.address}},</span>
                <span class="pad-left">{{event?.location?.city}},{{event?.location?.country}}</span>
            </div> 
            <div *ngIf="event?.onlineUrl">
            <!-- <div [hidden]="!event?.onlineUrl"> -->
                Online URL : {{event?.onlineUrl}}
            </div>
        </div>
    `,
    styles: [`
        .green {color: #003300 !important}
        .bold {font-size:18px !important}
        .thumbnail {min-height:210px;}
        .pad-left { margin-left :10px;}
        .well div { color : #bbb; }
    `
        
    ]
})

export class EventThumbnailComponent{
    @Input() event: IEvent
    getStartTimeClass(){
        if(this.event && this.event.time === '8:00 am'){
        // const isEarlyStart = this.event && this.event.time === '8:00 am'
        // return {green:isEarlyStart, bold:isEarlyStart}
            return ['green bold']
        }
    }
}