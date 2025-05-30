import { HStack, Skeleton, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventQuery } from '@project-1114/platform-frontend';

import { EngineSwitcher } from './EngineSwitcher.tsx';

export const CtrlEngine = () => {
    const { data, isLoading, error } =
        useTriggerClientEventQuery<boolean>('getEngineState');

    if (isLoading) return <Skeleton width={32} height={64} border={'16px'} />;
    else if (error) return <Text>{error}</Text>;
    else if (data === null) return <Text>no data</Text>;
    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Двигатель:</Text>
            <EngineSwitcher initialValue={data} />
        </HStack>
    );
};
