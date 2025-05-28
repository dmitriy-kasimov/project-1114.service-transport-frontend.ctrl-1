import type { FC } from 'react';

import { HStack, Skeleton, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventQuery } from '@project-1114/platform-frontend';

import { ToggleHoodSwitcher } from './ToggleHoodSwitcher.tsx';
import { EDoors } from '../../const/EDoors.ts';

export const ToggleHood: FC = () => {
    const { data, isLoading, error } = useTriggerClientEventQuery<
        boolean,
        EDoors
    >('getDoorState', EDoors.Hood);

    if (isLoading) return <Skeleton width={64} height={32} border={'50%'} />;
    else if (error) return <Text>{error}</Text>;
    else if (data === null) return <Text>no data</Text>;
    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Капот:</Text>
            <ToggleHoodSwitcher initialValue={data} />
        </HStack>
    );
};
