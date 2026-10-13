import { createFileRoute } from '@tanstack/react-router';
import { metadata } from '@/data/products';
import { Hero, Values, CatalogSection, AboutBand, ContactSection } from '@/components/commerce/editorial';
export const Route = createFileRoute('/')({ head:()=>metadata('cousinroast | کازین رست','قهوه‌های Cousinroast؛ چهار ترکیب در اندازه‌های ۲۵۰ گرم، ۵۰۰ گرم و یک کیلوگرم.'), component:Index });
function Index(){return <><Hero/><Values/><CatalogSection/><AboutBand/><ContactSection/></>; }
