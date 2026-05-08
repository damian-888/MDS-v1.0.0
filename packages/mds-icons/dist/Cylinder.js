import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { forwardRef as t, useId as a } from "react";
const m = t(({
  size: c = "1em",
  title: r,
  titleId: i,
  ...l
}, o) => {
  const s = a(), d = r ? i ?? s : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: c, height: c, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: o, "aria-labelledby": d, ...l, children: [
    r ? /* @__PURE__ */ e("title", { id: d, children: r }) : null,
    /* @__PURE__ */ e("path", { fill: "currentColor", d: "M16.794 2.258c-1.299-.73-3.001-1.133-4.794-1.133s-3.495.402-4.794 1.132C5.703 3.104 4.875 4.3 4.875 5.626v12.75c0 1.326.828 2.522 2.33 3.367 1.3.73 3.002 1.133 4.795 1.133s3.495-.402 4.794-1.133c1.5-.843 2.331-2.041 2.331-3.367V5.625c0-1.326-.828-2.522-2.33-3.367M8.31 4.217c.954-.535 2.299-.843 3.691-.843s2.738.308 3.69.844c.75.423 1.185.937 1.185 1.406s-.431.982-1.184 1.406c-.953.537-2.299.844-3.691.844s-2.738-.308-3.69-.844c-.754-.423-1.185-.937-1.185-1.406s.431-.982 1.184-1.406m7.382 15.563c-.953.537-2.299.844-3.691.844s-2.738-.308-3.69-.844c-.754-.423-1.185-.937-1.185-1.406V8.944l.08.048c1.3.73 3.002 1.133 4.795 1.133s3.495-.402 4.794-1.133l.081-.048v9.431c0 .469-.431.983-1.184 1.406" })
  ] });
});
m.displayName = "Cylinder";
export {
  m as Cylinder
};
//# sourceMappingURL=Cylinder.js.map
