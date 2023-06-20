import { Component, Prop, h } from '@stencil/core';
import supabase from '~/config/supabaseClient';

type Logement = {
  nom: string;
  email: string;
  rue: string;
  code_postal: string;
  ville: string;
  descriptif: string;
};

@Component({
  tag: 'app-logement',
  styleUrl: 'app-logement.css',
})
export class AppLogement {
  /** Array qui reçoit des objets de type Logement */
  @Prop() logements: Array<Logement>;

  async componentWillRender() {
    const { data: logements } = await supabase.from('Logement').select('nom,email,rue,code_postal,ville,descriptif').gt('idLogement', 1);
    this.logements = logements as Array<Logement>;
    console.log(this.logements);
  }

  render() {
    return (
      <div class="row">
        <div class="container mx-auto card">
          <div class="grid grid-cols-5 gap-4">
            {this.logements.map(item => (
              <div class="bg-white p-6 rounded-lg shadow mx-3 my-7 border border-or">
                <h4 class="text-lg font-semibold">Nom du propriétaire</h4>
                {item.nom}
                <p class="text-lg font-semibold pt-3">Email</p>
                {item.email}
                <h5 class="text-md font-semibold pt-3">Adresse:</h5>
                {item.rue} {item.code_postal}
                <br></br>
                {item.ville}
                <p class="text-md font-semibold pt-3">Descriptif</p>
                {item.descriptif}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
