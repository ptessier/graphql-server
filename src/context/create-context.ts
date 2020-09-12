import { ContextParameters } from 'graphql-yoga/dist/types';
import { authorize } from '~/context/authorize';
import { Viewer } from '~/context/viewer';

export interface Context extends ContextParameters {
  viewer: Viewer;
}

export const createContext = (context: ContextParameters): Context => {
  return {
    ...context,
    viewer: authorize(context),
  };
};
