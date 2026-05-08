import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as m, useId as h } from "react";
const s = m(({
  size: r = "1em",
  title: e,
  titleId: o,
  ...a
}, d) => {
  const t = h(), i = e ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": e ? void 0 : !0, role: e ? "img" : void 0, ref: d, "aria-labelledby": i, ...a, children: [
    e ? /* @__PURE__ */ l("title", { id: i, children: e }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M22.125 18.75A1.125 1.125 0 0 1 21 19.875H3a1.124 1.124 0 1 1 0-2.25h18a1.125 1.125 0 0 1 1.125 1.125M2.063 14.304a1.88 1.88 0 0 1 .236-2l7.654-9.451a2.633 2.633 0 0 1 4.095 0l7.654 9.452a1.885 1.885 0 0 1-1.46 3.07H3.758a1.87 1.87 0 0 1-1.695-1.072m2.465-1.179h14.944L12.3 4.27a.385.385 0 0 0-.6 0z" })
  ] });
});
s.displayName = "EjectSimple";
export {
  s as EjectSimple
};
//# sourceMappingURL=EjectSimple.js.map
