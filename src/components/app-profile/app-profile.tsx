import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil-community/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true,
})
export class AppProfile {
  // eslint-disable-next-line @stencil-community/required-jsdoc
  @Prop() match: MatchResults;

  // eslint-disable-next-line @stencil-community/own-methods-must-be-private
  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          <p>Hello! My name is {this.normalize(this.match.params.name)}. My name was passed in through a route param!</p>
        </div>
      );
    }
  }
}
