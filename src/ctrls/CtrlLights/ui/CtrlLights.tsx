import { useState } from 'react';
import { HStack, ListBox, Text } from '@project-1114/ui-kit';
import { options } from '../const/options.tsx';

export const CtrlLights = () => {
    const [light, setLight] = useState<string>('0');
    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Фары:</Text>
            <ListBox
                value={light}
                onChange={setLight}
                items={options}
                defaultValue="0"
            />
        </HStack>
    );
};
