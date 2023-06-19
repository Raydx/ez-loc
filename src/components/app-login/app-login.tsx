import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-login',
  styleUrl: 'app-login.css',
  shadow: true,
})
export class AppLogin {
  render() {
    return (
      <div class="contain py-16">
        <div class="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 class="text-2xl uppercase font-medium mb-1">Login</h2>
          <p class="text-gray-600 mb-6 text-sm">welcome back customer</p>
          <form action="#" method="post" autocomplete="off">
            <div class="space-y-2">
              <div>
                <label class="text-gray-600 mb-2 block">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-or placeholder-gray-400"
                  placeholder="youremail.@domain.com"
                ></input>
              </div>
              <div>
                <label class="text-gray-600 mb-2 block">Password</label>
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
                <label class="text-gray-600 ml-3 cursor-pointer">Remember me</label>
              </div>
              <a href="#" class="text-primary">
                Forgot password
              </a>
            </div>
            <div class="mt-4">
              <button
                type="submit"
                class="block w-full py-2 text-center text-white bg-or border border-or rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                Login
              </button>
            </div>
          </form>

          <p class="mt-4 text-center text-gray-600">
            Don't have account?{' '}
            <a href="/register" class="text-primary">
              Register now
            </a>
          </p>
        </div>
      </div>
    );
  }
}
