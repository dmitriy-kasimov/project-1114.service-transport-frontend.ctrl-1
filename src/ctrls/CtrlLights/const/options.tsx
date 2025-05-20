import type { ListBoxItem } from '@project-1114/ui-kit';
import { Text } from '@project-1114/ui-kit';
import { lightMods } from './lightMods.ts';

export const options: ListBoxItem<string>[] = Object.entries(lightMods).map(
    ([value, mode]) => ({ value, content: <Text>{mode.label}</Text> }),
);
