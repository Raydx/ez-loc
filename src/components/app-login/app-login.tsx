import { Component, Method, Prop, h } from '@stencil/core';
import supabase from '~/config/supabaseClient';
import { Report, Block } from 'notiflix';

@Component({
  tag: 'app-login',
  styleUrl: 'app-login.css',
})
export class AppLogin {
  private table: HTMLFormElement;

  /** adresse mail */
  @Prop() email: string;

  /** password */
  @Prop() password: string;

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
  /**
   * Auth function
   * @param logs
   */
  @Method()
  async signin(email: string, password: string) {
    Block.circle('#loginForm');
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    console.log('data: ', data, 'error: ', error);
    if (error != null) {
      Report.failure('Erreur de connexion', "Le compte n'existe pas ou les identifiants sont incorrects.<br/><br/>", 'Ok', () => {
        Block.remove('#loginForm');
      });
    } else {
      Block.remove('#loginForm');
      window.location.href = '/';
    }
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();

    const logs = new FormData(this.table);
    const email = logs.get('email').toString();
    const password = logs.get('password').toString();
    await this.signin(email, password);
  }
  render() {
    return (
      <div class="contain py-16">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 class="text-2xl uppercase font-medium mb-1">Connexion</h2>
          <p class="text-gray-600 mb-6 text-sm">Bienvenue !</p>
          <form action="#" method="post" autocomplete="off" id="loginForm" ref={el => (this.table = el)} onSubmit={e => this.handleSubmit(e)}>
            <div class="space-y-2">
              <div>
                <label class="text-gray-600 mb-2 block">Adresse email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-or placeholder-gray-400"
                  placeholder="votre.email@domaine.com"
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
            </div>
            <div class="flex items-center justify-between mt-6">
              <div class="flex items-center">
                <input type="checkbox" name="remember" id="remember" class="text-primary focus:ring-0 rounded-sm cursor-pointer"></input>
                <label class="text-gray-600 ml-3 cursor-pointer">Se souvenir de moi</label>
              </div>
              <a href="/notFound" class="underline">
                Mot de passe oublié ?
              </a>
            </div>
            <div class="mt-4">
              <button
                type="submit"
                class="block w-full py-2 text-center text-black bg-or border border-or rounded hover:bg-transparent transition uppercase font-roboto font-medium"
              >
                Se connecter
              </button>
            </div>
          </form>

          <p class="mt-4 text-center text-gray-600">
            Vous n'avez pas de compte ?{' '}
            <a href="/register" class="underline">
              Créer un compte
            </a>
          </p>
        </div>
      </div>
    );
  }
}
