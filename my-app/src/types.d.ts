export interface ApiReferenceList<t extends string = string> {
    count: number;
    results: ApiReference<t>[];
}

export interface ApiReference<t extends string = string> {
  index: string;
  name: string;
  url: `/api/${t}/${string}`;
}

export interface EquipmentCategory {
  index: string;
  name: string;
  equipment: ApiReference<'equipment'>[];
}

export enum EquipmentCategories {
  AdventuringGear,
  Ammunition,
  ArcaneFoci,
  Armor,
  ArtisansTools,
  DruidicFoci,
  EquipmentPacks,
  GamingSets,
  HeavyArmor,
  HolySymbols,
  Kits,
  LandVehicles,
  LightArmor,
  MartialMeleeWeapons,
  MartialRangedWeapons,
  MartialWeapons,
  MediumArmor,
  MeleeWeapons,
  MountsOtherAnimals,
  MountsVehicles,
  MusicalInstruments,
  OtherTools,
  Potion,
  RangedWeapons,
  Ring,
  Rod,
  Scroll,
  Shields,
  SimpleMeleeWeapons,
  SimpleRangedWeapons,
  SimpleWeapons,
  Staff,
  StandardGear,
  Tack,
  Tools,
  Wand,
  WaterborneVehicles,
  Weapon,
  WondrousItems,
}

export type EquipmentCategoryReferenceList = ApiReferenceList<'equipment-categories'>;
export type EquipmentCategoryReference = ApiReference<'equipment-categories'>;
