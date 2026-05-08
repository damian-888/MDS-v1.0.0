import { jsxs as t, jsx as d } from "react/jsx-runtime";
import { forwardRef as l, useId as n } from "react";
const m = l(({
  size: o = "1em",
  title: a,
  titleId: e,
  ...v
}, i) => {
  const h = n(), r = a ? e ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: o, height: o, "aria-hidden": a ? void 0 : !0, role: a ? "img" : void 0, ref: i, "aria-labelledby": r, ...v, children: [
    a ? /* @__PURE__ */ d("title", { id: r, children: a }) : null,
    /* @__PURE__ */ d("path", { fill: "currentColor", d: "M16.125 11.625A1.125 1.125 0 0 1 15 12.75H9a1.125 1.125 0 1 1 0-2.25h6a1.125 1.125 0 0 1 1.125 1.125M15 14.25H9a1.125 1.125 0 1 0 0 2.25h6a1.125 1.125 0 1 0 0-2.25m5.625-10.5v15a3.375 3.375 0 0 1-3.375 3.375H6.75a3.375 3.375 0 0 1-3.375-3.375v-15A1.125 1.125 0 0 1 4.5 2.625h2.25V2.25a1.125 1.125 0 0 1 2.25 0v.375h1.875V2.25a1.125 1.125 0 1 1 2.25 0v.375H15V2.25a1.125 1.125 0 1 1 2.25 0v.375h2.25a1.125 1.125 0 0 1 1.125 1.125m-2.25 1.125H17.25v.375a1.125 1.125 0 1 1-2.25 0v-.375h-1.875v.375a1.125 1.125 0 1 1-2.25 0v-.375H9v.375a1.125 1.125 0 0 1-2.25 0v-.375H5.625V18.75a1.125 1.125 0 0 0 1.125 1.125h10.5a1.125 1.125 0 0 0 1.125-1.125z" })
  ] });
});
m.displayName = "Notepad";
export {
  m as Notepad
};
//# sourceMappingURL=Notepad.js.map
