import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { d as Leaf, f as Headphones, g as ArrowLeft, n as Truck, p as Coffee, u as Mail } from "../_libs/lucide-react.mjs";
import { t as ProductGrid } from "./products-DbiHNIPH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-e6JHnztP.js
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-XWtNQ0yn.webp";
var contactEmail = "sales@cousinroast.com";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			className: "hero-photo",
			src: hero_default,
			alt: "بسته‌بندی قهوه Cousinroast",
			width: "1536",
			height: "1024",
			fetchPriority: "high"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-brand hero-inner",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					children: [
						"قهوه‌ای که بر اساس برای",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"انتخاب ساخته شده"
					]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "hero-description",
					children: [
						"چه برای اسپرسو، چه برای شروع روز؛",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "desktop-break" }),
						" ترکیب مناسب خودت رو از میان دانه‌های Cousinroast انتخاب کن."
					]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-actions",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#coffee",
						className: "hero-button hero-button-primary",
						children: ["مشاهده قهوه‌ها ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 17 })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#about",
						className: "hero-button hero-button-secondary",
						children: "داستان ما"
					})]
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-footnote",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), " دانه‌های قهوه برای سلیقه‌ی شما"]
				})
				]
			})
		})]
	});
}
function Values() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "values-strip",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-brand values-grid",
			children: [
				{
					Icon: Coffee,
					title: "ترکیب‌های متنوع",
					sub: "از عربیکای خالص تا ترکیبی متعادل"
				},
				{
					Icon: Leaf,
					title: "انتخاب بر اساس ذائقه",
					sub: "برای فنجان دلخواه شما"
				},
				{
					Icon: Truck,
					title: "ارسال رایگان",
					sub: "برای سفارش‌های شما"
				},
				{
					Icon: Headphones,
					title: "پشتیبانی مستقیم",
					sub: "پاسخ‌گوی پرسش‌های شما"
				}
			].map(({ Icon, title, sub }) => /* @__PURE__ */(0, import_jsx_runtime.jsxs)("div", {
				className: "value-item",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					size: 25,
					strokeWidth: 1.3,
					className: "text-primary shrink-0"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "value-title",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "value-subtitle",
						children: sub
					})]
				})]
			}, title))
		})
	});
}
function CatalogSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "coffee",
		className: "container-brand section-space catalog-section",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "catalog-heading",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "eyebrow",
					children: "انتخاب شما"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-heading text-primary",
					children: "قهوه‌های کازین رست"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "catalog-intro",
					children: "چهار ترکیب در سه بسته‌بندی با اندازه‌ های مختلف"
				})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "catalog-stamp",
				children: [
					"ROASTED",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"WITH CARE"
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductGrid, {})]
	});
}
function AboutBand() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "about-band",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-brand about-inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "eyebrow",
					children: "داستان ما"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-heading text-primary",
					children: "از شناخت ذائقه تا فنجان شما"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "about-signature",
					children: "Cousinroast، برندی زیرمجموعه‌ی Orasia Holding"
				})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "about-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "داستان کازین رست از تجربه‌ی فروش داخلی قهوه در اوراسیا شروع شد؛ از یک تیم جوان و باانگیزه که قدم‌به‌قدم در بازارهای محلی یاد گرفت کیفیت واقعی فقط به خود محصول محدود نیست. کیفیت یعنی شناخت سلیقه‌ی آدم‌ها، توجه به نیازشان و پیدا کردن قهوه‌ای که بر اساس با لحظه‌ها و عادت‌های روزمره‌شان جور دربیاید." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "این شناخت با حضور مستقیم اعضای تیم در بازار شکل گرفت؛ از بازاریابی و فروش تا همراهی مشتری‌ها و شنیدن بازخوردشان. برای ما، انتخاب هر دانه و هر ترکیب بخشی از همین مسیر یادگیری است: به‌جای اینکه قهوه را فقط یک کالا ببینیم، به تجربه‌ای فکر می‌کنیم که قرار است در فنجان شما ساخته شود." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					children: [
						"کازین رست، زیرمجموعه‌ی ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Orasia Holding" }),
						"، با همین نگاه تلاش می‌کند ترکیب‌هایی با هویت روشن و کیفیت قابل‌اعتماد ارائه کند؛ از عربیکای خالص تا ترکیب‌های عربیکا و روبوستا. هدف ما ساده است: انتخاب قهوه برای شما روشن‌تر و لذت بردن از فنجان روزانه‌تان شخصی‌تر شود."
					]
				})
				]
			})]
		})
	});
}
function ContactSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "contact-band",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-brand contact-inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "در ارتباط باشیم"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "section-heading text-primary",
					children: "سؤالی دارید؟ با ما صحبت کنید."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "contact-copy",
					children: "برای پرسش درباره‌ی محصولات، سفارش یا همکاری، از طریق ایمیل با تیم Cousinroast در ارتباط باشید."
				})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "contact-email",
				href: `mailto:${contactEmail}?subject=${encodeURIComponent("پیام به Cousinroast")}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 20 }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					dir: "ltr",
					children: contactEmail
				}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 17 })
				]
			})]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
		children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Values, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutBand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
		]
	});
}
//#endregion
export { Index as component };
