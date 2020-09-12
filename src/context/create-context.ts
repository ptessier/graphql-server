import { PrismaClient } from '@prisma/client';
import { ContextCallback, ContextParameters } from 'graphql-yoga/dist/types';
import { authorize } from '~/context/authorize';
import { Viewer } from '~/context/viewer';

export interface Context extends ContextParameters {
  prisma: PrismaClient;
  viewer: Viewer;
}

const prisma = new PrismaClient();

export const context: ContextCallback = (parameters: ContextParameters): Context => {
  return {
    ...parameters,
    prisma,
    viewer: authorize(parameters),
  };
};
