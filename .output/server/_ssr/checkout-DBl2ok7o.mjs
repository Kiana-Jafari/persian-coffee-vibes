import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as money, c as resolveItem, l as useCart, o as number, r as cn, t as Button, u as weightLabel } from "./button-DjTWGvYk.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as ArrowLeft } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DBl2ok7o.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function Checkout() {
	const cart = useCart();
	const navigate = useNavigate();
	const [customer, setCustomer] = (0, import_react.useState)({
		name: "",
		phone: "",
		address: "",
		notes: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const update = (key, value) => setCustomer((c) => ({
		...c,
		[key]: value
	}));
	function submit(e) {
		e.preventDefault();
		const phone = customer.phone.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/[\s-]/g, "");
		const next = {};
		if (customer.name.trim().length < 3) next.name = "نام و نام خانوادگی را وارد کنید.";
		if (!/^(\+98|0)?9\d{9}$/.test(phone)) next.phone = "شماره موبایل معتبر وارد کنید.";
		if (customer.address.trim().length < 10) next.address = "نشانی کامل را وارد کنید.";
		setErrors(next);
		if (Object.keys(next).length) return;
		cart.confirm(customer);
		navigate({ to: "/order-confirmation" });
	}
	if (!cart.items.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-brand section-space min-h-[60vh]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "page-title text-primary",
			children: "هنوز قهوه‌ای انتخاب نکرده‌اید."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "/#coffee",
				children: ["انتخاب قهوه", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})]
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-brand section-space",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-coffee mb-3",
				children: "انتخاب قهوه ← اطلاعات سفارش ← پیش‌نمایش"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "page-title text-primary mb-6",
				children: "تکمیل سفارش"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-[1.3fr_1fr] gap-12 lg:gap-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					noValidate: true,
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl text-primary",
							children: "اطلاعات شما"
						}),
						[
							"name",
							"phone",
							"address",
							"notes"
						].map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: key,
								className: "block text-sm mb-3",
								children: {
									name: "نام و نام خانوادگی",
									phone: "شماره تماس",
									address: "آدرس",
									notes: "توضیحات سفارش (اختیاری)"
								}[key]
							}),
							key === "address" || key === "notes" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								id: key,
								value: customer[key],
								"aria-invalid": !!errors[key],
								"aria-describedby": errors[key] ? `${key}-error` : void 0,
								onChange: (e) => update(key, e.target.value),
								className: "min-h-28"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: key,
								value: customer[key],
								type: key === "phone" ? "tel" : "text",
								autoComplete: key === "name" ? "name" : "tel",
								dir: key === "phone" ? "ltr" : "rtl",
								"aria-invalid": !!errors[key],
								"aria-describedby": errors[key] ? `${key}-error` : void 0,
								onChange: (e) => update(key, e.target.value),
								className: "h-12"
							}),
							errors[key] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								id: `${key}-error`,
								className: "text-destructive text-xs mt-2",
								children: errors[key]
							})
						] }, key)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "w-full h-12",
							children: ["تأیید پیش‌نمایش سفارش", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl text-primary mb-5",
						children: "خلاصه سفارش"
					}),
					cart.items.map((i) => {
						const r = resolveItem(i);
						if (!r) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 border-b border-border py-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: r.product.image,
								width: "65",
								height: "75",
								className: "w-16 h-20 object-cover",
								alt: r.product.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-primary",
										children: r.product.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground mt-2",
										children: [
											weightLabel(r.variant.weight),
											" · ",
											number(i.quantity),
											" عدد"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-coffee mt-2",
										children: money(r.price * i.quantity)
									})
								]
							})]
						}, i.variantId);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between mt-7 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "جمع محصولات" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-coffee",
							children: money(cart.total)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs leading-7 text-primary mt-5",
						children: "ارسال سفارش شما رایگان است."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "inline-block text-primary text-xs underline mt-5",
						href: "/#coffee",
						children: "بازگشت به انتخاب قهوه"
					})
				] })]
			})
		]
	});
}
//#endregion
export { Checkout as component };
