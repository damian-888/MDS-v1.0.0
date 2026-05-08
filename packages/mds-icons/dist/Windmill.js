import { jsxs as n, jsx as a } from "react/jsx-runtime";
import { forwardRef as t, useId as h } from "react";
const s = t(({
  size: i = "1em",
  title: l,
  titleId: d,
  ...o
}, e) => {
  const m = h(), r = l ? d ?? m : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: i, height: i, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: e, "aria-labelledby": r, ...o, children: [
    l ? /* @__PURE__ */ a("title", { id: r, children: l }) : null,
    /* @__PURE__ */ a("path", { fill: "currentColor", d: "M21 20.625h-3.524l-.443-3.094a1.876 1.876 0 0 0 2.208-.828l1.125-1.906a1.877 1.877 0 0 0-.664-2.568l-2.96-1.742 3.624-6.158a1.876 1.876 0 0 0-.663-2.568L17.796.636a1.875 1.875 0 0 0-2.568.665L13.485 4.26 7.327.635a1.875 1.875 0 0 0-2.568.664L3.634 3.205a1.875 1.875 0 0 0 .664 2.569L7.26 7.516l-3.624 6.157a1.875 1.875 0 0 0 .663 2.568l1.907 1.125c.23.136.485.22.75.248l-.43 3.01H3a1.125 1.125 0 0 0 0 2.25h18a1.125 1.125 0 1 0 0-2.25m-3.507-5.388-5.837-3.435.743-1.262 5.837 3.436zm-.518-12.469 1.262.744-3.435 5.832L13.54 8.6zm-10.468 0 5.837 3.435-.743 1.262-5.837-3.44zm-.744 11.725 3.435-5.836 1.262.742-3.435 5.837zm3.782.896.97-1.647 4.044 2.383.644 4.5H8.798z" })
  ] });
});
s.displayName = "Windmill";
export {
  s as Windmill
};
//# sourceMappingURL=Windmill.js.map
