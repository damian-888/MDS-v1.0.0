import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const n = t(({
  size: r = "1em",
  title: a,
  titleId: l,
  ...o
}, d) => {
  const v = m(), e = a ? l ?? v : void 0;
  return /* @__PURE__ */ h("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    a ? /* @__PURE__ */ i("title", { id: e, children: a }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m20.296 7.455-5.25-5.25a1.12 1.12 0 0 0-.796-.33h-9A1.875 1.875 0 0 0 3.375 3.75v6.375a1.125 1.125 0 0 0 2.25 0v-6h7.125v4.5a1.125 1.125 0 0 0 1.125 1.125h4.5v10.125h-2.25a1.125 1.125 0 1 0 0 2.25h2.625a1.875 1.875 0 0 0 1.875-1.875v-12c0-.298-.118-.584-.33-.795M15 5.344 17.156 7.5H15zm-9 7.781H4.5a1.125 1.125 0 0 0-1.125 1.125v5.25a1.125 1.125 0 0 0 2.25 0v-.375H6a3 3 0 0 0 0-6m0 3.75h-.375v-1.5H6a.75.75 0 1 1 0 1.5m7.5.698V19.5a1.125 1.125 0 1 1-2.25 0v-1.927l-1.704-2.727a1.125 1.125 0 0 1 1.908-1.192l.921 1.473.92-1.473a1.126 1.126 0 0 1 1.91 1.192z" })
  ] });
});
n.displayName = "FilePy";
export {
  n as FilePy
};
//# sourceMappingURL=FilePy.js.map
