import { HStack, Switcher, Text } from '@project-1114/ui-kit';
import { useState } from 'react';
import { useTriggerClientEventMutation } from '@/helpers/useTriggerClientEventMutation.ts';

export const CtrlEngine = () => {
    const [handle, {data, isLoading, error}] =
        useTriggerClientEventMutation<boolean>("f:c:toggleEngineApi", "c:f:toggleEngineApi")

    const [power, setPower] = useState(false);

    const handleSwitch = () => {
        setPower((prev) => !prev)
        handle(null)
    }
    console.log(isLoading)
    console.log(error)
    console.log(data)

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
