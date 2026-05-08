import { jsxs as v, jsx as d } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: a = "1em",
  title: r,
  titleId: e,
  ...h
}, i) => {
  const l = n(), o = r ? e ?? l : void 0;
  return /* @__PURE__ */ v("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...h, children: [
    r ? /* @__PURE__ */ d("title", { id: o, children: r }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M22.5 9.375h-.769l-2.505-5.636a1.87 1.87 0 0 0-1.713-1.114H6.486a1.88 1.88 0 0 0-1.713 1.114L2.269 9.375H1.5a1.125 1.125 0 0 0 0 2.25h.375v7.125a1.875 1.875 0 0 0 1.875 1.875h2.625A1.875 1.875 0 0 0 8.25 18.75v-1.875h7.5v1.875a1.875 1.875 0 0 0 1.875 1.875h2.625a1.875 1.875 0 0 0 1.875-1.875v-7.125h.375a1.125 1.125 0 1 0 0-2.25m-15.769-4.5H17.27l2 4.5H4.731zM6 18.375H4.125v-1.5H6zm12 0v-1.5h1.875v1.5zm1.875-3.75H4.125v-3h15.75z" })
  ] });
});
m.displayName = "Car";
export {
  m as Car
};
//# sourceMappingURL=Car.js.map
