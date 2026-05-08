import { jsxs as h, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: r = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const t = s(), o = l ? d ?? t : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": o, ...e, children: [
    l ? /* @__PURE__ */ a("title", { id: o, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m21.108 18.535-5.733-9.553V4.125h.375a1.125 1.125 0 0 0 0-2.25h-7.5a1.125 1.125 0 0 0 0 2.25h.375v4.857l-5.733 9.553a1.875 1.875 0 0 0 1.608 2.84h15a1.874 1.874 0 0 0 1.608-2.84m-7.983-14.41v5.17c0 .203.056.403.16.578l3.294 5.488c-1.012.08-2.358-.123-4.07-.99-1.313-.664-2.575-1.062-3.776-1.196l1.982-3.302c.104-.175.16-.375.16-.579V4.125zm-7.963 15 2.244-3.732c1.219-.104 2.59.227 4.09.986 1.838.93 3.398 1.248 4.673 1.248a7 7 0 0 0 1.654-.19l1.015 1.688z" })
  ] });
});
c.displayName = "Flask";
export {
  c as Flask
};
//# sourceMappingURL=Flask.js.map
