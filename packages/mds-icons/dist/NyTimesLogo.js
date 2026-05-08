import { jsxs as m, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...i
}, d) => {
  const t = s(), l = o ? e ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: d, "aria-labelledby": l, ...i, children: [
    o ? /* @__PURE__ */ a("title", { id: l, children: o }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M18 13.875a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-.375-3.75a1.1 1.1 0 0 1-.475-.106l-6.064-2.83a6.375 6.375 0 0 0-5.421 5.615l6.18-3.297a1.125 1.125 0 0 1 1.655.993v9.198a6.35 6.35 0 0 0 4.196-3.33 1.127 1.127 0 0 1 1.866-.238 1.12 1.12 0 0 1 .142 1.252 8.58 8.58 0 0 1-7.125 4.723q-.1.02-.204.02-.048.001-.093-.005c-.094 0-.188.005-.282.005a8.624 8.624 0 0 1-7.653-12.6 3.75 3.75 0 0 1 2.028-6.9c.165 0 .327.036.476.106l10.991 5.128a1.5 1.5 0 0 0-.217-2.984 1.125 1.125 0 1 1 0-2.25 3.75 3.75 0 1 1 0 7.5M7.5 18.011v-3.636l-1.63.87A6.4 6.4 0 0 0 7.5 18.01m3.75-5.636-1.5.8v6.288c.483.183.987.306 1.5.366zM8.11 5.801l-1.951-.91a1.5 1.5 0 0 0-.523 2.788A8.6 8.6 0 0 1 8.11 5.801" })
  ] });
});
c.displayName = "NyTimesLogo";
export {
  c as NyTimesLogo
};
//# sourceMappingURL=NyTimesLogo.js.map
