import type { FC } from 'react';

import { Skeleton, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventQuery } from '@project-1114/platform-frontend';

import { ToggleDoorPassengerFrontSwitcher } from '@/ctrls/CtrlDoors/ui/ToggleDoorsDetail/ToggleDoorPassengerFrontSwitcher.tsx';

export const ToggleDoorPassengerFront: FC = () => {
    const { data, isLoading, error } = useTriggerClientEventQuery<boolean>(
        'getDoorPassengerFrontState',
    );

    if (isLoading) return <Skeleton width={64} height={32} border={'16px'} />;
    else if (error) return <Text>{error}</Text>;
    else if (data === null) return <Text>no data</Text>;

    return <ToggleDoorPassengerFrontSwitcher initialValue={data} />;
};
