import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as c, useId as m } from "react";
const s = c(({
  size: a = "1em",
  title: r,
  titleId: o,
  ...d
}, l) => {
  const n = m(), e = r ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: a, height: a, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: l, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "M12 8.624a3.375 3.375 0 1 0 0 6.75 3.375 3.375 0 0 0 0-6.75m0 4.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25m3.316-9.093.763-2.592A1.124 1.124 0 0 0 14.802.017a18.2 18.2 0 0 0-5.636 2.208C5.378 4.525 3.375 7.905 3.375 12a8.64 8.64 0 0 0 5.31 7.968L7.92 22.56a1.125 1.125 0 0 0 1.277 1.422 18.2 18.2 0 0 0 5.636-2.208c3.788-2.3 5.791-5.68 5.791-9.775a8.64 8.64 0 0 0-5.31-7.968m-1.594 15.783a15.8 15.8 0 0 1-3.07 1.432l.496-1.687a1.124 1.124 0 0 0-.79-1.407A6.375 6.375 0 0 1 5.625 12c0-3.292 1.566-5.923 4.655-7.817a16 16 0 0 1 3.07-1.434l-.496 1.688a1.124 1.124 0 0 0 .79 1.406A6.375 6.375 0 0 1 18.374 12c0 3.292-1.566 5.922-4.655 7.817z" })
  ] });
});
s.displayName = "Hurricane";
export {
  s as Hurricane
};
//# sourceMappingURL=Hurricane.js.map
