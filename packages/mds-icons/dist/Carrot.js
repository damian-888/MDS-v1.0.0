import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as c, useId as s } from "react";
const h = c(({
  size: l = "1em",
  title: r,
  titleId: d,
  ...e
}, i) => {
  const t = s(), a = r ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    r ? /* @__PURE__ */ o("title", { id: a, children: r }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M21.75 5.625H19.97l1.829-1.83a1.126 1.126 0 0 0-1.228-1.837q-.207.087-.366.244l-1.829 1.83V2.25a1.125 1.125 0 1 0-2.25 0v2.438A6.375 6.375 0 0 0 9 5.988C5.2 9.72 2.36 18.468 2.042 19.478a1.875 1.875 0 0 0 2.48 2.48c.717-.227 5.325-1.72 9.274-3.92l.05-.029c1.603-.897 3.094-1.911 4.166-3a6.375 6.375 0 0 0 1.3-7.134h2.438a1.125 1.125 0 0 0 0-2.25m-5.333 7.793-.009.008c-.76.776-1.791 1.519-2.937 2.205l-2.176-2.176a1.127 1.127 0 0 0-1.594 1.594l1.709 1.708c-2.84 1.422-5.825 2.477-7.056 2.89.635-1.896 2.793-7.95 5.47-11.226l2.877 2.878a1.126 1.126 0 1 0 1.594-1.594l-2.807-2.807a4.125 4.125 0 0 1 4.929 6.52" })
  ] });
});
h.displayName = "Carrot";
export {
  h as Carrot
};
//# sourceMappingURL=Carrot.js.map
