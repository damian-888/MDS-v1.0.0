import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as v, useId as t } from "react";
const s = v(({
  size: a = "1em",
  title: r,
  titleId: l,
  ...o
}, i) => {
  const n = t(), d = r ? l ?? n : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": d, ...o, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.5 2.625h-1.875V2.25a1.125 1.125 0 1 0-2.25 0v.375h-6.75V2.25a1.125 1.125 0 0 0-2.25 0v.375H4.5A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625M6.375 4.875a1.125 1.125 0 0 0 2.25 0h6.75a1.125 1.125 0 1 0 2.25 0h1.5v2.25H4.875v-2.25zm-1.5 14.25v-9.75h14.25v9.75z" })
  ] });
});
s.displayName = "CalendarBlank";
export {
  s as CalendarBlank
};
//# sourceMappingURL=CalendarBlank.js.map
