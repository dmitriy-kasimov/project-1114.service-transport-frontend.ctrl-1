import type { FC } from 'react';

import { HStack, Skeleton, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventQuery } from '@project-1114/platform-frontend';

import { ToggleHoodSwitcher } from './ToggleHoodSwitcher.tsx';
import { EDoors } from '../../const/EDoors.ts';

export const ToggleHood: FC = () => {
    const { data, isLoading, error } = useTriggerClientEventQuery<
        boolean,
        EDoors
    >('getHoodState', EDoors.Hood);

    if (isLoading)
        return (
            <HStack align={'center'} gap={'m'}>
                <Text size={'l'}>Капот:</Text>
                <Skeleton width={64} height={32} border={'16px'} />
            </HStack>
        );
    else if (error) return <Text>{error}</Text>;
    else if (data === null) return <Text>no data</Text>;
    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Капот:</Text>
            <ToggleHoodSwitcher initialValue={data} />
        </HStack>
    );
};
