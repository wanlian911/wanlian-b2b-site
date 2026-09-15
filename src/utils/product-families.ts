// 产品族数据源（10 族）：驱动产品页 Related 模块族内闭环（批次 C）与 /products/ 集合页族分组（批次 D）。
// 生成自 wanlian911_SEO修复总交付包_20260911 / internal_links_matrix/product_families.json。
// slug 为全站统一键，ES/RU/FR 各语言产品页同构复用（slug 不变、仅 URL 前缀不同）。
export const PRODUCT_FAMILIES = [
  { id: "gate-valves", label: "Gate Valves", slugs: ["brass-gate-valve-z15w-16t", "flange-manual-bellows-gate-valve", "groove-solenoid-control-gate-valve-gkzf1", "resilient-seat-flanged-gate-valve-z41x", "telescopic-resilient-seat-gate-valve-z41x-t", "ul-fm-resilient-seat-osy-gate-valve", "z85x-stainless-steel-grooved-gate-valve"] },
  { id: "butterfly-valves", label: "Butterfly Valves", slugs: ["d381x-16q-grooved-butterfly-valve", "signal-grooved-wafer-butterfly-valve-dn80", "wafer-type-butterfly-valve-d71x"] },
  { id: "check-valves", label: "Check Valves", slugs: ["sliding-ball-check-valve-hq41x", "spherical-ball-check-valve-hq44x"] },
  { id: "hydrants", label: "Fire Hydrants", slugs: ["anti-collision-pressure-regulating-outdoor-hydrant-ssft100", "foam-fire-hydrant-cabinet-psg30", "indoor-fire-hydrant-head-sn65", "iot-smart-ground-fire-hydrant-ss100zn", "overground-fire-hydrant-ss100", "underground-fire-hydrant-sa"] },
  { id: "fire-hose", label: "Fire Hose & Couplings", slugs: ["adjustable-pistol-grip-fire-nozzle", "fire-hose-pvc-rubber-lining-8-65", "fire-hose-reel-jpso8-19", "fire-hydrant-hose-coupling-adapter-hs", "storz-coupling-2-5inch-aluminum"] },
  { id: "sprinkler-system", label: "Sprinkler Systems", slugs: ["deluge-alarm-valve-zsfm", "dry-alarm-valve-zsfc", "esfr-sprinkler-head", "glass-bulb-fire-sprinkler-zst", "horizontal-sidewall-fire-sprinkler-t-zstbs", "pre-action-alarm-system-zsfy", "water-flow-indicator-zsjz", "wet-alarm-check-valve-zsfz-150", "zstdy-concealed-fire-sprinkler"] },
  { id: "water-cannon", label: "Water Cannons", slugs: ["auto-tracking-jet-suppression-cannon-zdms", "manual-fire-water-cannon-ps"] },
  { id: "extinguishers", label: "Fire Extinguishers", slugs: ["abc-dry-powder-fire-extinguisher-5kg", "metal-fire-extinguisher-box-red", "stainless-steel-fire-extinguisher-box"] },
  { id: "water-control", label: "Water Control Valves", slugs: ["adjustable-pressure-reducing-valve-500x", "hydraulic-water-level-control-valve-f745x", "remote-control-float-valve-100x", "smart-electromagnetic-flow-meter", "sp45f-flange-digital-balancing-valve", "telescopic-y-strainer-sgl41h"] },
  { id: "special", label: "Special Valves", slugs: ["anti-pollution-backflow-preventer-hs41x", "sqd100-1-6-fire-pump-adapter", "suction-vortex-preventer-en12845"] },
];

/** 每个产品页的 Related 目标 slug（同族，最多 4 条），与 product_families.json 逐页对齐。 */
export const PRODUCT_FAMILY_RELATED: Record<string, string[]> = {
  "abc-dry-powder-fire-extinguisher-5kg": ["metal-fire-extinguisher-box-red", "stainless-steel-fire-extinguisher-box"],
  "adjustable-pistol-grip-fire-nozzle": ["fire-hose-pvc-rubber-lining-8-65", "fire-hose-reel-jpso8-19", "storz-coupling-2-5inch-aluminum", "fire-hydrant-hose-coupling-adapter-hs"],
  "adjustable-pressure-reducing-valve-500x": ["hydraulic-water-level-control-valve-f745x", "remote-control-float-valve-100x", "telescopic-y-strainer-sgl41h", "smart-electromagnetic-flow-meter", "sp45f-flange-digital-balancing-valve"],
  "anti-collision-pressure-regulating-outdoor-hydrant-ssft100": ["overground-fire-hydrant-ss100", "underground-fire-hydrant-sa", "iot-smart-ground-fire-hydrant-ss100zn", "indoor-fire-hydrant-head-sn65"],
  "anti-pollution-backflow-preventer-hs41x": ["suction-vortex-preventer-en12845", "sqd100-1-6-fire-pump-adapter"],
  "auto-tracking-jet-suppression-cannon-zdms": ["manual-fire-water-cannon-ps"],
  "brass-gate-valve-z15w-16t": ["resilient-seat-flanged-gate-valve-z41x", "telescopic-resilient-seat-gate-valve-z41x-t", "z85x-stainless-steel-grooved-gate-valve", "flange-manual-bellows-gate-valve"],
  "d381x-16q-grooved-butterfly-valve": ["wafer-type-butterfly-valve-d71x", "signal-grooved-wafer-butterfly-valve-dn80"],
  "deluge-alarm-valve-zsfm": ["dry-alarm-valve-zsfc", "esfr-sprinkler-head", "glass-bulb-fire-sprinkler-zst", "horizontal-sidewall-fire-sprinkler-t-zstbs"],
  "fire-hose-pvc-rubber-lining-8-65": ["fire-hose-reel-jpso8-19", "storz-coupling-2-5inch-aluminum", "fire-hydrant-hose-coupling-adapter-hs", "adjustable-pistol-grip-fire-nozzle"],
  "fire-hose-reel-jpso8-19": ["fire-hose-pvc-rubber-lining-8-65", "storz-coupling-2-5inch-aluminum", "fire-hydrant-hose-coupling-adapter-hs", "adjustable-pistol-grip-fire-nozzle"],
  "fire-hydrant-hose-coupling-adapter-hs": ["fire-hose-pvc-rubber-lining-8-65", "fire-hose-reel-jpso8-19", "storz-coupling-2-5inch-aluminum", "adjustable-pistol-grip-fire-nozzle"],
  "flange-manual-bellows-gate-valve": ["resilient-seat-flanged-gate-valve-z41x", "telescopic-resilient-seat-gate-valve-z41x-t", "z85x-stainless-steel-grooved-gate-valve", "brass-gate-valve-z15w-16t"],
  "foam-fire-hydrant-cabinet-psg30": ["overground-fire-hydrant-ss100", "underground-fire-hydrant-sa", "iot-smart-ground-fire-hydrant-ss100zn", "indoor-fire-hydrant-head-sn65"],
  "glass-bulb-fire-sprinkler-zst": ["esfr-sprinkler-head", "horizontal-sidewall-fire-sprinkler-t-zstbs", "zstdy-concealed-fire-sprinkler", "deluge-alarm-valve-zsfm"],
  "groove-solenoid-control-gate-valve-gkzf1": ["resilient-seat-flanged-gate-valve-z41x", "telescopic-resilient-seat-gate-valve-z41x-t", "z85x-stainless-steel-grooved-gate-valve", "brass-gate-valve-z15w-16t"],
  "horizontal-sidewall-fire-sprinkler-t-zstbs": ["deluge-alarm-valve-zsfm", "dry-alarm-valve-zsfc", "esfr-sprinkler-head", "glass-bulb-fire-sprinkler-zst"],
  "hydraulic-water-level-control-valve-f745x": ["adjustable-pressure-reducing-valve-500x", "remote-control-float-valve-100x", "telescopic-y-strainer-sgl41h", "smart-electromagnetic-flow-meter", "sp45f-flange-digital-balancing-valve"],
  "indoor-fire-hydrant-head-sn65": ["foam-fire-hydrant-cabinet-psg30", "iot-smart-ground-fire-hydrant-ss100zn", "overground-fire-hydrant-ss100", "underground-fire-hydrant-sa"],
  "iot-smart-ground-fire-hydrant-ss100zn": ["foam-fire-hydrant-cabinet-psg30", "indoor-fire-hydrant-head-sn65", "overground-fire-hydrant-ss100", "underground-fire-hydrant-sa"],
  "manual-fire-water-cannon-ps": ["auto-tracking-jet-suppression-cannon-zdms"],
  "metal-fire-extinguisher-box-red": ["abc-dry-powder-fire-extinguisher-5kg", "stainless-steel-fire-extinguisher-box"],
  "overground-fire-hydrant-ss100": ["foam-fire-hydrant-cabinet-psg30", "indoor-fire-hydrant-head-sn65", "iot-smart-ground-fire-hydrant-ss100zn", "underground-fire-hydrant-sa"],
  "pre-action-alarm-system-zsfy": ["deluge-alarm-valve-zsfm", "dry-alarm-valve-zsfc", "esfr-sprinkler-head", "glass-bulb-fire-sprinkler-zst"],
  "remote-control-float-valve-100x": ["adjustable-pressure-reducing-valve-500x", "hydraulic-water-level-control-valve-f745x", "telescopic-y-strainer-sgl41h", "smart-electromagnetic-flow-meter", "sp45f-flange-digital-balancing-valve"],
  "resilient-seat-flanged-gate-valve-z41x": ["telescopic-resilient-seat-gate-valve-z41x-t", "z85x-stainless-steel-grooved-gate-valve", "brass-gate-valve-z15w-16t", "flange-manual-bellows-gate-valve"],
  "signal-grooved-wafer-butterfly-valve-dn80": ["wafer-type-butterfly-valve-d71x", "d381x-16q-grooved-butterfly-valve"],
  "sliding-ball-check-valve-hq41x": ["spherical-ball-check-valve-hq44x"],
  "smart-electromagnetic-flow-meter": ["adjustable-pressure-reducing-valve-500x", "hydraulic-water-level-control-valve-f745x", "remote-control-float-valve-100x", "telescopic-y-strainer-sgl41h", "sp45f-flange-digital-balancing-valve"],
  "sp45f-flange-digital-balancing-valve": ["adjustable-pressure-reducing-valve-500x", "hydraulic-water-level-control-valve-f745x", "remote-control-float-valve-100x", "telescopic-y-strainer-sgl41h"],
  "spherical-ball-check-valve-hq44x": ["sliding-ball-check-valve-hq41x"],
  "sqd100-1-6-fire-pump-adapter": ["anti-pollution-backflow-preventer-hs41x", "suction-vortex-preventer-en12845"],
  "stainless-steel-fire-extinguisher-box": ["abc-dry-powder-fire-extinguisher-5kg", "metal-fire-extinguisher-box-red"],
  "storz-coupling-2-5inch-aluminum": ["fire-hose-pvc-rubber-lining-8-65", "fire-hose-reel-jpso8-19", "fire-hydrant-hose-coupling-adapter-hs", "adjustable-pistol-grip-fire-nozzle"],
  "suction-vortex-preventer-en12845": ["anti-pollution-backflow-preventer-hs41x", "sqd100-1-6-fire-pump-adapter"],
  "telescopic-resilient-seat-gate-valve-z41x-t": ["resilient-seat-flanged-gate-valve-z41x", "z85x-stainless-steel-grooved-gate-valve", "brass-gate-valve-z15w-16t", "flange-manual-bellows-gate-valve"],
  "telescopic-y-strainer-sgl41h": ["adjustable-pressure-reducing-valve-500x", "hydraulic-water-level-control-valve-f745x", "remote-control-float-valve-100x", "smart-electromagnetic-flow-meter", "sp45f-flange-digital-balancing-valve"],
  "ul-fm-resilient-seat-osy-gate-valve": ["resilient-seat-flanged-gate-valve-z41x", "telescopic-resilient-seat-gate-valve-z41x-t", "z85x-stainless-steel-grooved-gate-valve", "brass-gate-valve-z15w-16t"],
  "underground-fire-hydrant-sa": ["foam-fire-hydrant-cabinet-psg30", "indoor-fire-hydrant-head-sn65", "iot-smart-ground-fire-hydrant-ss100zn", "overground-fire-hydrant-ss100"],
  "wafer-type-butterfly-valve-d71x": ["signal-grooved-wafer-butterfly-valve-dn80", "d381x-16q-grooved-butterfly-valve"],
  "dry-alarm-valve-zsfc": ["deluge-alarm-valve-zsfm", "esfr-sprinkler-head", "glass-bulb-fire-sprinkler-zst", "pre-action-alarm-system-zsfy"],
  "esfr-sprinkler-head": ["deluge-alarm-valve-zsfm", "dry-alarm-valve-zsfc", "glass-bulb-fire-sprinkler-zst", "pre-action-alarm-system-zsfy"],
  "water-flow-indicator-zsjz": ["deluge-alarm-valve-zsfm", "dry-alarm-valve-zsfc", "esfr-sprinkler-head", "glass-bulb-fire-sprinkler-zst"],
  "wet-alarm-check-valve-zsfz-150": ["deluge-alarm-valve-zsfm", "dry-alarm-valve-zsfc", "esfr-sprinkler-head", "glass-bulb-fire-sprinkler-zst"],
  "z85x-stainless-steel-grooved-gate-valve": ["resilient-seat-flanged-gate-valve-z41x", "telescopic-resilient-seat-gate-valve-z41x-t", "brass-gate-valve-z15w-16t", "flange-manual-bellows-gate-valve"],
  "zstdy-concealed-fire-sprinkler": ["deluge-alarm-valve-zsfm", "dry-alarm-valve-zsfc", "esfr-sprinkler-head", "glass-bulb-fire-sprinkler-zst"],
};

const slugToFamily = new Map<string, { id: string; label: string; slugs: string[] }>();
for (const f of PRODUCT_FAMILIES) for (const s of f.slugs) slugToFamily.set(s, f);

/** 取某产品页的同族 Related slug（同族、排除自身），与 product_families.json 一致。 */
export function relatedSlugsFor(slug: string): string[] {
  const family = slugToFamily.get(slug);
  if (!family) return [];
  return family.slugs.filter(s => s !== slug).slice(0, 4);
}
/** 某 slug 所属族 id（未归类返回 null）。 */
export function familyIdOf(slug: string): string | null {
  return slugToFamily.get(slug)?.id ?? null;
}
