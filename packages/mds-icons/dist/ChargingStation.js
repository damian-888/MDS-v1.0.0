import { jsxs as t, jsx as a } from "react/jsx-runtime";
import { forwardRef as n, useId as c } from "react";
const v = n(({
  size: r = "1em",
  title: l,
  titleId: d,
  ...o
}, e) => {
  const h = c(), i = l ? d ?? h : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": i, ...o, children: [
    l ? /* @__PURE__ */ a("title", { id: i, children: l }) : null,
    /* @__PURE__ */ a("g", { clipPath: "url(#a)", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12.932 11.37a1.12 1.12 0 0 1 .112 1.048l-1.5 3.75a1.125 1.125 0 0 1-2.088-.836l.883-2.207H9a1.125 1.125 0 0 1-1.044-1.543l1.5-3.75a1.125 1.125 0 0 1 2.088.836l-.883 2.207H12a1.12 1.12 0 0 1 .932.494M24 8.121v7.44a2.812 2.812 0 1 1-5.625 0V12a.375.375 0 0 0-.375-.375h-1.125v7.5H18a1.125 1.125 0 1 1 0 2.25H3a1.125 1.125 0 1 1 0-2.25h1.125V5.25A2.625 2.625 0 0 1 6.75 2.625h7.5a2.625 2.625 0 0 1 2.625 2.625v4.125H18A2.625 2.625 0 0 1 20.625 12v3.563a.562.562 0 1 0 1.125 0V8.122a.38.38 0 0 0-.11-.266l-1.81-1.81a1.126 1.126 0 0 1 1.227-1.838q.207.087.366.244l1.808 1.813A2.6 2.6 0 0 1 24 8.122m-9.375 11.003V5.25a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v13.875z" }) }),
    /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ a("clipPath", { id: "a", children: /* @__PURE__ */ a("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })
  ] });
});
v.displayName = "ChargingStation";
export {
  v as ChargingStation
};
//# sourceMappingURL=ChargingStation.js.map
