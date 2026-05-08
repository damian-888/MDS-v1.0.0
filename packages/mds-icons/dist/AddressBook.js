import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: r = "1em",
  title: o,
  titleId: a,
  ...i
}, l) => {
  const s = n(), d = o ? a ?? s : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: l, "aria-labelledby": d, ...i, children: [
    o ? /* @__PURE__ */ e("title", { id: d, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M19.5 1.875H6A1.875 1.875 0 0 0 4.125 3.75v1.875H3a1.125 1.125 0 0 0 0 2.25h1.125v3H3a1.125 1.125 0 1 0 0 2.25h1.125v3H3a1.125 1.125 0 1 0 0 2.25h1.125v1.875A1.875 1.875 0 0 0 6 22.125h13.5a1.875 1.875 0 0 0 1.875-1.875V3.75A1.875 1.875 0 0 0 19.5 1.875m-.375 18H6.375V4.125h12.75zm-9.675-3.81a4.5 4.5 0 0 1 6.6 0 1.125 1.125 0 1 0 1.65-1.53 6.8 6.8 0 0 0-1.8-1.375 4.125 4.125 0 1 0-6.3 0 6.8 6.8 0 0 0-1.8 1.376 1.125 1.125 0 0 0 1.65 1.53m1.425-5.565a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0" })
  ] });
});
m.displayName = "AddressBook";
export {
  m as AddressBook
};
//# sourceMappingURL=AddressBook.js.map
