import { jsxs as m, jsx as l } from "react/jsx-runtime";
import { forwardRef as t, useId as s } from "react";
const w = t(({
  size: r = "1em",
  title: o,
  titleId: e,
  ...d
}, i) => {
  const n = s(), a = o ? e ?? n : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: i, "aria-labelledby": a, ...d, children: [
    o ? /* @__PURE__ */ l("title", { id: a, children: o }) : null,
    /* @__PURE__ */ l("path", { fill: "currentColor", d: "M15.75 7.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m4.817 6.42L7.817 6.42a1.125 1.125 0 0 0-.635 2.156l3.342.986-2.686 4.032-3.713-1.1a2.89 2.89 0 0 0-2.567.463 2.92 2.92 0 0 0-1.183 2.36 2.96 2.96 0 0 0 2.103 2.824l14.397 4.238a2.927 2.927 0 0 0 3.75-2.823 2.955 2.955 0 0 0-2.104-2.823l-3.725-1.096 1.142-1.698a1.126 1.126 0 0 0-.621-1.707l-3.24-.938.71-1.067 7.149 2.103a1.126 1.126 0 0 0 1.042-1.963 1.1 1.1 0 0 0-.407-.193zm-2.192 9.386a.69.69 0 0 1-.281.563.65.65 0 0 1-.584.106L3.113 15.982a.7.7 0 0 1-.207-1.224.66.66 0 0 1 .584-.106l14.4 4.24a.69.69 0 0 1 .485.664m-5.167-5.587-.675 1.006-2.438-.717.666-.997z" })
  ] });
});
w.displayName = "PersonSimpleSnowboard";
export {
  w as PersonSimpleSnowboard
};
//# sourceMappingURL=PersonSimpleSnowboard.js.map
