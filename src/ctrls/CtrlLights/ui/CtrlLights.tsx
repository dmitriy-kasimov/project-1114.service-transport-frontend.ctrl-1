import { HStack, Skeleton, Text } from '@project-1114/ui-kit';
import { ListLightMods } from '@/ctrls/CtrlLights/ui/ListLightMods.tsx';
import { useTriggerClientEventQuery } from '@project-1114/platform-frontend';
import { ELightMods } from '@/ctrls/CtrlLights/const/ELightMods.ts';

export const CtrlLights = () => {
    const { data, isLoading, error } = useTriggerClientEventQuery<ELightMods>(
        'f:c:getLightsState',
        'c:f:getLightsState',
    );

    if (isLoading)
        return <Skeleton width={'100%'} height={40} border={'8px'} />;
    else if (error) return <Text>{error}</Text>;
    else if (data === null) return <Text>no data</Text>;
    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Фары:</Text>
            <ListLightMods initialValue={data} />
        </HStack>
    );
};
