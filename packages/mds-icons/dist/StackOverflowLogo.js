import { jsxs as h, jsx as e } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const c = n(({
  size: a = "1em",
  title: o,
  titleId: l,
  ...d
}, i) => {
  const t = v(), r = o ? l ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": r, ...d, children: [
    o ? /* @__PURE__ */ e("title", { id: r, children: o }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M20.625 14.218v6.03a1.125 1.125 0 0 1-1.125 1.126h-15a1.125 1.125 0 0 1-1.125-1.125v-6.031a1.125 1.125 0 1 1 2.25 0v4.896h12.75v-4.896a1.125 1.125 0 1 1 2.25 0M8.25 17.23h7.5a1.13 1.13 0 0 0 0-2.26h-7.5a1.13 1.13 0 0 0 0 2.26m.769-6.639 7.047 2.577a1.13 1.13 0 1 0 .77-2.124L9.788 8.47a1.13 1.13 0 0 0-.77 2.123M12 4.62l5.746 4.84a1.125 1.125 0 0 0 1.844-.964 1.13 1.13 0 0 0-.398-.768l-5.744-4.84a1.124 1.124 0 0 0-1.845.964c.026.298.169.574.397.768" })
  ] });
});
c.displayName = "StackOverflowLogo";
export {
  c as StackOverflowLogo
};
//# sourceMappingURL=StackOverflowLogo.js.map
