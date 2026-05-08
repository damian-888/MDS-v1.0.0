import { jsxs as m, jsx as r } from "react/jsx-runtime";
import { forwardRef as n, useId as h } from "react";
const s = n(({
  size: a = "1em",
  title: l,
  titleId: e,
  ...d
}, i) => {
  const t = h(), o = l ? e ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": o, ...d, children: [
    l ? /* @__PURE__ */ r("title", { id: o, children: l }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M12 1.875A10.125 10.125 0 1 0 22.125 12 10.137 10.137 0 0 0 12 1.875M9.078 4.688a7.8 7.8 0 0 1 1.68-.47 7.87 7.87 0 0 1 4.36 6.657H12.65zm3.572 8.437h7.143a7.8 7.8 0 0 1-.44 1.688 7.88 7.88 0 0 1-7.938.449zm7.143-2.25h-2.422a10.1 10.1 0 0 0-1.35-4.66 10 10 0 0 0-1.068-1.513 7.9 7.9 0 0 1 4.84 6.173M7.132 5.817l1.212 2.095a10.1 10.1 0 0 0-3.361 3.498q-.466.809-.776 1.688a7.84 7.84 0 0 1 2.925-7.28m-1.245 11.14a7.88 7.88 0 0 1 3.582-7.094L10.7 12l-3.57 6.188a8 8 0 0 1-1.244-1.231m3.187 2.354 1.211-2.098A10.1 10.1 0 0 0 15 18.375q.925 0 1.837-.167a7.85 7.85 0 0 1-7.76 1.105z" })
  ] });
});
s.displayName = "Volleyball";
export {
  s as Volleyball
};
//# sourceMappingURL=Volleyball.js.map
