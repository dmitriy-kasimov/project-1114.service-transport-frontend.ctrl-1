import { Modal, Text, VStack } from '@project-1114/ui-kit';
import { useState } from 'react';

import { CtrlLight } from '../../ctrls/CtrlLight';
import { CtrlDoors } from '../../ctrls/CtrlDoors';
import { CtrlEngine } from '../../ctrls/CtrlEngine';

export const CtrlsMenu = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <VStack gap={'l'} max align={'center'}>
                <Text size={'xl'}>Меню управления Т/С</Text>
                <VStack gap={'m'}>
                    <CtrlEngine />
                    <CtrlLight />
                    <CtrlDoors />
                </VStack>
            </VStack>
        </Modal>
    );
};
