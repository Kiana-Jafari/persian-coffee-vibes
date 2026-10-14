import blend50 from '@/assets/coffee-50-50-brown.webp';
import blend70 from '@/assets/coffee-70-30-olive.webp';
import ethiopia from '@/assets/coffee-ethiopia.webp';
import vietnam from '@/assets/coffee-vietnam-blue.webp';
export type Variant = { id: string; weight: '250g' | '500g' | '1kg'; price: number; available: boolean; stock: number | null };
export type Product = { id: string; name: string; subtitle: string; origin: string; description: string; character: string; use: string; image: string; variants: Variant[] };
const variants = (id: string, price: number): Variant[] => [
    { id: `${id}-250g`, weight: '250g', price: Math.round(price / 4), available: true, stock: null },
    { id: `${id}-500g`, weight: '500g', price: Math.round(price / 2), available: true, stock: null },
    { id: `${id}-1kg`, weight: '1kg', price, available: true, stock: null },
];
export const products: Product[] = [
    { id: 'ethiopia', name: '۱۰۰٪ عربیکا اتیوپی', subtitle: '100% Arabica · Ethiopia', origin: 'اتیوپی', description: 'عربیکای خالص اتیوپی برای کسانی که علاقه دارند ترشی و در عین حال تلخی عربیکا رو تجربه کنن', character: 'عربیکای خالص', use: 'تجربه عربیکا', image: ethiopia, variants: variants('ethiopia', 3900000) },
    { id: 'vietnam', name: '۱۰۰٪ روبوستا ویتنام', subtitle: '100% Robusta · Vietnam', origin: 'ویتنام', description: 'روبوستای خالص ویتنام با بادی قوی‌تر و کافئین بیشتر.', character: 'روبوستای خالص', use: 'بدنه بیشتر', image: vietnam, variants: variants('vietnam', 2900000) },
    { id: '70-30', name: '۷۰ / ۳۰', subtitle: '70% Arabica · 30% Robusta', origin: 'ترکیب بر پایه عربیکا', description: 'سهم بیشتر عربیکا؛ با عطری دلنشین و تعادلی نرم.', character: 'عربیکای بیشتر', use: 'عطر و تعادل', image: blend70, variants: variants('70-30', 3570000) },
    { id: '50-50', name: '۵۰ / ۵۰', subtitle: '50% Arabica · 50% Robusta', origin: 'ترکیب عربیکا و روبوستا', description: 'ترکیبی متعادل برای فنجان روزمره و اسپرسو.', character: 'متعادل و پر‌بدنه', use: 'اسپرسوی روزمره', image: blend50, variants: variants('50-50', 3350000) },
];
export const number = (n: number) => new Intl.NumberFormat('fa-IR').format(n);
export const money = (n: number) => `${number(n)} تومان`;
export const weightLabel = (weight: string) => weight === '1kg' ? '۱ کیلوگرم' : weight === '500g' ? '۵۰۰ گرم' : '۲۵۰ گرم';
export function metadata(title: string, description: string) { const pageTitle = title.toLowerCase() === 'cousinroast | کازین رست' ? title : `${title} | Cousinroast | کازین رست`; return { meta: [{ title: pageTitle }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | Cousinroast` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }
