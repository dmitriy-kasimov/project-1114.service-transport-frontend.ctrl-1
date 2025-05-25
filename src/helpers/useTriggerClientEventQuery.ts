import { useEffect, useState } from 'react';
import { triggerClientEvent } from './triggerClientEvent';
import type { IResponse } from '@/shared/types/IResponse.ts';
import type { TTriggerClientEventResponse } from '@/shared/types/TTriggerClientEventResponse.ts';

export function useTriggerClientEventQuery<
    T,
    S = null,
    E = string
>(endpointFrom: string,
  endpointTo: string
): TTriggerClientEventResponse<T, E>{
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<E | null>(null);
    const [data, setData] = useState<T | null>(null);

    alt.on(endpointTo, (payload: IResponse<T,  E>) => {
        if(payload.success && !payload.error)
            setData(payload.data)
        else
            setError(payload.error)
        setIsLoading(false)
    })

    useEffect(() => {
        setIsLoading(true)
        triggerClientEvent<S>(endpointFrom)
    }, []);

    return {data, error, isLoading}
}
