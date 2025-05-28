import type { FC } from 'react';

import { Switcher, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventMutation } from '@project-1114/platform-frontend';

import { EDoors } from '../../const/EDoors.ts';

type ToggleDoorDriverFrontSwitcherProps = {
    initialValue: boolean;
};
export const ToggleDoorPassengerFrontSwitcher: FC<
    ToggleDoorDriverFrontSwitcherProps
> = ({ initialValue }) => {
    const [handler, { data, isLoading, error }] = useTriggerClientEventMutation<
        boolean,
        EDoors
    >('toggleDoorState');

    if (error) return <Text>{error}</Text>;
    return (
        <Switcher
            id={`${EDoors.PassengerFront}`}
            value={data || initialValue}
            onChange={() => handler(EDoors.PassengerFront)}
            disabled={isLoading}
        />
    );
};
