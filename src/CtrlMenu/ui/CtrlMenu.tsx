import { Modal, Text, VStack } from '@project-1114/ui-kit';
import { useState } from 'react';

import { CtrlLights } from '../../ctrls/CtrlLights';
import { CtrlDoors } from '../../ctrls/CtrlDoors';
import { CtrlEngine } from '../../ctrls/CtrlEngine';

export const CtrlMenu = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <VStack gap={'l'} max align={'center'}>
                <Text size={'xl'}>Меню управления Т/С</Text>
                <VStack gap={'m'}>
                    <CtrlEngine />
                    <CtrlLights />
                    <CtrlDoors />
                </VStack>
            </VStack>
        </Modal>
    );
};
