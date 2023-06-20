/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-copyright',
  styleUrl: 'app-copyright.css',
})
export class AppCopyright {
  render() {
    return (
      <div class="bg-gray-800 py-4">
        <div class="container flex items-center justify-between">
          <p class="text-white">&copy; EZLoc - All Right Reserved</p>
        </div>
      </div>
    );
  }
}
