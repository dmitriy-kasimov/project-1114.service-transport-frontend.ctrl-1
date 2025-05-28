import type { FC } from 'react';
import { HStack, VStack, Text, Switcher } from '@project-1114/ui-kit';

export const ToggleDoorsGeneral: FC = () => {
    return (
        <HStack gap={'xl'} justify={'between'} max align={'start'}>
            <HStack align={'center'} gap={'m'}>
                <Text size={'l'}>Двери:</Text>
                <Switcher id={'doors'} value={false} onChange={() => {}} />
            </HStack>
            <VStack gap={'m'}>
                <HStack align={'center'} gap={'m'}>
                    <Text size={'l'}>Капот:</Text>
                    <Switcher id={'doors'} value={false} onChange={() => {}} />
                </HStack>
                <HStack align={'center'} gap={'m'}>
                    <Text size={'l'}>Багажник:</Text>
                    <Switcher id={'doors'} value={false} onChange={() => {}} />
                </HStack>
            </VStack>
        </HStack>
    );
};
