import type { FC } from 'react';

import { HStack, VStack } from '@project-1114/ui-kit';

import { ToggleDoors } from './ToggleDoors.tsx';
import { ToggleHood } from './ToggleHood.tsx';
import { ToggleTrunk } from './ToggleTrunk.tsx';

export const ToggleDoorsGeneral: FC = () => {
    return (
        <HStack gap={'xl'} justify={'between'} max align={'start'}>
            <ToggleDoors />
            <VStack gap={'m'}>
                <ToggleHood />
                <ToggleTrunk />
            </VStack>
        </HStack>
    );
};
