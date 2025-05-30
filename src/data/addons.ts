import type { Addon } from "../types/addon";

export const ADDONS: Addon[] = [
  {
    id: "A1",
    name: "Online service",
    description: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    id: "A2",
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    id: "A3",
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];
