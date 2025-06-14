import type { FC } from 'react';

import { HStack, Skeleton, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventQuery } from '@project-1114/platform-frontend';

import { ToggleTrunkSwitcher } from './ToggleTrunkSwitcher.tsx';
import { EDoors } from '../../const/EDoors.ts';

export const ToggleTrunk: FC = () => {
    const { data, isLoading, error } = useTriggerClientEventQuery<
        boolean,
        EDoors
    >('getTrunkState', EDoors.Trunk);

    if (isLoading)
        return (
            <HStack align={'center'} gap={'m'}>
                <Text size={'l'}>Багажник:</Text>
                <Skeleton width={64} height={32} border={'16px'} />
            </HStack>
        );
    else if (error) return <Text>{error}</Text>;
    else if (data === null) return <Text>no data</Text>;
    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Багажник:</Text>
            <ToggleTrunkSwitcher initialValue={data} />
        </HStack>
    );
};
