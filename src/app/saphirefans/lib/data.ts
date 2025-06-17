
import type { SaphireCategory, SaphireProduct } from '../types';

export const saphireCategories: SaphireCategory[] = [
  {
    id: '1',
    slug: 'axial-flow-fans',
    name: 'Axial Flow Fans',
    imageUrl: 'https://placehold.co/400x300.png?text=Axial+Fan',
    dataAiHint: 'axial fan industrial',
    description: 'High-efficiency axial fans for ventilation, cooling, and air circulation in industrial settings across Pakistan.'
  },
  {
    id: '2',
    slug: 'centrifugal-fans',
    name: 'Centrifugal Fans',
    imageUrl: 'https://placehold.co/400x300.png?text=Centrifugal+Fan',
    dataAiHint: 'centrifugal fan blower',
    description: 'Robust centrifugal fans designed for high-pressure applications, material handling, and exhaust systems in Pakistani industries.'
  },
  {
    id: '3',
    slug: 'exhaust-fans',
    name: 'Industrial Exhaust Fans',
    imageUrl: 'https://placehold.co/400x300.png?text=Exhaust+Fan',
    dataAiHint: 'industrial exhaust fan',
    description: 'Powerful exhaust fans to remove fumes, smoke, and pollutants from factories, workshops, and commercial kitchens in Pakistan.'
  },
  {
    id: '4',
    slug: 'pedestal-fans',
    name: 'Heavy Duty Pedestal Fans',
    imageUrl: 'https://placehold.co/400x300.png?text=Pedestal+Fan',
    dataAiHint: 'industrial pedestal fan',
    description: 'Durable and high-performance pedestal fans for effective air circulation in large industrial spaces and warehouses in Pakistan.'
  }
];

export const saphireProducts: SaphireProduct[] = [
  // Axial Flow Fans
  {
    id: 'axial-001',
    slug: 'heavy-duty-axial-fan-x100',
    name: 'Heavy Duty Axial Fan X100',
    categorySlug: 'axial-flow-fans',
    shortDescription: 'Powerful 3-blade axial fan for large volume air movement.',
    longDescription: 'The X100 model is engineered for maximum airflow in demanding industrial environments. Its robust construction ensures durability and long-lasting performance. Ideal for warehouses, factories, and large workshops in Pakistan requiring efficient ventilation.',
    price: 25000, // PKR
    imageUrl: 'https://placehold.co/600x400.png?text=Axial+X100',
    images: ['https://placehold.co/600x400.png?text=Axial+X100+Side', 'https://placehold.co/600x400.png?text=Axial+X100+Detail'],
    dataAiHint: 'axial fan motor',
    specifications: [
      { name: 'Model', value: 'X100' },
      { name: 'Diameter', value: '600mm' },
      { name: 'Power', value: '0.75 kW' },
      { name: 'Airflow', value: '9000 m³/h' },
      { name: 'Voltage', value: '380V (Pakistan Standard)' },
    ],
    features: ['Energy Efficient Motor', 'Corrosion Resistant Blades', 'Low Noise Operation'],
    availability: 'In Stock',
    sku: 'SF-AX-X100'
  },
  {
    id: 'axial-002',
    slug: 'compact-axial-ventilator-cv20',
    name: 'Compact Axial Ventilator CV20',
    categorySlug: 'axial-flow-fans',
    shortDescription: 'Space-saving design for targeted ventilation.',
    longDescription: 'The CV20 offers effective ventilation in confined spaces. Its compact design makes it suitable for integration into machinery or smaller rooms. Built for reliability in Pakistani industrial conditions.',
    price: 18500,
    imageUrl: 'https://placehold.co/600x400.png?text=Axial+CV20',
    dataAiHint: 'small axial fan',
    specifications: [
      { name: 'Model', value: 'CV20' },
      { name: 'Diameter', value: '350mm' },
      { name: 'Power', value: '0.37 kW' },
      { name: 'Airflow', value: '3500 m³/h' },
      { name: 'Voltage', value: '220V/380V (Pakistan Standard)' },
    ],
    features: ['Direct Drive', 'Steel Casing', 'Easy Installation'],
    availability: 'In Stock',
    sku: 'SF-AX-CV20'
  },
  // Centrifugal Fans
  {
    id: 'cent-001',
    slug: 'high-pressure-centrifugal-blower-hpb50',
    name: 'High-Pressure Centrifugal Blower HPB50',
    categorySlug: 'centrifugal-fans',
    shortDescription: 'Designed for high static pressure applications.',
    longDescription: 'The HPB50 centrifugal blower is ideal for systems requiring high pressure, such as dust collection, pneumatic conveying, and industrial drying processes. Robustly built for continuous operation in Pakistani industries.',
    price: 45000,
    imageUrl: 'https://placehold.co/600x400.png?text=Centrifugal+HPB50',
    dataAiHint: 'centrifugal blower industrial',
    specifications: [
      { name: 'Model', value: 'HPB50' },
      { name: 'Type', value: 'Backward Curved' },
      { name: 'Pressure', value: 'Up to 3000 Pa' },
      { name: 'Power', value: '2.2 kW' },
      { name: 'Voltage', value: '380V (Pakistan Standard)' },
    ],
    features: ['Heavy Gauge Steel Construction', 'Dynamically Balanced Impeller', 'Multiple Discharge Positions'],
    availability: 'In Stock',
    sku: 'SF-CE-HPB50'
  },
  {
    id: 'cent-002',
    slug: 'material-handling-fan-mhf30',
    name: 'Material Handling Fan MHF30',
    categorySlug: 'centrifugal-fans',
    shortDescription: 'Robust fan for conveying light materials.',
    longDescription: 'The MHF30 is built to handle the passage of light, non-abrasive materials such as sawdust, wood chips, or textile fibers. A workhorse for relevant industries in Pakistan.',
    price: 38000,
    imageUrl: 'https://placehold.co/600x400.png?text=Centrifugal+MHF30',
    dataAiHint: 'material handling fan',
    specifications: [
      { name: 'Model', value: 'MHF30' },
      { name: 'Type', value: 'Radial Blade' },
      { name: 'Capacity', value: 'Up to 5000 m³/h' },
      { name: 'Power', value: '1.5 kW' },
      { name: 'Voltage', value: '380V (Pakistan Standard)' },
    ],
    features: ['Abrasion-Resistant Options', 'Self-Cleaning Impeller Design', 'Durable Housing'],
    availability: 'In Stock',
    sku: 'SF-CE-MHF30'
  },
  // Exhaust Fans
  {
    id: 'exh-001',
    slug: 'industrial-wall-exhaust-fan-wex40',
    name: 'Industrial Wall Exhaust Fan WEX40',
    categorySlug: 'exhaust-fans',
    shortDescription: 'High-volume exhaust for factories and workshops.',
    longDescription: 'The WEX40 is designed for effective removal of stale air, fumes, and heat from large industrial spaces. Easy to install on walls, it provides essential ventilation for a healthier work environment in Pakistan.',
    price: 22000,
    imageUrl: 'https://placehold.co/600x400.png?text=Exhaust+WEX40',
    dataAiHint: 'wall exhaust fan',
    specifications: [
      { name: 'Model', value: 'WEX40' },
      { name: 'Size', value: '400mm x 400mm' },
      { name: 'Airflow', value: '4500 m³/h' },
      { name: 'Power', value: '0.55 kW' },
      { name: 'Voltage', value: '220V/380V (Pakistan Standard)' },
    ],
    features: ['Automatic Shutters', 'Weatherproof Casing', 'Quiet Operation'],
    availability: 'In Stock',
    sku: 'SF-EX-WEX40'
  },
  {
    id: 'exh-002',
    slug: 'roof-mounted-exhaust-ventilator-rmv60',
    name: 'Roof Mounted Exhaust Ventilator RMV60',
    categorySlug: 'exhaust-fans',
    shortDescription: 'Efficiently removes hot air and pollutants from rooftops.',
    longDescription: 'The RMV60 is ideal for commercial and industrial buildings in Pakistan requiring effective roof ventilation. It helps maintain optimal indoor air quality by expelling heat, smoke, and fumes.',
    price: 32000,
    imageUrl: 'https://placehold.co/600x400.png?text=Exhaust+RMV60',
    dataAiHint: 'roof exhaust fan',
    specifications: [
      { name: 'Model', value: 'RMV60' },
      { name: 'Throat Diameter', value: '600mm' },
      { name: 'Airflow', value: '7000 m³/h' },
      { name: 'Power', value: '0.75 kW' },
      { name: 'Material', value: 'Galvanized Steel' },
    ],
    features: ['Bird Screen Included', 'Low Profile Design', 'Suitable for Flat or Sloped Roofs'],
    availability: 'In Stock',
    sku: 'SF-EX-RMV60'
  },
  // Pedestal Fans
  {
    id: 'ped-001',
    slug: 'heavy-duty-pedestal-fan-pdf750',
    name: 'Heavy Duty Pedestal Fan PDF750',
    categorySlug: 'pedestal-fans',
    shortDescription: 'Large diameter fan for maximum air circulation.',
    longDescription: 'The PDF750 is a robust pedestal fan designed for cooling large industrial areas, warehouses, and workshops in Pakistan. Features adjustable height and tilt for targeted airflow.',
    price: 15000,
    imageUrl: 'https://placehold.co/600x400.png?text=Pedestal+PDF750',
    dataAiHint: 'large pedestal fan',
    specifications: [
      { name: 'Model', value: 'PDF750' },
      { name: 'Blade Diameter', value: '750mm (30 inch)' },
      { name: 'Speeds', value: '3-Speed Control' },
      { name: 'Oscillation', value: 'Yes' },
      { name: 'Motor', value: 'Heavy Duty Copper Motor' },
    ],
    features: ['Sturdy Base', 'Adjustable Height & Tilt', 'Safety Grill'],
    availability: 'In Stock',
    sku: 'SF-PD-PDF750'
  },
  {
    id: 'ped-002',
    slug: 'industrial-oscillating-pedestal-fan-iop600',
    name: 'Industrial Oscillating Pedestal Fan IOP600',
    categorySlug: 'pedestal-fans',
    shortDescription: 'Reliable oscillating fan for widespread cooling.',
    longDescription: 'The IOP600 provides consistent and widespread air circulation, making it suitable for medium to large industrial spaces in Pakistan. Its oscillating feature ensures broader coverage.',
    price: 12500,
    imageUrl: 'https://placehold.co/600x400.png?text=Pedestal+IOP600',
    dataAiHint: 'oscillating pedestal fan',
    specifications: [
      { name: 'Model', value: 'IOP600' },
      { name: 'Blade Diameter', value: '600mm (24 inch)' },
      { name: 'Speeds', value: '3-Speed Control' },
      { name: 'Oscillation', value: '90-degree' },
      { name: 'Power', value: '150W' },
    ],
    features: ['Durable Construction', 'Weighted Base for Stability', 'Easy to Assemble'],
    availability: 'In Stock',
    sku: 'SF-PD-IOP600'
  },
];

export const getProductBySlug = (slug: string): SaphireProduct | undefined => {
  return saphireProducts.find(p => p.slug === slug);
};

export const getProductsByCategory = (categorySlug: string): SaphireProduct[] => {
  return saphireProducts.filter(p => p.categorySlug === categorySlug);
};

export const getCategoryBySlug = (slug: string): SaphireCategory | undefined => {
  return saphireCategories.find(c => c.slug === slug);
};
