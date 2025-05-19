import { useState } from 'react';
import { ListBox } from '@project-1114/ui-kit';
import { options } from '../const/options.tsx';

export const CtrlLight = () => {
    const [light, setLight] = useState<string>('0');
    return (
        <ListBox
            value={light}
            onChange={setLight}
            items={options}
            defaultValue="0"
        />
    );
};
