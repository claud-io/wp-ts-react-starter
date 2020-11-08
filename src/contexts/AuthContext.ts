import React from 'react';
import { jwtManagerContext } from 'use-jwt-manager/dist/constants/types';

export const AuthConext = React.createContext<Partial<jwtManagerContext>>({});
