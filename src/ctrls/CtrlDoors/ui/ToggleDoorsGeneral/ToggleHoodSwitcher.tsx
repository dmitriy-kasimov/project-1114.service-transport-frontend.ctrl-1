import type { FC } from 'react';

import { Switcher, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventMutation } from '@project-1114/platform-frontend';

import { EDoors } from '../../const/EDoors.ts';

type ToggleHoodSwitcherProps = {
    initialValue: boolean;
};

export const ToggleHoodSwitcher: FC<ToggleHoodSwitcherProps> = ({
    initialValue,
}) => {
    const [handler, { data, isLoading, error }] =
        useTriggerClientEventMutation<boolean>('toggleHoodState');

    if (error) return <Text>{error}</Text>;
    console.log('EDoors.Hood');
    console.log(`initial value: ${initialValue}`);
    console.log(`data: ${data}`);
    return (
        <Switcher
            id={`${EDoors.Hood}`}
            value={data ?? initialValue}
            onChange={() => handler(null)}
            disabled={isLoading}
        />
    );
};
