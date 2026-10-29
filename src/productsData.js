export const GAZETTE_AUG25 = '13th August, 2025 S.O. 3741(E).';
export const GAZETTE_MAR26 = '25th March, 2026 S.O. 1574(E)';

const MANUFACTURER = {
  company: 'Acadian Seaplants India Private Limited',
  address: 'Shed No.5,Unit 5,Survey No.546/547,\nAt & Post:Moxi,Savli,Dist.Vadodara,Gujarat-391780'
};

const MARKETER = {
  company: 'Acadian Seaplants India Private Limited',
  address: 'Site No.16,Khata No.102/1 & 103/2,\n1st Cross,Raju Sangappa Layout,ward No.15,\nBehind MRPL Petrol Bunk,Tadagani,Shiralakoppa,\nShivamogga District,Karnataka-577428',
  phone: '9740632061',
  email: 'skumar@acadian.ca'
};

export const PRODUCTS = [
  {
    brand: 'PROMOCEAN',
    displayName: 'PROMOCEAN',
    specification: 'Ascophyllum nodosum 98% (liquid)',
    category: 'Seaweed Extract',
    gazette: GAZETTE_AUG25,
    crops: ['Potato'],
    dosage: ['Two foliar sprays at 1250 ml/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Seaweed (Ascophyllum nodosum) liquid extract per cent. by  weight, minimum 98',
      '(ii) Blend of nitric and phosphoric acid in ratio of 3:2 per cent. by weight, minimum 1.6',
      '(iii) Potassium sorbate 0.4',
      '(iv) Total (per cent.) 100'
    ]
  },
  {
    brand: 'SOLIGRO GR',
    displayName: 'SOLIGRO GR',
    specification: 'Seaweed (Ascophyllum nodosum) extract 10% (Granule)',
    category: 'Seaweed Extract',
    gazette: GAZETTE_MAR26,
    crops: ['Rice'],
    dosage: ['One soil application at 10 kg/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Seaweed (Ascophyllum nodosum) extract per cent. by weight, minimum 10.00',
      '(ii) Dolomite granules per cent. by weight, maximum 90.00',
      '(iii) Total (per cent.) 100'
    ]
  },
  {
    brand: 'ACADIAN GOLDSTAR',
    displayName: 'ACADIAN GOLDSTAR',
    specification: 'Seaweed (Ascophyllum nodosum) extract 100% (Powder)',
    category: 'Seaweed Extract',
    gazette: GAZETTE_MAR26,
    crops: ['Tomato'],
    dosage: ['Three foliar applications at 0.75 kg/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Seaweed (Ascophyllum nodosum) extract powder per cent. by weight, minimum 100',
      '(ii) Total (per cent.) 100'
    ]
  },
  {
    brand: 'STIMPLEX',
    displayName: 'STIMPLEX',
    specification: 'Seaweed (Ascophyllum nodosum) extract 99.4% (Liquid)',
    category: 'Seaweed Extract',
    gazette: GAZETTE_MAR26,
    crops: ['Chilli'],
    dosage: ['Three foliar applications at 2.0 litre/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Seaweed (Ascophyllum nodosum) extract liquid per cent. by weight, minimum 99.4',
      '(ii) Methyl p- hydroxybenzoate per cent. by weight, maximum 0.30',
      '(iii) Propyl p- hydroxybenzoate per cent. by weight, maximum 0.06',
      '(iv) 2- Propanol per cent. by weight, maximum 0.15',
      '(v) Sodium hydroxide per cent. by weight, maximum 0.09',
      '(vi) Total (per cent.) 100'
    ]
  }
];

export function findProductBySlug(slug) {
  if (!slug) return PRODUCTS[0];
  const decoded = decodeURIComponent(slug).trim();
  const lowerDecoded = decoded.toLowerCase();

  // 1. Exact match by displayName or brand (case-insensitive)
  const exactMatch = PRODUCTS.find(
    p => p.displayName === decoded ||
         p.displayName.toLowerCase() === lowerDecoded ||
         p.brand === decoded ||
         p.brand.toLowerCase() === lowerDecoded
  );
  if (exactMatch) return exactMatch;

  // 2. Match ignoring spaces, hyphens, and non-alphanumerics
  // e.g. "soligro-gr" -> "SOLIGRO GR", "acadian-goldstar" -> "ACADIAN GOLDSTAR"
  const normTarget = lowerDecoded.replace(/[^a-z0-9]/g, '');
  const flexibleMatch = PRODUCTS.find(p => {
    const normDisp = (p.displayName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const normBrand = (p.brand || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return normDisp === normTarget || normBrand === normTarget;
  });
  if (flexibleMatch) return flexibleMatch;

  // Fallback to first product
  return PRODUCTS[0];
}

export function findProductByBrand(brand) {
  if (!brand) return PRODUCTS[0];
  return PRODUCTS.find(p => p.brand === brand || p.displayName === brand) || PRODUCTS[0];
}
