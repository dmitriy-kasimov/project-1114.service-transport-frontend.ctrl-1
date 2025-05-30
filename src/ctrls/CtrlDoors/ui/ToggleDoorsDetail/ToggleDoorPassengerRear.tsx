import type { FC } from 'react';

import { Skeleton, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventQuery } from '@project-1114/platform-frontend';

import { ToggleDoorPassengerRearSwitcher } from '@/ctrls/CtrlDoors/ui/ToggleDoorsDetail/ToggleDoorPassengerRearSwitcher.tsx';

export const ToggleDoorPassengerRear: FC = () => {
    const { data, isLoading, error } = useTriggerClientEventQuery<boolean>(
        'getDoorPassengerRearState',
    );

    if (isLoading) return <Skeleton width={64} height={32} border={'16px'} />;
    else if (error) return <Text>{error}</Text>;
    else if (data === null) return <Text>no data</Text>;

    return <ToggleDoorPassengerRearSwitcher initialValue={data} />;
};
