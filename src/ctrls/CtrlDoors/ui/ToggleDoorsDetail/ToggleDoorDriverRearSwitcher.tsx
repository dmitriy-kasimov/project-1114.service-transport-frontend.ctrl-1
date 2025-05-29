import type { FC } from 'react';

import { Switcher, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventMutation } from '@project-1114/platform-frontend';

import { EDoors } from '../../const/EDoors.ts';

type ToggleDoorDriverFrontSwitcherProps = {
    initialValue: boolean;
};
export const ToggleDoorDriverRearSwitcher: FC<
    ToggleDoorDriverFrontSwitcherProps
> = ({ initialValue }) => {
    const [handler, { data, isLoading, error }] =
        useTriggerClientEventMutation<boolean>('toggleDoorDriverRearState');

    if (error) return <Text>{error}</Text>;
    return (
        <Switcher
            id={`${EDoors.DriverRear}`}
            value={data ?? initialValue}
            onChange={() => handler(null)}
            disabled={isLoading}
        />
    );
};
