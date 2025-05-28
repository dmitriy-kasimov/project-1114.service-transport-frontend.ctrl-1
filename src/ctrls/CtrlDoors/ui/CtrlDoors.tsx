import { Accordion, VStack, Text } from '@project-1114/ui-kit';

import { ToggleDoorsGeneral } from './ToggleDoorsGeneral/ToggleDoorsGeneral.tsx';
import { ToggleDoorsDetail } from './ToggleDoorsDetail/ToggleDoorsDetail.tsx';

export const CtrlDoors = () => {
    return (
        <VStack max gap={'l'}>
            <ToggleDoorsGeneral />
            <Accordion
                title={<Text>Дополнительно</Text>}
                description={<ToggleDoorsDetail />}
                fullWidth
            />
        </VStack>
    );
};
