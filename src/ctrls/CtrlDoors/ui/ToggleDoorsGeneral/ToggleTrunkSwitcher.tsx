import type { FC } from 'react';

import { useTriggerClientEventMutation } from '@project-1114/platform-frontend';
import { Switcher, Text } from '@project-1114/ui-kit';

import { EDoors } from '../../const/EDoors.ts';

type ToggleHoodSwitcherProps = {
    initialValue: boolean;
};

export const ToggleTrunkSwitcher: FC<ToggleHoodSwitcherProps> = ({
    initialValue,
}) => {
    const [handler, { data, isLoading, error }] =
        useTriggerClientEventMutation<boolean>('toggleTrunkState');

    if (error) return <Text>{error}</Text>;
    console.log('EDoors.Trunk');
    console.log(`initial value: ${initialValue}`);
    console.log(`data: ${data}`);
    return (
        <Switcher
            id={`${EDoors.Trunk}`}
            value={data ?? initialValue}
            onChange={() => handler(null)}
            disabled={isLoading}
        />
    );
};
