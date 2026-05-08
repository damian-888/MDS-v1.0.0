import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: o = "1em",
  title: a,
  titleId: e,
  ...i
}, d) => {
  const n = m(), l = a ? e ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": l, ...i, children: [
    a ? /* @__PURE__ */ r("title", { id: l, children: a }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M13.455 10.545a1.126 1.126 0 0 1 0-1.594l2.576-2.576H15a1.125 1.125 0 1 1 0-2.25h3.75a1.125 1.125 0 0 1 1.125 1.125V9a1.125 1.125 0 1 1-2.25 0V7.968l-2.58 2.58a1.125 1.125 0 0 1-1.593 0zm7.906 6.665a5.65 5.65 0 0 1-5.611 4.915C8.1 22.125 1.875 15.9 1.875 8.25a5.65 5.65 0 0 1 4.914-5.611 1.88 1.88 0 0 1 1.949 1.11l1.979 4.42.007.016a1.88 1.88 0 0 1-.156 1.765 1 1 0 0 1-.08.108l-1.786 2.13c.662 1.203 1.922 2.452 3.14 3.113l2.091-1.782q.051-.042.105-.078a1.87 1.87 0 0 1 1.781-.164l.017.008 4.414 1.977a1.88 1.88 0 0 1 1.11 1.948m-2.28-.005-3.937-1.764-2.102 1.788a1 1 0 0 1-.104.08 1.87 1.87 0 0 1-1.846.128c-1.827-.881-3.646-2.689-4.53-4.5a1.88 1.88 0 0 1 .12-1.841q.037-.057.081-.108L8.56 8.86 6.795 4.922a3.4 3.4 0 0 0-2.67 3.328A11.64 11.64 0 0 0 15.75 19.875a3.4 3.4 0 0 0 3.332-2.67" })
  ] });
});
s.displayName = "PhoneOutgoing";
export {
  s as PhoneOutgoing
};
//# sourceMappingURL=PhoneOutgoing.js.map
