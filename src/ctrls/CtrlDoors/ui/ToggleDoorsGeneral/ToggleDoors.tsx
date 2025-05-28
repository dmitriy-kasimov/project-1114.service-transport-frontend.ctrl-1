import type { FC } from 'react';

import { HStack, Skeleton, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventQuery } from '@project-1114/platform-frontend';

import { ToggleDoorsSwitcher } from './ToggleDoorsSwitcher.tsx';

export const ToggleDoors: FC = () => {
    const { data, isLoading, error } =
        useTriggerClientEventQuery<boolean>('getDoorsState');

    if (isLoading) return <Skeleton width={64} height={32} border={'50%'} />;
    else if (error) return <Text>{error}</Text>;
    else if (data === null) return <Text>no data</Text>;
    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Двери:</Text>
            <ToggleDoorsSwitcher initialValue={data} />
        </HStack>
    );
};
