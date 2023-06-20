/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-categories',
  styleUrl: 'app-categories.css',
})
export class AppCategories {
  render() {
    return (
      <section class="container py-16">
        <h2 class="text-2xl font-medium text-gray-800 uppercase mb-6">Différents logements</h2>
        <div class="grid grid-cols-3 gap-3 flex space-x-5">
          <div class="relative rounded-sm overflow-hidden group">
            <img src="assets/icon/studio.jpg" alt="category 1" class="w-full"></img>
            <a
              href="/logement"
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Studio
            </a>
          </div>
          <div class="relative rounded-sm overflow-hidden group">
            <img src="assets/icon/appartement.jpg" alt="category 1" class="w-full"></img>
            <a
              href="/logement"
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Appartement
            </a>
          </div>
          <div class="relative rounded-sm overflow-hidden group">
            <img src="assets/icon/maison.jpg" alt="category 1" class="w-full"></img>
            <a
              href="/logement"
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Maison
            </a>
          </div>
        </div>
      </section>
    );
  }
}
