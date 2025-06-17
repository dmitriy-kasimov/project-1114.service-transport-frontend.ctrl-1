import { Modal, Text, VStack } from '@project-1114/ui-kit';
import { useState } from 'react';

import { CtrlDoors } from '@/ctrls/CtrlDoors';

import cls from './CtrlMenu.module.css';
import { useTriggerClientEventMutation } from '@project-1114/platform-frontend';
import { CtrlPowerSupply } from '@/ctrls/CtrlPowerSupply';
import { CtrlEngine } from '@/ctrls/CtrlEngine';
import { CtrlLights } from '@/ctrls/CtrlLights';

export const CtrlMenu = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [controlHide] = useTriggerClientEventMutation('controlHide');

    const handleClose = () => {
        setIsOpen(false);
        controlHide(null);
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} className={cls.CtrlMenu}>
            <VStack gap={'xl'} max align={'center'} style={{ width: 450 }}>
                <Text size={'xl'}>Меню управления Т/С</Text>
                <VStack gap={'l'} max>
                    <CtrlPowerSupply>
                        <CtrlEngine />
                        <CtrlLights />
                    </CtrlPowerSupply>
                    <CtrlDoors />
                </VStack>
            </VStack>
        </Modal>
    );
};
