import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: true,
})
export class AppHeader {
  render() {
    return (
      <header class="py-4 shadow-sm bg-white">
        <div class="container flex items-center justify-between">
          <a href="index.html">
            <img src="assets/icon/logo.png" alt="Logo" class="w-32"></img>
          </a>
          <div class="w-full max-w-xl relative flex">
            <span class="absolute left-4 top-3 text-lg text-gray-400">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" name="search" id="search" placeholder="rechercher..."></input>
            <button>Rechercher</button>
          </div>

          <div class="flex items-center space-x-4">
            <a href="/error" class="text-center text-gray-700 hover:text-primary transition relative">
              <div class="text-2xl">
                <i class="fa-regular fa-user"></i>
              </div>
              <div class="text-xs leading-3">Compte</div>
            </a>
          </div>
        </div>
      </header>
    );
  }
}
