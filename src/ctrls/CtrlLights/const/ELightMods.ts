export enum ELightMods {
    // Normal light behavior. Lights cycle through off, then low beams, then high beams.
    // Note: It's affected by day or night; high beams don't exist in daytime.
    NoVehicleLightOverride,

    // Vehicle doesn't have lights, always off.
    ForceVehicleLightsOff,

    // Vehicle has always-on lights.
    // During day: Cycles between low beams and high beams.
    // At night: Cycles between low beams, low beams, and high beams.
    ForceVehicleLightsOn,

    // Sets vehicle lights on. Behaves like normal lights (same as 0).
    SetVehicleLightsOn,

    // Sets vehicle lights off. Behaves like normal lights (same as 0).
    SetVehicleLightsOff,
}
