import { useState } from 'react';
import { Card, HStack, Icon, Switcher, VStack } from '@project-1114/ui-kit';
import DoorsIcon from '../assets/doors.svg?react';

export const DoorState = () => {
    const [open, setOpen] = useState(false);
    return (
        <Card variant="transparent" fullWidth>
            <VStack max align={'center'} gap={'m'}>
                <Switcher id={'door2'} value={false} onChange={() => {}} />
                <HStack align={'center'} gap={'m'}>
                    <VStack gap={'m'}>
                        <Switcher
                            id={'door'}
                            value={open}
                            onChange={() => setOpen((prev) => !prev)}
                        />
                        <Switcher
                            id={'door2'}
                            value={false}
                            onChange={() => {}}
                        />
                    </VStack>

                    <Icon
                        Svg={DoorsIcon}
                        fill={'var(--color-accent)'}
                        width={128}
                        height={128}
                    />

                    <VStack gap={'m'}>
                        <Switcher
                            id={'door3'}
                            value={false}
                            onChange={() => {}}
                        />
                        <Switcher
                            id={'door4'}
                            value={false}
                            onChange={() => {}}
                        />
                    </VStack>
                </HStack>
                <Switcher id={'door2'} value={false} onChange={() => {}} />
            </VStack>
        </Card>
    );
};
