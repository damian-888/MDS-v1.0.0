import { jsxs as t, jsx as i } from "react/jsx-runtime";
import { forwardRef as m, useId as s } from "react";
const c = m(({
  size: l = "1em",
  title: r,
  titleId: o,
  ...d
}, a) => {
  const n = s(), e = r ? o ?? n : void 0;
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: l, height: l, "aria-hidden": r ? void 0 : !0, role: r ? "img" : void 0, ref: a, "aria-labelledby": e, ...d, children: [
    r ? /* @__PURE__ */ i("title", { id: e, children: r }) : null,
    /* @__PURE__ */ i("path", { fill: "currentColor", d: "m21.576 6.614-4.19-4.19a1.875 1.875 0 0 0-2.651 0L3.175 13.986a1.86 1.86 0 0 0-.55 1.325v4.19A1.875 1.875 0 0 0 4.5 21.376h4.19a1.86 1.86 0 0 0 1.325-.55l11.56-11.56a1.875 1.875 0 0 0 0-2.652M8.719 16.876l6.656-6.656 1.031 1.031-6.656 6.656zm-1.594-1.594-1.031-1.031 6.656-6.656 1.031 1.031zm-2.25.938 1.454 1.454 1.452 1.452H4.875zM18 9.657l-3.656-3.656 1.72-1.72 3.655 3.657z" })
  ] });
});
c.displayName = "Pencil";
export {
  c as Pencil
};
//# sourceMappingURL=Pencil.js.map
