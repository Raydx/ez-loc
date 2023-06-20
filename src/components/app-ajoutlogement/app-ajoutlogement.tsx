/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, Method, Prop, h } from '@stencil/core';
import { Notify } from 'notiflix';
import supabase from '~/config/supabaseClient';

Notify.init({
  plainText: false,
});

function delay(ms: number): Promise<void> {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
}
async function wait(sec: number) {
  console.log('Waiting...');
  await delay(sec);
  console.log('Finished waiting.');
}

@Component({
  tag: 'app-ajoutlogement',
  styleUrl: 'app-ajoutlogement.css',
  shadow: true,
})
export class AppRegister {
  private table: HTMLFormElement;

  /** adresse mail */
  @Prop() email: string;
  /** password */
  @Prop() password: string;
  /** rue */
  @Prop() rue: string;
  /** code postal */
  @Prop() cp: string;
  /** ville */
  @Prop() ville: string;
  /** descriptif */
  @Prop() descriptif: string;
  /** type de logement */
  @Prop() type_logement: string;

  @Method()
  async addLogement(nom: string, email: string, rue: string, cp: string, ville: string, Descriptif: string) {
    const { data, error } = await supabase.from('Logement').insert([
      {
        nom: nom,
        email: email,
        rue: rue,
        code_postal: cp,
        ville: ville,
        descriptif: Descriptif,
      },
    ]);
    console.log('data: ', data, 'error: ', error);
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();

    const logs = new FormData(this.table);

    const email = logs.get('email').toString();
    const nom = logs.get('nom').toString();
    const rue = logs.get('rue').toString();
    const cp = logs.get('cp').toString();
    const ville = logs.get('ville').toString();
    const descriptif = logs.get('descriptif').toString();

    await this.addLogement(email, nom, rue, cp, ville, descriptif);

    Notify.success('Votre annonce à bien été publiée.');
    await wait(2000);
    // window.location.href = '/logement';
  }

  render() {
    return (
      <div class="contain py-16">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 class="text-2xl uppercase font-medium mb-1">Proposer un nouveau logement</h2>
          <p class="text-gray-600 mb-6 text-sm">Ajout d'une location</p>
          <form action="#" method="post" autocomplete="off" id="form" ref={el => (this.table = el)} onSubmit={e => this.handleSubmit(e)}>
            <div class="space-y-2">
              <div>
                <h3 class="text-xl uppercase font-medium mb-1">Propriétaire</h3>
                <label class="text-gray-600 mb-2 block">Adresse mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-or placeholder-gray-400"
                  placeholder="youremail.@domain.com"
                ></input>
                <label class="text-gray-600 mb-2 pt-1 block">Nom Complet</label>
                <input
                  type="text"
                  name="nom"
                  id="nom"
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-or placeholder-gray-400"
                  placeholder="John Doe"
                ></input>
              </div>
              <div>
                <h3 class="text-xl uppercase font-medium mb-1 pt-2">Adresse</h3>
                <label class="text-gray-600 mb-2 block pt-1">Rue</label>
                <input
                  type="text"
                  name="rue"
                  id="rue"
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-or placeholder-gray-400"
                  placeholder="4 rue de l'exemple"
                ></input>
                <label class="text-gray-600 mb-2 block pt-1">Code Postal</label>
                <input
                  type="number"
                  name="cp"
                  id="cp"
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-or placeholder-gray-400"
                  placeholder="01000"
                ></input>
                <label class="text-gray-600 mb-2 block pt-1">Ville</label>
                <input
                  type="text"
                  name="ville"
                  id="ville"
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-or placeholder-gray-400"
                  placeholder="Exemple"
                ></input>
              </div>
              <h3 class="text-xl uppercase font-medium mb-1 pt-2">Descriptif</h3>
              <textarea
                name="descriptif"
                id="descriptif"
                class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-or placeholder-gray-400"
                placeholder=" type de logement (Studio, Appartement, Maison), Superficie, exposition, chauffage"
              ></textarea>
            </div>
            <div class="mt-4">
              <button
                type="submit"
                value="save"
                class="block w-full py-2 text-center text-black bg-or border border-or rounded hover:bg-white hover:text-black transition uppercase font-roboto font-medium"
              >
                Proposer une location
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
