import { ELightMods } from './ELightMods.ts';

export const lightMods: Record<
    ELightMods,
    { label: string; description: string }
> = {
    [ELightMods.NoVehicleLightOverride]: {
        label: 'NO_VEHICLE_LIGHT_OVERRIDE',
        description:
            "Normal light behavior. Lights cycle through off, then low beams, then high beams. Note: It's affected by day or night; high beams don't exist in daytime.",
    },
    [ELightMods.ForceVehicleLightsOff]: {
        label: 'FORCE_VEHICLE_LIGHTS_OFF',
        description: "Vehicle doesn't have lights, always off.",
    },
    [ELightMods.ForceVehicleLightsOn]: {
        label: 'FORCE_VEHICLE_LIGHTS_ON',
        description:
            'Vehicle has always-on lights. During day: Cycles between low beams and high beams. At night: Cycles between low beams, low beams, and high beams.',
    },
    [ELightMods.SetVehicleLightsOn]: {
        label: 'SET_VEHICLE_LIGHTS_ON',
        description:
            'Sets vehicle lights on. Behaves like normal lights (same as 0).',
    },
    [ELightMods.SetVehicleLightsOff]: {
        label: 'SET_VEHICLE_LIGHTS_OFF',
        description:
            'Sets vehicle lights off. Behaves like normal lights (same as 0).',
    },
};
