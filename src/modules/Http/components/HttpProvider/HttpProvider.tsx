import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { queryClient } from '../../constants';

interface HttpProviderProps {
    children: JSX.Element
}

export function HttpProvider(props: HttpProviderProps) {
    const { children } = props;

    return (
        <QueryClientProvider  client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}