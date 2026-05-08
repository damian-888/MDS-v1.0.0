import { jsxs as c, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as m } from "react";
const s = t(({
  size: e = "1em",
  title: r,
  titleId: i,
  ...d
}, l) => {
  const n = m(), o = r ? i ?? n : void 0;
  return /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": o, ...d, children: [
    r ? /* @__PURE__ */ a("title", { id: o, children: r }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M14.25 8.625a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75m0-4.5a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25m7.125 8.756a1.13 1.13 0 0 1-.656 1.023 6.2 6.2 0 0 1-2.013.354c-1.312 0-3.21-.358-5.603-1.78a17 17 0 0 1-.963 1.968c2.215.82 5.485 2.785 5.485 7.304a1.125 1.125 0 0 1-2.25 0c0-1.752-.651-3.1-1.993-4.12-.859-.656-1.833-1.03-2.571-1.25a7 7 0 0 1-.235.277c-1.875 2.144-4.202 3.258-6.773 3.258q-.458 0-.914-.046a1.127 1.127 0 0 1-.606-1.993 1.13 1.13 0 0 1 .83-.245c4.903.489 7.264-4.305 8.043-6.352-3.206-1.673-5.18-.143-5.202-.123a1.125 1.125 0 0 1-1.406-1.755c.147-.12 3.702-2.891 8.835.595 4.04 2.747 6.384 1.867 6.422 1.852a1.125 1.125 0 0 1 1.57 1.031z" })
  ] });
});
s.displayName = "PersonSimpleRun";
export {
  s as PersonSimpleRun
};
//# sourceMappingURL=PersonSimpleRun.js.map
