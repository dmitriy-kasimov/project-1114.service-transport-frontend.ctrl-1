import type { FC } from 'react';

import { Skeleton, Text } from '@project-1114/ui-kit';
import { useTriggerClientEventQuery } from '@project-1114/platform-frontend';

import { ToggleDoorDriverRearSwitcher } from '@/ctrls/CtrlDoors/ui/ToggleDoorsDetail/ToggleDoorDriverRearSwitcher.tsx';

export const ToggleDoorDriverRear: FC = () => {
    const { data, isLoading, error } = useTriggerClientEventQuery<boolean>(
        'getDoorDriverRearState',
    );

    if (isLoading) return <Skeleton width={64} height={32} border={'16px'} />;
    else if (error) return <Text>{error}</Text>;
    else if (data === null) return <Text>no data</Text>;

    return <ToggleDoorDriverRearSwitcher initialValue={data} />;
};
