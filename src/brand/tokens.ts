export const pichanBrand = {
  version: '1.1',
  logoMasterVersion: '2.0',
  status: 'locked',
  colors: {
    navy: '#041F5F',
    cyan: '#12B6F6',
    royal: '#153FE9',
    white: '#FFFFFF',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    border: '#E5E7EB',
    muted: '#6B7280',
    surface: '#0B1220',
  },
  gradient: {
    css: 'linear-gradient(90deg, #153FE9 0%, #12B6F6 100%)',
    from: '#153FE9',
    to: '#12B6F6',
  },
  typography: {
    primary: 'Plus Jakarta Sans',
    mono: 'JetBrains Mono',
  },
  messaging: {
    tagline: 'See what others miss.',
    positioning: 'Onchain intelligence & market discovery.',
    personality: 'PiChan is watching.',
    community: 'PiChan | The Flock',
  },
  identity: {
    birdMaster: 'brand/vector/PiChan_Icon_Master.svg',
    birdDirection: 'Curious PiChan / Concept B — final refinement',
    wordmarkChanged: false,
    singleMasterGeometry: true,
  },
  assets: {
    icon: 'brand/vector/PiChan_Icon_Master.svg',
    iconLight: 'brand/vector/PiChan_Icon_LightBG_Keyline.svg',
    badge: 'brand/vector/PiChan_Circular_Badge.svg',
    appIcon: 'brand/vector/PiChan_App_Icon.svg',
    primaryLight: 'brand/vector/PiChan_Primary_Horizontal_LightBG.svg',
    primaryDark: 'brand/vector/PiChan_Primary_Horizontal_DarkBG.svg',
    stackedLight: 'brand/vector/PiChan_Secondary_Stacked_LightBG.svg',
    stackedDark: 'brand/vector/PiChan_Secondary_Stacked_DarkBG.svg',
  },
} as const;

export type PiChanBrand = typeof pichanBrand;
