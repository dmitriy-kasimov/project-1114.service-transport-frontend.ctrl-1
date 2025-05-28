import type { FC } from 'react';
import { useTriggerClientEventMutation } from '@project-1114/platform-frontend';
import { Switcher, Text } from '@project-1114/ui-kit';

type ToggleDoorsSwitcherProps = {
    initialValue: boolean;
};

export const ToggleDoorsSwitcher: FC<ToggleDoorsSwitcherProps> = ({
    initialValue,
}) => {
    const [handler, { data, isLoading, error }] =
        useTriggerClientEventMutation<boolean>('toggleDoorsState');

    if (error) return <Text>{error}</Text>;
    return (
        <Switcher
            id={'doors'}
            value={data || initialValue}
            onChange={() => handler(null)}
            disabled={isLoading}
        />
    );
};
