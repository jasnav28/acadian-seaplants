export const GAZETTE = '12th September, 2024 S.O. 3922(E)';

export const PRODUCTS = [
  {
    brand: 'S-Root',
    displayName: 'Rich+ Humic BIO-VITA',
    specification: 'Mixture of Humic Acid, Amino Acid, Vitamins and Bio-chemicals (powder)',
    category: 'Mixed Formulations',
    crops: ['Okra'],
    dosage: ['Two soil applications at 250g/ha.'],
    gazette: '12th September, 2024 S.O. 3922(E)',
    manufacturedBy: {
      company: 'Richplus Sustainable Solutions Private Limited',
      address: '32/54, Flat No.5, Sreyas Chapakam Apartments, Abiramapuram, 3rd Street, Teynampet, Chennai-600018'
    },
    marketedBy: {
      company: 'Richplus Sustainable Solutions Private Limited',
      address: 'Ward No.6, Near A3 Hostel Raagini, Vinoba Nagara, Kolar, Kolar District, Karnataka-563101',
      phone: '9444422444',
      email: 'ashok@richplusindia.com'
    },
    composition: [
      '(i) Humic Acid per cent. by weight, minimum 30',
      '(ii) Amino Acid (Glycine) per cent. by weight, minimum 7',
      '(iii) Myoinositol per cent. by weight, minimum 2',
      '(iv) Vitamin C per cent by weight, minimum 12.0',
      '(v) Vitamin E per cent by weight, minimum 0.2',
      '(vi) pH (1% aqueous solution) 5.0 – 6.5',
      '(vii) Total organic carbon per cent by weight, minimum 25'
    ]
  }
];

export const SLUG_TO_BRAND = {
  'S-Root': 'S-Root',
  's-root': 'S-Root',
  'S-root': 'S-Root'
};

export function findProductBySlug(slug) {
  return PRODUCTS[0];
}

export function findProductByBrand(brand) {
  return PRODUCTS[0];
}
