import { jsxs as l, jsx as r } from "react/jsx-runtime";
import { forwardRef as t, useId as n } from "react";
const m = t(({
  size: a = "1em",
  title: h,
  titleId: v,
  ...o
}, d) => {
  const i = n(), e = h ? v ?? i : void 0;
  return /* @__PURE__ */ l("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": h ? void 0 : !0, role: h ? "img" : void 0, ref: d, "aria-labelledby": e, ...o, children: [
    h ? /* @__PURE__ */ r("title", { id: e, children: h }) : null,
    /* @__PURE__ */ r("path", { fill: "currentColor", d: "M22.5 7.875h-.59l-.808-3.768a1.885 1.885 0 0 0-1.834-1.482H4.732a1.885 1.885 0 0 0-1.834 1.482L2.09 7.875H1.5a1.125 1.125 0 0 0 0 2.25h.375v8.625a1.875 1.875 0 0 0 1.875 1.875h2.625A1.875 1.875 0 0 0 8.25 18.75v-1.875h7.5v1.875a1.875 1.875 0 0 0 1.875 1.875h2.625a1.875 1.875 0 0 0 1.875-1.875v-8.625h.375a1.125 1.125 0 1 0 0-2.25m-17.466-3h13.932l.643 3H4.39zM6 18.375H4.125v-1.5H6zm12 0v-1.5h1.875v1.5zm1.875-3.75h-3v-2.25a1.125 1.125 0 1 0-2.25 0v2.25h-1.5v-2.25a1.125 1.125 0 1 0-2.25 0v2.25h-1.5v-2.25a1.125 1.125 0 0 0-2.25 0v2.25h-3v-4.5h15.75z" })
  ] });
});
m.displayName = "Jeep";
export {
  m as Jeep
};
//# sourceMappingURL=Jeep.js.map
