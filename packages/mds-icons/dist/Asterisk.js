import { jsxs as s, jsx as i } from "react/jsx-runtime";
import { forwardRef as n, useId as v } from "react";
const c = n(({
  size: l = "1em",
  title: r,
  titleId: o,
  ...a
}, d) => {
  const t = v(), e = r ? o ?? t : void 0;
  return /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: d, "aria-labelledby": e, ...a, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M20.464 17.078a1.124 1.124 0 0 1-1.544.387l-5.795-3.478v6.263a1.125 1.125 0 1 1-2.25 0v-6.263l-5.796 3.478a1.126 1.126 0 0 1-1.67-1.238c.072-.29.256-.538.512-.692L9.813 12 3.921 8.465a1.125 1.125 0 0 1 1.158-1.93l5.796 3.478V3.75a1.125 1.125 0 1 1 2.25 0v6.263l5.795-3.478a1.125 1.125 0 0 1 1.158 1.93L14.186 12l5.892 3.535a1.125 1.125 0 0 1 .386 1.543" })
  ] });
});
c.displayName = "Asterisk";
export {
  c as Asterisk
};
//# sourceMappingURL=Asterisk.js.map
