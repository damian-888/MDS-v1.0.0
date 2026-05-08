import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const v = t(({
  size: o = "1em",
  title: e,
  titleId: d,
  ...i
}, l) => {
  const h = m(), r = e ? d ?? h : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    e ? /* @__PURE__ */ a("title", { id: r, children: e }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M23.625 11.248a4.88 4.88 0 0 0-4.875-4.875h-3.72c-.322-.02-4.931-.375-9.324-4.059a1.875 1.875 0 0 0-3.081 1.434v15a1.86 1.86 0 0 0 1.082 1.7 1.86 1.86 0 0 0 1.999-.264 18.1 18.1 0 0 1 7.794-3.83v2.457a1.88 1.88 0 0 0 .834 1.56q.063.042.13.075l1.354.662a1.874 1.874 0 0 0 2.78-1.14l1.039-3.921a4.88 4.88 0 0 0 3.988-4.799m-18.75 6.716V4.536c3.391 2.631 6.766 3.572 8.625 3.906v5.619c-1.859.33-5.234 1.27-8.625 3.903m11.662.99-.787-.384v-2.447h1.538zm2.213-5.08h-3v-5.25h3a2.625 2.625 0 0 1 0 5.25" })
  ] });
});
v.displayName = "Megaphone";
export {
  v as Megaphone
};
//# sourceMappingURL=Megaphone.js.map
