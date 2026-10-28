import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as money, c as resolveItem, l as useCart, o as number, t as Button, u as weightLabel } from "./button-Dqq508BR.mjs";
import { g as ArrowLeft, m as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-confirmation-C8-iUYqx.js
var import_jsx_runtime = require_jsx_runtime();
function Confirmation() {
	const { order } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "container-brand section-space min-h-[65vh]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				size: 45,
				strokeWidth: 1,
				className: "text-primary mb-6"
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "page-title text-primary",
				children: order ? "پیش‌نمایش سفارش شما آماده است" : "هنوز پیش‌نمایشی ثبت نشده است"
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground leading-8 mt-4",
				children: "این تأیید فقط برای پیش‌نمایش است. سفارش واقعی ثبت نشده و هیچ پرداختی انجام نشده است."
			}),
				order && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
					children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-6",
						children: "شماره سفارش: — (پیش‌نمایش)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-y border-border my-7 py-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: order.customer.name
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							dir: "ltr",
							className: "text-right text-sm mt-3",
							children: order.customer.phone
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-8 mt-3",
							children: order.customer.address
						}),
							order.customer.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm mt-2",
								children: order.customer.notes
							})
						]
					}),
						order.items.map((i) => {
							const r = resolveItem(i);
							return r ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-3 py-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									children: [
										r.product.name,
										" · ",
										weightLabel(r.variant.weight),
										" · ",
										number(i.quantity),
										" عدد"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-coffee",
									children: money(r.price * i.quantity)
								})]
							}, i.variantId) : null;
						}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between border-t border-border pt-5 mt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "جمع محصولات" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-coffee",
								children: money(order.total)
							})]
						}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-8 text-muted-foreground mt-7",
							children: "برای پیگیری یا هماهنگی سفارش واقعی، از طریق ایمیل sales@cousinroast.shop با تیم Cousinroast در ارتباط باشید."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/#coffee",
						children: ["بازگشت به قهوه‌ها", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})]
					})
				})
			]
		})
	});
}
//#endregion
export { Confirmation as component };
