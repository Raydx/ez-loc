/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-banner',
  styleUrl: 'app-banner.css',
})
export class AppBanner {
  render() {
    return (
      <div class="bg-cover bg-no-repeat bg-center py-36" style={{ backgroundImage: "url('assets/icon/banner-bg.jpg')" }}>
        <div class="container textcont">
          <h1 class="text-6xl text-gray-800 font-medium mb-4">
            Le meilleur site <br></br> pour louer facilement <br></br> un logement
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam <br></br> accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores odio
          </p>
          <div class="mt-12">
            <a
              href="#"
              class="bg-or border border-or text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-white hover:text-black"
            >
              Louez dès maintenant !
            </a>
          </div>
        </div>
      </div>
    );
  }
}
