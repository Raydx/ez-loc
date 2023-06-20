/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, Method, Prop, h } from '@stencil/core';
import supabase from '~/config/supabaseClient';

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.css',
  shadow: true,
})
export class AppNav {
  /**Booléen connecté ou pas */
  @Prop() connexion: boolean;

  /**Vérifie la connexion */
  async componentDidLoad() {
    if ((await supabase.auth.getSession()).data.session?.access_token) {
      this.connexion = true;
    } else {
      this.connexion = false;
    }
  }
  /** déconnecte l'utilisateur */
  @Method()
  async signout() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    console.log((await supabase.auth.getSession()).data.session?.access_token);
    window.location.href = '/';
  }

  render() {
    if (this.connexion == false) {
      return (
        <nav class="bg-gray-800">
          <div class="container flex">
            <div class="px-8 py-4 bg-or md:flex items-center cursor-pointer relative group hidden">
              <span class="text-white ">
                <i class="fa-solid fa-bars"></i>
              </span>
              <span class="capitalize ml-2 text-white hidden">All Categories</span>

              <div class="absolute w-full left-0 min-w-max top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                <a href="/" class="flex items-center px-6 py-3 pr-2 hover:bg-gray-100 transition">
                  <img src="assets/icon/house.svg" alt="maison" class="pl-2 w-7 h-7 object-contain"></img>
                  <span class="ml-6 text-gray-600 text-sm">Maison</span>
                </a>
                <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <img src="assets/icon/appartment.svg" alt="Appartement" class="pl-2 w-7 h-7 object-contain"></img>
                  <span class="ml-6 text-gray-600 text-sm">Appartement</span>
                </a>
                <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <img src="assets/icon/studio.svg" alt="Studio" class="pl-2 w-7 h-7 object-contain"></img>
                  <span class="ml-6 text-gray-600 text-sm">Studio</span>
                </a>
              </div>
            </div>

            <div class="flex items-center justify-between flex-grow md:pl-12 py-5">
              <div class="flex items-center space-x-6 capitalize">
                <a href="/" class="text-gray-200 hover:text-white transition hover:underline">
                  Accueil
                </a>
                <a href="/logement" class="text-gray-200 hover:text-white transition hover:underline">
                  Logements
                </a>
                <a href="/error" class="text-gray-200 hover:text-white transition hover:underline">
                  Support
                </a>
              </div>
              <a href="/login" class="text-gray-200 hover:text-white transition hover:underline">
                Connexion
              </a>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav class="bg-gray-800">
          <div class="container flex">
            <div class="px-8 py-4 bg-or md:flex items-center cursor-pointer relative group hidden">
              <span class="text-white ">
                <i class="fa-solid fa-bars"></i>
              </span>
              <span class="capitalize ml-2 text-white hidden">All Categories</span>

              <div class="absolute w-full left-0 min-w-max top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                <a href="/logement" class="flex items-center px-6 py-3 pr-2 hover:bg-gray-100 transition">
                  <img src="assets/icon/house.svg" alt="maison" class="pl-2 w-7 h-7 object-contain"></img>
                  <span class="ml-6 text-gray-600 text-sm">Maison</span>
                </a>
                <a href="/logement" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <img src="assets/icon/appartment.svg" alt="Appartement" class="pl-2 w-7 h-7 object-contain"></img>
                  <span class="ml-6 text-gray-600 text-sm">Appartement</span>
                </a>
                <a href="/logement" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <img src="assets/icon/studio.svg" alt="Studio" class="pl-2 w-7 h-7 object-contain"></img>
                  <span class="ml-6 text-gray-600 text-sm">Studio</span>
                </a>
              </div>
            </div>

            <div class="flex items-center justify-between flex-grow md:pl-12 py-5">
              <div class="flex items-center space-x-6 capitalize">
                <a href="/" class="text-gray-200 hover:text-white transition hover:underline">
                  Accueil
                </a>
                <a href="/logement" class="text-gray-200 hover:text-white transition hover:underline">
                  Logements
                </a>
                <a href="/ajoutLogement" class="text-gray-200 hover:text-white transition hover:underline">
                  Proposer un logement
                </a>
                <a href="/error" class="text-gray-200 hover:text-white transition hover:underline">
                  Support
                </a>
              </div>
              <button class="text-gray-200 hover:text-white transition hover:underline" onClick={() => void this.signout()}>
                Déconnexion
              </button>
            </div>
          </div>
        </nav>
      );
    }
  }
}
