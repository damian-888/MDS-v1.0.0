import { jsxs as l, jsx as d } from "react/jsx-runtime";
import { forwardRef as m, useId as n } from "react";
const v = m(({
  size: a = "1em",
  title: o,
  titleId: e,
  ...i
}, h) => {
  const t = n(), r = o ? e ?? t : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": o ? void 0 : !0, role: o ? "img" : void 0, ref: h, "aria-labelledby": r, ...i, children: [
    o ? /* @__PURE__ */ d("title", { id: r, children: o }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M6.75 9.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m9 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m6.375-3.75V18a3.375 3.375 0 0 1-3.375 3.375H5.25A3.375 3.375 0 0 1 1.875 18V7.5A3.375 3.375 0 0 1 5.25 4.125h5.625V1.5a1.125 1.125 0 1 1 2.25 0v2.625h5.625A3.375 3.375 0 0 1 22.125 7.5m-2.25 0a1.125 1.125 0 0 0-1.125-1.125H5.25A1.125 1.125 0 0 0 4.125 7.5V18a1.125 1.125 0 0 0 1.125 1.125h13.5A1.125 1.125 0 0 0 19.875 18zm-1.125 7.688A2.81 2.81 0 0 1 15.938 18H8.061a2.812 2.812 0 1 1 0-5.625h7.876a2.81 2.81 0 0 1 2.812 2.813m-7.5-.563v1.125h1.5v-1.125zM8.063 15.75H9v-1.125h-.937a.563.563 0 0 0 0 1.125m8.437-.562a.56.56 0 0 0-.562-.563H15v1.125h.938a.56.56 0 0 0 .562-.562" })
  ] });
});
v.displayName = "Robot";
export {
  v as Robot
};
//# sourceMappingURL=Robot.js.map
