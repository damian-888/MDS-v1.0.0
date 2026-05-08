import { jsxs as e, jsx as h } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const m = n(({
  size: r = "1em",
  title: o,
  titleId: i,
  ...d
}, l) => {
  const t = s(), a = o ? i ?? t : void 0;
  return /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": a, ...d, children: [
    o ? /* @__PURE__ */ h("title", { id: a, children: o }) : null,
    /* @__PURE__ */ h("path", { fill: "currentColor", d: "M11.625 12a3.374 3.374 0 1 0-6.749 0 3.374 3.374 0 0 0 6.749 0m-4.5 0a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0M21 9.375h-1.125V3a1.125 1.125 0 0 0-1.125-1.125h-9A1.125 1.125 0 0 0 8.625 3v2.25h-5.25A1.875 1.875 0 0 0 1.5 7.125v9.75a1.875 1.875 0 0 0 1.875 1.875h3v1.5a1.875 1.875 0 0 0 1.875 1.875h12a1.875 1.875 0 0 0 1.875-1.875V10.5A1.125 1.125 0 0 0 21 9.375m-4.917 6.375 3.792-2.95v5.9zM10.875 4.125h6.75V11.7L15 13.742V7.125a1.875 1.875 0 0 0-1.875-1.875h-2.25zM3.75 7.5h9v9h-9zm4.875 11.25h4.5a1.88 1.88 0 0 0 1.714-1.117l2.88 2.242H8.625z" })
  ] });
});
m.displayName = "MicrosoftOutlookLogo";
export {
  m as MicrosoftOutlookLogo
};
//# sourceMappingURL=MicrosoftOutlookLogo.js.map
