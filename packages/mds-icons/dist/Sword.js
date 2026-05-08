import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { forwardRef as h, useId as m } from "react";
const s = h(({
  size: r = "1em",
  title: l,
  titleId: d,
  ...e
}, i) => {
  const t = m(), a = l ? d ?? t : void 0;
  return /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", width: r, height: r, "aria-hidden": l ? void 0 : !0, role: l ? "img" : void 0, ref: i, "aria-labelledby": a, ...e, children: [
    l ? /* @__PURE__ */ o("title", { id: a, children: l }) : null,
    /* @__PURE__ */ o("path", { fill: "currentColor", d: "M20.25 2.625h-6a1.13 1.13 0 0 0-.875.417L7.453 10.36l-.437-.436a1.875 1.875 0 0 0-2.652 0L2.799 11.49a1.875 1.875 0 0 0 0 2.652l1.42 1.422-1.983 1.984a1.875 1.875 0 0 0 0 2.651l1.565 1.565a1.875 1.875 0 0 0 2.651 0l1.985-1.982 1.422 1.422a1.873 1.873 0 0 0 2.653 0l1.564-1.565a1.874 1.874 0 0 0 0-2.653l-.436-.436 7.318-5.922a1.13 1.13 0 0 0 .417-.877v-6a1.125 1.125 0 0 0-1.125-1.125M5.127 19.907l-1.031-1.031 1.716-1.72 1.031 1.032zm6.057-.563-6.53-6.528 1.036-1.032 6.53 6.53zm7.94-10.131-7.085 5.735-.696-.698 4.454-4.453a1.127 1.127 0 1 0-1.593-1.594L9.75 12.656l-.699-.697 5.736-7.084h4.338z" })
  ] });
});
s.displayName = "Sword";
export {
  s as Sword
};
//# sourceMappingURL=Sword.js.map
