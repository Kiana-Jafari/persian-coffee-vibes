import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { products, type Product, type Variant } from '@/data/products';
export type CartItem = { productId: string; variantId: string; quantity: number };
export type Customer = { name: string; phone: string; address: string; notes: string };
export type OrderPreview = { id: string; customer: Customer; items: CartItem[]; total: number };
type CartContextValue = { items: CartItem[]; open: boolean; setOpen: (v: boolean) => void; add: (p: Product, v: Variant, quantity?: number) => void; update: (id: string, quantity: number) => void; total: number; count: number; order: OrderPreview | null; confirm: (c: Customer) => void };
const CartContext = createContext<CartContextValue | null>(null);
export function resolveItem(item: CartItem) { const product = products.find(p => p.id === item.productId); const variant = product?.variants.find(v => v.id === item.variantId); return product && variant && variant.price !== null ? { product, variant, price: variant.price } : null; }
export function CartProvider({ children }: { children: ReactNode }) {
 const [items, setItems] = useState<CartItem[]>([]); const [open, setOpen] = useState(false); const [order, setOrder] = useState<OrderPreview | null>(null); const [ready, setReady] = useState(false);
 useEffect(() => { try { const saved = JSON.parse(sessionStorage.getItem('cousinroast-cart') || '[]'); if (Array.isArray(saved)) setItems(saved.filter(i => resolveItem(i) && Number.isInteger(i.quantity) && i.quantity > 0 && i.quantity <= 99)); const preview = JSON.parse(sessionStorage.getItem('cousinroast-preview') || 'null'); if(preview?.customer && Array.isArray(preview.items)) setOrder(preview); } catch {} setReady(true); }, []);
 useEffect(() => { if(ready) sessionStorage.setItem('cousinroast-cart', JSON.stringify(items)); }, [items, ready]);
 const total = items.reduce((sum, i) => sum + (resolveItem(i)?.price || 0) * i.quantity, 0);
 const add = (p: Product, v: Variant, quantity = 1) => { if(!v.available || v.price === null) return; setItems(old => { const found = old.find(i => i.variantId === v.id); return found ? old.map(i => i.variantId === v.id ? { ...i, quantity: Math.min(99,i.quantity+quantity) } : i) : [...old, { productId: p.id, variantId: v.id, quantity }]; }); setOpen(true); };
 const update = (id: string, quantity: number) => setItems(old => quantity <= 0 ? old.filter(i => i.variantId !== id) : old.map(i => i.variantId === id ? { ...i, quantity: Math.min(quantity,99) } : i));
 const confirm = (customer: Customer) => { const preview = { id: 'PREVIEW', customer, items: [...items], total }; setOrder(preview); sessionStorage.setItem('cousinroast-preview', JSON.stringify(preview)); setItems([]); };
 return <CartContext.Provider value={{ items, open, setOpen, add, update, total, count: items.reduce((s,i)=>s+i.quantity,0), order, confirm }}>{children}</CartContext.Provider>;
}
export function useCart() { const value = useContext(CartContext); if(!value) throw new Error('CartProvider is required'); return value; }
