type TCtrl = {
    activeLabel: string;
    unActiveLabel: string;
    onToggle?: () => void;
};
export const ctrls: TCtrl[] = [
    {
        activeLabel: 'Завести двигатель',
        unActiveLabel: 'Заглушить двигатель',
        onToggle: () => {},
    },
    {
        activeLabel: 'Открыть двери',
        unActiveLabel: 'Закрыть двери',
        onToggle: () => {},
    },
];
