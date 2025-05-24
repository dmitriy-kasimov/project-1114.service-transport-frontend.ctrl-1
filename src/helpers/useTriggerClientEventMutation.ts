import { useState } from 'react';
import { triggerClientEvent } from './triggerClientEvent';
import type { IResponse } from '@/shared/types/IResponse.ts';
import type { TTriggerClientEventResponse } from '@/shared/types/TTriggerClientEventResponse.ts';

export function useTriggerClientEventMutation<
    T,
    S = null,
    E = string
>(endpointFrom: string,
  endpointTo: string
): [
    (sentData: S) => void,
    TTriggerClientEventResponse<T, E>
]{
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<E | null>(null);
    const [data, setData] = useState<T | null>(null);

    const handle = (sentData: S) => {
        setIsLoading(true)
        triggerClientEvent<S>(endpointFrom, sentData)
    }

    alt.on(endpointTo, (payload: IResponse<T,  E>) => {
        if(payload.success && !payload.error)
            setData(payload.data)
        else
            setError(payload.error)
        setIsLoading(false)
    })

    return [handle, {data, error, isLoading}]
}
