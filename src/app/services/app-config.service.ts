import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  static settings: AppConfig;

  constructor(private http: HttpClient) { }

  load() {
    const jsonFile = 'assets/config/config.json';

    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: Object | undefined) => {
        AppConfigService.settings = <AppConfig> response;
        console.log('Config loaded', AppConfigService.settings);
        resolve();
      }).catch((response: any) => {
        reject('Cannot load config file');
      });
    });
  }
}

export interface AppConfig {
  env: {
    name: string
  }

  apiServer: {
    link1: string,
    link2: string,
  }

}