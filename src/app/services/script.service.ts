import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  constructor() { }

  loadScript(scriptList: string[]) {
    scriptList.forEach(script => {
      let newScript = document.createElement('script');
      newScript.src = './assets/js/' + script + '.js';

      let body = document.getElementsByTagName('body')[0];
      body.appendChild(newScript)
    })
  }
}
