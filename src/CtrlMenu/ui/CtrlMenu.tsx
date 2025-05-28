import { Modal, Text, VStack } from '@project-1114/ui-kit';
import { useState } from 'react';

import { CtrlDoors } from '../../ctrls/CtrlDoors';

export const CtrlMenu = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <VStack gap={'l'} max align={'center'} style={{ width: 450 }}>
                <Text size={'xl'}>Меню управления Т/С</Text>
                <VStack gap={'m'} max>
                    {/*<CtrlEngine />*/}
                    {/*<CtrlLights />*/}
                    <CtrlDoors />
                </VStack>
            </VStack>
        </Modal>
    );
};
