// Руководства (статьи) на русском — M3
// Метаданные для списков /ru/blog/ и страниц тегов /ru/tags/.
// href указывает на реальные страницы /ru/guides/<slug>/.
import type { Guide } from './guides';

const readTime = (min: string) => `${min} мин чтения`;

export const guidesRu: Guide[] = [
  {
    title: 'Защита от обратного потока в системах пожаротушения и водопровода',
    description: 'Устройства предотвращения обратного потока в сетях двойного назначения: принцип работы двойного клапана HS41X, контроль перекрёстных соединений, чек-лист выбора.',
    href: '/ru/guides/backflow-prevention-guide/',
    date: '2026-08',
    category: 'Гидравлическая защита',
    readTime: readTime('8'),
    tags: ['backflow-prevention', 'industrial-valves', 'fire-protection']
  },
  {
    title: 'Пожарные рукавные барабаны и шкафы: руководство по выбору (2026)',
    description: 'Как подобрать внутренние рукавные барабаны, настенные шкафы и пенные установки: параметры рукава, режимы ствола, материалы, пенообразователь и класс пожара A/B.',
    href: '/ru/guides/fire-hose-reel-cabinet-guide/',
    date: '2026-08',
    category: 'Противопожарная защита',
    readTime: readTime('7'),
    tags: ['fire-hose-reel', 'fire-protection']
  },
  {
    title: 'Пожарные мониторы: ручной против автоматического следящего (ZDMS)',
    description: 'Ручные мониторы PS против следящих стволов ZDMS: дальность струи, расход, обнаружение, время отклика и стоимость для промышленности и крупных объёмов.',
    href: '/ru/guides/fire-water-monitor-selection-guide/',
    date: '2026',
    category: 'Противопожарная защита',
    readTime: readTime('6'),
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Спринклерные системы: клапаны мокрого, дренчерного и преакшн',
    description: 'Принцип работы мокрого сигнального клапана ZSFZ, дренчерного ZSFM и преакшн-системы ZSFY, роль сигнализатора потока ZSJZ и когда специфицировать каждый тип.',
    href: '/ru/guides/fire-sprinkler-system-valves-guide/',
    date: '2026',
    category: 'Противопожарная защита',
    readTime: readTime('7'),
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Чек-лист B2B-закупок: проверка производителя пожарного оборудования',
    description: 'Чек-лист из 8 пунктов: проверка сертификатов, протоколов испытаний по партиям, аудит завода, образцы и тревожные сигналы при закупке клапанов в Китае.',
    href: '/ru/guides/b2b-valve-sourcing-checklist/',
    date: '2026',
    category: 'Закупки B2B',
    readTime: readTime('6'),
    tags: ['procurement', 'certification', 'industrial-valves']
  },
  {
    title: 'Как выбрать сертифицированные UL пожарные клапаны (гайд 2026)',
    description: 'Что означает перечень UL, отличие UL от FM, какие клапаны сертифицированы, как проверить подлинность сертификатов и чек-лист закупок для B2B-покупателей.',
    href: '/ru/guides/how-to-choose-ul-listed-fire-valves/',
    date: '2026',
    category: 'Противопожарная защита',
    readTime: readTime('7'),
    tags: ['certification', 'fire-protection', 'industrial-valves']
  },
  {
    title: 'Лафетные пожарные стволы: стационарный, дистанционный, умный? (2026)',
    description: 'Когда нужен лафетный ствол: стационарный, дистанционный или авто-наведение; подбор расхода и дальности, интеграция управления и чек-лист по типу объекта.',
    href: '/ru/guides/fire-water-cannon-buying-guide/',
    date: '2026',
    category: 'Противопожарная защита',
    readTime: readTime('6'),
    tags: ['fire-water-cannon', 'fire-protection']
  },
  {
    title: 'Спринклерные системы: мокрая, сухая или преакшн? (2026)',
    description: 'Практическое сравнение систем мокрого, сухого и предварительного действия: подбор оросителей по коэффициенту K, температуре и отклику, компоненты спецификации.',
    href: '/ru/guides/fire-sprinkler-system-wet-dry-preaction/',
    date: '2026',
    category: 'Противопожарная защита',
    readTime: readTime('7'),
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Как выбрать пожарный гидрант для муниципальных и промышленных объектов',
    description: 'Пошаговый гайд по закупкам: типы гидрантов, классы давления, стандарты присоединения, сертификация и чек-лист проверки завода перед оформлением заказа.',
    href: '/ru/guides/how-to-choose-a-fire-hydrant/',
    date: '2026',
    category: 'Противопожарная защита',
    readTime: readTime('8'),
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Задвижка против дискового затвора для противопожарной защиты',
    description: 'Качество перекрытия, габариты установки, потери давления, обслуживание задвижек и дисковых затворов — критерии выбора для трубопроводов противопожарной защиты.',
    href: '/ru/guides/gate-valve-vs-butterfly-valve-fire-protection/',
    date: '2026',
    category: 'Запорная арматура',
    readTime: readTime('7'),
    tags: ['industrial-valves', 'fire-protection']
  },
  {
    title: 'Управляющие клапаны спринклерных систем: OS&Y, дисковые, обратные',
    description: 'Роль задвижек OS&Y, сигнальных дисковых затворов и обратных клапанов в спринклерных системах: таблица сравнения и чек-лист спецификации UL/FM для B2B.',
    href: '/ru/guides/fire-sprinkler-control-valve-types/',
    date: '2026-09',
    category: 'Противопожарная защита',
    readTime: readTime('8'),
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Задвижки с гофрой: фланцевые ANSI-типы для пара и теплоносителя',
    description: 'Принцип двойного уплотнения с приварной гофрой, области применения, стандарты ANSI/GB и чек-лист B2B-спецификации для пара и термического масла.',
    href: '/ru/guides/bellows-seal-gate-valve-guide/',
    date: '2026-09',
    category: 'Запорная арматура',
    readTime: readTime('7'),
    tags: ['industrial-valves', 'bellows-seal-gate-valve']
  },
  {
    title: 'Редукционные клапаны 500X: гидравлический регулятор давления (2026)',
    description: 'Гидравлические саморегулируемые редукционные клапаны: 500X против F745X (уровень) против 100X (поплавковый), монтаж и B2B-чек-лист для сетей водоснабжения.',
    href: '/ru/guides/pressure-reducing-valve-guide/',
    date: '2026-09',
    category: 'Гидравлическая защита',
    readTime: readTime('8'),
    tags: ['backflow-prevention', 'industrial-valves']
  },
  {
    title: 'Обратные клапаны: скользящий шаровой HQ41X против подвесного (2026)',
    description: 'Подвесной против скользящего шарового HQ41X и шарового HQ44X: потери напора, гидравлический удар, закрытие без удара, ориентация монтажа и B2B-чек-лист.',
    href: '/ru/guides/check-valve-types-guide/',
    date: '2026-09',
    category: 'Запорная арматура',
    readTime: readTime('8'),
    tags: ['industrial-valves', 'backflow-prevention']
  },
  {
    title: 'Огнетушители с порошком ABC: руководство по выбору для B2B (2026)',
    description: 'Подбор переносных огнетушителей для экспорта: классы пожаров и огнетушащие вещества, порошковые ABC, ISO 7165 и CCCF, OEM, MOQ, упаковка опасного груза.',
    href: '/ru/guides/fire-extinguisher-selection-guide/',
    date: '2026-09',
    category: 'Противопожарная защита',
    readTime: readTime('8'),
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Плоские пожарные рукава: размеры, оболочки, головки (2026)',
    description: 'Плоские рукава для тушения и перекачки воды: конструкция, герметизация кромок, подбор диаметра и длины, головки Storz/BS336/NIST, насадки, OEM-чек-лист.',
    href: '/ru/guides/fire-hose-buying-guide/',
    date: '2026-09',
    category: 'Противопожарная защита',
    readTime: readTime('8'),
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'Wanlian Fluid vs American AVK: поставщик для вашего проекта 2026',
    description: 'Wanlian Fluid против American AVK для закупок 2026: ассортимент, гидранты AWWA C502, системы качества, стоимость и сроки — что определяет выбор поставщика.',
    href: '/ru/guides/wanlian-fluid-vs-american-avk/',
    date: '2026-09',
    category: 'Закупки B2B',
    readTime: readTime('9'),
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Проверка китайского поставщика клапанов и пожарной техники (2026)',
    description: 'Проверка поставщика из Китая в 5 шагах: ISO 9001, протоколы испытаний по нужному стандарту, независимая инспекция, признаки подделок и импортная документация.',
    href: '/ru/guides/how-to-verify-chinese-valve-supplier/',
    date: '2026-09',
    category: 'Закупки B2B',
    readTime: readTime('7'),
    tags: ['procurement', 'certification']
  },
  {
    title: 'Стандарты гидрантов, рукавов и клапанов: AWWA, NFPA, EN, ISO',
    description: 'AWWA C502/C515, NFPA 1961, EN 14384, BS 750, EN 1074 и ISO 5208 для гидрантов, рукавов и клапанов: 5 проверок при закупке оборудования из Китая.',
    href: '/ru/guides/fire-hydrant-valve-standards-guide/',
    date: '2026-09',
    category: 'Противопожарная защита',
    readTime: readTime('8'),
    tags: ['fire-protection', 'procurement']
  },
  {
    title: 'CE и EN 12845: пожарное оборудование для европейского рынка (2026)',
    description: 'CE и EN 12845 для B2B-покупателей: всасывание насоса, маркировка по моделям, испытания EN 12266-1, соединения Storz/BS336/KWS и границы ISO 7165 против CCCF.',
    href: '/ru/guides/ce-en12845-fire-protection-compliance/',
    date: '2026-09',
    category: 'Противопожарная защита',
    readTime: readTime('8'),
    tags: ['certification', 'fire-protection']
  },
  {
    title: 'Спринклерные оросители: коэффициент K, температура, отклик (2026)',
    description: 'Подбор спринклерных оросителей: коэффициент K (K=80/K=115), температура и цвет колбы, быстрый или стандартный отклик, ориентация, сертификация UL по NFPA 13.',
    href: '/ru/guides/fire-sprinkler-head-selection-guide/',
    date: '2026-09',
    category: 'Противопожарная защита',
    readTime: readTime('8'),
    tags: ['sprinkler-systems', 'fire-protection']
  },
  {
    title: 'Пожарные клапаны с канавочным присоединением: grooved vs flanged',
    description: 'Канавочные клапаны для спринклерных магистралей против фланцевых: сигнальный дисковый затвор, задвижка OS&Y, нержавеющая сталь, соленоиды и B2B-чек-лист.',
    href: '/ru/guides/grooved-fire-protection-valves-guide/',
    date: '2026-09',
    category: 'Противопожарная защита',
    readTime: readTime('8'),
    tags: ['fire-protection', 'industrial-valves']
  },
  {
    title: 'Антифризные и антивандальные гидранты: холодный климат, безопасность',
    description: 'Сухотрубные гидранты с антифризным сливом, антивандальные с разрывным болтом и IoT-модели: защита от замерзания, перекрытие при ударе и B2B-чек-лист.',
    href: '/ru/guides/antifreeze-anti-collision-fire-hydrant-guide/',
    date: '2026-09',
    category: 'Противопожарная защита',
    readTime: readTime('8'),
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Патрубки FDC для пожарных машин: сиамские входы и монтаж (2026)',
    description: 'Патрубки FDC: сдвоенные входы DN65, фланцевый выход DN100, встроенный клапан, головки Storz, монтаж и чек-лист закупки для B2B-проектов.',
    href: '/ru/guides/fire-department-connection-siamese-guide/',
    date: '2026-09',
    category: 'Противопожарная защита',
    readTime: readTime('8'),
    tags: ['fire-hydrant', 'fire-protection']
  },
  {
    title: 'Муниципальная водная и противопожарная инфраструктура в Латинской Америке: руководство по B2B-закупкам (2026)',
    description: 'Покупка гидрантов, задвижек и пожарных рукавов для муниципальной инфраструктуры Латинской Америки: региональные режимы норм, пакеты в одном заказе, спецификация и матрица выбора.',
    href: '/ru/guides/municipal-water-fire-infrastructure-latinamerica/',
    date: '2026-09',
    category: 'Закупки B2B',
    readTime: readTime('8'),
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Требования сертификации противопожарных клапанов и гидрантов в проектах Латинской Америки (2026)',
    description: 'Что означают UL, FM, AWWA, NOM и ABNT в латиноамериканских тендерах, как они выдаются по моделям, как проверить подлинные сертификаты и какую документацию запросить.',
    href: '/ru/guides/latinamerica-certification-requirements-fire-valves/',
    date: '2026-09',
    category: 'Закупки B2B',
    readTime: readTime('8'),
    tags: ['certification', 'procurement', 'industrial-valves']
  },
  {
    title: 'Как обнаружить поддельные клапаны и подделанные сертификаты противопожарного оборудования (2026)',
    description: 'Чек-лист из семи шагов и таблица тревожных признаков: клонированные серийные номера, скопированные таблички, тонкостенные отливки и поддельные сертификаты UL/FM/AWWA при закупке в Китае.',
    href: '/ru/guides/detect-fake-valves-fire-equipment-counterfeits/',
    date: '2026-09',
    category: 'Закупки B2B',
    readTime: readTime('8'),
    tags: ['procurement', 'certification']
  },
  {
    title: 'Wanlian Fluid против AVK Latinoamérica: поставщик клапанов и гидрантов для латиноамериканских проектов (2026)',
    description: 'Wanlian Fluid против AVK Latinoamérica (AVK Válvulas, Таррагона): сеть дистрибуции, ассортимент, пакеты в одном заказе, OEM, структура затрат и сроки — как выбрать для вашего проекта.',
    href: '/ru/guides/wanlian-fluid-vs-avk-latinamerica/',
    date: '2026-09',
    category: 'Закупки B2B',
    readTime: readTime('9'),
    tags: ['procurement', 'fire-hydrant', 'industrial-valves']
  },
  {
    title: 'Цифровой балансировочный клапан HVAC: гид по выбору SP45F',
    description: 'Гид по цифровым балансировочным клапанам HVAC: как контрольные отводы и цифровая блокировка SP45F поддерживают пусконаладку, данные для RFQ и сравнение.',
    href: '/ru/guides/hvac-digital-balancing-valve-guide/',
    date: '2026-09',
    category: 'HVAC и промышленные клапаны',
    readTime: '8 мин чтения',
    tags: ['industrial-valves', 'backflow-prevention']
  },
];
