import { baseResolver } from '~/common/base-resolver';

export const version = baseResolver.createResolver(() => {
  const metadata = require(`${process.cwd()}/package.json`);

  return sanitizeVersion(metadata.version);
});

const sanitizeVersion = (packageVersion: string) => packageVersion.replace(/-[a-z-]+\.[0-9]+/, '');
