import { jsxs as v, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const n = t(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, l) => {
  const i = m(), h = r ? o ?? i : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": h, ...d, children: [
    r ? /* @__PURE__ */ e("title", { id: h, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M22.5 17.624h-.375V9.249a1.87 1.87 0 0 0-.835-1.563l-8.25-5.5a1.87 1.87 0 0 0-2.08 0l-8.25 5.5a1.88 1.88 0 0 0-.835 1.563v8.375H1.5a1.125 1.125 0 1 0 0 2.25h21a1.125 1.125 0 0 0 0-2.25M4.125 9.45 12 4.2l7.875 5.25v8.174h-1.5v-6.375a1.125 1.125 0 0 0-1.125-1.125H6.75a1.125 1.125 0 0 0-1.125 1.125v6.375h-1.5zm12 2.924v1.5h-3v-1.5zm-5.25 1.5h-3v-1.5h3zm-3 2.25h3v1.5h-3zm5.25 0h3v1.5h-3z" })
  ] });
});
n.displayName = "Garage";
export {
  n as Garage
};
//# sourceMappingURL=Garage.js.map
