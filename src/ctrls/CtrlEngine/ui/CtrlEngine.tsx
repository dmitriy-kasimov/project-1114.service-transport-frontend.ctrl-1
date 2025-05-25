import { HStack, Text } from '@project-1114/ui-kit';
import { EngineSwitcher } from '@/ctrls/CtrlEngine/ui/EngineSwitcher.tsx';

export const CtrlEngine = () => {
    return (
        <HStack align={'center'} gap={'m'}>
            <Text size={'l'}>Двигатель:</Text>
            <EngineSwitcher />
        </HStack>
    );
};
