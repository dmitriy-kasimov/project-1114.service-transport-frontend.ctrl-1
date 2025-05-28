import type { FC } from 'react';
import { HStack, Switcher, Text } from '@project-1114/ui-kit';
import {
    useTriggerClientEventMutation,
    useTriggerClientEventQuery,
} from '@project-1114/platform-frontend';
import { EDoors } from '@/ctrls/CtrlDoors/const/EDoors.ts';

export const ToggleHood: FC = () => {
    const { data, isLoading, error } = useTriggerClientEventQuery<
        boolean,
        EDoors
    >('f:c:getDoorState', 'c:f:getDoorState', EDoors.Hood);

    const [
        handler,
        {
            data: toggledDoorState,
            isLoading: toggledDoorIsLoading,
            error: toggledDoorError,
        },
    ] = useTriggerClientEventMutation<boolean, EDoors>(
        'f:c:toggleDoorState',
        'c:f:toggleDoorState',
    );

    if (error) return <Text>{error}</Text>;
    else if (toggledDoorError) return <Text>{toggledDoorError}</Text>;
    else if (!data) return <Text>no data</Text>;

    const handleSwitch = () => {
        handler(EDoors.Hood);
    };

    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Капот:</Text>
            <Switcher
                id={'doors'}
                value={toggledDoorState || data}
                onChange={handleSwitch}
                disabled={isLoading || toggledDoorIsLoading}
            />
        </HStack>
    );
};
