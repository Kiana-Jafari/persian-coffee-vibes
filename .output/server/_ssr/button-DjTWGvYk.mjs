import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { l as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-DjTWGvYk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var coffee_50_50_brown_default = "/assets/coffee-50-50-brown-C9Fz3tnB.webp";
var coffee_70_30_olive_default = "/assets/coffee-70-30-olive-BV13wBnh.webp";
var coffee_ethiopia_default = "/assets/coffee-ethiopia-lhDVGg__.webp";
var coffee_vietnam_blue_default = "/assets/coffee-vietnam-blue-mqO-cfGc.webp";
var variants = (id, price) => [
	{
		id: `${id}-250g`,
		weight: "250g",
		price: Math.round(price / 4),
		available: true,
		stock: null
	},
	{
		id: `${id}-500g`,
		weight: "500g",
		price: Math.round(price / 2),
		available: true,
		stock: null
	},
	{
		id: `${id}-1kg`,
		weight: "1kg",
		price,
		available: true,
		stock: null
	}
];
var products = [
	{
		id: "ethiopia",
		name: "۱۰۰٪ عربیکا اتیوپی",
		subtitle: "100% Arabica · Ethiopia",
		origin: "اتیوپی",
		description: "عربیکای خالص اتیوپی برای علاقه‌مندان به شخصیت عربیکا.",
		character: "عربیکای خالص",
		use: "تجربه عربیکا",
		image: coffee_ethiopia_default,
		variants: variants("ethiopia", 39e5)
	},
	{
		id: "vietnam",
		name: "۱۰۰٪ روبوستا ویتنام",
		subtitle: "100% Robusta · Vietnam",
		origin: "ویتنام",
		description: "روبوستای خالص ویتنام با بدنه قوی‌تر و کافئین بیشتر.",
		character: "روبوستای خالص",
		use: "بدنه بیشتر",
		image: coffee_vietnam_blue_default,
		variants: variants("vietnam", 29e5)
	},
	{
		id: "70-30",
		name: "۷۰ / ۳۰",
		subtitle: "70% Arabica · 30% Robusta",
		origin: "ترکیب بر پایه عربیکا",
		description: "سهم بیشتر عربیکا؛ با عطری دلنشین و تعادلی نرم.",
		character: "عربیکای بیشتر",
		use: "عطر و تعادل",
		image: coffee_70_30_olive_default,
		variants: variants("70-30", 357e4)
	},
	{
		id: "50-50",
		name: "۵۰ / ۵۰",
		subtitle: "50% Arabica · 50% Robusta",
		origin: "ترکیب عربیکا و روبوستا",
		description: "ترکیبی متعادل برای فنجان روزمره و اسپرسو.",
		character: "متعادل و پر‌بدنه",
		use: "اسپرسوی روزمره",
		image: coffee_50_50_brown_default,
		variants: variants("50-50", 335e4)
	}
];
var number = (n) => new Intl.NumberFormat("fa-IR").format(n);
var money = (n) => `${number(n)} تومان`;
var weightLabel = (weight) => weight === "1kg" ? "۱ کیلوگرم" : weight === "500g" ? "۵۰۰ گرم" : "۲۵۰ گرم";
function metadata(title, description) {
	return { meta: [
		{ title: title.toLowerCase() === "cousinroast | کازین رست" ? title : `${title} | Cousinroast | کازین رست` },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: `${title} | Cousinroast`
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] };
}
var CartContext = (0, import_react.createContext)(null);
function resolveItem(item) {
	const product = products.find((p) => p.id === item.productId);
	const variant = product?.variants.find((v) => v.id === item.variantId);
	return product && variant && variant.price !== null ? {
		product,
		variant,
		price: variant.price
	} : null;
}
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [order, setOrder] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const saved = JSON.parse(sessionStorage.getItem("cousinroast-cart") || "[]");
			if (Array.isArray(saved)) setItems(saved.filter((i) => resolveItem(i) && Number.isInteger(i.quantity) && i.quantity > 0 && i.quantity <= 99));
			const preview = JSON.parse(sessionStorage.getItem("cousinroast-preview") || "null");
			if (preview?.customer && Array.isArray(preview.items)) setOrder(preview);
		} catch {}
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (ready) sessionStorage.setItem("cousinroast-cart", JSON.stringify(items));
	}, [items, ready]);
	const total = items.reduce((sum, i) => sum + (resolveItem(i)?.price || 0) * i.quantity, 0);
	const add = (p, v, quantity = 1) => {
		if (!v.available || v.price === null) return;
		setItems((old) => {
			return old.find((i) => i.variantId === v.id) ? old.map((i) => i.variantId === v.id ? {
				...i,
				quantity: Math.min(99, i.quantity + quantity)
			} : i) : [...old, {
				productId: p.id,
				variantId: v.id,
				quantity
			}];
		});
		setOpen(true);
	};
	const update = (id, quantity) => setItems((old) => quantity <= 0 ? old.filter((i) => i.variantId !== id) : old.map((i) => i.variantId === id ? {
		...i,
		quantity: Math.min(quantity, 99)
	} : i));
	const confirm = (customer) => {
		const preview = {
			id: "PREVIEW",
			customer,
			items: [...items],
			total
		};
		setOrder(preview);
		sessionStorage.setItem("cousinroast-preview", JSON.stringify(preview));
		setItems([]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value: {
			items,
			open,
			setOpen,
			add,
			update,
			total,
			count: items.reduce((s, i) => s + i.quantity, 0),
			order,
			confirm
		},
		children
	});
}
function useCart() {
	const value = (0, import_react.useContext)(CartContext);
	if (!value) throw new Error("CartProvider is required");
	return value;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			brand: "bg-primary text-primary-foreground hover:bg-primary/90",
			hero: "bg-background text-forest hover:bg-background/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { money as a, resolveItem as c, metadata as i, useCart as l, CartProvider as n, number as o, cn as r, products as s, Button as t, weightLabel as u };
