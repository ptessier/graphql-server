import { Request } from 'express';
import { ContextParameters } from 'graphql-yoga/dist/types';
import { ExecutionParams } from 'subscriptions-transport-ws';
import { Viewer } from '~/context/viewer';
import { JwtTokens } from '~/helper/jwt-tokens';
import { log } from '~/logger';

export const authorize = (parameters: ContextParameters): Viewer => {
  const { request, connection } = parameters;

  if (request) return authorizeRequest(request);

  if (connection) return authorizeContext(connection);

  return undefined;
};

const authorizeRequest = (request: Request): Viewer => {
  const authorization = request.get('Authorization');

  return getViewer(authorization);
};

const authorizeContext = (connection: ExecutionParams): Viewer => {
  const authorization = connection.context.Authorization;

  return getViewer(authorization);
};

const getViewer = (authorization: string): Viewer => {
  if (authorization) {
    const token = authorization.replace('Bearer ', '');

    try {
      return JwtTokens.verify(token);
    } catch (error) {
      log.error('Failed to parse token', error);
    }
  }

  return undefined;
};
