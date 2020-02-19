import {Product} from './Product';
import {Category} from './Category';

export const categories: Category[] = [
{
  id: 1,
  name: 'Earphones',
  products: [
    {
      id: 1,
      link : 'https://ae01.alicdn.com/kf/HTB1UkNVlMfH8KJjy1zcq6ATzpXaQ.jpg',
      name: 'Philips SHP9500 Профессиональные наушники с 3 м длиной, ' +
        'проводной наушники для xiaomi SamSung S9 S10 MP3 Поддержка официальный проверки',
      description: 'Продукт параметры:\n' +
        '\n' +
        '1. Бренд продукта: Philips\n' +
        '2. Модель продукта: Philips SHP9500\n' +
        '3. Стиль ношения: гарнитура\n' +
        '4. Функциональное использование: музыка, кино и игра\n' +
        '5. Управление проводом: Поддержка\n' +
        '6. Микрофон: Поддержка\n' +
        '7. Функция шумоподавления: Поддержка\n' +
        '8. Разъем для наушников: 3,5 мм разъем\n' +
        '9. Длина провода: 3 метра\n' +
        '10. Цвет: черный',
      rating: 4.9,
      url: 'https://aliexpress.ru/item/32833416556.html?spm=a2g0o.productlist.0.0.49c2511fHDq5Mo&algo_pvid=65c00473-2' +
        '5c2-427c-a98f-df4ef7019c8d&algo_expid=65c00473-25c2-427c-a98f-df4ef7019c8d-2&bts' +
        'id=a82d6215-e8fc-420d-b466-16dd932fcee5&ws_ab_test=searchweb0_0,searchweb201602_3,searchweb201603_53'
    },
    {
      id: 2,
      link : 'https://ae01.alicdn.com/kf/Hcb95465792d14a39ab7698155b0fae51M.jpg',
      name: 'XO S31 проводные наушники супер бас 3,5 мм наушники гарнитура Hands Free наушники' +
        ' с микрофоном для huawei Xiaomi iPhone samsung S4 S5 S6',
      description: 'Бренд: SIMPLE IS BEAUTY XOРазъёмы: 3,5 мм ' +
        'Клавиши управления: Да Активное шумоподавление: Да Конструкция: Вкладыши Способ подключения: Кабельное ' +
        'Тип излучателей: Динамические Регулировка громкости: Нет Тип беспроводной связи: Нет С микрофоном: Нет ' +
        'Номер модели: S31 Сопротивление: 16Ω Диапазон воспроизводимых частот: 20-10000 Гц Назначение: Игровая гарнитура' +
        'Назначение: Универсальные Назначение: Гарнитура для телефона Назначение: Для iPod Чувствительность: 93±5 дБ ' +
        'Защита от влаги: Нет Подключение: Нет Длина кабеля: 1.2 м Форма коннектора: Прямой',
      rating: 5,
      url: 'https://aliexpress.ru/item/4000300570902.html?spm=a2g0o.productlist.0.0.49c2511fHDq5Mo&algo_pvid=65' +
        'c00473-25c2-427c-a98f-df4ef7019c8d&algo_expid=65c00473-25c2-427c-a98f-df4ef70' +
        '19c8d-4&btsid=a82d6215-e8fc-420d-b466-16dd932fcee5&ws_ab_test=searchweb0_0,searchweb201602_3,searchweb201603_53'
    },
    {
      id: 3,
      link: 'https://ae01.alicdn.com/kf/HTB1rWRJXOYrK1Rjy0Fdq6ACvVXan.jpg',
      name: 'Новинка, HUAWEI honor FlyPods, FlyPods Pro, FlyPods Lite, Bluetooth, беспроводные наушники с микрофоном, ' +
        'музыкальная сенсорная Водонепроницаемая динамическая гарнитура',
      description: 'Бренд: Huawei Тип излучателей: Динамические Клавиши управления: Да Активное шумоподавление: Нет ' +
        'Способ подключения: wireless Регулировка громкости: Да Конструкция: Вкладыши Чувствительность: 120±5dBdB ' +
        'Тип беспроводной связи: Bluetooth Подключение: ДаДлина кабеля: Nonem Управление через приложение: Нет' +
        'Назначение: Гарнитура для телефонаНазначение: Универсальные Назначение: Hi-Fi Разъёмы: Нет' +
        'Номер модели: honor FlyPods/FlyPods Pro/FlyPods Lite Поддержка карт памяти: Нет Сопротивление: 32ΩΩ' +
        'Защита от влаги: Да С микрофоном: Да Support Apt-x: No',
      rating: 4.6,
      url: 'https://aliexpress.ru/item/32951276402.html?spm=a2g0o.productlist.0.0.3090511fiuzrQB&algo_pvid=f6c3ab' +
        '1e-0af5-4167-90c5-13dbad482997&algo_expid=f6c3ab1e-0af5-4167-90c5-13dbad482997-0&btsid=0ab6f822158213' +
        '53089171792e50af&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    },
    {
      id: 4,
      link: 'https://ae01.alicdn.com/kf/Hebc62cf2084d467cbcd3cd693b73d0a8x.jpg?width=1000&height=807&hash=1807',
      name: 'Одиночные спортивные наушники с Bluetooth 4,1, S650X, беспроводные наушники с громкой связью, вкладыши, ' +
        'мини наушники с микрофоном, гарнитура для Android Ios PC',
      description: 'Партномер: S650X\n' +
        'Версия Bluetooth: Bluetooth V4.1 + EDR\n' +
        'Расстояние Bluetooth: около 10 м\n' +
        'Время работы: около 4-5 часов\n' +
        'Время зарядки: около 1-2 часов\n' +
        'Время работы в режиме ожидания: около 150 часов\n' +
        'Совместимый телефон: совместим с Android, iOS, microsoft, планшетом, 99% телефона с bluetooth.',
      rating: 4.6,
      url: 'https://aliexpress.ru/item/4000330890347.html?spm=a2g0o.productlist.0.0.3090511fiuzrQB&algo_pvid=f6c3ab1e-0af5-4167-90c5-13db' +
        'ad482997&algo_expid=f6c3ab1e-0af5-4167-90c5-13dbad482997-1&btsid=0ab6f82215821353089171' +
        '792e50af&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    },
    {
      id: 5,
      link: 'https://ae01.alicdn.com/kf/H52034b1c24b34e6286f5d3e660d58feda.jpg',
      name: 'Спортивные Bluetooth наушники CBAOOO k98, беспроводные наушники, bluetooth-гарнитура, водонепроницаемые,' +
        ' шумоподавление с микрофоном для android',
      description: 'Бренд: CBAOOO Разъёмы: Нет Клавиши управления: Да Активное шумоподавление: Нет Конструкция: С заушиной' +
        'Способ подключения: wireless Тип излучателей: Ортодинамические Регулировка громкости: Да Тип беспроводной связи: Bluetooth' +
        'Поддерживаемые аудиокодеки: Apt-X Поддержка карт памяти: Да С микрофоном: Да',
      rating: 4.8,
      url: 'https://aliexpress.ru/item/4000480629025.html?spm=a2g0o.productlist.0.0.3090511fiuzrQB&algo_pv' +
        'id=f6c3ab1e-0af5-4167-90c5-13dbad482997&algo_expid=f6c3ab1e-0af5-4167-90c5-13dbad482997-3&btsid=' +
        '0ab6f82215821353089171792e50af&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
    }
    ],
},
  {
    id: 2,
    name: 'Cups',
    products: [
      {
        id: 1,
        link : 'https://ae01.alicdn.com/kf/HTB1LHjMTwTqK1RjSZPhq6xfOFXay.jpg',
        name: 'Термостойкие стеклянные кофейные/чайные чашки и кружки с двойными стенками, ' +
          'дорожные двойные кофейные кружки с ручкой, чашки для напитков, рюмки es',
        description: 'Бренд: ZCForest Материал: GlassТип: Кофейные кружки Стиль: Креативный Аксессуары: Нет' +
          'Форма: Handgrip Характеристики: 1 Сертификация: Товар соответствует стандартам качества и безопасности Европейского союза' +
          'Сертификация: CIQ Тип Питьевой Посуды: Кружки Номер модели: CB217-CB218-A CB270-CB277 Особенности: Стандартный' +
          'Особенности: Экологичный Capacity: 80ml, 150ml, 180ml, 240ml, 250ml, 350ml',
        rating: 4.8,
        url: 'https://aliexpress.ru/item/33011955802.html?spm=a2g0o.productlist.0.0.7fcd68cbS6YhjW&algo_pvid=3322d72b-39' +
          '7d-480f-b35f-9569672c4f69&algo_expid=3322d72b-397d-480f-b35f-9569672c4f69-1&btsid=18ff1290-66b8-4ea4-a531-110da' +
          '6bc75db&ws_ab_test=searchweb0_0,searchweb201602_3,searchweb201603_53'
      },
      {
        id: 2,
        link: 'https://ae01.alicdn.com/kf/HTB1DvGtdRGE3KVjSZFhq6AkaFXac.jpg',
        name: '1 шт., милая стеклянная чашка для завтрака, кофе, чай, молоко, йогурт, кружка, креативная, Доброе утро, кружка,' +
          ' подарки, 450 мл, стеклянная кофейная кружка, чашка для путешествий',
        description: '1 шт стеклянные чашки 450 мл короткие стильные хорошие утренние стеклянные чашки для ' +
          'завтрака стеклянная посуда прекрасные чашки и кружки для молока смузи посуда для напитков\n' +
          ' \n' +
          'Особенности:\n' +
          ' \n' +
          'Стеклянные чашки высокого качества с хорошей утренней наклейкой.\n' +
          'Ежедневное использование дома/на рабочем месте для кофе, чая, молока и т. д.\n' +
          'Необычная посуда для молока, смузи, воды и т. д.\n' +
          ' \n' +
          'Спецификация:\n' +
          ' \n' +
          'Материал: стекло\n' +
          'Цвет: белый, черный\n' +
          'Размер: диаметр 8,5 см * высота 10,5 см Емкость: 450 мл',
        rating: 4.8,
        url: 'https://aliexpress.ru/item/32901493222.html?spm=a2g0o.productlist.0.0.67af4102YevvZi&algo_pvid=e2990e7a-0' +
          '7f4-41bd-99dd-9c1c8dfc4632&algo_expid=e2990e7a-07f4-41bd-99dd-9c1c8dfc4632-0&btsid=0ab6f81615821359998861635e5' +
          '9f9&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
      },
      {
        id: 3,
        link: 'https://ae01.alicdn.com/kf/HTB1wef_dlCw3KVjSZFlq6AJkFXa1.jpg?width=750&height=500&hash=1250',
        name: 'Кофейные кружки с фламинго, керамическая кружка, чашка для путешествий, милая кошачья лапка, Ins 72*85 мм, 350 мл, H1215',
        description: 'Материал: Керамический Тип керамики: Костяной фарфор Характеристики: 1 Сертификация: Товар соответствует ' +
          'стандартам качества и безопасности Европейского союза Сертификация: CIQ Сертификация: LFGB ' +
          'Сертификация: SGS Стиль: Европа Номер модели: H1215 Аксессуары: Нет Тип: Кофейные кружки Форма: Рукоятка',
        rating: 4.8,
        url: 'https://aliexpress.ru/item/33041172538.html?spm=a2g0o.productlist.0.0.67af4102YevvZi&algo_pvid=e2' +
          '990e7a-07f4-41bd-99dd-9c1c8dfc4632&algo_expid=e2990e7a-07f4-41bd-99dd-9c1c8dfc4632-1&btsid=0ab6f8161' +
          '5821359998861635e59f9&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
      },
      {
        id: 4,
        link: 'https://ae01.alicdn.com/kf/HTB1oTZzbinrK1Rjy1Xcq6yeDVXaj.jpg',
        name: 'OUSSIRRO Корона тема молоко/Кофе Кружки Мультфильм Многоцветный кружки чашки кухонный инструмент подарок X-Mas W3206',
        description: 'Материал: керамика\n' +
          '\n' +
          'Объем: 300 мл\n' +
          '\n' +
          'Вес: 350 г\n' +
          '\n' +
          'Attechment: N/A',
        rating: 1,
        url: 'https://aliexpress.ru/item/32976574732.html?spm=a2g0o.productlist.0.0.67af4102YevvZi&algo_pvid=e2990e7a-07f4-41bd-99' +
          'dd-9c1c8dfc4632&algo_expid=e2990e7a-07f4-41bd-99dd-9c1c8dfc4632-2&btsid=0ab6f81615821359998861635e59f9&ws_ab_test=' +
          'searchweb0_0,searchweb201602_,searchweb201603_'
      },
      {
        id: 5,
        link: 'https://ae01.alicdn.com/kf/He0d7a6b989714fb4be07e441e29dfcdbs.jpg',
        name: 'Викинговая пивная кружка череп рог для напитков Кружка Пивная кружка из нержавеющей стали кофейная кружка чашка ' +
          'Хеллоуин чашка для питья чая пивная бар посуда для напитков подарок',
        description: 'Нержавеющая сталь 3D кружка для питья из смолы череп кружка пиво, кофе, чай чашки паба бар посуда для ' +
          'напитков домашний Декор подарок',
        rating: 4.9,
        url: 'https://aliexpress.ru/item/32975018881.html?spm=a2g0o.productlist.0.0.67af4102YevvZi&algo_pvid=e2990e7a-07f4-41bd-99dd' +
          '-9c1c8dfc4632&algo_expid=e2990e7a-07f4-41bd-99dd-9c1c8dfc4632-3&btsid=0ab6f81615821359998861635e59f9&ws_ab_test=searc' +
          'hweb0_0,searchweb201602_,searchweb201603_'
      }
    ]
  },
  {
    id: 3,
    name: 'Watches',
    products: [
      {
        id: 1,
        link : 'https://ae01.alicdn.com/kf/Hc32ca87132e04eeabf79440868aa3fc52/Casio.jpg',
        name: 'Casio часы наручные часы мужчины лучший бренд роскошные кварцевые часы водонепроницаемые' +
          ' светящиеся мужские часы спортивные военные часы relogio masculino reloj hombre erkek kol saati montre homme zegarek ' +
          'mesk MTP-1375',
        description: 'Бренд: Casio Стиль: Модный и повседневный Тип застежки: Застежка для браслета Глубина водонепроницаемости: 5 Бар',
        rating: 4.9,
        url : 'https://aliexpress.ru/item/32797615793.html?gps-id=6311502&scm=1007.24625.129096.0&scm_id=1007.24625.12' +
          '9096.0&scm-url=1007.24625.129096.0&pvid=8d1144d6-3eb8-442f' +
          '-9ade-63608e474ea9&spm=a2g0o.store_home.fullPieceDiscountPromo_152500359.32797615793'
      },
      {
        id: 2,
        link: 'https://ae01.alicdn.com/kf/HTB1LR5da6nuK1RkSmFPq6AuzFXar.jpg',
        name: 'Новинка 2019 розовые повседневные наручные часы женские часы LED цифровые спортивные мужские наручные часы женские' +
          ' силиконовые часы Reloj Mujer Erkek Kol Saati',
        description: 'Бренд: timarco\n' +
          'Категории часов: мужские и женские\n' +
          'Стиль часов: Модный повседневный роскошный браслет\n' +
          '\n' +
          'Форма циферблата:\n' +
          'Форма циферблата: квадратная\n' +
          'Тип движения: светодиодный дисплей\n' +
          'Тип дисплея: светодиодный цифровой\n' +
          '\n' +
          'Ширина ремешка:\n' +
          'Материал браслета: силикон\n' +
          'Тип застежки: Пряжка\n' +
          '\n' +
          'Размер и вес:\n' +
          '\n' +
          'Длина ремешка: 24 см\n' +
          'Диаметр циферблата: 4,0 см\n' +
          'Толщина циферблата: 9 мм\n' +
          'Ширина ремешка: 2,1 см',
        rating: 4.5,
        url: 'https://aliexpress.ru/item/32985179258.html?spm=a2g0o.productlist.0.0.6de318de4UDEDD&algo_pvid=4caa578a-0871-4408-839f' +
          '-7d4a114338a4&algo_expid=4caa578a-0871-4408-839f-7d4a114338a4-14&btsid=0ab6f83115821365574082592e2611&ws_ab_test' +
          '=searchweb0_0,searchweb201602_,searchweb201603_'
      },
      {
        id: 3,
        link: 'https://ae01.alicdn.com/kf/HTB1XseWSFXXXXarXFXXq6xXFXXXO.jpg?' +
          'size=116858&height=567&width=750&hash=d439bd6b1081d4cdfcd9e6d8378a88bb',
        name: 'Мужские часы военные водонепроницаемые SMAEL спортивные часы армейские светодиодные цифровые ' +
          'секундомеры для запястья для мужчин 1802 relogio masculino часы',
        description: 'Бренд: SMAEL Материал корпуса: Пластик Длина ремешка: 22cm Глубина водонепроницаемости: 5 Бар ' +
          'Стиль: Спорт Механизм часов: Цифровой Тип застежки: Пряжка Форма корпуса: Круглый Ширина браслета: 22mm ' +
          'Чехол толщина: 19mm Тип материала окошка цифер блата: Акриловый Особенности: Полный календарь Особенности: Ударопрочный' +
          'Особенности: Секундомер',
        rating: 4.7,
        url: 'https://aliexpress.ru/item/33002063848.html?spm=a2g0o.productlist.0.0.6de318de4UDEDD&s=p&algo_pvid=4caa57' +
          '8a-0871-4408-839f-7d4a114338a4&algo_expid=4caa578a-0871-4408-839f-7d4a114338a4-17&btsid=0ab6f8311582136557408259' +
          '2e2611&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
      },
      {
        id: 4,
        link: 'https://ae01.alicdn.com/kf/Hc93fefe8c7d54bddaefb94630a8035997.jpg',
        name: 'Подарок алмаз DZ digite мужские часы Rlo dz Авто Дата Неделя дисплей светящиеся часы для дайверов ' +
          'нержавеющая сталь наручные мужские часы',
        description: 'Диаметр см: 45\n' +
          'Размер ремешка часов см: Длинна х ширина: 23*2,5\n' +
          'Особенности часов: Водонепроницаемость, календарь\n' +
          'Подходящий Случай и стиль:\n' +
          'Деловая Повседневная, крутой большой циферблат, Европейский стиль, двойная зона, красные часы, с календарем ' +
          'водонепроницаемые стальные часы.',
        rating: 4.5,
        url: 'https://aliexpress.ru/item/10000033588009.html?spm=a2g0o.productlist.0.0.6de318de4UDEDD&algo_pvid=4caa578a-087' +
          '1-4408-839f-7d4a114338a4&algo_expid=4caa578a-0871-4408-839f-7d4a114338a4-19&btsid=0ab6f83115821365574082592e2' +
          '611&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
      },
      {
        id: 5,
        link: 'https://ae01.alicdn.com/kf/HTB1F1YbBNuTBuNkHFNRq6A9qpXa7.jpg',
        name: 'Новые модные женские часы с красным кожаным ремешком, кварцевые наручные часы для девушек и девушек, ' +
          'повседневные часы, наручные часы, Reloj Mujer, Прямая поставка',
        description: 'Бренд: Timarco\n' +
          '\n' +
          'Одежда для девочек\n' +
          'Стиль часов: Модный повседневный роскошный браслет\n' +
          'Циферблат часов:\n' +
          'Форма циферблата: круглая\n' +
          'Тип механизма: кварцевый\n' +
          'Тип дисплея: указатель\n' +
          'Ремешок часов:\n' +
          'Материал ремешка: кожа\n' +
          'Тип застежки: Пряжка\n' +
          'Размер\n' +
          'Длина ремешка: 24 см\n' +
          'Диаметр циферблата: 4,0 см\n' +
          'Толщина циферблата: 0,6 см\n' +
          'Ширина ремешка: 2,0 см',
        rating: 4.5,
        url: 'https://aliexpress.ru/item/32909016045.html?spm=a2g0o.productlist.0.0.6de318de4UDEDD&algo_pvid=4caa578a-0871' +
          '-4408-839f-7d4a114338a4&algo_expid=4caa578a-0871-4408-839f-7d4a114338a4-12&btsid=0ab6f83115821365574082592e' +
          '2611&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
      },
    ]
  },
  {
    id: 4,
    name: 'Mobile phones',
    products: [
      {
        id: 1,
        link : 'https://ae01.alicdn.com/kf/HTB1dJU3OXXXXXcBXpXXq6xXFXXXM.jpg',
        name: 'Оригинальный Apple iPhone 7/7 Plus четырехъядерный мобильный телефон 12.0MP ' +
          'камера IOS LTE 4G отпечаток пальца используется смартфон',
        description: 'Бренд: Apple Модель Apple: IPhone 7 Аккумулятор: Несъёмный Встроенная память: 32 ГБ ' +
          'Коэффициент оптического увеличения: Нет' +
          'Состояние товара: Бывший в употреблении Операционная система: iOS Разрешение дисплея: 1334x750 ' +
          'Количество задних камер: 1 Биометрические технологии: Сканер отпечатка пальца Интерфейс зарядного устройства: Linghting ' +
          'Разрешение фронтальной камеры: Другое Поддержка беспроводной зарядки: Нет Время работы в режиме ожидания: До 200 часов ' +
          'Количество фронтальных камер: 1 Разрешение основной камеры: Другое Ёмкость аккумулятора (мАч): 1960mAhФорм-фактор: BAR ' +
          'Поддержка быстрой зарядки: Нет Количество SIM-карт: 1 Тип телефона: Смартфон Размер экрана, дюймов: 4,7 ' +
          'Порт для наушников 3,5 мм: Нет Форма экрана: Стандартный Тип сенсорного экрана: Ёмкостный Язык интерфейса: Норвежский' +
          'Язык интерфейса: Русский Язык интерфейса: Итальянский Язык интерфейса: Немецкий Язык интерфейса: French Язык интерфейса: ' +
          'ИспанскийЯзык интерфейса: Польский Язык интерфейса: Турецкий Язык интерфейса: Португальский Язык интерфейса: ' +
          'Английский Язык интерфейса: ' +
          'ЯпонскийЯзык интерфейса: АрабскийЯзык интерфейса: Корейский Оперативная память: 2 ГБ Стандарты сотовой связи: 4G (LTE)' +
          'Без привязки к оператору: ДаТип матрицы: LCDНачало продаж: 2016CPU: A10',
        rating: 4.6,
        url: 'https://aliexpress.ru/item/32832574462.html?spm=a2g0o.productlist.0.0.140030b0X' +
          'Xfa6P&algo_pvid=ef521025-7396-44a3-9a6e-7d1dbd83cad2&algo_expid=ef521025-7396' +
          '-44a3-9a6e-7d1dbd83cad2-0&btsid=d79458b1-b480-49bd-af2a-e1d5da570ce6&ws_ab_test=searchweb0_0,searchweb20160' +
          '2_3,searchweb201603_53'
      },
      {
        id: 2,
        link: 'https://ae01.alicdn.com/kf/HTB1VdqJbwaH3KVjSZFjq6AFWpXab.jpg',
        name: 'Xiaomi Redmi 7A смартфон с большим аккумулятором, ОЗУ 2 Гб, ПЗУ 16 ГБ, 4000 мАч, полноразмерный экран 5,45 дюйма,' +
          ' Восьмиядерный процессор Snapdargon 439, камера 13 МП + 5 МП',
        description: 'Snapdragon 8-ядерный высокопроизводительный процессор, самая высокая частота 2,0 ГГц/4000 мА/ч, длительное ' +
          'время работы от аккумулятора, стандартный 10 Вт Зарядное устройство/крупный шрифт, большой объем "блок управления, ' +
          'беспроводной радио/Водонепроницаемость в течение всего срока эксплуатации',
        rating: 4.9,
        url: 'https://aliexpress.ru/item/4000010424465.html?spm=a2g0o.productlist.0.0.3d546e91DwmyIR&algo_pvid=759324d2-f904-47ff-80cd-32' +
          '18b39499cf&algo_expid=759324d2-f904-47ff-80cd-3218b39499cf-3&btsid=0ab6fb8315821373560092705e8786&ws_ab_test=searchweb0_0,s' +
          'earchweb201602_,searchweb201603_'
      },
      {
        id: 3,
        link: 'https://ae01.alicdn.com/kf/H022dc579843c445a91820b55df2830e9e.jpg',
        name: 'Xiaomi Redmi Note 8 с глобальной прошивкой, 4 Гб ОЗУ, 64 Гб ПЗУ, Note8, 48мп Четырехъядерный Смартфон ' +
          'Snapdragon 665, четыре ядра, версия 6,3 дюйма',
        description: 'Камера заднего вида Redmi Note 8, 48MP Quad\n' +
          'Процессор:Восьмиядерный процессор Snapdragon 665, графический процессор Adreno™ 610\n' +
          'Экран:Экран 6,3 \'\'2340x1080 P FHD + 19,5: 9\n' +
          'Оперативная память + Встроенная память:4 Гб + 64 ГБ\n' +
          'Камера:Камера заднего вида 48MP + 8MP + 2MP + 2MP Quad, фронтальная камера 13MP',
        rating: 4.8,
        url: 'https://aliexpress.ru/item/4000216485473.html?spm=a2g0o.productlist.0.0.3d546e91DwmyIR&algo_pvid=759324d2-f904-47ff-8' +
          '0cd-3218b39499cf&algo_expid=759324d2-f904-47ff-80cd-3218b39499cf-7&btsid=0ab6fb8315821373560092705e8786&ws_ab_test=se' +
          'archweb0_0,searchweb201602_,searchweb201603_'
      },
      {
        id: 4,
        link: 'https://ae01.alicdn.com/kf/Hc0224051700e40d280a45ac69142d5b7r.jpg',
        name: 'Мобильный телефон samsung Galaxy A20s, 6,5 дюймов, OctaCore, 4 ГБ, 64 ГБ, тройная задняя камера, 4000 мАч, ' +
          'быстрая зарядка, 4G, смартфоны на Android 9,0',
        description: 'Процессор ----------Устройство, док-станция Qualcomm Snapdragon 450 Octa Core\n' +
          '  Экран -------6,5 ”Infinity-V TFT\n' +
          '  Ram rom-4 Гб 64 Гб; ПоддержкаMicroSD (до 512 ГБ)\n' +
          '  Камера ------ 13 МП + 5 Мп + 8 МПКамера заднего вида, фронтальная камера 8 МП\n' +
          '  Аккумулятор ------ 4000 мАч с быстрой зарядкой\n' +
          '   OS --- Android;Samsung одного интерфейса;',
        rating: 4.9,
        url: 'https://aliexpress.ru/item/4000283619916.html?spm=a2g0o.productlist.0.0.3e8956dc22EfAc&algo_pvid=e6084e13-98f7' +
          '-4419-b347-87e286906116&algo_expid=e6084e13-98f7-4419-b347-87e286906116-2&btsid=0ab6d59515821375602691566e1119' +
          '&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_'
      },
      {
        id: 5,
        link: 'https://ae01.alicdn.com/kf/Hc7fe003b9b4e4985a5847ad08134317dV.jpg',
        name: 'Lenovo Z6 с глобальной прошивкой, 6 ГБ, 64 ГБ, 128G/8G, 128G, Смартфон Snapdragon 730, четыре ядра, мобильный' +
          ' телефон, 6,39 дюймов, OLED, четыре камеры, 4000 мАч',
        description: 'ЦП ---------- Восьмиядерный процессор Snapdragon 730 до 2,2 ГГц 8 нм\n' +
          'Экран -------- 6,39 дюймовый OLED Corning Gorilla glass экран, 2340x1080 FHD полный дисплей\n' +
          'ОС ------------- ZUI 10 (на базе Android P)\n' +
          'Ram + rom --- 6 ГБ/8 ГБ + 64 Гб/128 ГБ (максимальная поддержка 512 Гб TF карты)\n' +
          'Камера ------- фронтальная камера 16.0MP, задняя камера 24.0MP (IMX576) + 8.0MP + 5.0MP AI Тройная камера\n' +
          'Аккумулятор ------- 4000 мАч (тип)',
        rating: 5,
        url: 'https://aliexpress.ru/item/4000459609262.html?spm=a2g0o.productlist.0.0.59a75f72yYbir6&algo_pvid=0c4a09e7-c82e-4' +
          '8f2-b8bc-95018159e9f5&algo_expid=0c4a' +
          '09e7-c82e-48f2-b8bc-95018159e9f5-1&btsid=0ab6d70515821376576702337e33b0&ws_ab_test=searchweb0_' +
          '0,searchweb201602_,searchweb201603_'
      }
    ]
  }
];
