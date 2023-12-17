import { signal } from "@preact/signals-react";
import { Section } from "../../types";

export const sections = signal<Section[]>([]);
