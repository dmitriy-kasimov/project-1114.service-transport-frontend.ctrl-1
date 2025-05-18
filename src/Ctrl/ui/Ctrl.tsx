import type { FC } from 'react';
import { Button, Text } from '@project-1114/ui-kit';

type CtrlProps = {
    activeLabel: string;
    unActiveLabel: string;
    active?: boolean;
    onToggle?: () => void;
};
export const Ctrl: FC<CtrlProps> = ({
    active = false,
    activeLabel,
    unActiveLabel,
    onToggle,
}) => {
    return (
        <Button
            onClick={onToggle}
            fullWidth
            variant={active ? 'outline' : 'primary'}
        >
            <Text>{active ? unActiveLabel : activeLabel}</Text>
        </Button>
    );
};
