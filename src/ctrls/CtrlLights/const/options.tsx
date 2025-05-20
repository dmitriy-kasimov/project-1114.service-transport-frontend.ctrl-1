import {
    Card,
    HStack,
    Icon,
    type ListBoxItem,
    Tooltip,
} from '@project-1114/ui-kit';
import { Text } from '@project-1114/ui-kit';
import { lightMods } from './lightMods.ts';
import InfoIcon from '../assets/info.svg?react';

export const options: ListBoxItem<string>[] = Object.entries(lightMods).map(
    ([value, mode]) => ({
        value,
        content: (
            <HStack align={'center'} justify={'between'} gap={'l'}>
                <Text>{mode.label}</Text>
                <Tooltip
                    content={
                        <Card variant={'transparent'} style={{ width: 300 }}>
                            <Text>{mode.description}</Text>
                        </Card>
                    }
                >
                    <Icon
                        Svg={InfoIcon}
                        fill={'var(--color-secondary)'}
                        width={16}
                        height={16}
                    />
                </Tooltip>
            </HStack>
        ),
    }),
);
