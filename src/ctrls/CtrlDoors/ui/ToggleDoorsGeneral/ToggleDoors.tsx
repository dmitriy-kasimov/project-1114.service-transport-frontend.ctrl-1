import type { FC } from 'react';

import { HStack, Switcher, Text } from '@project-1114/ui-kit';
import {
    useTriggerClientEventMutation,
    useTriggerClientEventQuery,
} from '@project-1114/platform-frontend';

import { EDoors } from '../../const/EDoors.ts';

type TDoorsState = Record<Partial<EDoors>, boolean>;

export const ToggleDoors: FC = () => {
    const { data, isLoading, error } = useTriggerClientEventQuery<TDoorsState>(
        'f:c:getDoorsState',
        'c:f:getDoorsState',
    );

    const [
        handler,
        {
            data: toggledDoorsState,
            isLoading: toggledDoorsIsLoading,
            error: toggledDoorsError,
        },
    ] = useTriggerClientEventMutation<boolean>(
        'f:c:toggleDoorsState',
        'c:f:toggleDoorsState',
    );

    if (error) return <Text>{error}</Text>;
    else if (toggledDoorsError) return <Text>{toggledDoorsError}</Text>;
    else if (!data) return <Text>no data</Text>;

    const countDoors = 4;
    const countLockedDoors = Object.values(data).filter(Boolean).length;
    const doorsIsLocked = countLockedDoors === countDoors;

    const handleSwitchDoorsState = () => {
        handler(null);
    };

    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Двери:</Text>
            <Switcher
                id={'doors'}
                value={toggledDoorsState || doorsIsLocked}
                onChange={handleSwitchDoorsState}
                disabled={isLoading || toggledDoorsIsLoading}
            />
        </HStack>
    );
};
