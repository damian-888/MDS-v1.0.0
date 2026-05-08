import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: a = "1em",
  title: o,
  titleId: d,
  ...i
}, l) => {
  const v = n(), r = o ? d ?? v : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": r, ...i, children: [
    o ? /* @__PURE__ */ e("title", { id: r, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M21.75 4.875H2.25A1.875 1.875 0 0 0 .375 6.75v10.5a1.875 1.875 0 0 0 1.875 1.875h19.5a1.875 1.875 0 0 0 1.875-1.875V6.75a1.875 1.875 0 0 0-1.875-1.875m-.375 12H2.625v-9.75h18.75zm-11.25-2.25v-5.25A1.125 1.125 0 0 1 11.25 8.25h1.875a1.125 1.125 0 0 1 0 2.25h-.75v.375a1.125 1.125 0 1 1 0 2.25v.375h.75a1.125 1.125 0 1 1 0 2.25H11.25a1.125 1.125 0 0 1-1.125-1.125m4.918-4.94a1.126 1.126 0 0 1 2.164-.62l.418 1.465.418-1.464a1.126 1.126 0 0 1 2.164.618l-1.5 5.25a1.125 1.125 0 0 1-2.164 0zM4.875 15.75H6a3.375 3.375 0 0 0 3.375-3.375v-.75A3.375 3.375 0 0 0 6 8.25H4.875A1.125 1.125 0 0 0 3.75 9.375v5.25a1.125 1.125 0 0 0 1.125 1.125M6 10.5a1.125 1.125 0 0 1 1.125 1.125v.75A1.125 1.125 0 0 1 6 13.5z" })
  ] });
});
m.displayName = "DevToLogo";
export {
  m as DevToLogo
};
//# sourceMappingURL=DevToLogo.js.map
