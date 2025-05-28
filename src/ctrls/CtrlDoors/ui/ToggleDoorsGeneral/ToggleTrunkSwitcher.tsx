import type { FC } from 'react';
import { useTriggerClientEventMutation } from '@project-1114/platform-frontend';
import { EDoors } from '@/ctrls/CtrlDoors/const/EDoors.ts';
import { Switcher, Text } from '@project-1114/ui-kit';

type ToggleHoodSwitcherProps = {
    initialValue: boolean;
};

export const ToggleTrunkSwitcher: FC<ToggleHoodSwitcherProps> = ({
    initialValue,
}) => {
    const [handler, { data, isLoading, error }] = useTriggerClientEventMutation<
        boolean,
        EDoors
    >('f:c:toggleDoorState', 'c:f:toggleDoorState');

    if (error) return <Text>{error}</Text>;
    return (
        <Switcher
            id={`${EDoors.Trunk}`}
            value={data || initialValue}
            onChange={() => handler(EDoors.Trunk)}
            disabled={isLoading}
        />
    );
};
