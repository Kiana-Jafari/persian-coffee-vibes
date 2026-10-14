import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as money, c as resolveItem, i as metadata, l as useCart, n as CartProvider, o as number, r as cn, t as Button, u as weightLabel } from "./button-DjTWGvYk.mjs";
import { G as redirect, _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Menu, g as ArrowLeft, h as ArrowUpLeft, i as ShoppingBag, l as MapPin, o as Phone, r as Trash2, t as X, u as Mail } from "../_libs/lucide-react.mjs";
import { n as Quantity } from "./products-DbiHNIPH.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D8aACdFB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Dn6wkM4j.css";
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-scrim data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: {
		side: {
			top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
			bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
			left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
			right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
		}
	},
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)(SheetPortal, {
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		ref,
		className: cn(sheetVariants({ side }), className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		}), children]
	})]
}));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */(0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function CartContents({ compact = false }) {
	const cart = useCart();
	return cart.items.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col h-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1",
			children: cart.items.map((item) => {
				const resolved = resolveItem(item);
				if (!resolved) return null;
				const { product, variant, price } = resolved;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4 py-5 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						width: "80",
						height: "90",
						className: "w-20 h-24 object-cover",
						alt: product.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-primary text-sm font-medium",
							children: product.name
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground mt-2",
							children: [
								weightLabel(variant.weight),
								" · ",
								money(price)
							]
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between items-center mt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quantity, {
								value: item.quantity,
								change: (n) => cart.update(variant.id, n)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "ghost",
								size: "icon",
								"aria-label": `حذف ${product.name}`,
								onClick: () => cart.update(variant.id, 0),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { size: 16 })
							})]
						}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-coffee mt-3",
							children: money(price * item.quantity)
						})
						]
					})]
				}, variant.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between mb-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "جمع سبد خرید" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-coffee font-medium",
					children: money(cart.total)
				})]
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-7 text-primary mb-5",
				children: "ارسال سفارش رایگان است."
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "w-full h-11",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/checkout",
					onClick: () => cart.setOpen(false),
					children: ["ادامه سفارش", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})]
				})
			})
			]
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
			className: "mx-auto size-10 text-primary mb-6",
			strokeWidth: 1
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl mb-4",
			children: "سبد خرید شما خالی است"
		}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "/#coffee",
				onClick: () => cart.setOpen(false),
				children: ["انتخاب قهوه", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})]
			})
		})
		]
	});
}
function CartDrawer() {
	const cart = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: cart.open,
		onOpenChange: cart.setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			side: "left",
			className: "w-full sm:max-w-md flex flex-col",
			dir: "rtl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
				className: "text-right mt-4",
				children: "سبد خرید شما"
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetDescription, {
				className: "text-right",
				children: "انتخاب‌های شما از Cousinroast"
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContents, { compact: true })
			})
			]
		})
	});
}
var cousinroast_default = "/assets/cousinroast-nA8IdXmz.webp";
var nav = [
	{
		href: "/",
		label: "خانه"
	},
	{
		href: "/#coffee",
		label: "قهوه‌ها"
	},
	{
		href: "/#contact",
		label: "تماس با ما"
	}
];
function Wordmark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		dir: "ltr",
		className: "brand-logo",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: cousinroast_default,
			alt: "Cousinroast | کازین رست"
		})
	});
}
function Header() {
	const cart = useCart();
	const [menu, setMenu] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
		children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "welcome-strip",
			children: "به فروشگاه خودتون خیلی خوش اومدید!"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "bg-background relative z-20 border-b border-border/50",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-brand h-22 flex items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-primary",
					"aria-label": "Cousinroast خانه",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden md:flex items-center gap-8",
					children: nav.map((n) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: "nav-link text-foreground",
						children: n.label
					}, n.href))
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						className: "gap-2",
						"aria-label": "باز کردن سبد خرید",
						onClick: () => cart.setOpen(true),
						children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
							className: "size-5!",
							strokeWidth: 1.5
						}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline text-xs",
							children: "سبد خرید"
						}),
							cart.count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary text-xs",
								children: [
									"(",
									number(cart.count),
									")"
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "md:hidden",
						"aria-label": "فهرست",
						"aria-expanded": menu,
						onClick: () => setMenu(!menu),
						children: menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					})]
				})
				]
			}), menu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "md:hidden container-brand pb-5 flex flex-col",
				children: nav.map((n) => /* @__PURE__ */(0, import_jsx_runtime.jsx)("a", {
					className: "py-3 border-t border-border text-sm",
					href: n.href,
					onClick: () => setMenu(false),
					children: n.label
				}, n.href))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "site-footer pt-10 pb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-brand footer-inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm leading-8 mt-4 text-foreground/70",
					children: "حال خوب از شما، قهوه از ما"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm text-primary",
					children: "در ارتباط باشیم"
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "mailto:sales@cousinroast.com?subject=Cousinroast",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						dir: "ltr",
						className: "footer-contact",
						children: "sales@cousinroast.com"
					})]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "tel:+982126761176",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						dir: "ltr",
						className: "footer-contact",
						children: "+98 21 2676 1176"
					})]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center gap-3 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { size: 15 }), "ایران، تهران، سعادت‌آباد"]
				})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-brand border-t border-border pt-5 mt-8 flex justify-between gap-4 text-[11px] text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				dir: "ltr",
				children: "© Cousinroast — Orasia Holding"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#contact",
				className: "flex gap-2 items-center",
				children: ["Contact Us", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpLeft, { size: 13 })]
			})]
		})]
	});
}
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-7xl font-bold text-foreground",
				children: "404"
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-4 text-xl font-semibold text-foreground",
				children: "Page not found"
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "The page you're looking for doesn't exist or has been moved."
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
					children: "Go home"
				})
			})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-xl font-semibold tracking-tight text-foreground",
				children: "This page didn't load"
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Something went wrong on our end. You can try refreshing or head back home."
			}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap justify-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
					children: "Try again"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
					children: "Go home"
				})]
			})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "cousinroast | کازین رست" },
			{
				name: "description",
				content: "دانه‌های قهوه Cousinroast"
			},
			{
				property: "og:description",
				content: "دانه‌های قهوه Cousinroast"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/cousinroast.ico",
				type: "image/x-icon"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "fa",
		dir: "rtl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, {
			children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		})
	});
}
var $$splitComponentImporter$8 = () => import("./routes-e6JHnztP.mjs");
var Route$8 = createFileRoute("/")({
	head: () => metadata("cousinroast | کازین رست", "قهوه‌های Cousinroast؛ چهار ترکیب در اندازه‌های ۲۵۰ گرم، ۵۰۰ گرم و یک کیلوگرم."),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-yOkU6JsD.mjs");
var Route$7 = createFileRoute("/about")({
	beforeLoad: () => {
		throw redirect({ to: "/" });
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./cart-iQ7a9zej.mjs");
var Route$6 = createFileRoute("/cart")({
	beforeLoad: () => {
		throw redirect({ to: "/" });
	},
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./checkout-DBl2ok7o.mjs");
var Route$5 = createFileRoute("/checkout")({
	head: () => metadata("تکمیل سفارش", "پیش‌نمایش تکمیل سفارش قهوه Cousinroast؛ اطلاعات تماس، نشانی و خلاصه انتخاب‌ها."),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-EnYXMjaJ.mjs");
var Route$4 = createFileRoute("/contact")({
	beforeLoad: () => {
		throw redirect({ to: "/" });
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./guide-B2ytsrMy.mjs");
var Route$3 = createFileRoute("/guide")({
	beforeLoad: () => {
		throw redirect({ to: "/" });
	},
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./order-confirmation-CkelOxBP.mjs");
var Route$2 = createFileRoute("/order-confirmation")({
	head: () => metadata("پیش‌نمایش سفارش", "خلاصه پیش‌نمایش سفارش Cousinroast. هیچ سفارش واقعی یا پرداختی در این مرحله انجام نمی‌شود."),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./products.index-DNghhoBY.mjs");
var Route$1 = createFileRoute("/products/")({
	beforeLoad: () => {
		throw redirect({ to: "/" });
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./products._id-wUnHRnxT.mjs");
var Route = createFileRoute("/products/$id")({
	beforeLoad: () => {
		throw redirect({ to: "/" });
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var CartRoute = Route$6.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$9
});
var CheckoutRoute = Route$5.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var GuideRoute = Route$3.update({
	id: "/guide",
	path: "/guide",
	getParentRoute: () => Route$9
});
var OrderConfirmationRoute = Route$2.update({
	id: "/order-confirmation",
	path: "/order-confirmation",
	getParentRoute: () => Route$9
});
var ProductsIndexRoute = Route$1.update({
	id: "/products/",
	path: "/products/",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CartRoute,
	CheckoutRoute,
	ContactRoute,
	GuideRoute,
	OrderConfirmationRoute,
	ProductsIdRoute: Route.update({
		id: "/products/$id",
		path: "/products/$id",
		getParentRoute: () => Route$9
	}),
	ProductsIndexRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
