import type { FC } from 'react';
import { HStack, Switcher, Text } from '@project-1114/ui-kit';

export const ToggleTrunk: FC = () => {
    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Багажник:</Text>
            <Switcher id={'doors'} value={false} onChange={() => {}} />
        </HStack>
    );
};
