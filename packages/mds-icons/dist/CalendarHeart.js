import { jsxs as h, jsx as d } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const s = n(({
  size: r = "1em",
  title: a,
  titleId: o,
  ...i
}, l) => {
  const t = c(), e = a ? o ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: l, "aria-labelledby": e, ...i, children: [
    a ? /* @__PURE__ */ d("title", { id: e, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M19.5 2.625h-1.875V2.25a1.125 1.125 0 1 0-2.25 0v.375h-6.75V2.25a1.125 1.125 0 0 0-2.25 0v.375H4.5A1.875 1.875 0 0 0 2.625 4.5v15A1.875 1.875 0 0 0 4.5 21.375h15a1.875 1.875 0 0 0 1.875-1.875v-15A1.875 1.875 0 0 0 19.5 2.625m-.375 16.5H4.875V4.875h1.5a1.125 1.125 0 0 0 2.25 0h6.75a1.125 1.125 0 1 0 2.25 0h1.5zM14.25 7.875c-.83 0-1.632.306-2.25.862a3.375 3.375 0 0 0-5.625 2.513c0 1.594.893 3.146 2.655 4.614.763.632 1.59 1.182 2.467 1.642a1.13 1.13 0 0 0 1.006 0c.878-.46 1.704-1.01 2.467-1.642 1.762-1.468 2.655-3.02 2.655-4.614a3.375 3.375 0 0 0-3.375-3.375M12 15.215c-1.233-.737-3.375-2.35-3.375-3.965a1.125 1.125 0 0 1 2.25 0 1.125 1.125 0 1 0 2.25 0 1.125 1.125 0 1 1 2.25 0c0 1.615-2.143 3.229-3.375 3.965" })
  ] });
});
s.displayName = "CalendarHeart";
export {
  s as CalendarHeart
};
//# sourceMappingURL=CalendarHeart.js.map
