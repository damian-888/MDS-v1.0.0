import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as p, useId as s } from "react";
const c = p(({
  size: l = "1em",
  title: r,
  titleId: i,
  ...o
}, d) => {
  const t = s(), a = r ? i ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": a, ...o, children: [
    r ? /* @__PURE__ */ e("title", { id: a, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "m19.92 12.795-7.693 7.688a5.626 5.626 0 0 1-7.955-7.958l9.203-9.177a3.75 3.75 0 0 1 5.303 5.305l-.016.015-8.982 8.646a1.126 1.126 0 0 1-1.56-1.622l8.973-8.636a1.5 1.5 0 1 0-2.128-2.115l-9.203 9.174a3.375 3.375 0 1 0 4.775 4.773L18.33 11.2a1.125 1.125 0 0 1 1.924.797 1.13 1.13 0 0 1-.33.797z" })
  ] });
});
c.displayName = "Paperclip";
export {
  c as Paperclip
};
//# sourceMappingURL=Paperclip.js.map
