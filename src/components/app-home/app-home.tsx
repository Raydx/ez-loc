import { Component, h } from '@stencil/core';
// import supabase from '~/config/supabaseClient';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  componentDidLoad() {
    // console.log(supabase);
  }

  render() {
    return (
      <div class="app-home">
        <stencil-route-link url="/">
          <app-banner></app-banner>
          <app-categories></app-categories>
        </stencil-route-link>
      </div>
    );
  }
}
