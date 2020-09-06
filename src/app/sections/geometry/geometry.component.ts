import { Component, OnInit } from '@angular/core';
import { EventdisplayService } from '../../services/eventdisplay.service';
import { Configuration } from '../../api/extras/configuration.model';

@Component({
  selector: 'app-geometry',
  templateUrl: './geometry.component.html',
  styleUrls: ['./geometry.component.scss']
})
export class GeometryComponent implements OnInit {

  constructor(private eventDisplay: EventdisplayService) {
  }

  ngOnInit() {
    this.eventDisplay.instance.init(new Configuration());
  }

}
