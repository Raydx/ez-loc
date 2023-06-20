import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <main>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <app-header></app-header>
            <app-nav></app-nav>
            <stencil-route url="/" component="app-home" exact={true} />
            <stencil-route url="/profile/:name" component="app-profile" />
            <stencil-route url="/login" component="app-login" />
            <stencil-route url="/register" component="app-register" />
            <stencil-route url="/logement" component="app-logement" />
            <stencil-route url="/error" component="app-error" />
            <stencil-route url="/ajoutlogement" component="app-ajoutlogement" />
          </stencil-route-switch>
        </stencil-router>
        <app-copyright></app-copyright>
      </main>
    );
  }
}
