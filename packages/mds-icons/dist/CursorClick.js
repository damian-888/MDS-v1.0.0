import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { forwardRef as n, useId as s } from "react";
const c = n(({
  size: l = "1em",
  title: a,
  titleId: i,
  ...d
}, e) => {
  const t = s(), r = a ? i ?? t : void 0;
  return /* @__PURE__ */ m("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: e, "aria-labelledby": r, ...d, children: [
    a ? /* @__PURE__ */ o("title", { id: r, children: a }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "m21.014 16.797-4.39-4.39 3.556-1.266.07-.028a1.875 1.875 0 0 0-.164-3.494L5.078 2.72a1.875 1.875 0 0 0-2.36 2.359L7.62 20.085a1.875 1.875 0 0 0 3.522.094l1.267-3.555 4.39 4.39a1.875 1.875 0 0 0 2.651 0l1.565-1.565a1.875 1.875 0 0 0 0-2.652m-2.89 2.36-4.545-4.545a1.875 1.875 0 0 0-3.046.575l-.028.072-1.093 3.07L5.09 5.088l13.238 4.323-3.066 1.093-.072.028a1.875 1.875 0 0 0-.577 3.045l4.545 4.545zM7.875 1.5v-.375a1.125 1.125 0 0 1 2.25 0V1.5a1.125 1.125 0 1 1-2.25 0m-6.75 8.625a1.125 1.125 0 1 1 0-2.25H1.5a1.125 1.125 0 0 1 0 2.25zM11.308 2.27l.375-1.125a1.125 1.125 0 0 1 2.135.71l-.375 1.125a1.125 1.125 0 0 1-2.135-.71m-7.615 9.75a1.125 1.125 0 0 1-.712 1.422l-1.125.375a1.126 1.126 0 0 1-1.383-1.574 1.13 1.13 0 0 1 .672-.56l1.125-.375a1.125 1.125 0 0 1 1.423.712" })
  ] });
});
c.displayName = "CursorClick";
export {
  c as CursorClick
};
//# sourceMappingURL=CursorClick.js.map
