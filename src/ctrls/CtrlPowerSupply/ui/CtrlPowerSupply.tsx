import { HStack, Skeleton, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventQuery } from '@project-1114/platform-frontend';

import { PowerSupplySwitcher } from './PowerSupplySwitcher.tsx';
import type { FC, ReactNode } from 'react';

type CtrlPowerSupplyProps = {
    children: ReactNode;
};

export const CtrlPowerSupply: FC<CtrlPowerSupplyProps> = ({ children }) => {
    const { data, isLoading, error } = useTriggerClientEventQuery<boolean>(
        'getPowerSupplyState',
    );

    if (isLoading)
        return (
            <HStack align={'center'} gap={'m'}>
                <Text size={'l'}>Зажигание:</Text>
                <Skeleton width={64} height={32} border={'16px'} />
            </HStack>
        );
    else if (error) return <Text>{error}</Text>;
    else if (data === null) return <Text>no data</Text>;
    return <PowerSupplySwitcher initialValue={data} children={children} />;
};
