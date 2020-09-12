import { ContextCallback, ContextParameters } from 'graphql-yoga/dist/types';
import { authorize } from '~/context/authorize';
import { Viewer } from '~/context/viewer';

export interface Context extends ContextParameters {
  viewer: Viewer;
}

export const context: ContextCallback = (parameters: ContextParameters): Context => {
  return {
    ...parameters,
    viewer: authorize(parameters),
  };
};
