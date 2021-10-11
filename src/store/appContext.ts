import { createContext } from 'react';

import { ContextType } from './types';

export const AppContext = createContext<ContextType>({} as ContextType);
