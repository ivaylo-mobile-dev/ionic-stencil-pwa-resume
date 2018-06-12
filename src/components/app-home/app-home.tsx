import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color='primary'>
          <ion-title>Ivaylo Slavov's PWA Resume</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <main>
          <p>
            This is my Resume Progressive Web App implementation using the
            <a href='https://blog.ionicframework.com/announcing-the-ionic-pwa-toolkit-beta/'> Ionic PWA Toolkit</a>.
            I used this starter to build the entire PWAs all with web components using Stencil and ionic/core!
            Check out the readme for everything that comes in this starter out of the box and
            Check out the Stencil docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
          </p>

          <ion-button href='/profile/ionic'>
            Profile page
          </ion-button>
        </main>
      </ion-content>
    ];
  }
}
