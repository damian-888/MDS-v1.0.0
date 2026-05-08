import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as s, useId as m } from "react";
const h = s(({
  size: o = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const t = m(), l = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": l, ...e, children: [
    r ? /* @__PURE__ */ a("title", { id: l, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "m21.014 16.797-4.39-4.39 3.556-1.266.071-.028a1.875 1.875 0 0 0-.165-3.494L5.078 2.72a1.875 1.875 0 0 0-2.36 2.359L7.62 20.085a1.875 1.875 0 0 0 3.522.094l1.267-3.555 4.39 4.39a1.875 1.875 0 0 0 2.651 0l1.565-1.565a1.875 1.875 0 0 0 0-2.652m-2.89 2.36-4.545-4.545a1.875 1.875 0 0 0-3.074.647l-1.092 3.07L5.09 5.088l13.238 4.323-3.066 1.093-.072.028a1.874 1.874 0 0 0-.578 3.045l4.546 4.545z" })
  ] });
});
h.displayName = "Cursor";
export {
  h as Cursor
};
//# sourceMappingURL=Cursor.js.map
