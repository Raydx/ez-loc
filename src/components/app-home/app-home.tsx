import { Component, h } from '@stencil/core';
import  supabase  from '~/config/supabaseClient';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {

  componentDidLoad() {
    console.log(supabase);
  }

  render() {
    return (
      <div class="app-home">
        <stencil-route-link url="/profile/stencil">
          <button class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            Profile page
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
