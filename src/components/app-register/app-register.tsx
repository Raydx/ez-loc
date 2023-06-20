/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, Method, Prop, h } from '@stencil/core';
import supabase from '~/config/supabaseClient';

@Component({
  tag: 'app-register',
  styleUrl: 'app-register.css',
  shadow: true,
})
export class AppRegister {
  private table: HTMLFormElement;

  /** adresse mail */
  @Prop() email: string;

  /** password */
  @Prop() password: string;

  /**
   * Auth function
   * @param logs
   */
  @Method()
  async signup(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: 'http://localhost:3333',
      },
    });
    console.log('data: ', data, 'error: ', error);
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();

    const logs = new FormData(this.table);
    const email = logs.get('email').toString();
    const password = logs.get('password').toString();
    await this.signup(email, password);
  }

  render() {
    return (
      <div class="contain py-16">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 class="text-2xl uppercase font-medium mb-1">Créer un compte</h2>
          <p class="text-gray-600 mb-6 text-sm">Formulaire d'inscription</p>
          <form action="#" method="post" autocomplete="off" id="form" ref={el => (this.table = el)} onSubmit={e => this.handleSubmit(e)}>
            <div class="space-y-2">
              <div>
                <label class="text-gray-600 mb-2 block">Adresse email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-or placeholder-gray-400"
                  placeholder="youremail.@domain.com"
                ></input>
              </div>
              <div>
                <label class="text-gray-600 mb-2 block">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-or placeholder-gray-400"
                  placeholder="*******"
                ></input>
              </div>
              <div>
                <label class="text-gray-600 mb-2 block">Confirmer le mot de passe</label>
                <input
                  type="password"
                  name="confirm"
                  id="confirm"
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-or placeholder-gray-400"
                  placeholder="*******"
                ></input>
              </div>
            </div>
            <div class="mt-6">
              <div class="flex items-center">
                <input type="checkbox" name="aggrement" id="aggrement" class="text-primary focus:ring-0 rounded-sm cursor-pointer"></input>
                <label class="text-gray-600 ml-3 cursor-pointer underline">
                  J'ai lu et accepté les{' '}
                  <a href="#" class="text-primary underline">
                    conditions d'utilisation
                  </a>
                </label>
              </div>
            </div>
            <div class="mt-4">
              <button
                type="submit"
                value="save"
                class="block w-full py-2 text-center text-black bg-or border border-or rounded hover:bg-white hover:text-black transition uppercase font-roboto font-medium"
              >
                Créer mon compte
              </button>
            </div>
          </form>

          <p class="mt-4 text-center text-gray-600">
            Vous possédez déjà un compte?{' '}
            <a href="/login" class="text-primary">
              Se connecter
            </a>
          </p>
        </div>
      </div>
    );
  }
}
