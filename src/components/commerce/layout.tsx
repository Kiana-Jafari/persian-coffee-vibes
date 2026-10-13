import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ShoppingBag, Menu, X, Phone, Mail, MapPin, ArrowUpLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from './cart-context';
import { number } from '@/data/products';
import { CartDrawer } from './cart';
import logo from '@/assets/cousinroast.webp';
const nav = [
    { href: '/', label: 'خانه' },
    { href: '/#coffee', label: 'قهوه‌ها' },
    { href: '/#contact', label: 'تماس با ما' }
] as const;
export function Wordmark() { return <div dir="ltr" className="brand-logo"><img src={logo} alt="Cousinroast | کازین رست" /></div>; }
export function Header() { const cart = useCart(); const [menu, setMenu] = useState(false); return <><div className="welcome-strip">به فروشگاه خودتون خیلی خوش اومدید!</div><header className="bg-background relative z-20 border-b border-border/50"><div className="container-brand h-22 flex items-center justify-between gap-4"><Link to="/" className="text-primary" aria-label="Cousinroast خانه"><Wordmark /></Link><nav className="hidden md:flex items-center gap-8">{nav.map(n => <a key={n.href} href={n.href} className="nav-link text-foreground">{n.label}</a>)}</nav><div className="flex items-center gap-3"><Button variant="ghost" className="gap-2" aria-label="باز کردن سبد خرید" onClick={() => cart.setOpen(true)}><ShoppingBag className="size-5!" strokeWidth={1.5} /><span className="hidden sm:inline text-xs">سبد خرید</span>{cart.count > 0 && <span className="text-primary text-xs">({number(cart.count)})</span>}</Button><Button variant="ghost" size="icon" className="md:hidden" aria-label="فهرست" aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</Button></div></div>{menu && <nav className="md:hidden container-brand pb-5 flex flex-col">{nav.map(n => <a className="py-3 border-t border-border text-sm" key={n.href} href={n.href} onClick={() => setMenu(false)}>{n.label}</a>)}</nav>}</header><CartDrawer /></>; }
export function Footer() { return <footer className="site-footer pt-10 pb-6"><div className="container-brand footer-inner"><div><Link to="/" className="inline-block"><Wordmark /></Link><p className="text-sm leading-8 mt-4 text-foreground/70">یک انتخاب خوب، یک فنجان خوب.</p></div><div className="space-y-4"><h3 className="text-sm text-primary">در ارتباط باشیم</h3><a href="mailto:commercial@orasiatrade.com?subject=Cousinroast" className="flex items-center gap-3"><Mail size={16} /><span dir="ltr" className="footer-contact">commercial@orasiatrade.com</span></a><a href="tel:+982126761176" className="flex items-center gap-3"><Phone size={16} /><span dir="ltr" className="footer-contact">+98 21 2676 1176</span></a><p className="flex items-center gap-3 text-xs"><MapPin size={15} />ایران، تهران، سعادت‌آباد</p></div></div><div className="container-brand border-t border-border pt-5 mt-8 flex justify-between gap-4 text-[11px] text-muted-foreground"><span dir="ltr">© Cousinroast — Orasia Holding</span><a href="#contact" className="flex gap-2 items-center">Contact Us<ArrowUpLeft size={13} /></a></div></footer>; }
