import { NavItem, Product, Recipe, PageContent, Language } from './types';

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'te', label: 'తెలుగు' },
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी' },
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', path: '/', label: { te: 'హోమ్', en: 'Home', hi: 'होम' } },
  { id: 'about', path: '/about', label: { te: 'మా గురించి', en: 'Our Story', hi: 'हमारे बारे में' } },
  { id: 'health', path: '/health', label: { te: 'ఆరోగ్యం (Diabetes)', en: 'Health (Diabetes)', hi: 'स्वास्थ्य' } },
  { id: 'products', path: '/products', label: { te: 'ఉత్పత్తులు', en: 'Products', hi: 'उत्पाद' } },
  { id: 'franchise', path: '/franchise', label: { te: 'ఫ్రాంచైజ్', en: 'Franchise', hi: 'फ्रेंचाइजी' } },
  { id: 'recipes', path: '/recipes', label: { te: 'వంటకాలు', en: 'Recipes', hi: 'व्यंजन' } },
  { id: 'contact', path: '/contact', label: { te: 'సంప్రదించండి', en: 'Contact', hi: 'संपर्क करें' } },
];

export const UI_TEXT = {
  viewDetails: { te: 'వివరాలు చూడండి', en: 'View Details', hi: 'विवरण देखें' },
  applyNow: { te: 'ఇప్పుడే దరఖాస్తు చేయండి', en: 'Apply Now', hi: 'अभी आवेदन करें' },
  readMore: { te: 'మరింత చదవండి', en: 'Read More', hi: 'और पढ़ें' },
  healthWarning: {
    te: 'గమనిక: మా ఉత్పత్తులు ఆరోగ్యకరమైన జీవనశైలికి మద్దతు ఇస్తాయి, ఇవి మందులు కాదు.',
    en: 'Note: Our products support a healthy lifestyle but are not substitutes for medicine.',
    hi: 'नोट: हमारे उत्पाद स्वस्थ जीवन शैली का समर्थन करते हैं लेकिन दवा का विकल्प नहीं हैं।'
  },
  footerText: {
    te: '© 2024 అరకు నేచురల్స్ ప్రైవేట్ లిమిటెడ్. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.',
    en: '© 2024 Araku Naturals Pvt. Ltd. All rights reserved.',
    hi: '© 2024 अరకు नेचुरल्स प्राइवेट लिमिटेड। सर्वाधिकार सुरक्षित।'
  }
};

// Full Product List (41 Items)
export const PRODUCTS: Product[] = [
  // SPICES
  {
    id: 'p1', category: 'spices',
    name: { te: 'పసుపు', en: 'Turmeric Powder', hi: 'हल्दी पाउडर' },
    description: { te: 'అధిక కుర్కుమిన్ కలిగిన స్వచ్ఛమైన పసుపు.', en: 'High curcumin content, pure organic turmeric.', hi: 'उच्च करक्यूमिन सामग्री।' },
    benefits: { te: 'రోగనిరోధక శక్తి.', en: 'Immunity Booster.', hi: 'प्रतिरक्षा।' },
    sizes: ['100g', '250g'], imageDesc: 'Turmeric powder heap', unsplashUrl: 'https://unsplash.com/s/photos/turmeric'
  },
  {
    id: 'p2', category: 'spices',
    name: { te: 'చింతపండు', en: 'Tamarind', hi: 'इमली' },
    description: { te: 'గిరిజన ప్రాంతాల నుండి సేకరించిన చింతపండు.', en: 'Tangy tamarind sourced from tribal areas.', hi: 'आदिवासी क्षेत्रों से इमली।' },
    benefits: { te: 'జీర్ణక్రియ.', en: 'Digestion.', hi: 'पाचन।' },
    sizes: ['500g', '1kg'], imageDesc: 'Raw tamarind pods', unsplashUrl: 'https://unsplash.com/s/photos/tamarind'
  },
  {
    id: 'p3', category: 'spices',
    name: { te: 'మిరియాలు', en: 'Black Pepper', hi: 'काली मिर्च' },
    description: { te: 'అరకు తోటల నుండి ఘాటైన మిరియాలు.', en: 'Strong aromatic pepper from Araku estates.', hi: 'अరకు एस्टेट से काली मिर्च।' },
    benefits: { te: 'జలుబు ఉపశమనం.', en: 'Cold Relief.', hi: 'जुकाम से राहत।' },
    sizes: ['100g'], imageDesc: 'Black peppercorns', unsplashUrl: 'https://unsplash.com/s/photos/black-pepper'
  },
  
  // COFFEE
  {
    id: 'p4', category: 'coffee',
    name: { te: 'అరకు కాఫీ', en: 'Araku Coffee', hi: 'अరకు कॉफी' },
    description: { te: 'ప్రపంచ ప్రఖ్యాతి గాంచిన అరకు అరబికా కాఫీ.', en: 'World-renowned Araku Arabica Coffee.', hi: 'विश्व प्रसिद्ध अరకు कॉफी।' },
    benefits: { te: 'శక్తి మరియు ఉత్సాహం.', en: 'Energy & Focus.', hi: 'ऊर्जा।' },
    sizes: ['100g', '250g'], imageDesc: 'Coffee beans roast', unsplashUrl: 'https://unsplash.com/s/photos/coffee'
  },

  // MILLETS
  {
    id: 'p5', category: 'millets',
    name: { te: 'కొర్రలు', en: 'Foxtail Millet', hi: 'कंगनी' },
    description: { te: 'పురాతన మరియు పోషకమైన ధాన్యం.', en: 'Ancient nutritious grain.', hi: 'प्राचीन अनाज।' },
    benefits: { te: 'నరాల బలం.', en: 'Nervous system health.', hi: 'तंत्रिका शक्ति।' },
    sizes: ['1kg'], imageDesc: 'Foxtail millet grains', unsplashUrl: 'https://unsplash.com/s/photos/millet'
  },
  {
    id: 'p6', category: 'millets',
    name: { te: 'అరికెలు', en: 'Kodo Millet', hi: 'कोदो' },
    description: { te: 'డయాబెటిస్ వారికి మంచిది.', en: 'Good for diabetics.', hi: 'मधुमेह के लिए अच्छा।' },
    benefits: { te: 'రక్త శుద్ధి.', en: 'Blood purification.', hi: 'रक्त शुद्धि।' },
    sizes: ['1kg'], imageDesc: 'Kodo millet bowl', unsplashUrl: 'https://unsplash.com/s/photos/grains'
  },
  {
    id: 'p7', category: 'millets',
    name: { te: 'జొన్నలు', en: 'Sorghum (Jowar)', hi: 'ज्वार' },
    description: { te: 'ఎముకల బలానికి మంచిది.', en: 'Great for bone health.', hi: 'हड्डियों के लिए अच्छा।' },
    benefits: { te: 'కాల్షియం.', en: 'Calcium rich.', hi: 'कैल्शियम।' },
    sizes: ['1kg'], imageDesc: 'Jowar grains', unsplashUrl: 'https://unsplash.com/s/photos/sorghum'
  },
  {
    id: 'p8', category: 'millets',
    name: { te: 'రాగులు', en: 'Finger Millet (Ragi)', hi: 'रागी' },
    description: { te: 'పిల్లలకు చాలా మంచిది.', en: 'Excellent for kids.', hi: 'बच्चों के लिए उत्कृष्ट।' },
    benefits: { te: 'ఐరన్ & కాల్షియం.', en: 'Iron & Calcium.', hi: 'आयरन और कैल्शियम।' },
    sizes: ['1kg'], imageDesc: 'Ragi seeds', unsplashUrl: 'https://unsplash.com/s/photos/finger-millet'
  },
  {
    id: 'p9', category: 'millets',
    name: { te: 'సాయిలు', en: 'Little Millet', hi: 'कुटकी' },
    description: { te: 'సులభంగా జీర్ణమవుతుంది.', en: 'Easy to digest.', hi: 'पचाने में आसान।' },
    benefits: { te: 'జీర్ణ ఆరోగ్యం.', en: 'Digestive health.', hi: 'पाचन स्वास्थ्य।' },
    sizes: ['1kg'], imageDesc: 'Little millet grains', unsplashUrl: 'https://unsplash.com/s/photos/cereal'
  },

  // PULSES
  {
    id: 'p10', category: 'pulses',
    name: { te: 'మినుములు', en: 'Black Gram', hi: 'उड़द दाल' },
    description: { te: 'పొట్టుతో కూడిన మినుములు.', en: 'Whole black gram.', hi: 'साबुत उड़द।' },
    benefits: { te: 'ప్రోటీన్.', en: 'High Protein.', hi: 'प्रोटीन।' },
    sizes: ['1kg'], imageDesc: 'Black gram beans', unsplashUrl: 'https://unsplash.com/s/photos/black-lentils'
  },
  {
    id: 'p11', category: 'pulses',
    name: { te: 'పెసలు', en: 'Green Gram', hi: 'मूंग दाल' },
    description: { te: 'మొలకలకు చాలా మంచిది.', en: 'Great for sprouts.', hi: 'अंकुरित अनाज के लिए अच्छा।' },
    benefits: { te: 'బరువు తగ్గడం.', en: 'Weight loss.', hi: 'वजन कम करना।' },
    sizes: ['1kg'], imageDesc: 'Green gram', unsplashUrl: 'https://unsplash.com/s/photos/green-gram'
  },
  {
    id: 'p12', category: 'pulses',
    name: { te: 'ఉలవలు', en: 'Horse Gram', hi: 'कुलथी' },
    description: { te: 'శరీరంలోని కొవ్వును కరిగిస్తుంది.', en: 'Burns body fat.', hi: 'वसा कम करता है।' },
    benefits: { te: 'కిడ్నీ ఆరోగ్యం.', en: 'Kidney health.', hi: 'गुर्दे का स्वास्थ्य।' },
    sizes: ['1kg'], imageDesc: 'Horse gram seeds', unsplashUrl: 'https://unsplash.com/s/photos/legumes'
  },
  {
    id: 'p13', category: 'pulses',
    name: { te: 'కందులు', en: 'Red Gram (Toor)', hi: 'अरहर दाल' },
    description: { te: 'సాంప్రదాయ పప్పు.', en: 'Traditional dal.', hi: 'पारंपरिक दाल।' },
    benefits: { te: 'శక్తి.', en: 'Energy.', hi: 'ऊर्जा।' },
    sizes: ['1kg'], imageDesc: 'Red lentils', unsplashUrl: 'https://unsplash.com/s/photos/lentils'
  },
  {
    id: 'p14', category: 'pulses',
    name: { te: 'రాజ్మా', en: 'Rajma', hi: 'राजमा' },
    description: { te: 'ఎరుపు రాజ్మా.', en: 'Red Kidney Beans.', hi: 'लाल राजमा।' },
    benefits: { te: 'కండరాల బలం.', en: 'Muscle health.', hi: 'मांसपेशियों का स्वास्थ्य।' },
    sizes: ['500g'], imageDesc: 'Kidney beans', unsplashUrl: 'https://unsplash.com/s/photos/kidney-beans'
  },
  {
    id: 'p15', category: 'pulses',
    name: { te: 'వైట్ రాజ్మా', en: 'White Rajma', hi: 'सफेद राजमा' },
    description: { te: 'మృదువైన రుచి.', en: 'Mild flavor beans.', hi: 'हल्का स्वाद।' },
    benefits: { te: 'ఫైబర్.', en: 'High Fiber.', hi: 'फाइबर।' },
    sizes: ['500g'], imageDesc: 'White beans', unsplashUrl: 'https://unsplash.com/s/photos/white-beans'
  },
  {
    id: 'p16', category: 'pulses',
    name: { te: 'బొబ్బర్లు', en: 'Black Eyed Peas', hi: 'लोबिया' },
    description: { te: 'రుచికరమైన పప్పు.', en: 'Tasty legumes.', hi: 'स्वादिष्ट फलियां।' },
    benefits: { te: 'జింక్.', en: 'Zinc rich.', hi: 'जस्ता।' },
    sizes: ['500g'], imageDesc: 'Black eyed peas', unsplashUrl: 'https://unsplash.com/s/photos/black-eyed-peas'
  },

  // FOREST
  {
    id: 'p17', category: 'forest',
    name: { te: 'కరక్కాయ', en: 'Karakkaya (Haritaki)', hi: 'हरड़' },
    description: { te: 'ఆయుర్వేద ఔషధం.', en: 'Ayurvedic medicine.', hi: 'आयुर्वेदिक दवा।' },
    benefits: { te: 'ఆరోగ్య రక్షణ.', en: 'General wellness.', hi: 'सामान्य कल्याण।' },
    sizes: ['100g'], imageDesc: 'Dried haritaki fruit', unsplashUrl: 'https://unsplash.com/s/photos/ayurveda'
  },
  {
    id: 'p18', category: 'forest',
    name: { te: 'తేనె', en: 'Forest Honey', hi: 'शहद' },
    description: { te: 'ప్రాసెసింగ్ లేని స్వచ్ఛమైన తేనె.', en: 'Unprocessed raw honey.', hi: 'कच्चा शहद।' },
    benefits: { te: 'సహజ తీపి.', en: 'Natural sweetener.', hi: 'प्राकृतिक स्वीटनर।' },
    sizes: ['250g', '500g'], imageDesc: 'Honey jar', unsplashUrl: 'https://unsplash.com/s/photos/honey'
  },
  {
    id: 'p19', category: 'forest',
    name: { te: 'షికాయ', en: 'Shikakai', hi: 'शिकाकाई' },
    description: { te: 'జుట్టు ఆరోగ్యానికి.', en: 'For hair health.', hi: 'बालों के लिए।' },
    benefits: { te: 'సిల్కీ హెయిర్.', en: 'Silky hair.', hi: 'रेशमी बाल।' },
    sizes: ['200g'], imageDesc: 'Shikakai pods', unsplashUrl: 'https://unsplash.com/s/photos/herbs'
  },
  {
    id: 'p20', category: 'forest',
    name: { te: 'ఉసిరికాయ', en: 'Amla', hi: 'आंवला' },
    description: { te: 'విటమిన్ సి బాంబ్.', en: 'Vitamin C bomb.', hi: 'विटामिन सी।' },
    benefits: { te: 'ఇమ్యూనిటీ.', en: 'Immunity.', hi: 'प्रतिरक्षा।' },
    sizes: ['250g'], imageDesc: 'Fresh amla fruit', unsplashUrl: 'https://unsplash.com/s/photos/amla'
  },
  {
    id: 'p21', category: 'forest',
    name: { te: 'ఉసిరిపప్పు', en: 'Dried Amla', hi: 'सूखा आंवला' },
    description: { te: 'ఎండబెట్టిన ఉసిరి.', en: 'Sun dried amla.', hi: 'धूप में सुखाया हुआ आंवला।' },
    benefits: { te: 'జీర్ణక్రియ.', en: 'Digestion.', hi: 'पाचन।' },
    sizes: ['100g'], imageDesc: 'Dried gooseberry', unsplashUrl: 'https://unsplash.com/s/photos/dried-fruit'
  },

  // RICE
  {
    id: 'p22', category: 'rice',
    name: { te: 'దంపుడుబియ్యం', en: 'Hand Pound Rice', hi: 'हाथ कुटा चावल' },
    description: { te: 'పాలిష్ చేయని బియ్యం.', en: 'Unpolished nutritional rice.', hi: 'बिना पॉलिश किया चावल।' },
    benefits: { te: 'బి-విటమిన్స్.', en: 'B-Vitamins.', hi: 'बी-विटामिन।' },
    sizes: ['1kg', '5kg'], imageDesc: 'Brown rice in bowl', unsplashUrl: 'https://unsplash.com/s/photos/brown-rice'
  },

  // READY MIX
  {
    id: 'p23', category: 'readymix',
    name: { te: 'రవ్వ ఇడ్లీ', en: 'Rava Idli', hi: 'रवा इडली' },
    description: { te: 'హోటల్ స్టైల్ ఇడ్లీ.', en: 'Hotel style idli base.', hi: 'होटल जैसी इडली।' },
    benefits: { te: 'రుచి.', en: 'Taste.', hi: 'स्वाद।' },
    sizes: ['500g'], imageDesc: 'Idli plate', unsplashUrl: 'https://unsplash.com/s/photos/idli'
  },
  {
    id: 'p24', category: 'readymix',
    name: { te: 'దోశ mix', en: 'Dosa Mix', hi: 'डोसा मिक्स' },
    description: { te: 'తక్షణ దోశ పిండి.', en: 'Instant dosa batter mix.', hi: 'इंस्टेंट डोसा मिक्स।' },
    benefits: { te: 'క్రిస్పీ దోశ.', en: 'Crispy dosa.', hi: 'कुरकुरा डोसा।' },
    sizes: ['500g'], imageDesc: 'Dosa', unsplashUrl: 'https://unsplash.com/s/photos/dosa'
  },
  {
    id: 'p25', category: 'readymix',
    name: { te: 'రవ్వ ఇడ్లీ మిక్స్', en: 'Rava Idli Mix', hi: 'रवा इडली मिक्स' },
    description: { te: 'మసాలాతో కూడిన మిక్స్.', en: 'Spiced idli mix.', hi: 'मसालेदार इडली मिक्स।' },
    benefits: { te: 'సులభం.', en: 'Easy to cook.', hi: 'पकाने में आसान।' },
    sizes: ['500g'], imageDesc: 'Rava idli', unsplashUrl: 'https://unsplash.com/s/photos/breakfast'
  },
  {
    id: 'p29', category: 'readymix',
    name: { te: 'కిచిడి మిక్స్', en: 'Khichdi Mix', hi: 'खिचड़ी मिक्स' },
    description: { te: 'ఆరోగ్యకరమైన భోజనం.', en: 'Wholesome meal mix.', hi: 'पौष्टिक भोजन।' },
    benefits: { te: 'తేలికైన ఆహారం.', en: 'Light meal.', hi: 'हल्का भोजन।' },
    sizes: ['500g'], imageDesc: 'Khichdi bowl', unsplashUrl: 'https://unsplash.com/s/photos/khichdi'
  },
  {
    id: 'p30', category: 'readymix',
    name: { te: 'ఇడ్లీ మిక్స్', en: 'Idli Mix', hi: 'इडली मिक्स' },
    description: { te: 'సాంప్రదాయ ఇడ్లీ.', en: 'Traditional idli mix.', hi: 'पारंपरिक इडली।' },
    benefits: { te: 'ఆరోగ్యం.', en: 'Healthy.', hi: 'स्वस्थ।' },
    sizes: ['500g'], imageDesc: 'Steamed idli', unsplashUrl: 'https://unsplash.com/s/photos/idli-sambar'
  },
  {
    id: 'p27', category: 'readymix',
    name: { te: 'టొమోటో సూప్', en: 'Tomato Soup', hi: 'टमाटर का सूप' },
    description: { te: 'వేడి వేడి సూప్.', en: 'Instant hot soup.', hi: 'इंस्टेंट सूप।' },
    benefits: { te: 'యాంటీఆక్సిడెంట్లు.', en: 'Antioxidants.', hi: 'एंटीऑक्सीडेंट।' },
    sizes: ['100g'], imageDesc: 'Tomato soup bowl', unsplashUrl: 'https://unsplash.com/s/photos/tomato-soup'
  },
  {
    id: 'p28', category: 'readymix',
    name: { te: 'కొరియాండర్ సూప్', en: 'Coriander Soup', hi: 'धनिया का सूप' },
    description: { te: 'సువాసనగల సూప్.', en: 'Aromatic herbal soup.', hi: 'सुगंधित सूप।' },
    benefits: { te: 'జీర్ణక్రియ.', en: 'Digestion.', hi: 'पाचन।' },
    sizes: ['100g'], imageDesc: 'Green soup', unsplashUrl: 'https://unsplash.com/s/photos/soup'
  },

  // FLOURS
  {
    id: 'p26', category: 'flours',
    name: { te: 'మల్టీగ్రేను ఆట', en: 'Multigrain Atta', hi: 'मल्टीग्रेन आटा' },
    description: { te: 'బహుళ ధాన్యాల పిండి.', en: 'Blend of multiple grains.', hi: 'मल्टीग्रेन आटा।' },
    benefits: { te: 'ఫైబర్.', en: 'High fiber.', hi: 'फाइबर।' },
    sizes: ['1kg'], imageDesc: 'Flour heap', unsplashUrl: 'https://unsplash.com/s/photos/flour'
  },
  {
    id: 'p39', category: 'flours',
    name: { te: 'రాగి పౌడర్', en: 'Ragi Powder', hi: 'रागी पाउडर' },
    description: { te: 'మొలకెత్తిన రాగి పిండి.', en: 'Sprouted ragi flour.', hi: 'अंकुरित रागी आटा।' },
    benefits: { te: 'పిల్లల ఆహారం.', en: 'Baby food base.', hi: 'शिशु आहार।' },
    sizes: ['500g'], imageDesc: 'Ragi flour', unsplashUrl: 'https://unsplash.com/s/photos/powder'
  },
  {
    id: 'p40', category: 'flours',
    name: { te: 'అల్ మిల్లెట్ పౌడర్స్ & కుకీస్', en: 'Millet Powders & Cookies', hi: 'मिलेट पाउडर और कुकीज़' },
    description: { te: 'వివిధ రకాల మిల్లెట్ ఉత్పత్తులు.', en: 'Variety of millet forms.', hi: 'विभिन्न बाजरा उत्पाद।' },
    benefits: { te: 'ఆరోగ్యకరమైన స్నాక్స్.', en: 'Healthy snacking.', hi: 'स्वस्थ नाश्ता।' },
    sizes: ['Assorted'], imageDesc: 'Cookies and flour', unsplashUrl: 'https://unsplash.com/s/photos/cookies'
  },

  // SNACKS
  {
    id: 'p31', category: 'snacks',
    name: { te: 'రాగి లడ్డు', en: 'Ragi Laddu', hi: 'रागी लड्डू' },
    description: { te: 'బెల్లంతో చేసిన లడ్డు.', en: 'Jaggery based sweet.', hi: 'गुड़ वाला लड्डू।' },
    benefits: { te: 'ఐరన్.', en: 'Iron rich.', hi: 'आयरन।' },
    sizes: ['Box'], imageDesc: 'Laddu sweet', unsplashUrl: 'https://unsplash.com/s/photos/laddu'
  },
  {
    id: 'p32', category: 'snacks',
    name: { te: 'రాగి మురుకూ', en: 'Ragi Murukku', hi: 'रागी मुरुक्कु' },
    description: { te: 'కరకరలాడే స్నాక్.', en: 'Crunchy snack.', hi: 'कुरकुरा नाश्ता।' },
    benefits: { te: 'ఆరోగ్యకరమైన కొవ్వులు.', en: 'Less oil.', hi: 'कम तेल।' },
    sizes: ['200g'], imageDesc: 'Murukku', unsplashUrl: 'https://unsplash.com/s/photos/snack'
  },
  {
    id: 'p33', category: 'snacks',
    name: { te: 'రాగి మిక్సర్', en: 'Ragi Mixture', hi: 'रागी मिक्सचर' },
    description: { te: 'కారం మరియు రుచి.', en: 'Spicy mix.', hi: 'मसालेदार मिश्रण।' },
    benefits: { te: 'టైమ్ పాస్.', en: 'Teatime snack.', hi: 'चाय के समय का नाश्ता।' },
    sizes: ['200g'], imageDesc: 'Indian mixture', unsplashUrl: 'https://unsplash.com/s/photos/namkeen'
  },
  {
    id: 'p34', category: 'snacks',
    name: { te: 'మిల్లెట్ లడ్డు', en: 'Millet Laddu', hi: 'मिलेट लड्डू' },
    description: { te: 'వివిధ మిల్లెట్స్ తో.', en: 'Mixed millet sweet.', hi: 'मिश्रित बाजरा मिठाई।' },
    benefits: { te: 'శక్తి.', en: 'Energy bite.', hi: 'ऊर्जा।' },
    sizes: ['Box'], imageDesc: 'Millet balls', unsplashUrl: 'https://unsplash.com/s/photos/sweet'
  },
  {
    id: 'p35', category: 'snacks',
    name: { te: 'బాజ్రా మురుకూ', en: 'Bajra Murukku', hi: 'बाजरा मुरुक्कु' },
    description: { te: 'సజ్జల మురుకులు.', en: 'Pearl millet snack.', hi: 'बाजरा नाश्ता।' },
    benefits: { te: 'ఫైబర్.', en: 'High fiber.', hi: 'फाइबर।' },
    sizes: ['200g'], imageDesc: 'Fried snack', unsplashUrl: 'https://unsplash.com/s/photos/fried-food'
  },
  {
    id: 'p36', category: 'snacks',
    name: { te: 'చిక్కి', en: 'Peanut Chikki', hi: 'चिक्की' },
    description: { te: 'వేరుశనగ మరియు బెల్లం.', en: 'Peanut and jaggery bar.', hi: 'मूंगफली और गुड़।' },
    benefits: { te: 'ప్రోటీన్.', en: 'Protein bar.', hi: 'प्रोटीन।' },
    sizes: ['Box'], imageDesc: 'Peanut brittle', unsplashUrl: 'https://unsplash.com/s/photos/chikki'
  },

  // PASTA
  {
    id: 'p37', category: 'pasta',
    name: { te: 'రాగి సేమియా', en: 'Ragi Vermicelli', hi: 'रागी सेवई' },
    description: { te: 'ఆరోగ్యకరమైన ఉప్మా కోసం.', en: 'For healthy upma.', hi: 'स्वस्थ उपमा के लिए।' },
    benefits: { te: 'కాల్షియం.', en: 'Calcium.', hi: 'कैल्शियम।' },
    sizes: ['200g'], imageDesc: 'Vermicelli', unsplashUrl: 'https://unsplash.com/s/photos/vermicelli'
  },
  {
    id: 'p38', category: 'pasta',
    name: { te: 'మిల్లెట్ పాస్తా', en: 'Millet Pasta', hi: 'मिलेट पास्ता' },
    description: { te: 'మైదా లేని పాస్తా.', en: 'Maida-free pasta.', hi: 'मैदा मुक्त पास्ता।' },
    benefits: { te: 'పిల్లలకు ఇష్టం.', en: 'Kids favorite.', hi: 'बच्चों का पसंदीदा।' },
    sizes: ['200g'], imageDesc: 'Pasta shapes', unsplashUrl: 'https://unsplash.com/s/photos/pasta'
  },

  // SWEETENERS
  {
    id: 'p41', category: 'sweeteners',
    name: { te: 'బెల్లం', en: 'Jaggery', hi: 'गुड़' },
    description: { te: 'రసాయనాలు లేని బెల్లం.', en: 'Chemical free jaggery.', hi: 'रसायन मुक्त गुड़।' },
    benefits: { te: 'ఐరన్.', en: 'Iron source.', hi: 'आयरन।' },
    sizes: ['500g', '1kg'], imageDesc: 'Jaggery blocks', unsplashUrl: 'https://unsplash.com/s/photos/jaggery'
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 'r1',
    title: { te: 'రాగి దోసె - పిల్లలకు బలం', en: 'Ragi Dosa - Strength for Kids', hi: 'रागी डोसा - बच्चों के लिए ताकत' },
    desc: {
      te: 'రాగి పిండిలో క్యాల్షియం అధికంగా ఉంటుంది, ఇది పిల్లల ఎముకల పెరుగుదలకు సహాయపడుతుంది.',
      en: 'Ragi is rich in calcium helping in bone growth for kids.',
      hi: 'रागी कैल्शियम से भरपूर होता है जो बच्चों की हड्डियों के विकास में मदद करता है।'
    },
    imageDesc: 'Golden brown Ragi Dosa served with chutney',
    unsplashUrl: 'https://unsplash.com/s/photos/indian-breakfast'
  },
  {
    id: 'r2',
    title: { te: 'జొన్న సంగటి - నెలసరి నొప్పికి ఉపశమనం', en: 'Jowar Sangati - Relief for Menstrual Pain', hi: 'ज्वार संगटी - मासिक धर्म के दर्द से राहत' },
    desc: {
      te: 'నెలనొప్పి తగ్గించి, గర్భిణీలకు మరియు బాలింతలకు పాల సమృద్ధిని ఇస్తుంది. షుగర్ ఉన్నవారికి ఇది అద్భుతమైన ఆహారం.',
      en: 'Reduces menstrual pain and helps lactating mothers. Excellent for diabetics.',
      hi: 'मासिक धर्म के दर्द को कम करता है और स्तनपान कराने वाली माताओं की मदद करता है।'
    },
    imageDesc: 'Traditional mud pot with millet food',
    unsplashUrl: 'https://unsplash.com/s/photos/millet-food'
  },
  {
    id: 'r3',
    title: { te: 'అరకు మిల్లెట్స్ - చవకైన ఆరోగ్యం', en: 'Araku Millets - Affordable Health', hi: 'अరకు बाजरा - किफायती स्वास्थ्य' },
    desc: {
      te: 'మా అరకు నేచురల్స్ మిల్లెట్స్ చవకగా మరియు ఆరోగ్యకరంగా ఉంటాయి. మీ భూమిలో తక్కువ నీటితో పండించవచ్చు.',
      en: 'Affordable, healthy, and grows with less water. Perfect for farming income.',
      hi: 'किफायती, स्वस्थ और कम पानी में उगता है।'
    },
    imageDesc: 'Millet grains in hands',
    unsplashUrl: 'https://unsplash.com/s/photos/grains-hand'
  }
];

export const PAGES: Record<string, PageContent> = {
  about: { title: { te: 'About', en: 'About', hi: 'About' }, sections: [] }, 
  sourcing: {
    title: { te: 'గిరిజన సేకరణ & సుస్థిరత', en: 'Tribal Sourcing & Sustainability', hi: 'आदिवासी सोर्सिंग और स्थिरता' },
    sections: [
      {
        type: 'text',
        content: {
          te: 'మేము మధ్యవర్తులు లేకుండా నేరుగా గిరిజన రైతుల నుండి సేకరిస్తాము. ఇది వారికి సరైన ధర లభించేలా చేస్తుంది.',
          en: 'We source directly from tribal farmers without middlemen, ensuring they get fair pricing.',
          hi: 'हम बिचौलियों के बिना सीधे आदिवासी किसानों से स्रोत प्राप्त करते हैं, यह सुनिश्चित करते हुए कि उन्हें उचित मूल्य मिले।'
        }
      },
      {
        type: 'image-text',
        title: { te: 'ప్రకృతి వ్యవసాయం', en: 'Natural Farming', hi: 'प्राकृतिक खेती' },
        content: {
          te: 'రసాయనాలు లేని, తక్కువ నీటితో పండించే విధానాలను మేము ప్రోత్సహిస్తాము.',
          en: 'We promote chemical-free farming methods that use minimal water.',
          hi: 'हम रसायन मुक्त खेती के तरीकों को बढ़ावा देते हैं जो कम से कम पानी का उपयोग करते हैं।'
        },
        imageDesc: 'Green millet fields under blue sky',
        unsplashUrl: 'https://unsplash.com/s/photos/organic-farming',
        reverse: true
      }
    ]
  },
  supply: {
    title: { te: 'సరఫరా గొలుసు', en: 'Supply Chain', hi: 'आपूर्ति श्रृंखला' },
    sections: [
      {
        type: 'process',
        items: [
          { title: { te: 'వ్యవసాయం', en: 'Farming', hi: 'खेती' } },
          { title: { te: 'సేకరణ', en: 'Collection', hi: 'संग्रह' } },
          { title: { te: 'ప్రాసెసింగ్', en: 'Processing', hi: 'प्रसंस्करण' } },
          { title: { te: 'గిడ్డంగి', en: 'Warehousing', hi: 'भंडारण' } },
          { title: { te: 'స్టోర్', en: 'Store', hi: 'दुकान' } },
        ]
      }
    ]
  },
  franchise: {
    title: { te: 'ఫ్రాంచైజ్ అవకాశం', en: 'Franchise Opportunity', hi: 'फ्रेंचाइजी का अवसर' },
    sections: [
      {
        type: 'text',
        content: {
          te: 'ఆరోగ్యకరమైన ఆహార విప్లవంలో భాగస్వాములు కండి. తక్కువ పెట్టుబడితో మీ స్వంత వ్యాపారాన్ని ప్రారంభించండి.',
          en: 'Partner in the healthy food revolution. Start your own business with low investment.',
          hi: 'स्वस्थ भोजन क्रांति में भागीदार बनें। कम निवेश के साथ अपना खुद का व्यवसाय शुरू करें।'
        }
      },
      {
        type: 'form',
        title: { te: 'దరఖాస్తు చేయండి', en: 'Apply Now', hi: 'अभी आवेदन करें' }
      }
    ]
  },
  quality: {
    title: { te: 'నాణ్యత & ధృవపత్రాలు', en: 'Quality & Certifications', hi: 'गुणवत्ता और प्रमाणन' },
    sections: [
      {
        type: 'grid',
        items: [
          { title: { te: 'FSSAI సర్టిఫైడ్', en: 'FSSAI Certified', hi: 'FSSAI प्रमाणित' }, desc: 'License No: 123456789' },
          { title: { te: '100% ఆర్గానిక్', en: '100% Organic', hi: '100% जैविक' }, desc: 'NPOP Standards' },
          { title: { te: 'ల్యాబ్ పరీక్షించబడింది', en: 'Lab Tested', hi: 'लैब परीक्षित' }, desc: 'Every batch checked' }
        ]
      }
    ]
  },
  packaging: {
    title: { te: 'ప్యాకేజింగ్', en: 'Packaging', hi: 'पैकेजिंग' },
    sections: [
      {
        type: 'image-text',
        title: { te: 'ప్రీమియం ప్యాకేజింగ్', en: 'Premium Packaging', hi: 'प्रीमियम पैकेजिंग' },
        content: {
          te: '50g నుండి 5kg వరకు వివిధ పరిమాణాలలో అందుబాటులో ఉంది. పరిశుభ్రమైన మరియు సురక్షితమైన ప్యాకింగ్.',
          en: 'Available in various sizes from 50g to 5kg. Hygienic and safe packaging.',
          hi: '50 ग्राम से 5 किलोग्राम तक विभिन्न आकारों में उपलब्ध। स्वच्छ और सुरक्षित पैकेजिंग।'
        },
        imageDesc: 'Eco-friendly paper pouch packaging for grains',
        unsplashUrl: 'https://unsplash.com/s/photos/packaging',
        reverse: false
      }
    ]
  }
};