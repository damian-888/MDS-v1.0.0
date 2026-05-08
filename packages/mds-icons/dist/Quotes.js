import { jsxs as n, jsx as d } from "react/jsx-runtime";
import { forwardRef as s, useId as h } from "react";
const m = s(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...i
}, t) => {
  const l = h(), e = o ? a ?? l : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: t, "aria-labelledby": e, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: e, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M9.375 4.875H3.75A1.875 1.875 0 0 0 1.875 6.75v6a1.875 1.875 0 0 0 1.875 1.875H9V15a2.625 2.625 0 0 1-2.625 2.625 1.125 1.125 0 1 0 0 2.25A4.88 4.88 0 0 0 11.25 15V6.75a1.875 1.875 0 0 0-1.875-1.875M9 12.375H4.125v-5.25H9zm11.25-7.5h-5.625A1.875 1.875 0 0 0 12.75 6.75v6a1.875 1.875 0 0 0 1.875 1.875h5.25V15a2.625 2.625 0 0 1-2.625 2.625 1.125 1.125 0 1 0 0 2.25A4.88 4.88 0 0 0 22.125 15V6.75a1.875 1.875 0 0 0-1.875-1.875m-.375 7.5H15v-5.25h4.875z" })
  ] });
});
m.displayName = "Quotes";
export {
  m as Quotes
};
//# sourceMappingURL=Quotes.js.map
