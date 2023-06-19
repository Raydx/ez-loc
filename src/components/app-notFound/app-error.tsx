/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-error',
  styleUrl: 'app-error.css',
  shadow: true,
})
export class AppError {
  render() {
    return (
      <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-red-500 mb-4">Erreur 404</h1>
          <p class="text-gray-700 text-lg">Page inexistante</p>
        </div>
      </div>
    );
  }
}
