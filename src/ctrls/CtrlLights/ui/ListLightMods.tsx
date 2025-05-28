import { ListBox, Text } from '@project-1114/ui-kit';

import { useTriggerClientEventMutation } from '@project-1114/platform-frontend';
import { options } from '@/ctrls/CtrlLights/const/options.tsx';
import { ELightMods } from '@/ctrls/CtrlLights/const/ELightMods.ts';
import type { FC } from 'react';

type ListLightModsProps = {
    initialValue: ELightMods;
};
export const ListLightMods: FC<ListLightModsProps> = ({ initialValue }) => {
    const [handle, { data, isLoading, error }] = useTriggerClientEventMutation<
        ELightMods,
        ELightMods
    >('setLightsState');

    if (error) return <Text>{error}</Text>;
    return (
        <ListBox
            value={data || initialValue}
            onChange={(value) => handle(value)}
            items={options}
            readonly={isLoading}
        />
    );
};
