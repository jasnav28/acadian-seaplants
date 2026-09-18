export const GAZETTE_DEFAULT = '12th September, 2024 S.O. 3922(E)';
export const GAZETTE_AUG25  = '13th August, 2025 S.O. 3741(E)';
export const GAZETTE_MAY25  = '26th May, 2025 S.O. 2346(E)';
export const GAZETTE_FEB26  = '16th February, 2026 S.O. 876(E)';

const MANUFACTURER = {
  company: 'Richplus Sustainable Solutions Private Limited',
  address: '32/54, Flat No.5, Sreyas Chapakam Apartments, Abiramapuram, 3rd Street, Teynampet, Chennai-600018'
};

const MARKETER = {
  company: 'Richplus Sustainable Solutions Private Limited',
  address: 'Ward No.6, Near A3 Hostel Raagini, Vinoba Nagara, Kolar, Kolar District, Karnataka-563101',
  phone: '9444422444',
  email: 'ashok@richplusindia.com'
};

export const PRODUCTS = [
  {
    brand: 'S-Root',
    displayName: 'Rich+ Humic BIO-VITA',
    specification: 'Mixture of Humic Acid, Amino Acid, Vitamins and Bio-chemicals (powder)',
    category: 'Mixed Formulations',
    gazette: GAZETTE_DEFAULT,
    crops: ['Okra'],
    dosage: ['Two soil applications at 250g/ha.'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Humic Acid per cent. by weight, minimum 30',
      '(ii) Amino Acid (Glycine) per cent. by weight, minimum 7',
      '(iii) Myoinositol per cent. by weight, minimum 2',
      '(iv) Vitamin C per cent by weight, minimum 12.0',
      '(v) Vitamin E per cent by weight, minimum 0.2',
      '(vi) pH (1% aqueous solution) 5.0 – 6.5',
      '(vii) Total organic carbon per cent by weight, minimum 25'
    ]
  },
  {
    brand: 'S-SoilKing',
    displayName: 'Rich+ SOIL KING',
    specification: 'Mixture of Seaweed extract, Protein Hydrolysate and Humic acid (Granule)',
    category: 'Mixed Formulations',
    gazette: '',
    crops: ['Onion', 'Paddy', 'Potato'],
    dosage: [
      'Onion : Two soil applications at 10 kg/ha',
      'Paddy : Two soil applications at 10 kg/ha',
      'Potato : Two soil applications at 10 kg/ha'
    ],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Seaweed extract (Ascophyllum nodosum) per cent. by weight, maximum 0.5',
      '(ii) Protein hydrolysate derived from defatted soy flour by enzymatic (papain) hydrolysis per cent. by weight, minimum 0.5',
      '(iii) Humic acid (source: Leonardite) per cent. by weight, minimum 0.02',
      '(iv) Polysorbate 80 per cent. by weight, minimum 0.05',
      '(v) Bentonite granules per cent. by weight QS',
      '(vi) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-LeafGuard',
    displayName: 'Rich+ LEAF GUARD',
    specification: 'Adhatoda vasica extract 2% (Liquid)',
    category: 'Botanical Extract',
    gazette: GAZETTE_AUG25,
    crops: ['Chilli', 'Tomato'],
    dosage: [
      'Chilli : Three foliar applications at 1000 ml/ha',
      'Tomato : Three foliar applications at 1250 ml/ha'
    ],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Plant extract (Adhatoda vasica) per cent. by weight, minimum 2.0',
      '(ii) Adjuvant (Polyoxyethylene sorbitan trioleate) per cent. by weight, minimum 50',
      '(iii) Vegetable (soybean) oil per cent. by weight 48.0',
      '(iv) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-CropShield',
    displayName: 'Rich+ CROP SHIELD',
    specification: 'Brassica juncea seed extract– 0.2% (Liquid)',
    category: 'Botanical Extract',
    gazette: GAZETTE_AUG25,
    crops: ['Cucumber'],
    dosage: ['Three foliar applications at 750 ml/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Brassica juncea seed extract per cent. by weight, minimum 0.2',
      '(ii) Iso propyl alcohol per cent. by volume 50',
      '(iii) Water per cent. by weight 49.98',
      '(iv) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-Cytomax',
    displayName: 'Rich+ CYTOMAX',
    specification: 'Cytokinin (Zea mays kernel) 0.2% (Liquid)',
    category: 'Botanical Extract',
    gazette: GAZETTE_AUG25,
    crops: ['Capsicum'],
    dosage: ['Three foliar applications at 750 ml/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Cytokinin (Source: Zea mays kernel) per cent. weight by volume, minimum 0.02',
      '(ii) Potassium sorbate per cent. weight by volume, minimum 0.001',
      '(iii) Demineralized aqua per cent. by weight QS',
      '(iv) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-Prozyme25',
    displayName: 'Rich+ PROZYME 25',
    specification: 'Protein hydrolysate 25% (Plant Source) (Liquid)',
    category: 'Protein Hydrolysates and Amino Acids',
    gazette: GAZETTE_MAY25,
    crops: ['Green gram'],
    dosage: ['Two foliar applications at 1.25 l/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Protein hydrolysates derived from Glycine max and Zea mays in ratio of 5.5:4.5 through enzymatic (food grade Alcalase) hydrolysis per cent. by weight, minimum 25',
      '(ii) Water per cent. by weight QS',
      '(iii) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-GlutaVita',
    displayName: 'Rich+ GLUTA VITA',
    specification: 'Vinasse residue (Glutamic acid 18%) (Liquid)',
    category: 'Protein Hydrolysates and Amino Acids',
    gazette: GAZETTE_MAY25,
    crops: ['Green gram'],
    dosage: ['Two foliar applications at 50 ml/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Vinasse, residue of fermentation per cent. by weight, minimum 65',
      '(ii) Water per cent. by weight QS',
      '(iii) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-Prozyme17',
    displayName: 'Rich+ PROZYME 17',
    specification: 'Protein hydrolysate 16.9% (Plant Source) (Liquid)',
    category: 'Protein Hydrolysates and Amino Acids',
    gazette: GAZETTE_MAY25,
    crops: ['Green gram'],
    dosage: ['Two foliar applications at 1.5 l/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Protein hydrolysate from seeds of Glycine max and Zea mays in ratio of 5.5:4.5 through enzymatic (food grade Alcalase) per cent. by weight, minimum 16.90',
      '(ii) Potassium sorbate and Vegetable base fatty acid per cent. by weight, minimum 21.00',
      '(iii) Water per cent. by weight QS',
      '(iv) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-BioAmino',
    displayName: 'Rich+ BIOAMINO+',
    specification: 'Bacterial biomass hydrolysate (Amino acids 2%) (Liquid)',
    category: 'Protein Hydrolysates and Amino Acids',
    gazette: GAZETTE_MAY25,
    crops: ['Grape', 'Chilli', 'Soyabean', 'Cotton'],
    dosage: [
      'Grape : Four foliar sprays at 1.25 l/ha to 2.0 l/ha depending on canopy size',
      'Chilli : Three foliar applications at 3.75 l/ha',
      'Soyabean : Three foliar applications at 2.5 l/ha',
      'Cotton : Three foliar applications at 2.5 l/ha'
    ],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Amino acids derived from enzymatic (Alkaline Protease) hydrolysis of bacterial biomass (Methylococcus capsulatus) per cent. by weight, minimum 2',
      '(ii) Water per cent. by weight QS',
      '(iii) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-SoilProG',
    displayName: 'Rich+ SOIL PRO G',
    specification: 'Protein hydrolysate 1.5% (Plant Source) (Granules)',
    category: 'Protein Hydrolysates and Amino Acids',
    gazette: '',
    crops: ['Tomato'],
    dosage: ['Two soil applications at 40 kg/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Protein hydrolysate derived from defatted soybean seed flour by enzymatic (Papain) hydrolysis per cent. by weight, minimum 1.5',
      '(ii) Bentonite per cent. by weight, maximum 98.5',
      '(iii) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-AminoBlast5',
    displayName: 'Rich+ AMINO BLAST 5',
    specification: 'Protein hydrolysate (Amino acids 5%) (Plant source) (Powder)',
    category: 'Protein Hydrolysates and Amino Acids',
    gazette: GAZETTE_MAY25,
    crops: ['Tomato'],
    dosage: ['Three foliar applications at 2.5 kg/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Amino acids derived from maize seeds/grains (starch removed gluten through acid hydrolysis) per cent. by weight, minimum 5',
      '(ii) Polysorbate 80 per cent. weight by volume, minimum 5',
      '(iii) pH Regulators Potassium Carbonate / Potassium Hydroxide per cent. weight by volume, minimum 5',
      '(iv) Bentonite per cent. by weight, maximum 85',
      '(v) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-Prozyme20',
    displayName: 'Rich+ PROZYME 20',
    specification: 'Protein hydrolysate (Amino acids 20%) (Plant source) (Liquid)',
    category: 'Protein Hydrolysates and Amino Acids',
    gazette: GAZETTE_MAY25,
    crops: ['Soyabean'],
    dosage: ['Two foliar applications at 2 l/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Protein hydrolysate (Microbial fermentation) per cent. by weight, minimum — a. sugarbeet molasses 87.1 and b. corn/wheat glucose syrups 12.4',
      '(ii) Octhilinone as preservatives per cent. by weight, minimum 0.3',
      '(iii) Polysiloxanes as antifoam agent per cent. by weight, minimum 0.2',
      '(iv) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-SeedPro27',
    displayName: 'Rich+ SEED PRO 27',
    specification: 'Protein hydrolysate 27% (Plant Source) (Powder)',
    category: 'Protein Hydrolysates and Amino Acids',
    gazette: GAZETTE_MAY25,
    crops: ['Paddy'],
    dosage: ['Seed treatment before sowing at 3.0 g/kg seed'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Soy flour per cent. by weight, minimum 27',
      '(ii) Enzymes [Protease 2% (400U/g) + Amylase 1% (80U/g)] per cent. by weight, minimum 3',
      '(iii) Diatomaceous Earth powder per cent. by weight, maximum 70',
      '(iv) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-Pro20Plus',
    displayName: 'Rich+ PRO 20 PLUS',
    specification: 'Protein Hydrolysate 20% (Plant source) (Liquid)',
    category: 'Protein Hydrolysates and Amino Acids',
    gazette: '',
    crops: ['Okra'],
    dosage: ['Three foliar applications at 900 g/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Protein hydrolysate derived from soybean through acid hydrolysis per cent. by weight, minimum 20',
      '(ii) Diethylene Glycol per cent. by weight, minimum 8',
      '(iii) Xanthum gum per cent. by weight, minimum 8',
      '(iv) Surfactant (Envipol 3010) per cent. by weight, minimum 5',
      '(v) Citric acid per cent. by weight, minimum 2',
      '(vi) Water per cent. by weight QS',
      '(vii) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-Amino14Plus',
    displayName: 'Rich+ AMINO 14 PLUS',
    specification: 'Amino acids (microbial source) 14% (Liquid)',
    category: 'Protein Hydrolysates and Amino Acids',
    gazette: GAZETTE_AUG25,
    crops: ['Soybean', 'Paddy'],
    dosage: [
      'Soybean : Two foliar applications at 625 ml/ha',
      'Paddy : Two foliar applications at 625 ml/ha'
    ],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Amino acids (Source: Microbe – Corynebacterium glutamicum) per cent. by weight, minimum 14',
      '(ii) Water per cent. by weight, maximum 86',
      '(iii) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-Amino40Max',
    displayName: 'Rich+ AMINO 40 MAX',
    specification: 'Amino acids (microbial source) 40% (Powder)',
    category: 'Protein Hydrolysates and Amino Acids',
    gazette: '',
    crops: ['Soybean', 'Chilli'],
    dosage: [
      'Soybean : Two foliar applications at 625 gram/ha',
      'Chilli : Two foliar applications at 625 gram/ha'
    ],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Amino acids (Source: Microbe – Corynebacterium glutamicum) per cent. by weight, minimum 40',
      '(ii) Maltodextrin per cent. by weight 50',
      '(iii) Precipitated Silica (as anti-caking agent) per cent. by weight 5',
      '(iv) Moisture per cent. by weight 5',
      '(v) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-FloriBloom',
    displayName: 'Rich+ FLORI-BLOOM',
    specification: 'Homobrassinolide- 0.04% (Liquid)',
    category: 'Biochemicals',
    gazette: GAZETTE_AUG25,
    crops: ['Tea', 'Grape', 'Groundnut', 'Soybean', 'Paddy', 'Cotton', 'Tomato'],
    dosage: [
      'Tea : Three foliar applications at 250 ml/ha',
      'Grape : Two foliar applications at 1000 ml/ha',
      'Groundnut : Two foliar applications at 250 ml/ha',
      'Soybean : Two foliar applications at 250 ml/ha',
      'Paddy : Two foliar applications at 250 ml/ha',
      'Cotton : Two foliar applications at 250 ml/ha',
      'Tomato : Two foliar applications at 250 ml/ha'
    ],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Homobrassinolide (Source: Synthetic) per cent. by weight, minimum 0.04',
      '(ii) Polysorbate 20 as adjuvant per cent. by weight, minimum 2.00',
      '(iii) 4-Nonylphenol ethoxylated per cent. by weight, minimum 2.00',
      '(iv) Isopropyl alcohol per cent. by weight QS',
      '(v) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-VitaB3Boost',
    displayName: 'Rich+ VITA B3 BOOST',
    specification: 'Vitamin B3 (Nicotinamide) 3.25% (Liquid)',
    category: 'Vitamins',
    gazette: GAZETTE_AUG25,
    crops: ['Tomato'],
    dosage: ['Two foliar applications at 12.5 ml/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Vitamin B3 – Niacinamide (Nicotinamide) (synthetic) per cent. by weight, minimum 3.25',
      '(ii) Emulsifier (Nonyl Phenol Ethoxylate) per cent. by weight, minimum 16.75',
      '(iii) Solvent (Dimethyl sulfoxide) per cent. by weight, minimum 80',
      '(iv) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-CropVita',
    displayName: 'Rich+ CROPVITA',
    specification: 'Vitamin (Alpha Tocopherol) 1% (Liquid)',
    category: 'Vitamins',
    gazette: GAZETTE_AUG25,
    crops: ['Chilli'],
    dosage: ['Three foliar applications at 1000 ml/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Alpha tocopherol (Vitamin-E) (Source: Sunflower Oil) per cent. by weight, minimum 1',
      '(ii) Tween 80 per cent. by weight, minimum 6',
      '(iii) Cottonseed oil per cent. by weight, minimum 93',
      '(iv) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-KelpPlus',
    displayName: 'Kelp Plus',
    specification: 'Mixture of seaweed extract and algal extract (Liquid)',
    category: 'Mixed Formulations',
    gazette: GAZETTE_MAY25,
    crops: ['Brinjal'],
    dosage: ['Two foliar applications at 500 mL/ha'],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Sargassum wightii extract per cent. weight by volume, minimum 2.2',
      '(ii) Arthrospira platensis extract per cent. weight by volume, minimum 3.3',
      '(iii) Water per cent. by weight QS',
      '(iv) Total (per cent.) 100'
    ]
  },
  {
    brand: 'S-Profert',
    displayName: 'Profert',
    specification: 'Protein hydrolysate 18% (Plant source) (Liquid)',
    category: 'Protein Hydrolysates and Amino Acids',
    gazette: GAZETTE_FEB26,
    crops: ['Paddy', 'Chilli', 'Tomato', 'Grape', 'Cotton', 'Blackgram'],
    dosage: [
      'Paddy : Two foliar applications at 1200 ml/ha',
      'Chilli : Four foliar applications at 1000 ml/ha',
      'Tomato : Three foliar applications at 1000 ml/ha',
      'Grape : Two foliar applications at 1000 ml/ha',
      'Cotton : One foliar application at 625 ml/ha',
      'Black gram : Three foliar applications at 750 ml/ha'
    ],
    manufacturedBy: MANUFACTURER,
    marketedBy: MARKETER,
    composition: [
      '(i) Protein hydrolysate derived through combination of enzymatic (Exo and endo proteases) and mild acid (HCl) hydrolysis of maize and soybean seed protein (9:1 ratio) per cent. by weight, minimum 18',
      '(ii) Water per cent. by weight 82',
      '(iii) Total (per cent.) 100'
    ]
  }
];

export function findProductBySlug(slug) {
  if (!slug) return PRODUCTS[0];
  const decoded = decodeURIComponent(slug).trim();
  const lowerDecoded = decoded.toLowerCase();

  // Match by exact displayName or case-insensitive
  const byDisplay = PRODUCTS.find(
    p => p.displayName === decoded || p.displayName.toLowerCase() === lowerDecoded
  );
  if (byDisplay) return byDisplay;

  // Match by brand slug (fallback / backward compat)
  const byBrand = PRODUCTS.find(
    p => p.brand === decoded || p.brand.toLowerCase() === lowerDecoded
  );
  if (byBrand) return byBrand;

  // Flexible match ignoring non-alphanumeric (e.g. kelp-plus -> Kelp Plus, Rich+ Kelp Plus)
  const normTarget = lowerDecoded.replace(/[^a-z0-9]/g, '');
  const byFlexible = PRODUCTS.find(p => {
    const normDisp = (p.displayName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    const normBrand = (p.brand || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return normDisp === normTarget || normBrand === normTarget;
  });
  if (byFlexible) return byFlexible;

  // Default to first product
  return PRODUCTS[0];
}

export function findProductByBrand(brand) {
  return PRODUCTS.find(p => p.brand === brand) || PRODUCTS[0];
}

