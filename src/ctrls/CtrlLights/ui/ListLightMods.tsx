import { ListBox, Text } from '@project-1114/ui-kit';

import {
    useTriggerClientEventMutation,
    useTriggerClientEventQuery,
} from '@project-1114/platform-frontend';
import { options } from '@/ctrls/CtrlLights/const/options.tsx';
import { ELightMods } from '@/ctrls/CtrlLights/const/ELightMods.ts';

export const ListLightMods = () => {
    const {
        data: lightsState,
        isLoading: lightsStateIsLoading,
        error: lightsStateError,
    } = useTriggerClientEventQuery<ELightMods>(
        'f:c:getLightsState',
        'c:f:getLightsState',
    );

    const [handle, { data, isLoading, error }] = useTriggerClientEventMutation<
        ELightMods,
        ELightMods
    >('f:c:setLightsState', 'c:f:setLightsState');

    if (lightsStateError) return <Text>{lightsStateError}</Text>;
    else if (error) return <Text>{error}</Text>;

    const handleSwitchLightsMode = (value: ELightMods) => {
        handle(value);
    };

    return (
        <ListBox
            value={data || lightsState}
            onChange={handleSwitchLightsMode}
            items={options}
            readonly={lightsStateIsLoading || isLoading}
        />
    );
};
