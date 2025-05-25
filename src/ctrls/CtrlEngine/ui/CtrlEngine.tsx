import { HStack, Switcher, Text } from '@project-1114/ui-kit';
import { useState } from 'react';

export const CtrlEngine = () => {
    const [power, setPower] = useState(false);

    const handleSwitch = () => {
        setPower((prev) => !prev);
    };

    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Двигатель:</Text>
            <Switcher id={'engine'} value={power} onChange={handleSwitch} />
        </HStack>
    );
};
