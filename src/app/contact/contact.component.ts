import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConfigService } from '../services/app-config.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  apiConfig = AppConfigService.settings.apiServer;

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Contact');
  }

}
