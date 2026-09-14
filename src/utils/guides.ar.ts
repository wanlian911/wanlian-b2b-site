// أدلة (مقالات) بالعربية
// بيانات وصفية للقوائم /ar/blog/ وصفحات الوسوم /ar/tags/.
// href يشير إلى الصفحات الفعلية /ar/guides/<slug>/.
export interface GuideAr {
  title: string;
  description: string;
  href: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

export const guidesAr: GuideAr[] = [
  {
    title: 'منع الارتداد في شبكات إطفاء الحريق ومياه الشرب (دليل 2026)',
    description: 'لماذا أجهزة منع الارتداد إلزامية في شبكات المياه المزدوجة، وكيف يعمل صمام الرجوع المزدوج HS41X، والتحكم في الاتصالات المتقاطعة، وقائمة اختيار للمشترين B2B.',
    href: '/ar/guides/backflow-prevention-guide/',
    date: '2026-08',
    category: 'السلامة الهيدروليكية',
    readTime: '8 دقائق قراءة',
    tags: ['backflow-prevention', 'industrial-valves', 'fire-protection']
  },
  {
    title: 'دليل اختيار بكرات مران الحريق وخزائن الإطفاء (2026)',
    description: 'كيف تخصص بكرات المران الداخلية والخزائن الحائطية ووحدات الرغوة: طول وقطر المران، أوضاع الفوهة، مواد الخزانة، اختيار نوع الرغوة والامتثال لحرائق الفئة A/B.',
    href: '/ar/guides/fire-hose-reel-cabinet-guide/',
    date: '2026-08',
    category: 'حماية الحريق',
    readTime: '7 دقائق قراءة',
    tags: ['fire-hose-reel', 'fire-protection']
  },
  {
    title: 'اختيار منظور ماء: يدوي مقابل ذاتي التتبع (ZDMS) — دليل',
    description: 'منظورات يدوية PS مقابل مدافع ذاتية التتبع ZDMS — مدى، تدفق، كشف، زمن استجابة ومقارنة تكلفة للحماية الصناعية والمساحات الكبيرة.',
    href: '/ar/guides/fire-water-monitor-selection-guide/',
    date: '2026',
    category: 'حماية الحريق',
    readTime: '6 دقائق قراءة',
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'صمامات أنظمة رش الحريق: دليل شامل (رطب، شامل، فعل مسبق)',
    description: 'كيف تعمل صمامات الإنذار الرطبة ZSFZ والرش الشامل ZSFM والفعل المسبق ZSFY ومؤشرات التدفق ZSJZ — ومتى تخصص كل واحدة لنظام رشك.',
    href: '/ar/guides/fire-sprinkler-system-valves-guide/',
    date: '2026',
    category: 'حماية الحريق',
    readTime: '7 دقائق قراءة',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'قائمة التحقق B2B: كيف تفحص مصنّع معدات الحريق',
    description: 'قائمة العناية الواجبة من 8 نقاط للتحقق من مصنّعي الصمامات — الشهادات وتقارير الاختبار بالدفعة وتدقيق المصنع والعينات وإشارات التنبيه عند الشراء من الصين.',
    href: '/ar/guides/b2b-valve-sourcing-checklist/',
    date: '2026',
    category: 'توريد',
    readTime: '6 دقائق قراءة',
    tags: ['procurement', 'certification', 'industrial-valves']
  },
  {
    title: 'كيف تختار صمامات حريق مدرجة UL لمشروعك (دليل 2026)',
    description: 'ماذا يعني تدريج UL حقًا، UL مقابل FM، أي أنواع الصمامات المدرجة، وكيف تتحقق من صحة الشهادات، وقائمة توريد للمشترين B2B.',
    href: '/ar/guides/how-to-choose-ul-listed-fire-valves/',
    date: '2026',
    category: 'حماية الحريق',
    readTime: '7 دقائق قراءة',
    tags: ['certification', 'fire-protection', 'industrial-valves']
  },
  {
    title: 'دليل شراء مدافع مياه الحريق: ثابت، عن بُعد، أم ذكي؟ (2026)',
    description: 'متى تحتاج مدفع مياه، ثابت مقابل عن بُعد مقابل ذاتي التتبع، حساب التدفق والمدى، تكامل التحكم وقائمة توريد قائمة على الموقع.',
    href: '/ar/guides/fire-water-cannon-buying-guide/',
    date: '2026',
    category: 'حماية الحريق',
    readTime: '6 دقائق قراءة',
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'أنظمة رش الحريق: رطبة أم جافة أم فعل مسبق؟ (دليل 2026)',
    description: 'مقارنة عملية لأنظمة الرطبة والجافة والفعل المسبق، وكيف تختار رؤوس الرش (معامل K، حرارة، استجابة)، والمكونات التي تحتاجها قوائمك.',
    href: '/ar/guides/fire-sprinkler-system-wet-dry-preaction/',
    date: '2026',
    category: 'حماية الحريق',
    readTime: '7 دقائق قراءة',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'كيف تختار خلاط حريق لمشاريع بلدية وصناعية (دليل 2026)',
    description: 'دليل توريد خطوة بخطوة يغطي أنواع الخلاطات وفئات الضغط ومعايير الاتصال ومتطلبات الشهادات وقائمة المصنع قبل الطلب.',
    href: '/ar/guides/how-to-choose-a-fire-hydrant/',
    date: '2026',
    category: 'حماية الحريق',
    readTime: '8 دقائق قراءة',
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'صمام البوابة مقابل صمام الفراشة في حماية الحريق',
    description: 'قارن أداء الإغلاق والمساحة وفقد الضغط والصيانة ومعايير اختيار المشروع لخطوط الحماية من الحريق.',
    href: '/ar/guides/gate-valve-vs-butterfly-valve-fire-protection/',
    date: '2026',
    category: 'صمامات',
    readTime: '7 دقائق قراءة',
    tags: ['industrial-valves', 'fire-protection']
  },
  {
    title: 'أنواع صمامات تحكم الرش: OS&Y والفراشة ورجوع',
    description: 'أدوار صمامات البوابة OS&Y والفراشة بالإشارة ورجوع في أنظمة الرش، مع جدول مقارنة وقائمة تخصيص UL/FM للمشترين B2B.',
    href: '/ar/guides/fire-sprinkler-control-valve-types/',
    date: '2026-09',
    category: 'حماية الحريق',
    readTime: '8 دقائق قراءة',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'دليل صمامات البوابة بحجاب محكم: بفلنجة ANSI للبخار والنفط الحراري',
    description: 'كيف تعمل إحكام مزدوج بحجاب معدني ملحوم، أين تخصص صمامات الحجاب المحكم، معيار ANSI/GB وقائمة تخصيص B2B لخدمة البخار والنفط الحراري.',
    href: '/ar/guides/bellows-seal-gate-valve-guide/',
    date: '2026-09',
    category: 'صمامات',
    readTime: '7 دقائق قراءة',
    tags: ['industrial-valves', 'bellows-seal-gate-valve']
  },
  {
    title: 'دليل صمامات خفض الضغط: PRV هيدروليكي 500X (2026)',
    description: 'كيف تعمل صمامات خفض الضغط ذاتية التشغيل الهيدروليكية، 500X مقابل تحكم مستوى F745X مقابل طافية عن بعد 100X، تركيب وقائمة تخصيص B2B لشبكات إمداد المياه.',
    href: '/ar/guides/pressure-reducing-valve-guide/',
    date: '2026-09',
    category: 'السلامة الهيدروليكية',
    readTime: '8 دقائق قراءة',
    tags: ['backflow-prevention', 'industrial-valves']
  },
  {
    title: 'أنواع صمامات الرجوع ودليل الاختيار: كروي منزلق مقابل متذبذب (2026)',
    description: 'مقارنة أنواع صمامات الرجوع — متذبذب مقابل كروي منزلق HQ41X مقابل كروي HQ44X: فقد الضغط، صدمة الماء، إغلاق بلا طرقة، اتجاه تركيب وقائمة تخصيص B2B.',
    href: '/ar/guides/check-valve-types-guide/',
    date: '2026-09',
    category: 'صمامات',
    readTime: '8 دقائق قراءة',
    tags: ['industrial-valves', 'backflow-prevention']
  },
  {
    title: 'دليل اختيار الطفايات: بودرة جافة ABC للمشترين B2B (2026)',
    description: 'كيف تختار الطفايات المحمولة لمشاريع التصدير: فئات الحريق مقابل عوامل الإطفاء، مواصفات البودرة ABC، شهادة ISO 7165 وCCCF، تطبيقات وقائمة شراء مصنع تغطي OEM وMOQ وتغليف البضائع الخطرة.',
    href: '/ar/guides/fire-extinguisher-selection-guide/',
    date: '2026-09',
    category: 'حماية الحريق',
    readTime: '8 دقائق قراءة',
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'دليل شراء مران الحريق المسطح: أحجام، بطانات، وصلات (2026)',
    description: 'كيف تشتري مران الحريق المسطح للحماية من الحريق ونقل الماء الصناعي: بناء المران وإحكام الحواف، حساب القطر والطول، معايير الوصلات Storz/BS336/NIST، فوهات وقائمة مصنع OEM.',
    href: '/ar/guides/fire-hose-buying-guide/',
    date: '2026-09',
    category: 'حماية الحريق',
    readTime: '8 دقائق قراءة',
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Wanlian Fluid مقابل American AVK: أي مورّد خلاطات وصمامات يناسب مشروعك 2026؟',
    description: 'مقارنة مدعومة بالبيانات بين Wanlian Fluid وAmerican AVK للتوريد 2026: خطوط المنتجات وخلاطات AWWA C502 وأنظمة الجودة والتكلفة ومدة التوريد — وكيف تختار الجغرافيا والنطاق والمواصفات المورّد الصحيح.',
    href: '/ar/guides/wanlian-fluid-vs-american-avk/',
    date: '2026-09',
    category: 'توريد',
    readTime: '9 دقائق قراءة',
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'كيف تفحص مورّد صيني للصمامات ومعدات الحريق في 2026',
    description: 'قائمة تحقق من 5 خطوات لمورّدي 2026: التحقق من صلاحية ISO 9001، تقارير اختبار مطابقة للمعيار، فحص من طرف ثالث، إشارات تحذير تقليد، ووثائق استيراد.',
    href: '/ar/guides/how-to-verify-chinese-valve-supplier/',
    date: '2026-09',
    category: 'توريد',
    readTime: '7 دقائق قراءة',
    tags: ['procurement', 'certification']
  },
  {
    title: 'معايير خلاطات الحريق ومران الحريق والصمامات مفسرة: AWWA، NFPA، EN، ISO',
    description: 'دليل معايير للمشترين: AWWA C502/C515، NFPA 1961، EN 14384، BS 750، EN 1074 وISO 5208 — مع عملية 5 فحوصات لشراء معدات مطابقة من الصين.',
    href: '/ar/guides/fire-hydrant-valve-standards-guide/',
    date: '2026-09',
    category: 'حماية الحريق',
    readTime: '8 دقائق قراءة',
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'دليل الامتثال CE وEN 12845: معدات حريق لسوق أوروبا (2026)',
    description: 'الامتثال الأوروبي للحماية من الحريق مفسر للمشترين B2B: متطلبات سحب مضخة الرش EN 12845، علامة CE على مستوى النموذج، اختبارات صمامات EN 12266-1، أنظمة وصلات Storz/BS336/KWS وخط ISO 7165 مقابل CCCF للطفايات.',
    href: '/ar/guides/ce-en12845-fire-protection-compliance/',
    date: '2026-09',
    category: 'حماية الحريق',
    readTime: '8 دقائق قراءة',
    tags: ['certification', 'fire-protection']
  },
  {
    title: 'دليل اختيار رؤوس الرش: معامل K، حرارة، استجابة (2026)',
    description: 'كيف تختار رؤوس الرش: معامل K وتدفق (K=80/K=115)، تصنيفات الحرارة وألوان الكبسولة، استجابة سريعة مقابل قياسية، اتجاه معلّق/عمودي/جانبي/مخفي، وتدرج UL في سياق NFPA 13.',
    href: '/ar/guides/fire-sprinkler-head-selection-guide/',
    date: '2026-09',
    category: 'حماية الحريق',
    readTime: '8 دقائق قراءة',
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'دليل صمامات حماية الحريق بمسار: بمسار مقابل بفلنجة (2026)',
    description: 'صمامات بمسار لخطوط الرش مقابل بفلنجة: فراشة بالإشارة، بوابة OS&Y، بوابة فولاذ مقاوم للصدأ وصمامات كهرومغناطيسية بمسار، سرعة تركيب، مراقبة وقائمة B2B.',
    href: '/ar/guides/grooved-fire-protection-valves-guide/',
    date: '2026-09',
    category: 'حماية الحريق',
    readTime: '8 دقائق قراءة',
    tags: ['fire-protection', 'industrial-valves']
  },
  {
    title: 'دليل خلاطات مضادة للتجمد ومضادة للاصطدام: مناخ بارد وأمان (2026)',
    description: 'خلاطات جافة العمود المضادة للتجمد، خلاطات اصطدام ببراجز قطع، ونماذج مراقبة ذكية IoT: حماية التجمد، قطع عند الاصطدام، تنظيم ضغط وقائمة اختيار B2B.',
    href: '/ar/guides/antifreeze-anti-collision-fire-hydrant-guide/',
    date: '2026-09',
    category: 'حماية الحريق',
    readTime: '8 دقائق قراءة',
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'دليل اتصال هيئة الإطفاء (سويدي): مدخلات، وصلات، تركيب (2026)',
    description: 'اتصالات سويدية لهيئة الإطفاء مفسرة: مدخلان DN65 (SQS65/KWS65)، مخرج بفلنجة DN100، صمام تحكم مدمج، خيارات وصلات Storz وHS، تركيب وقائمة تخصيص B2B.',
    href: '/ar/guides/fire-department-connection-siamese-guide/',
    date: '2026-09',
    category: 'حماية الحريق',
    readTime: '8 دقائق قراءة',
    tags: ['fire-protection', 'fire-hydrant']
  },
  {
    title: 'كشف الصمامات المزيفة وشهادات الحريق المقلّدة — دليل 2026',
    description: 'دليل المشترين من الصين: كشف الصمامات المزيفة وشهادات UL وFM المقلّدة وخلاطات الحريق المنسوخة. قائمة كشف، إشارات تحذيرية، وتحقيق المورّد قبل الدفع.',
    href: '/ar/guides/detect-fake-valves-fire-equipment-counterfeits/',
    date: '2026-09',
    category: 'توريد B2B',
    readTime: '8 دقائق قراءة',
    tags: ['procurement', 'certification']
  },
  {
    title: 'بنية المياه البلدية وحماية الحريق في أمريكا اللاتينية: دليل توريد B2B (2026)',
    description: 'توريد خلاطات الحريق وصمامات البوابة وخراطيم الحريق لبنية المياه البلدية وشبكات الحريق في أمريكا اللاتينية: أنظمة المعايير الإقليمية، الحزم بطلب واحد، توثيق المواصفات ومصفوفة الاختيار.',
    href: '/ar/guides/municipal-water-fire-infrastructure-latinamerica/',
    date: '2026-09',
    category: 'توريد',
    readTime: '8 دقائق قراءة',
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'متطلبات الشهادات لصمامات وخلاطات الحريق في أمريكا اللاتينية (2026)',
    description: 'ماذا تعني شهادات UL وFM وAWWA وNOM وABNT في عطاءات الحريق اللاتينية، وكيف تُمنح لكل موديل، وكيف تتحقق من أصالة الشهادات والوثائق التي تطلبها لكل موديل.',
    href: '/ar/guides/latinamerica-certification-requirements-fire-valves/',
    date: '2026-09',
    category: 'توريد',
    readTime: '8 دقائق قراءة',
    tags: ['certification', 'procurement', 'industrial-valves']
  },
  {
    title: 'Wanlian Fluid مقابل AVK Latinoamérica: مورد صمامات وخلاطات حريق',
    description: 'Wanlian Fluid مقابل AVK Latinoamérica (AVK Válvulas، تاراغونا): شبكات التوزيع، نطاق المنتجات، حزم الطلب الواحد، OEM، بنية التكلفة ومدة التوريد — وكيف تختار لمشروعك اللاتيني.',
    href: '/ar/guides/wanlian-fluid-vs-avk-latinamerica/',
    date: '2026-09',
    category: 'توريد',
    readTime: '9 دقائق قراءة',
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'دليل صمام موازنة رقمي HVAC: اختيار SP45F',
    description: 'دليل صمام موازنة HVAC الرقمي SP45F: نقاط اختبار الضغط، القفل الرقمي، التثبيت وموازنة الأنظمة الهيدروليكية، مع قائمة بيانات RFQ — من مصنع Quanzhou Wanlian Fluid.',
    href: '/ar/guides/hvac-digital-balancing-valve-guide/',
    date: '2026-09',
    category: 'صمامات صناعية',
    readTime: '8 دقائق قراءة',
    tags: ['industrial-valves', 'backflow-prevention']
  },
];
