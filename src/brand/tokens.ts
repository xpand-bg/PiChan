export const pichanBrand = {
  version: '1.0',
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
} as const;

export type PiChanBrand = typeof pichanBrand;
