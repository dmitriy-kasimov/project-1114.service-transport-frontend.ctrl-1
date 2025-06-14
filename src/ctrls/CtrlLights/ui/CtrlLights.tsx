import { HStack, Skeleton, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventQuery } from '@project-1114/platform-frontend';

import { ListLightMods } from './ListLightMods.tsx';
import { ELightMods } from '../const/ELightMods.ts';

export const CtrlLights = () => {
    const { data, isLoading, error } =
        useTriggerClientEventQuery<ELightMods>('getLightsState');

    if (isLoading)
        return (
            <HStack align={'center'} gap={'m'} max>
                <Text size={'l'}>Фары:</Text>
                <Skeleton width={'100%'} height={40} border={'8px'} />
            </HStack>
        );
    else if (error) return <Text>{error}</Text>;
    else if (data === null) return <Text>no data</Text>;
    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Фары:</Text>
            <ListLightMods initialValue={data} />
        </HStack>
    );
};
