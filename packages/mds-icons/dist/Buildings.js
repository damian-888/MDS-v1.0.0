import { jsxs as v, jsx as d } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const t = h(({
  size: i = "1em",
  title: a,
  titleId: l,
  ...o
}, e) => {
  const n = m(), r = a ? l ?? n : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...o, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.5 19.124h-1.125V9A1.875 1.875 0 0 0 19.5 7.124h-3.375V3a1.875 1.875 0 0 0-2.667-1.698l-9.75 4.55a1.88 1.88 0 0 0-1.083 1.7v11.573H1.5a1.125 1.125 0 1 0 0 2.25h21a1.125 1.125 0 1 0 0-2.25m-3.375-9.75v9.75h-3v-9.75zM4.875 7.79l9-4.2v15.535h-9zm7.5 2.71v1.125a1.125 1.125 0 1 1-2.25 0V10.5a1.125 1.125 0 0 1 2.25 0m-3.75 0v1.125a1.125 1.125 0 0 1-2.25 0V10.5a1.125 1.125 0 0 1 2.25 0m0 4.875V16.5a1.125 1.125 0 0 1-2.25 0v-1.125a1.125 1.125 0 0 1 2.25 0m3.75 0V16.5a1.125 1.125 0 1 1-2.25 0v-1.125a1.125 1.125 0 0 1 2.25 0" })
  ] });
});
t.displayName = "Buildings";
export {
  t as Buildings
};
//# sourceMappingURL=Buildings.js.map
