export interface RouteItem {
  id: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  busType: string;
  category: 'AC Sleeper' | 'Non-AC Sleeper' | 'Luxury Coach';
  distance?: string;
  via: string[];
  boardingHighlights: string[];
  droppingHighlights: string[];
  primaryPhone: string;
  secondaryPhone: string;
  notes?: string;
}

export interface BoardingPoint {
  id: string;
  name: string;
  area: string;
  city: string;
  type: 'Boarding' | 'Dropping' | 'Both';
  landmark?: string;
  mapSearchQuery: string;
}

export interface FleetVehicle {
  id: string;
  title: string;
  category: string;
  capacity: string;
  layout: string;
  description: string;
  image: string;
  gallery: string[];
  amenities: string[];
}

export interface OfficeLocation {
  id: string;
  title: string;
  type: 'Head Office' | 'Counter / Agent Location';
  city: string;
  address: string;
  landmark: string;
  phoneNumbers: string[];
  timing: string;
  services: string[];
  mapEmbedQuery: string;
  directionsUrl: string;
}

export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
  badge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Booking' | 'Routes' | 'Luggage' | 'Offices';
}

export const COMPANY_INFO = {
  name: 'RanSamrat Travels',
  marathiName: 'रणसम्राट ट्रॅव्हल्स',
  tagline: 'Your Journey, Our Responsibility',
  marathiTagline: 'तुमचा प्रवास, आमची जबाबदारी',
  headquarters: 'Kalamb, District Dharashiv, Maharashtra',
  description: 'RanSamrat Travels is a premier passenger road transport service based in Kalamb, District Dharashiv. We are dedicated to providing safe, comfortable, punctual, and reliable intercity travel connecting the Marathwada region with Pune and Pimpri-Chinchwad.',
  
  contacts: {
    primaryPhone: '+91 9168683006',
    primaryPhoneRaw: '+919168683006',
    secondaryPhone: '+91 9860451641',
    secondaryPhoneRaw: '+919860451641',
    whatsappNumber: '+91 9168683006',
    whatsappUrl: 'https://wa.me/919168683006',
    whatsappPreFilledText: 'Hello RanSamrat Travels, I want to enquire about bus ticket availability. Please share route details, departure timing and ticket price.',
    email: 'contact@ransamrattravels.com',
  },

  externalPlatforms: {
    redBus: {
      name: 'RedBus',
      title: 'Book RanSamrat Travels on RedBus',
      buttonText: 'Visit RedBus',
      url: 'https://www.redbus.in/travels/ransamrat-travels',
      badge: 'Official Booking Partner',
      description: 'Find verified schedules, ratings, and instant ticket confirmations on India’s largest bus ticketing portal.',
    },
    paytm: {
      name: 'Paytm Travel',
      title: 'Book RanSamrat Travels on Paytm',
      buttonText: 'Visit Paytm',
      url: 'https://tickets.paytm.com/bus/ransamrat-travels',
      badge: 'Official Booking Partner',
      description: 'Book seats conveniently through Paytm with zero transaction fees and exciting cashback offers.',
    },
    abhiBus: {
      name: 'AbhiBus',
      title: 'Search RanSamrat Travels on AbhiBus',
      buttonText: 'Visit AbhiBus',
      url: 'https://www.abhibus.com/',
      badge: 'Travel Aggregator',
      description: 'Explore schedules and book seats across leading bus aggregator platforms.',
    },
  },

  headOffice: {
    name: 'RanSamrat Travels - Head Office',
    address: 'Near Sub-District Hospital, Main Bus Stand Road, Kalamb, District Dharashiv, Maharashtra – 413507',
    city: 'Kalamb',
    district: 'Dharashiv',
    pincode: '413507',
    phones: ['+91 9168683006', '+91 9860451641'],
    hours: '08:00 AM – 10:30 PM (Daily)',
  }
};

export const ROUTES_DATA: RouteItem[] = [
  {
    id: 'pune-ambajogai',
    from: 'Pune / PCMC',
    to: 'Ambajogai',
    departure: '08:30 PM',
    arrival: '05:30 AM',
    duration: '9 hrs approx',
    busType: '2+1 Luxury AC Sleeper (BharatBenz)',
    category: 'AC Sleeper',
    distance: '345 km',
    via: ['Swargate', 'Hadapsar', 'Barshi', 'Yermala', 'Kalamb', 'Kaij'],
    boardingHighlights: ['Bhosari', 'Nigdi', 'Akurdi', 'Chinchwad', 'Wakad', 'Kothrud', 'Swargate', 'Hadapsar'],
    droppingHighlights: ['Tathagat Chowk', 'Panyachi Taki', 'Morewadi', 'Lokhandi Sawargaon'],
    primaryPhone: '+91 9168683006',
    secondaryPhone: '+91 9860451641',
    notes: 'Daily overnight service with plush wide sleeper berths and charging points.'
  },
  {
    id: 'ambajogai-pune',
    from: 'Ambajogai',
    to: 'Pune / PCMC',
    departure: '08:45 PM',
    arrival: '05:45 AM',
    duration: '9 hrs approx',
    busType: '2+1 Luxury AC Sleeper (BharatBenz)',
    category: 'AC Sleeper',
    distance: '345 km',
    via: ['Kaij', 'Kalamb', 'Yermala', 'Barshi', 'Hadapsar', 'Swargate'],
    boardingHighlights: ['Tathagat Chowk', 'Panyachi Taki', 'Chandan Sawargaon'],
    droppingHighlights: ['Hadapsar', 'Swargate', 'Nawale Bridge', 'Wakad', 'Chinchwad', 'Nigdi', 'Bhosari'],
    primaryPhone: '+91 9168683006',
    secondaryPhone: '+91 9860451641',
    notes: 'Comfortable overnight travel reaching Pune early morning before office hours.'
  },
  {
    id: 'pune-kalamb',
    from: 'Pune / PCMC',
    to: 'Kalamb',
    departure: '09:00 PM',
    arrival: '05:00 AM',
    duration: '8 hrs approx',
    busType: '2+1 Premium AC Sleeper Coach',
    category: 'AC Sleeper',
    distance: '310 km',
    via: ['Swargate', 'Hadapsar', 'Patas', 'Barshi', 'Dhoki Phata'],
    boardingHighlights: ['Nigdi LIC Corner', 'Chinchwad', 'Wakad Bridge', 'Swargate', 'Padmavati Parking', 'Hadapsar'],
    droppingHighlights: ['RanSamrat Travels Office', 'Shivaji Maharaj Chowk', 'Hasegaon Stand'],
    primaryPhone: '+91 9168683006',
    secondaryPhone: '+91 9860451641',
    notes: 'Direct headquarters connectivity with dedicated Kalamb drop points.'
  },
  {
    id: 'kalamb-pune',
    from: 'Kalamb',
    to: 'Pune / PCMC',
    departure: '09:15 PM',
    arrival: '05:15 AM',
    duration: '8 hrs approx',
    busType: '2+1 Premium AC Sleeper Coach',
    category: 'AC Sleeper',
    distance: '310 km',
    via: ['Dhoki Phata', 'Barshi', 'Patas', 'Hadapsar', 'Swargate'],
    boardingHighlights: ['RanSamrat Travels Office', 'Shivaji Maharaj Chowk', 'Andora Stand', 'Massa Stand'],
    droppingHighlights: ['Hadapsar', 'Swargate', 'Warje', 'Kothrud', 'Wakad', 'Nigdi', 'Bhosari'],
    primaryPhone: '+91 9168683006',
    secondaryPhone: '+91 9860451641',
    notes: 'Board directly from RanSamrat Kalamb Head Office counter.'
  },
  {
    id: 'pune-kaij',
    from: 'Pune / PCMC',
    to: 'Kaij',
    departure: '08:45 PM',
    arrival: '05:15 AM',
    duration: '8.5 hrs approx',
    busType: '2+1 AC Sleeper Coach',
    category: 'AC Sleeper',
    distance: '330 km',
    via: ['Swargate', 'Hadapsar', 'Barshi', 'Yermala', 'Kalamb'],
    boardingHighlights: ['Bhosari', 'Nigdi', 'Chinchwad', 'Wakad', 'Swargate', 'Hadapsar'],
    droppingHighlights: ['Kaij Bus Stand Chowk', 'Bypass Stop'],
    primaryPhone: '+91 9168683006',
    secondaryPhone: '+91 9860451641',
    notes: 'Reliable daily link for Kaij taluka passengers.'
  },
  {
    id: 'pune-barshi',
    from: 'Pune / PCMC',
    to: 'Barshi',
    departure: '09:30 PM',
    arrival: '03:30 AM',
    duration: '6 hrs approx',
    busType: 'Luxury Sleeper / Seater Coach',
    category: 'Luxury Coach',
    distance: '220 km',
    via: ['Hadapsar', 'Uruli Kanchan', 'Daund Phata', 'Kurduvadi'],
    boardingHighlights: ['Nigdi', 'Akurdi', 'Wakad', 'Swargate', 'Fatima Nagar', 'Hadapsar'],
    droppingHighlights: ['Barshi Post Office Chowk', 'Kurduvadi Naka'],
    primaryPhone: '+91 9168683006',
    secondaryPhone: '+91 9860451641',
    notes: 'Fast connection between Solapur-border Barshi and Pune.'
  },
  {
    id: 'pune-yermala',
    from: 'Pune / PCMC',
    to: 'Yermala',
    departure: '09:00 PM',
    arrival: '04:15 AM',
    duration: '7.25 hrs approx',
    busType: '2+1 AC Sleeper',
    category: 'AC Sleeper',
    distance: '260 km',
    via: ['Swargate', 'Hadapsar', 'Barshi'],
    boardingHighlights: ['Bhosari', 'Nigdi', 'Chinchwad', 'Swargate', 'Hadapsar'],
    droppingHighlights: ['Yermala Bus Stand', 'Yedeshwari Phata'],
    primaryPhone: '+91 9168683006',
    secondaryPhone: '+91 9860451641',
    notes: 'Ideal for pilgrims traveling to Shri Yedeshwari Temple and locals.'
  },
  {
    id: 'pune-latur',
    from: 'Pune / PCMC',
    to: 'Latur',
    departure: '09:30 PM',
    arrival: '06:00 AM',
    duration: '8.5 hrs approx',
    busType: '2+1 Luxury AC Sleeper',
    category: 'AC Sleeper',
    distance: '335 km',
    via: ['Hadapsar', 'Barshi', 'Dhoki', 'Murud'],
    boardingHighlights: ['Thermax Chowk', 'Nigdi', 'Chinchwad', 'Wakad', 'Swargate', 'Hadapsar'],
    droppingHighlights: ['Gandhi Chowk', 'Shivaji Chowk', 'Old Ausa Road'],
    primaryPhone: '+91 9168683006',
    secondaryPhone: '+91 9860451641',
    notes: 'Direct overnight connection to district commercial hub Latur.'
  },
  {
    id: 'pune-murud',
    from: 'Pune / PCMC',
    to: 'Murud (Latur)',
    departure: '09:15 PM',
    arrival: '05:30 AM',
    duration: '8.25 hrs approx',
    busType: '2+1 Sleeper Coach',
    category: 'AC Sleeper',
    distance: '315 km',
    via: ['Hadapsar', 'Barshi', 'Dhoki'],
    boardingHighlights: ['Nigdi', 'Akurdi', 'Wakad', 'Swargate', 'Hadapsar'],
    droppingHighlights: ['Murud Main Bus Stand', 'Murud Market'],
    primaryPhone: '+91 9168683006',
    secondaryPhone: '+91 9860451641',
    notes: 'Comfortable journey for rural and business passengers around Murud.'
  },
  {
    id: 'pune-ahmedpur',
    from: 'Pune / PCMC',
    to: 'Ahmedpur',
    departure: '08:00 PM',
    arrival: '06:30 AM',
    duration: '10.5 hrs approx',
    busType: '2+1 Luxury AC Sleeper',
    category: 'AC Sleeper',
    distance: '390 km',
    via: ['Swargate', 'Barshi', 'Yermala', 'Kalamb', 'Kaij', 'Ghatnandur'],
    boardingHighlights: ['Bhosari', 'Nigdi', 'Wakad', 'Swargate', 'Hadapsar'],
    droppingHighlights: ['Ahmedpur Bus Stand', 'Shivaji Maharaj Chowk'],
    primaryPhone: '+91 9168683006',
    secondaryPhone: '+91 9860451641',
    notes: 'Long-distance eastern Marathwada connectivity.'
  },
  {
    id: 'pune-sirur-tajband',
    from: 'Pune / PCMC',
    to: 'Sirur Tajband',
    departure: '08:15 PM',
    arrival: '06:45 AM',
    duration: '10.5 hrs approx',
    busType: '2+1 AC / Non-AC Sleeper',
    category: 'AC Sleeper',
    distance: '400 km',
    via: ['Hadapsar', 'Barshi', 'Kalamb', 'Ahmedpur Highway'],
    boardingHighlights: ['Nigdi', 'Chinchwad', 'Wakad', 'Swargate', 'Hadapsar'],
    droppingHighlights: ['Sirur Tajband Chowk', 'Highway Phata'],
    primaryPhone: '+91 9168683006',
    secondaryPhone: '+91 9860451641',
    notes: 'Connecting remote Marathwada taluka towns smoothly.'
  },
  {
    id: 'pune-dhoki',
    from: 'Pune / PCMC',
    to: 'Dhoki',
    departure: '09:15 PM',
    arrival: '04:45 AM',
    duration: '7.5 hrs approx',
    busType: '2+1 Sleeper Coach',
    category: 'Non-AC Sleeper',
    distance: '280 km',
    via: ['Hadapsar', 'Barshi', 'Yedshi Phata'],
    boardingHighlights: ['Nigdi', 'Akurdi', 'Wakad', 'Swargate', 'Hadapsar'],
    droppingHighlights: ['Dhoki Railway Station Road', 'Dhoki Bus Stand'],
    primaryPhone: '+91 9168683006',
    secondaryPhone: '+91 9860451641',
    notes: 'Fast connection to Dharashiv sugar belt and Dhoki market.'
  },
  {
    id: 'ambajogai-kaij',
    from: 'Ambajogai',
    to: 'Kaij',
    departure: '07:30 PM',
    arrival: '08:15 PM',
    duration: '45 mins',
    busType: 'Intercity Shuttle / Transit Coach',
    category: 'Luxury Coach',
    distance: '32 km',
    via: ['State Highway 61'],
    boardingHighlights: ['Tathagat Chowk', 'Panyachi Taki'],
    droppingHighlights: ['Kaij Bus Stand Chowk'],
    primaryPhone: '+91 9168683006',
    secondaryPhone: '+91 9860451641',
    notes: 'Regional transit and connector for passengers joining Pune departure.'
  }
];

export const BOARDING_POINTS: {
  kalamb: BoardingPoint[];
  pune: BoardingPoint[];
  ambajogai: BoardingPoint[];
} = {
  kalamb: [
    {
      id: 'k-1',
      name: 'RanSamrat Travels Office',
      area: 'Opposite Priyadarshini Bank, Main Bus Stand Road',
      city: 'Kalamb',
      type: 'Both',
      landmark: 'Opposite Priyadarshini Bank / Near Sub-District Hospital',
      mapSearchQuery: 'RanSamrat Travels Kalamb Dharashiv'
    },
    {
      id: 'k-2',
      name: 'Chhatrapati Shivaji Maharaj Chowk',
      area: 'Town Center',
      city: 'Kalamb',
      type: 'Both',
      landmark: 'Shivaji Maharaj Statue Chowk',
      mapSearchQuery: 'Chhatrapati Shivaji Maharaj Chowk Kalamb Dharashiv'
    },
    {
      id: 'k-3',
      name: 'Hasegaon Bus Stand',
      area: 'Hasegaon Phata',
      city: 'Kalamb',
      type: 'Both',
      landmark: 'Hasegaon Village Stand',
      mapSearchQuery: 'Hasegaon Bus Stand Dharashiv'
    },
    {
      id: 'k-4',
      name: 'Andora Bus Stand',
      area: 'Andora Stop',
      city: 'Kalamb',
      type: 'Both',
      landmark: 'Andora Bus Stand Main Road',
      mapSearchQuery: 'Andora Bus Stand Dharashiv'
    },
    {
      id: 'k-5',
      name: 'Kanherwadi Pati',
      area: 'Kanherwadi Phata',
      city: 'Kalamb',
      type: 'Both',
      landmark: 'Kanherwadi Pati Turn',
      mapSearchQuery: 'Kanherwadi Pati Kalamb'
    },
    {
      id: 'k-6',
      name: 'Massa Bus Stand',
      area: 'Massa (Kh.)',
      city: 'Kalamb',
      type: 'Both',
      landmark: 'Massa Bus Stand Road',
      mapSearchQuery: 'Massa Bus Stand Dharashiv'
    },
    {
      id: 'k-7',
      name: 'Partapur Phata',
      area: 'Partapur Junction',
      city: 'Kalamb',
      type: 'Both',
      landmark: 'Partapur Phata Highway Crossing',
      mapSearchQuery: 'Partapur Phata Dharashiv'
    },
    {
      id: 'k-8',
      name: 'Pangaon Bus Stand',
      area: 'Pangaon Stop',
      city: 'Kalamb',
      type: 'Both',
      landmark: 'Pangaon Bus Stand Main Road',
      mapSearchQuery: 'Pangaon Bus Stand Kalamb'
    }
  ],

  pune: [
    { id: 'p-1', name: 'Bhosari – Landewadi Chowk', area: 'Bhosari', city: 'Pune / PCMC', type: 'Both', landmark: 'Near Landewadi Chowk & Natyagruha', mapSearchQuery: 'Landewadi Chowk Bhosari Pune' },
    { id: 'p-2', name: 'Datta Mandir', area: 'Bhosari / Akurdi', city: 'Pune / PCMC', type: 'Both', landmark: 'Datta Mandir Stop', mapSearchQuery: 'Datta Mandir PCMC Pune' },
    { id: 'p-3', name: 'KSB Chowk', area: 'Pimpri-Chinchwad', city: 'Pune / PCMC', type: 'Both', landmark: 'KSB Chowk Highway Junction', mapSearchQuery: 'KSB Chowk Pimpri Pune' },
    { id: 'p-4', name: 'Thermax Chowk', area: 'Chinchwad', city: 'Pune / PCMC', type: 'Both', landmark: 'Thermax Chowk Chinchwad', mapSearchQuery: 'Thermax Chowk Chinchwad Pune' },
    { id: 'p-5', name: 'Nigdi – LIC Corner', area: 'Nigdi Pradhikaran', city: 'Pune / PCMC', type: 'Both', landmark: 'LIC Corner / Paval Chowk', mapSearchQuery: 'LIC Corner Nigdi Pune' },
    { id: 'p-6', name: 'Akurdi', area: 'Akurdi Chowk', city: 'Pune / PCMC', type: 'Both', landmark: 'Near Akurdi Railway Station / Old Highway', mapSearchQuery: 'Akurdi Chowk Pune' },
    { id: 'p-7', name: 'Chinchwad', area: 'Chinchwad Station', city: 'Pune / PCMC', type: 'Both', landmark: 'Chinchwad Station Bridge End', mapSearchQuery: 'Chinchwad Station Pune' },
    { id: 'p-8', name: 'Kalewadi', area: 'Kalewadi Phata', city: 'Pune / PCMC', type: 'Both', landmark: 'Kalewadi Main Phata', mapSearchQuery: 'Kalewadi Phata Pune' },
    { id: 'p-9', name: 'Rahatani Phata', area: 'Rahatani', city: 'Pune / PCMC', type: 'Both', landmark: 'Rahatani Phata Corner', mapSearchQuery: 'Rahatani Phata Pune' },
    { id: 'p-10', name: 'Mankar Chowk', area: 'Wakad-Rahatani Link', city: 'Pune / PCMC', type: 'Both', landmark: 'Mankar Chowk Wakad', mapSearchQuery: 'Mankar Chowk Wakad Pune' },
    { id: 'p-11', name: 'Wakad', area: 'Wakad Highway', city: 'Pune / PCMC', type: 'Both', landmark: 'Near Ginger Hotel / Wakad Flyover', mapSearchQuery: 'Wakad Highway Flyover Pune' },
    { id: 'p-12', name: 'Hinjewadi Bridge', area: 'Hinjewadi Bypass', city: 'Pune / PCMC', type: 'Both', landmark: 'Hinjewadi Bridge Underpass Stop', mapSearchQuery: 'Hinjewadi Bridge Pune' },
    { id: 'p-13', name: 'Balewadi', area: 'Balewadi Highway', city: 'Pune / PCMC', type: 'Both', landmark: 'Balewadi Phata / Stadium Road', mapSearchQuery: 'Balewadi Phata Pune' },
    { id: 'p-14', name: 'Pashan', area: 'Pashan Sus Road', city: 'Pune / PCMC', type: 'Both', landmark: 'Pashan Highway Exit', mapSearchQuery: 'Pashan Pune' },
    { id: 'p-15', name: 'Chandani Chowk', area: 'Kothrud / Bavdhan', city: 'Pune / PCMC', type: 'Both', landmark: 'Chandani Chowk Flyover Point', mapSearchQuery: 'Chandani Chowk Pune' },
    { id: 'p-16', name: 'Kothrud', area: 'Paud Road / Karve Statue', city: 'Pune / PCMC', type: 'Both', landmark: 'Kothrud Stand / Kinara Hotel', mapSearchQuery: 'Kothrud Pune' },
    { id: 'p-17', name: 'Warje', area: 'Warje Flyover', city: 'Pune / PCMC', type: 'Both', landmark: 'Warje Bridge Highway Stop', mapSearchQuery: 'Warje Flyover Pune' },
    { id: 'p-18', name: 'Nawale Bridge', area: 'Vadgaon Budruk', city: 'Pune / PCMC', type: 'Both', landmark: 'Nawale Bridge Service Road', mapSearchQuery: 'Nawale Bridge Pune' },
    { id: 'p-19', name: 'Swargate', area: 'Central Pune', city: 'Pune / PCMC', type: 'Both', landmark: 'Laxmi Narayan Theatre Area / Mitramandal Chowk', mapSearchQuery: 'Swargate Laxmi Narayan Theatre Pune' },
    { id: 'p-20', name: 'Padmavati Parking', area: 'Sahakar Nagar / Satara Road', city: 'Pune / PCMC', type: 'Both', landmark: 'Padmavati Bus Parking Area', mapSearchQuery: 'Padmavati Parking Pune' },
    { id: 'p-21', name: 'Hadapsar', area: 'Hadapsar Gadital', city: 'Pune / PCMC', type: 'Both', landmark: 'Gadital Travel Stop / Mega Centre Area', mapSearchQuery: 'Hadapsar Gadital Pune' },
    { id: 'p-22', name: 'Fatima Nagar', area: 'Wanowrie / Hadapsar Road', city: 'Pune / PCMC', type: 'Both', landmark: 'Fatima Nagar Bridge Stop', mapSearchQuery: 'Fatima Nagar Pune' },
    { id: 'p-23', name: 'Uruli Kanchan', area: 'Solapur Highway', city: 'Pune / PCMC', type: 'Both', landmark: 'Uruli Kanchan Main Phata', mapSearchQuery: 'Uruli Kanchan Pune' }
  ],

  ambajogai: [
    { id: 'a-1', name: 'Tathagat Chowk', area: 'Town Entrance', city: 'Ambajogai', type: 'Dropping', landmark: 'Tathagat Chowk Statue Point', mapSearchQuery: 'Tathagat Chowk Ambajogai' },
    { id: 'a-2', name: 'Panyachi Taki', area: 'Water Tank Circle', city: 'Ambajogai', type: 'Dropping', landmark: 'Panyachi Taki Area', mapSearchQuery: 'Panyachi Taki Ambajogai' },
    { id: 'a-3', name: 'Morewadi', area: 'Ambajogai Outskirts', city: 'Ambajogai', type: 'Dropping', landmark: 'Morewadi Bus Stop', mapSearchQuery: 'Morewadi Ambajogai' },
    { id: 'a-4', name: 'Lokhandi Sawargaon', area: 'Sawargaon Phata', city: 'Ambajogai', type: 'Dropping', landmark: 'Lokhandi Sawargaon Junction', mapSearchQuery: 'Lokhandi Sawargaon Ambajogai' },
    { id: 'a-5', name: 'Hol Bus Stand', area: 'Hol Village', city: 'Ambajogai', type: 'Dropping', landmark: 'Hol Stand Highway Stop', mapSearchQuery: 'Hol Bus Stand Ambajogai' },
    { id: 'a-6', name: 'Chandan Sawargaon', area: 'Chandan Sawargaon Stop', city: 'Ambajogai', type: 'Dropping', landmark: 'Chandan Sawargaon Phata', mapSearchQuery: 'Chandan Sawargaon Ambajogai' },
    { id: 'a-7', name: 'Kumbefal', area: 'Kumbefal Pati', city: 'Ambajogai', type: 'Dropping', landmark: 'Kumbefal Highway Cross', mapSearchQuery: 'Kumbefal Ambajogai' }
  ]
};

export const FLEET_DATA: FleetVehicle[] = [
  {
    id: 'ac-sleeper-bharatbenz',
    title: 'RanSamrat Luxury AC Sleeper (AR01 T 3006)',
    category: 'AC Sleeper',
    capacity: '36 Berths',
    layout: '2+1 Upper & Lower Berth Configuration (36 Berths)',
    description: 'Our flagship 36-berth luxury sleeper coach (AR01 T 3006) featuring air suspension, thermal and acoustic insulation, ergonomic memory-foam sleeper berths, and individual climate control for a deep restful overnight journey between Marathwada and Pune.',
    image: '/images/bus-hero.jpg',
    gallery: [
      '/images/bus-hero.jpg',
      '/images/bus-twin.jpg',
      '/images/bus-front-angle.jpg',
      '/images/bus-amenities-poster.jpg'
    ],
    amenities: [
      '36 Spacious Sleeper Berths',
      'Free Wi-Fi Onboard',
      'Live GPS Tracking',
      'Individual Charging Points',
      'Pillow & Fresh White Bedsheet',
      'Blankets Provided',
      'Full Air Conditioning',
      'CCTV Surveillance',
      'Luggage Storage Space',
      'Emergency Exit & Fire Extinguishers'
    ]
  },
  {
    id: 'non-ac-sleeper',
    title: 'RanSamrat Executive Sleeper (AR01 T 6003)',
    category: 'Non-AC Sleeper',
    capacity: '36 Berths',
    layout: '2+1 Wide Sleeper Berths (36 Berths)',
    description: 'Our executive 36-berth sleeper coach (AR01 T 6003) engineered for dependable, punctual daily journeys connecting Kalamb, Ambajogai, Barshi, Latur, and Pune. Equipped with dedicated luggage bays, personal reading lights, and comfortable bedding.',
    image: '/images/bus-twin.jpg',
    gallery: [
      '/images/bus-twin.jpg',
      '/images/bus-front-garland.jpg',
      '/images/bus-front-palm.jpg',
      '/images/bus-twin-poster.jpg'
    ],
    amenities: [
      '36 Full-Length Sleeper Berths',
      'Natural Ventilation & Tinted Glass',
      'Mobile Phone Charging Sockets',
      'Reading Lights per Berth',
      'Live GPS Tracking',
      'Heavy Luggage Cargo Hold',
      'Quick Refund Assistance',
      'First Aid & Safety Hammers'
    ]
  },
  {
    id: 'semi-sleeper-luxury',
    title: 'RanSamrat High-Deck Sleeper Coach (AR01 T 3006)',
    category: 'Semi-Sleeper',
    capacity: '36 Berths',
    layout: '2+1 Sleeper Cabin (36 Berths)',
    description: 'High-deck intercity 36-berth coach (AR01 T 3006) built with aerodynamic front styling, wide windshield, high road clearance, and advanced air suspension for maximum passenger stability on state highways.',
    image: '/images/bus-front-angle.jpg',
    gallery: [
      '/images/bus-front-angle.jpg',
      '/images/bus-front-garland.jpg',
      '/images/bus-hero.jpg',
      '/images/bus-amenities-poster.jpg'
    ],
    amenities: [
      '36 Wide Sleeper Berths',
      'Air Suspension System',
      'Individual Charging Sockets',
      'Reading Lamps',
      'Wide Panoramic Windows',
      'Speed Governor Equipped',
      'Spacious Aisle Space',
      'Luggage Compartments'
    ]
  },
  {
    id: 'luxury-coaches',
    title: 'RanSamrat Luxury Fleet (AR01 T 6003)',
    category: 'Luxury Coaches',
    capacity: '36 Berths',
    layout: '36 Sleeper Berths with Individual Amenities',
    description: 'Every RanSamrat Travels 36-berth coach (AR01 T 3006 & AR01 T 6003) is maintained under strict hygiene and mechanical inspection schedules, ensuring on-time departures, live route tracking, clean white bedsheets, and responsive customer coordination.',
    image: '/images/bus-amenities-poster.jpg',
    gallery: [
      '/images/bus-amenities-poster.jpg',
      '/images/bus-twin-poster.jpg',
      '/images/bus-hero.jpg',
      '/images/bus-twin.jpg'
    ],
    amenities: [
      '36 Luxury Sleeper Berths',
      'Free Wi-Fi',
      'Live GPS Tracking',
      'Quick Refund Assistance',
      'Individual Charging Points',
      'Pillows',
      'Blanket & White Bedsheet',
      '24/7 Telephone Booking Desk'
    ]
  }
];

export const OFFICES_DATA: OfficeLocation[] = [
  {
    id: 'kalamb-hq',
    title: 'Kalamb Head Office',
    type: 'Head Office',
    city: 'Kalamb, Dharashiv',
    address: 'Near Sub-District Hospital, Main Bus Stand Road, Kalamb, District Dharashiv, Maharashtra – 413507',
    landmark: 'Opposite Priyadarshini Bank / Near Sub-District Hospital',
    phoneNumbers: ['+91 9168683006', '+91 9860451641'],
    timing: '08:00 AM – 10:30 PM (All 7 Days)',
    services: [
      'Main Corporate & Administration Office',
      'Direct Ticket Reservation Assistance',
      'Boarding Control & Departure Dispatch',
      'Customer Support & Route Guidance',
      'Luggage & Parcel Enquiries'
    ],
    mapEmbedQuery: 'Sub District Hospital Kalamb Dharashiv Maharashtra 413507',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Sub+District+Hospital+Main+Bus+Stand+Road+Kalamb+Dharashiv+413507'
  },
  {
    id: 'nigdi-counter',
    title: 'Nigdi / Akurdi Booking Counter',
    type: 'Counter / Agent Location',
    city: 'Pune / PCMC',
    address: 'Near Paval Chowk / Nigdi Pradhikaran, Pune, Maharashtra',
    landmark: 'Near Paval Chowk & Nigdi LIC Corner',
    phoneNumbers: ['+91 9168683006', '+91 9860451641'],
    timing: '06:00 PM – 11:00 PM (Evening Departure Hours)',
    services: [
      'Passenger Boarding Assistance',
      'Offline Ticket Seat Reservation Enquiries',
      'Route Timing Confirmation'
    ],
    mapEmbedQuery: 'Paval Chowk Nigdi Pune',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Paval+Chowk+Nigdi+Pradhikaran+Pune'
  },
  {
    id: 'bhosari-counter',
    title: 'Bhosari Counter Location',
    type: 'Counter / Agent Location',
    city: 'Pune / PCMC',
    address: 'Near Landewadi Chowk / Ankushrao Landge Natyagruha, Bhosari, Pune, Maharashtra',
    landmark: 'Landewadi Chowk, Pune-Nashik Highway Road',
    phoneNumbers: ['+91 9168683006', '+91 9860451641'],
    timing: '06:30 PM – 10:30 PM',
    services: [
      'Boarding Point Coordination',
      'Passenger Assistance & Verification',
      'Direct Phone & WhatsApp Booking'
    ],
    mapEmbedQuery: 'Ankushrao Landge Natyagruha Bhosari Pune',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Landewadi+Chowk+Ankushrao+Landge+Natyagruha+Bhosari+Pune'
  },
  {
    id: 'shivajinagar-counter',
    title: 'Shivajinagar / Wakdewadi Boarding Counter',
    type: 'Counter / Agent Location',
    city: 'Pune',
    address: 'Private Travel Boarding Area along Old Pune-Mumbai Highway, Wakdewadi, Shivajinagar, Pune, Maharashtra',
    landmark: 'Near Wakdewadi Bus Stand / Old Pune-Mumbai Highway',
    phoneNumbers: ['+91 9168683006', '+91 9860451641'],
    timing: '06:00 PM – 11:00 PM',
    services: [
      'Central Pune Boarding Point',
      'Transit Passenger Coordination',
      'Luggage Handover Help'
    ],
    mapEmbedQuery: 'Wakdewadi Shivajinagar Pune Old Pune Mumbai Highway',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Wakdewadi+Private+Travel+Boarding+Shivajinagar+Pune'
  },
  {
    id: 'swargate-counter',
    title: 'Swargate Counter Location',
    type: 'Counter / Agent Location',
    city: 'Pune',
    address: 'Laxmi Narayan Theatre Area, Swargate, Pune, Maharashtra',
    landmark: 'Opposite / Near Laxmi Narayan Theatre & Mitramandal Chowk',
    phoneNumbers: ['+91 9168683006', '+91 9860451641'],
    timing: '06:30 PM – 11:30 PM',
    services: [
      'South Pune Prime Boarding Hub',
      'Departure Check-in Support',
      'Direct Seat Availability Enquiry'
    ],
    mapEmbedQuery: 'Laxmi Narayan Cinema Swargate Pune',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Laxmi+Narayan+Theatre+Swargate+Pune'
  }
];

export const HISTORY_MILESTONES: HistoryMilestone[] = [
  {
    year: 'Foundation Phase',
    title: 'Establishment in Kalamb (Dharashiv)',
    description: 'RanSamrat Travels began its operational journey from Kalamb with a primary commitment to bridging the essential transport divide between rural Marathwada and Maharashtra’s economic capital Pune.',
    badge: 'Origin'
  },
  {
    year: 'Route Expansion',
    title: 'Linking Pune & Pimpri-Chinchwad Hubs',
    description: 'Expanded direct services across key taluka stops including Ambajogai, Kaij, Barshi, Yermala, Dhoki, and Latur, establishing multiple convenient boarding hubs throughout PCMC and Pune.',
    badge: 'Connectivity'
  },
  {
    year: 'Fleet Modernization',
    title: 'Introduction of Luxury AC Sleeper Coaches',
    description: 'Upgraded travel comfort by inducting BharatBenz luxury AC sleeper coaches equipped with air suspension, hygienic bedding, and modern safety features.',
    badge: 'Comfort Upgrade'
  },
  {
    year: 'Digital Accessibility',
    title: 'Partnering with National Ticketing Platforms',
    description: 'Empowered passengers with 24/7 route discovery and multi-channel bookings via Phone, WhatsApp, RedBus, and Paytm while preserving authentic personalized customer service.',
    badge: 'Digital Era'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Booking',
    question: 'How can I book a RanSamrat Travels ticket?',
    answer: 'You can book your tickets through three convenient, verified methods: 1) Call our direct reservation desk at +91 9168683006 or +91 9860451641. 2) Send an instant enquiry on WhatsApp at +91 9168683006. 3) Book online through our authorized ticketing partners RedBus (redbus.in/travels/ransamrat-travels) or Paytm Travel.'
  },
  {
    id: 'faq-2',
    category: 'Booking',
    question: 'Can I book by phone?',
    answer: 'Yes! Direct phone booking is our fastest and most personal method. Simply call +91 9168683006 or +91 9860451641. Our booking executives will assist you with route details, seat options, boarding points, and timing confirmation.'
  },
  {
    id: 'faq-3',
    category: 'Booking',
    question: 'How can I book through WhatsApp?',
    answer: 'Click the "WhatsApp Booking" button on our website or message +91 9168683006. Our pre-filled message lets our team immediately know your route, travel date, and passenger details. We will reply with confirmed seat availability and payment instructions.'
  },
  {
    id: 'faq-4',
    category: 'Routes',
    question: 'Which routes are currently available?',
    answer: 'We operate confirmed daily services connecting Pune / PCMC with Marathwada, including Pune ↔ Ambajogai, Pune ↔ Kalamb, Pune ↔ Kaij, Pune ↔ Barshi, Pune ↔ Yermala, Pune ↔ Latur, Pune ↔ Murud, Pune ↔ Ahmedpur, Pune ↔ Sirur Tajband, Pune ↔ Dhoki, and Ambajogai ↔ Kaij.'
  },
  {
    id: 'faq-5',
    category: 'Routes',
    question: 'Where are the boarding points in Pune and PCMC?',
    answer: 'We have 20+ convenient boarding points throughout PCMC and Pune, including Bhosari (Landewadi Chowk), Nigdi (LIC Corner), Akurdi, Chinchwad, Wakad, Hinjewadi Bridge, Balewadi, Kothrud, Warje, Swargate (Laxmi Narayan Theatre), Hadapsar, and Fatima Nagar. Check our "Boarding Points" page for complete details.'
  },
  {
    id: 'faq-6',
    category: 'Offices',
    question: 'Where is the Kalamb head office located?',
    answer: 'Our Head Office is located near Sub-District Hospital, Main Bus Stand Road, Kalamb, District Dharashiv, Maharashtra – 413507 (Opposite Priyadarshini Bank). Contact: +91 9168683006 / +91 9860451641.'
  },
  {
    id: 'faq-7',
    category: 'Booking',
    question: 'How can I book through RedBus?',
    answer: 'Visit the official RanSamrat Travels RedBus page at https://www.redbus.in/travels/ransamrat-travels. Select your source, destination, and journey date to choose available seats, view ratings, and receive instant digital tickets on your phone.'
  },
  {
    id: 'faq-8',
    category: 'Booking',
    question: 'How can I book through Paytm?',
    answer: 'Go to the Paytm App or website at https://tickets.paytm.com/bus/ransamrat-travels. Search for RanSamrat Travels on your desired route, select your preferred berths, and complete booking with your preferred payment method.'
  },
  {
    id: 'faq-9',
    category: 'Luggage',
    question: 'What are the luggage policies?',
    answer: 'Passengers are entitled to standard personal luggage (up to 15-20 kg per passenger) which can be safely stored in the bus under-chassis luggage hold. Personal handbags or laptop backpacks can be carried inside the berth. Commercial parcels or oversize cargo must be reported in advance at our booking counter.'
  },
  {
    id: 'faq-10',
    category: 'Offices',
    question: 'How can I contact customer support?',
    answer: 'Our customer support and operational team is reachable 7 days a week on +91 9168683006 and +91 9860451641, or via WhatsApp. You can also submit an enquiry through our Contact page, and a representative will get back to you.'
  }
];
