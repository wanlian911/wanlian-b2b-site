export interface Tag {
  slug: string;
  name: string;
  seoTitle: string;
  description: string;
  guideHrefs: string[];
  productSlugs: string[];
  relatedTags: string[];
}

// 标签聚合体系:按主题将指南与产品关联,形成站内链接网络
export const tags: Tag[] = [
  {
    slug: 'fire-protection',
    name: 'Fire Protection',
    seoTitle: 'Fire Protection Equipment & Systems: Valves, Hydrants & Sprinklers | Wanlian Fluid',
    description: 'The complete Wanlian fire protection range — hydrants, sprinkler system valves, fire hose reels and cabinets, portable extinguishers and fire water cannons — with buying guides and certification guidance for B2B projects.',
    guideHrefs: ['/guides/how-to-choose-a-fire-hydrant/', '/guides/fire-sprinkler-system-valves-guide/', '/guides/fire-sprinkler-system-wet-dry-preaction/', '/guides/fire-sprinkler-control-valve-types/', '/guides/fire-hose-reel-cabinet-guide/', '/guides/fire-water-monitor-selection-guide/', '/guides/fire-water-cannon-buying-guide/', '/guides/how-to-choose-ul-listed-fire-valves/', '/guides/gate-valve-vs-butterfly-valve-fire-protection/', '/guides/fire-extinguisher-selection-guide/', '/guides/fire-hose-buying-guide/', '/guides/fire-hydrant-valve-standards-guide/'],
    productSlugs: ['indoor-fire-hydrant-head-sn65', 'overground-fire-hydrant-ss100', 'anti-collision-pressure-regulating-outdoor-hydrant-ssft100', 'iot-smart-ground-fire-hydrant-ss100zn', 'fire-hydrant-hose-coupling-adapter-hs', 'sqd100-1-6-fire-pump-adapter', 'glass-bulb-fire-sprinkler-zst', 'horizontal-sidewall-fire-sprinkler-t-zstbs', 'zstdy-concealed-fire-sprinkler', 'wet-alarm-check-valve-zsfz-150', 'deluge-alarm-valve-zsfm', 'pre-action-alarm-system-zsfy', 'water-flow-indicator-zsjz', 'manual-fire-water-cannon-ps', 'auto-tracking-jet-suppression-cannon-zdms', 'fire-hose-reel-jpso8-19', 'foam-fire-hydrant-cabinet-psg30', 'fire-hose-pvc-rubber-lining-8-65', 'adjustable-pistol-grip-fire-nozzle', 'storz-coupling-2-5inch-aluminum', 'abc-dry-powder-fire-extinguisher-5kg', 'stainless-steel-fire-extinguisher-box', 'metal-fire-extinguisher-box-red', 'signal-grooved-wafer-butterfly-valve-dn80', 'ul-fm-resilient-seat-osy-gate-valve', 'd381x-16q-grooved-butterfly-valve', 'groove-solenoid-control-gate-valve-gkzf1', 'suction-vortex-preventer-en12845'],
    relatedTags: ['fire-hydrant', 'sprinkler-systems', 'fire-water-cannon', 'fire-hose-reel', 'certification', 'procurement']
  },
  {
    slug: 'fire-hydrant',
    name: 'Fire Hydrants',
    seoTitle: 'Fire Hydrants: Types, Standards & Selection | Wanlian Fluid',
    description: 'Indoor SN65 hydrant heads, overground SS100 hydrants, anti-collision SSFT100 and IoT smart hydrants for municipal and industrial fire protection networks.',
    guideHrefs: ['/guides/how-to-choose-a-fire-hydrant/', '/guides/wanlian-fluid-vs-american-avk/', '/guides/fire-hydrant-valve-standards-guide/'],
    productSlugs: ['indoor-fire-hydrant-head-sn65', 'overground-fire-hydrant-ss100', 'anti-collision-pressure-regulating-outdoor-hydrant-ssft100', 'iot-smart-ground-fire-hydrant-ss100zn', 'fire-hydrant-hose-coupling-adapter-hs'],
    relatedTags: ['fire-protection', 'procurement', 'fire-hose-reel']
  },
  {
    slug: 'sprinkler-systems',
    name: 'Sprinkler Systems',
    seoTitle: 'Fire Sprinkler Systems: Wet, Deluge & Pre-action Valves | Wanlian Fluid',
    description: 'Wet alarm valves, deluge valves, pre-action systems, sprinkler heads and flow indicators for automatic sprinkler protection in commercial and industrial buildings.',
    guideHrefs: ['/guides/fire-sprinkler-system-valves-guide/', '/guides/fire-sprinkler-system-wet-dry-preaction/', '/guides/fire-sprinkler-control-valve-types/'],
    productSlugs: ['glass-bulb-fire-sprinkler-zst', 'wet-alarm-check-valve-zsfz-150', 'deluge-alarm-valve-zsfm', 'pre-action-alarm-system-zsfy', 'water-flow-indicator-zsjz'],
    relatedTags: ['fire-protection', 'certification']
  },
  {
    slug: 'fire-water-cannon',
    name: 'Fire Water Cannons',
    seoTitle: 'Fire Water Cannons & Monitors: Manual vs Auto-Tracking | Wanlian Fluid',
    description: 'Manual PS fire monitors and auto-tracking ZDMS cannons for large-space and industrial fire suppression, with jet range, flow and control integration guidance.',
    guideHrefs: ['/guides/fire-water-monitor-selection-guide/', '/guides/fire-water-cannon-buying-guide/'],
    productSlugs: ['manual-fire-water-cannon-ps', 'auto-tracking-jet-suppression-cannon-zdms'],
    relatedTags: ['fire-protection', 'fire-hose-reel']
  },
  {
    slug: 'backflow-prevention',
    name: 'Backflow Prevention',
    seoTitle: 'Backflow Preventers & Hydraulic Control Valves | Wanlian Fluid',
    description: 'HS41X anti-pollution backflow preventers, pressure reducing, level control and solenoid valves for potable water protection and hydraulic safety.',
    guideHrefs: ['/guides/backflow-prevention-guide/', '/guides/pressure-reducing-valve-guide/'],
    productSlugs: ['anti-pollution-backflow-preventer-hs41x', 'adjustable-pressure-reducing-valve-500x', 'hydraulic-water-level-control-valve-f745x', 'groove-solenoid-control-gate-valve-gkzf1', 'suction-vortex-preventer-en12845'],
    relatedTags: ['industrial-valves', 'fire-protection']
  },
  {
    slug: 'industrial-valves',
    name: 'Industrial Valves',
    seoTitle: 'Industrial Valves: Gate, Butterfly & Check Valves | Wanlian Fluid',
    description: 'Resilient seat gate valves, wafer butterfly valves, ball check valves and Y-strainers for water supply, sewage, HVAC and industrial process pipelines.',
    guideHrefs: ['/guides/gate-valve-vs-butterfly-valve-fire-protection/', '/guides/b2b-valve-sourcing-checklist/', '/guides/how-to-choose-ul-listed-fire-valves/', '/guides/bellows-seal-gate-valve-guide/', '/guides/check-valve-types-guide/'],
    productSlugs: ['resilient-seat-flanged-gate-valve-z41x', 'telescopic-resilient-seat-gate-valve-z41x-t', 'wafer-type-butterfly-valve-d71x', 'signal-grooved-wafer-butterfly-valve-dn80', 'sliding-ball-check-valve-hq41x', 'spherical-ball-check-valve-hq44x', 'telescopic-y-strainer-sgl41h', 'flange-manual-bellows-gate-valve'],
    relatedTags: ['fire-protection', 'backflow-prevention']
  },
  {
    slug: 'fire-hose-reel',
    name: 'Fire Hose Reels & Cabinets',
    seoTitle: 'Fire Hose Reels & Fire Cabinets: Selection Guide | Wanlian Fluid',
    description: 'JPS0.8-19 fire hose reels, PSG30 foam cabinets, SN65 hydrant valves and coupling adapters for indoor firefighting stations and Class B hazard areas.',
    guideHrefs: ['/guides/fire-hose-reel-cabinet-guide/'],
    productSlugs: ['fire-hose-reel-jpso8-19', 'foam-fire-hydrant-cabinet-psg30', 'indoor-fire-hydrant-head-sn65', 'fire-hydrant-hose-coupling-adapter-hs'],
    relatedTags: ['fire-protection', 'fire-hydrant']
  },
  {
    slug: 'certification',
    name: 'Certification & Compliance',
    seoTitle: 'UL, FM, CE Valve Certification Guide | Wanlian Fluid',
    description: 'Understanding UL/FM/CE/LPCB certification for fire valves and hydrants, verifying genuine certificates, and compliance requirements for export markets.',
    guideHrefs: ['/guides/how-to-choose-ul-listed-fire-valves/', '/guides/b2b-valve-sourcing-checklist/', '/guides/how-to-verify-chinese-valve-supplier/'],
    productSlugs: [],
    relatedTags: ['fire-protection', 'procurement']
  },
  {
    slug: 'procurement',
    name: 'B2B Procurement',
    seoTitle: 'B2B Valve & Fire Equipment Sourcing Checklist | Wanlian Fluid',
    description: 'Factory verification, certificate checking, batch test reports, sample policies and red flags when sourcing valves and fire protection equipment from China.',
    guideHrefs: ['/guides/b2b-valve-sourcing-checklist/', '/guides/how-to-choose-a-fire-hydrant/', '/guides/wanlian-fluid-vs-american-avk/', '/guides/how-to-verify-chinese-valve-supplier/', '/guides/fire-hydrant-valve-standards-guide/'],
    productSlugs: [],
    relatedTags: ['certification', 'industrial-valves']
  },
  {
    slug: 'bellows-seal-gate-valve',
    name: 'Bellows Seal Gate Valves',
    seoTitle: 'Bellows Seal Gate Valves for Steam & Thermal Oil | Wanlian Fluid',
    description: 'Metal bellows seal gate valves with double sealing for steam, thermal oil and high-temperature water service — ANSI flanged types for fugitive-emission-critical industrial lines.',
    guideHrefs: ['/guides/bellows-seal-gate-valve-guide/'],
    productSlugs: ['flange-manual-bellows-gate-valve'],
    relatedTags: ['industrial-valves', 'procurement']
  }
];
