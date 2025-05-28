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
    const [handler, { data, isLoading, error }] = useTriggerClientEventMutation<
        boolean,
        EDoors
    >('toggleDoorState');

    if (error) return <Text>{error}</Text>;
    return (
        <Switcher
            id={`${EDoors.Hood}`}
            value={data || initialValue}
            onChange={() => handler(EDoors.Hood)}
            disabled={isLoading}
        />
    );
};
