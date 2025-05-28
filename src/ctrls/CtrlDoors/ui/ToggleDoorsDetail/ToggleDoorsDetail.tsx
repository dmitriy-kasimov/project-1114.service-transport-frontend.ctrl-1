import { Card, HStack, Icon, VStack } from '@project-1114/ui-kit';
import DoorsIcon from '../../assets/doors.svg?react';
import { ToggleDoorDriverFront } from '@/ctrls/CtrlDoors/ui/ToggleDoorsDetail/ToggleDoorDriverFront.tsx';
import { ToggleDoorDriverRear } from '@/ctrls/CtrlDoors/ui/ToggleDoorsDetail/ToggleDoorDriverRear.tsx';
import { ToggleDoorPassengerFront } from '@/ctrls/CtrlDoors/ui/ToggleDoorsDetail/ToggleDoorPassengerFront.tsx';
import { ToggleDoorPassengerRear } from '@/ctrls/CtrlDoors/ui/ToggleDoorsDetail/ToggleDoorPassengerRear.tsx';

export const ToggleDoorsDetail = () => {
    return (
        <Card variant="transparent" fullWidth>
            <HStack justify={'center'} gap={'m'} max>
                <VStack gap={'m'}>
                    <ToggleDoorDriverFront />
                    <ToggleDoorDriverRear />
                </VStack>

                <Icon
                    Svg={DoorsIcon}
                    fill={'var(--color-accent)'}
                    width={128}
                    height={128}
                />

                <VStack gap={'m'}>
                    <ToggleDoorPassengerFront />
                    <ToggleDoorPassengerRear />
                </VStack>
            </HStack>
        </Card>
    );
};
