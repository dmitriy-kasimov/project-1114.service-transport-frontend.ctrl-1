import type { FC } from 'react';

import { Switcher, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventMutation } from '@project-1114/platform-frontend';

type EngineSwitcherProps = {
    initialValue: boolean;
};
export const EngineSwitcher: FC<EngineSwitcherProps> = ({ initialValue }) => {
    const [handle, { data, isLoading, error }] =
        useTriggerClientEventMutation<boolean>('toggleEngineState');

    if (error) return <Text>{error}</Text>;
    return (
        <Switcher
            id={'engine'}
            value={data || initialValue}
            onChange={() => handle(null)}
            disabled={isLoading}
        />
    );
};
