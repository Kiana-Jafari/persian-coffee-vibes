import { ArrowLeft, Coffee, Leaf, Truck, Headphones, Mail, Phone } from 'lucide-react';
import hero from '@/assets/hero.webp';
import { ProductGrid } from './products';
const contactEmail = 'sales@cousinroast.shop';
export function Hero() { return <section className="hero"><img className="hero-photo" src={hero} alt="بسته‌بندی قهوه Cousinroast" width="1536" height="1024" fetchPriority="high" /><div className="container-brand hero-inner"><div className="hero-copy"><h1>قهوه‌ای که بر اساس <br />ذائقه شما رست شده</h1><p className="hero-description">چه برای اسپرسو، چه برای شروع روز؛<br className="desktop-break" /> ترکیب مناسب خودت رو از میان دانه‌های Cousinroast انتخاب کن.</p><div className="hero-actions"><a href="#coffee" className="hero-button hero-button-primary">مشاهده قهوه‌ها <ArrowLeft size={17} /></a><a href="#about" className="hero-button hero-button-secondary">داستان ما</a></div></div></div></section >; }
export function Values() { const values = [{ Icon: Coffee, title: 'ترکیب‌های متنوع', sub: 'از عربیکای خالص تا ترکیبی متعادل' }, { Icon: Leaf, title: 'انتخاب بر اساس ذائقه', sub: 'برای فنجان دلخواه شما' }, { Icon: Truck, title: 'ارسال رایگان', sub: 'برای سفارش‌های شما' }, { Icon: Headphones, title: 'پشتیبانی مستقیم', sub: 'پاسخ‌گوی پرسش‌های شما' }]; return <div className="values-strip"><div className="container-brand values-grid">{values.map(({ Icon, title, sub }) => <div key={title} className="value-item"><Icon size={25} strokeWidth={1.3} className="text-primary shrink-0" /><div><p className="value-title">{title}</p><p className="value-subtitle">{sub}</p></div></div>)}</div></div>; }
export function CatalogSection() { return <section id="coffee" className="container-brand section-space catalog-section"><div className="catalog-heading"><div><h1 className="eyebrow">انتخاب شما</h1><h2 className="section-heading text-primary">قهوه‌های کازین رست</h2><p className="catalog-intro">چهار ترکیب در سه بسته‌بندی با اندازه‌ های مختلف</p></div><span className="catalog-stamp">ROASTED<br />WITH CARE</span></div><ProductGrid /></section>; }
export function AboutBand() { return <section id="about" className="about-band"><div className="container-brand about-inner"><div><h1 className="eyebrow">داستان ما</h1><h2 className="section-heading text-primary">از شناخت ذائقه تا فنجان شما</h2><p className="about-signature">Cousinroast، برندی زیرمجموعه‌ی Orasia Holding</p></div><div className="about-copy"><p>داستان کازین رست از تجربه‌ی فروش داخلی قهوه در اوراسیا شروع شد؛ از یک تیم جوان و باانگیزه که قدم‌به‌قدم در بازارهای محلی یاد گرفت کیفیت واقعی فقط به خود محصول محدود نیست. کیفیت یعنی شناخت سلیقه‌ی آدم‌ها، توجه به نیازشان و پیدا کردن قهوه‌ای که با لحظه‌ها و عادت‌های روزمره‌شان جور دربیاید.</p><p>این شناخت با حضور مستقیم اعضای تیم در بازار شکل گرفت؛ از بازاریابی و فروش تا همراهی مشتری‌ها و شنیدن بازخوردشان. برای ما، انتخاب هر دانه و هر ترکیب بخشی از همین مسیر یادگیری است: به‌جای اینکه قهوه را فقط یک کالا ببینیم، به تجربه‌ای فکر می‌کنیم که قرار است در فنجان شما ساخته شود.</p><p>کازین رست، زیرمجموعه‌ی <strong>Orasia Holding</strong>، با همین نگاه تلاش می‌کند ترکیب‌هایی با هویت روشن و کیفیت قابل‌اعتماد ارائه کند؛ از عربیکای خالص تا ترکیب های منحصربه فرد شما. هدف ما ساده است: تأمین قهوه ای که حال خوب برای شما به ارمغان می آورد</p></div></div></section>; }
export function ContactSection() {
    return (
        <section id="contact" className="contact-band">
            <div className="container-brand contact-inner">
                <div>
                    <p className="eyebrow">در ارتباط باشیم</p>

                    <h2 className="section-heading text-primary">
                        سؤالی دارید؟ با ما صحبت کنید.
                    </h2>

                    <p className="contact-copy">
                        برای پرسش درباره‌ی محصولات، سفارش یا همکاری، از طریق ایمیل با تیم
                        Cousinroast در ارتباط باشید.
                    </p>
                </div>

                <div className="contact-methods">
                    <a
                        className="contact-email"
                        href={`mailto:${contactEmail}?subject = ${encodeURIComponent('پیام به Cousinroast')} `}
                    >
                        <Mail size={20} />
                        <span dir="ltr">{contactEmail}</span>
                        <ArrowLeft size={17} />
                    </a>

                    <div className="contact-phones" dir="ltr">
                        <Phone size={20} className="contact-phone-icon" />

                        <div className="contact-phone-list">
                            <div className="contact-phone-item">
                                <span>نمایندگی اهواز و جنوب کشور</span>
                                <a href="tel:+989330439232">+98 933 043 9232</a>
                            </div>

                            <div className="contact-phone-item">
                                <span>نمایندگی تهران و مازندران</span>
                                <a href="tel:+989190466275">+98 919 046 6275</a>
                            </div>

                            <div className="contact-phone-item">
                                <span>فروش و پشتیبانی</span>
                                <a href="tel:+989120517153">+98 912 051 7153</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}