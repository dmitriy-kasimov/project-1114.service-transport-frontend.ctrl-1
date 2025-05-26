import { HStack, Text } from '@project-1114/ui-kit';
import { ListLightMods } from '@/ctrls/CtrlLights/ui/ListLightMods.tsx';

export const CtrlLights = () => (
    <HStack align={'center'} gap={'m'}>
        <Text size={'l'}>Фары:</Text>
        <ListLightMods />
    </HStack>
);
