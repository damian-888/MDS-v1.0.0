import { jsxs as n, jsx as l } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const c = s(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, i) => {
  const t = m(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ l("title", { id: e, children: r }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M13.922 14.674a6.75 6.75 0 1 0-8.344 0 11.6 11.6 0 0 0-4.564 3.351 1.125 1.125 0 0 0 1.723 1.448c1.814-2.16 4.305-3.35 7.013-3.35 3.469 0 5.73 1.822 7.014 3.35a1.125 1.125 0 0 0 1.723-1.448 11.6 11.6 0 0 0-4.565-3.351m-8.672-5.3a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m17.862 3.75-.666.216.411.568a1.124 1.124 0 1 1-1.82 1.322l-.412-.568-.412.568a1.126 1.126 0 0 1-2.034-.48 1.13 1.13 0 0 1 .214-.842l.412-.567-.667-.217a1.126 1.126 0 0 1 .695-2.14l.667.216V10.5a1.125 1.125 0 1 1 2.25 0v.701l.668-.216a1.126 1.126 0 0 1 1.078 1.925 1.1 1.1 0 0 1-.384.215" })
  ] });
});
c.displayName = "UserGear";
export {
  c as UserGear
};
//# sourceMappingURL=UserGear.js.map
