import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as m } from "react";
const s = n(({
  size: e = "1em",
  title: r,
  titleId: l,
  ...i
}, a) => {
  const t = m(), o = r ? l ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": o, ...i, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 14.25h-15a1.875 1.875 0 0 0-1.875 1.875V18A1.875 1.875 0 0 0 4.5 19.875h15A1.875 1.875 0 0 0 21.375 18v-1.875A1.875 1.875 0 0 0 19.5 14.25m-.375 3.375H4.875V16.5h14.25zm-14.6-4.875h14.95a1.9 1.9 0 0 0 1.37-3.216l-6.916-7.21a2.673 2.673 0 0 0-3.858 0l-6.915 7.21a1.9 1.9 0 0 0 1.37 3.216m7.17-8.87a.42.42 0 0 1 .61 0l6.351 6.62H5.344z" })
  ] });
});
s.displayName = "Eject";
export {
  s as Eject
};
//# sourceMappingURL=Eject.js.map
