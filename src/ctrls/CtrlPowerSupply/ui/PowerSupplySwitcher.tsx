import type { FC, ReactNode } from 'react';

import { HStack, Switcher, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventMutation } from '@project-1114/platform-frontend';

type PowerSupplySwitcherProps = {
    initialValue: boolean;
    children: ReactNode;
};
export const PowerSupplySwitcher: FC<PowerSupplySwitcherProps> = ({
    initialValue,
    children,
}) => {
    const [handle, { data, isLoading, error }] =
        useTriggerClientEventMutation<boolean>('togglePowerSupplyState');

    if (error) return <Text>{error}</Text>;
    const currentValue = data || initialValue;
    return (
        <>
            <HStack align={'center'} gap={'m'}>
                <Text size={'l'}>Зажигание:</Text>
                <Switcher
                    id={'power-supply'}
                    value={currentValue}
                    onChange={() => handle(null)}
                    disabled={isLoading}
                />
            </HStack>
            {currentValue && children}
        </>
    );
};
