import type { FC } from 'react';
import { Switcher, Text } from '@project-1114/ui-kit';
import {
    useTriggerClientEventQuery,
    useTriggerClientEventMutation,
} from '@project-1114/platform-frontend';

export const EngineSwitcher: FC = () => {
    const {
        data: engineState,
        isLoading: engineStateIsLoading,
        error: engineStateError,
    } = useTriggerClientEventQuery<boolean>(
        'f:c:getEngineState',
        'c:f:getEngineState',
    );

    const [
        handle,
        {
            data: toggledEngineState,
            isLoading: toggledEngineIsLoading,
            error: toggledEngineStateError,
        },
    ] = useTriggerClientEventMutation<boolean>(
        'f:c:toggleEngineState',
        'c:f:toggleEngineState',
    );

    const state = toggledEngineState || engineState;

    if (engineStateError) return <Text>{engineStateError}</Text>;
    else if (toggledEngineStateError)
        return <Text>{toggledEngineStateError}</Text>;

    const handleSwitch = () => {
        handle(null);
    };

    return (
        <Switcher
            id={'engine'}
            value={state!}
            onChange={handleSwitch}
            disabled={engineStateIsLoading || toggledEngineIsLoading}
        />
    );
};
