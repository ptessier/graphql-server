import { Options } from 'graphql-yoga';
import { env, Provider } from 'nconf';

export class ConfigProvider {
  private nconf: Provider;

  constructor() {
    this.nconf = env('_').file({ file: `${process.cwd()}/config.json` });
  }

  secret() {
    return this.get('secret');
  }

  options(): Options {
    return this.get('options');
  }

  isProduction() {
    return process.env.NODE_ENV === 'production';
  }

  isDevelopment() {
    return process.env.NODE_ENV !== 'production';
  }

  private get(keyPath: string, defaultValue?: any): any {
    return this.nconf.get(keyPath) || defaultValue;
  }
}

export const config = new ConfigProvider();
