import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { UpcomingStreamsContainerComponent } from '../upcoming-streams-container/upcoming-streams-container.component';

@Component({
    selector: 'router-outlet',
    imports: [RouterLink, RouterOutlet, RouterLinkActive, UpcomingStreamsContainerComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
