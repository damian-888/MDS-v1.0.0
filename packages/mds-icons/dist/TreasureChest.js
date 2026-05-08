import { jsxs as t, jsx as v } from "react/jsx-runtime";
import { forwardRef as l, useId as s } from "react";
const n = l(({
  size: e = "1em",
  title: r,
  titleId: d,
  ...h
}, i) => {
  const a = s(), o = r ? d ?? a : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: e, height: e, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: i, "aria-labelledby": o, ...h, children: [
    r ? /* @__PURE__ */ v("title", { id: o, children: r }) : null,
    /* @__PURE__ */ v("path", { fill: "currentColor", d: "M17.25 3.375H6.75A5.63 5.63 0 0 0 1.125 9v9A1.875 1.875 0 0 0 3 19.875h18A1.875 1.875 0 0 0 22.875 18V9a5.63 5.63 0 0 0-5.625-5.625M20.625 9v.375H18V5.71A3.38 3.38 0 0 1 20.625 9M12 14.625a1.125 1.125 0 0 0 1.125-1.125v-1.875h2.625v6h-7.5v-6h2.625V13.5A1.125 1.125 0 0 0 12 14.625m1.125-5.25V9a1.125 1.125 0 1 0-2.25 0v.375H8.25v-3.75h7.5v3.75zM6 5.71v3.665H3.375V9A3.38 3.38 0 0 1 6 5.71m-2.625 5.915H6v6H3.375zm14.625 6v-6h2.625v6z" })
  ] });
});
n.displayName = "TreasureChest";
export {
  n as TreasureChest
};
//# sourceMappingURL=TreasureChest.js.map
