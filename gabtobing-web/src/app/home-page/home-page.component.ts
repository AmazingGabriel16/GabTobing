import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import * as stream_schedule_data from '../../../assets/datasets/upcoming-stream-info.json'

@Component({
    selector: 'router-outlet',
    imports: [RouterLink, RouterOutlet, RouterLinkActive],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent {
    constructor(){
        console.log(stream_schedule_data)
    }

    export_stream_schedule_data(){
        // Exports stream schedule data for use
        return stream_schedule_data
    }
}
