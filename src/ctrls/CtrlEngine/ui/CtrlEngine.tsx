import { HStack, Switcher, Text } from '@project-1114/ui-kit';
import { useState } from 'react';
import { useTriggerClientEventMutation } from '@/helpers/useTriggerClientEventMutation.ts';
import { useTriggerClientEventQuery } from '@/helpers/useTriggerClientEventQuery.ts';

export const CtrlEngine = () => {
    const [handle, { data, isLoading, error }] =
        useTriggerClientEventMutation<boolean>(
            'f:c:toggleEngineApi',
            'c:f:toggleEngineApi',
        );

    const {
        data: engine,
        isLoading: engineIsLoading,
        error: engineError,
    } = useTriggerClientEventQuery<boolean>(
        'f:c:getEngineApi',
        'c:f:getEngineApi',
    );
    const [power, setPower] = useState(false);

    const handleSwitch = () => {
        setPower((prev) => !prev);
        handle(null);
    };
    console.log(`toggle engine loading: ${isLoading}`);
    console.log(`toggle engine error: ${error}`);
    console.log(`toggle engine state: ${data}`);

    console.log(`engine loading: ${engineIsLoading}`);
    console.log(`engine error: ${engineError}`);
    console.log(`engine state: ${engine}`);

    // if(isLoading)
    //     return <Text>Loading....</Text>
    // else if(error)
    //     return <Text>Error!!!</Text>

    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Двигатель:</Text>
            <Switcher
                disabled={isLoading}
                id={'engine'}
                value={power}
                onChange={handleSwitch}
            />
        </HStack>
    );
};
