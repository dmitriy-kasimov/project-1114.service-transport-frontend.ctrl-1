import { Modal, VStack } from '@project-1114/ui-kit';
import { useState } from 'react';
import { ctrls } from '../const/ctrls.ts';
import { Ctrl } from '../../Ctrl/ui/Ctrl.tsx';

export const CtrlsMenu = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <VStack gap={'m'}>
                {ctrls.map((ctrl) => (
                    <Ctrl
                        activeLabel={ctrl.activeLabel}
                        unActiveLabel={ctrl.unActiveLabel}
                        onToggle={ctrl.onToggle}
                        active={false}
                    />
                ))}
            </VStack>
        </Modal>
    );
};
