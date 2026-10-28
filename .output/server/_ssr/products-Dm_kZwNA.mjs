import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as money, l as useCart, o as number, s as products, t as Button, u as weightLabel } from "./button-Dqq508BR.mjs";
import { a as Plus, g as ArrowLeft, s as Minus } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-Dm_kZwNA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WeightSelector({ product, selected, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "weight-selector",
		role: "group",
		"aria-label": `وزن ${product.name}`,
		children: product.variants.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: selected.id === v.id ? "brand" : "outline",
			className: "weight-option",
			"aria-pressed": selected.id === v.id,
			onClick: () => onChange(v),
			children: weightLabel(v.weight)
		}, v.id))
	});
}
function ProductCard({ product, index = 0 }) {
	const [selected, setSelected] = (0, import_react.useState)(product.variants[2]);
	const cart = useCart();
	if (!selected) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "product-card",
		style: { "--reveal-delay": `${index * 110}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "product-image-wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				className: "product-photo",
				width: "1024",
				height: "1024",
				loading: "lazy",
				alt: `بسته قهوه ${product.name} Cousinroast`
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "product-seal",
				children: "COUSINROAST"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "product-card-content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "product-title-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "product-title text-primary",
						children: product.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						size: 17,
						className: "text-primary"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					dir: "ltr",
					className: "product-subtitle",
					children: product.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "product-description",
					children: product.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "weight-label",
					children: "اندازه‌ی بسته"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeightSelector, {
					product,
					selected,
					onChange: setSelected
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "product-price",
					children: money(selected.price)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					className: "w-full rounded-sm h-11 text-sm",
					onClick: () => cart.add(product, selected),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "افزودن به سبد خرید" })]
				})
			]
		})]
	});
}
function ProductGrid({ exclude }) {
	const grid = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const root = grid.current;
		if (!root) return;
		const cards = [...root.querySelectorAll(".product-card")];
		if (!("IntersectionObserver" in window)) {
			cards.forEach((c) => c.classList.add("is-visible"));
			return;
		}
		const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("is-visible");
				observer.unobserve(entry.target);
			}
		}), {
			threshold: .12,
			rootMargin: "0px 0px -35px 0px"
		});
		cards.forEach((c) => observer.observe(c));
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: grid,
		className: "product-grid",
		children: products.filter((p) => p.id !== exclude).map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
			product: p,
			index: i
		}, p.id))
	});
}
function Quantity({ value, change }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center border border-border rounded-sm h-10",
		dir: "ltr",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "h-9 w-9",
				"aria-label": "کاهش تعداد",
				onClick: () => change(value - 1),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-7 text-center text-sm",
				children: number(value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "h-9 w-9",
				"aria-label": "افزایش تعداد",
				disabled: value >= 99,
				onClick: () => change(value + 1),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
			})
		]
	});
}
//#endregion
export { Quantity as n, ProductGrid as t };
