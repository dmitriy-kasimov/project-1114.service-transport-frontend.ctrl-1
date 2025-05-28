import { ToggleDoorsDetail } from './ToggleDoorsDetail.tsx';
import { Accordion, VStack, Text } from '@project-1114/ui-kit';
import { ToggleDoorsGeneral } from '@/ctrls/CtrlDoors/ui/ToggleDoorsGeneral.tsx';

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
