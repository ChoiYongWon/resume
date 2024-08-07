import { style } from "@vanilla-extract/css";

export const LayoutStyle = style({
  position: "relative",
  display: "flex",
  margin: "0 auto",
  marginTop: "96px",
  width: "100%",
  maxWidth: "56rem",
  height: "auto",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  color: "#222222",
  boxShadow:
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(17, 24, 39, 0.05) 0px 0px 0px 1px, rgba(51, 65, 85, 0.1) 0px 20px 25px -5px, rgba(51, 65, 85, 0.1) 0px 8px 10px -6px",
  padding: "3rem 1.5rem",
  marginBottom: "96px"

  // "@media": {
  //   "screen and (min-width: 768px)": {

  //   },
  //   "screen and (min-width: 1000px)": {

  //   },
  // },
});

export const ResumeLayoutStyle = style({
  width: "100%",
  minHeight: "calc(100dvh - 96px - 96px)",

  // "@media": {
  //   "screen and (min-width: 768px)": {

  //   },
  //   "screen and (min-width: 1000px)": {

  //   },
  // },
});

export const ContentStyle = style({
  width: "100%",
  maxWidth: "75ch",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  margin: "2rem auto",
  fontSize: "14px !important",
  wordBreak: "keep-all",

  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "15px !important",
    },
  },
});

export const UlStyle = style({
  //
  listStyleImage: `url(/svg/list.svg)`,
  listStylePosition: "outside",
  // textIndent: "calc(-18px - 5.5px)",
  // marginInlineStart: 0,
  // paddingInlineStart: "18px",
  // margin-inline-start: 0;
  // padding-inline-start: 40px;
  marginLeft: "24px",
  fontWeight: 200,
});

export const LiStyle = style({
  lineHeight: 1.4,
  marginBottom: "9px",
  "::marker": {
    marginRight: "10px",
  },
});

export const LinkStyle = style({
  fontSize: "13px !important",
  borderBottom: "solid 1px #202020",
  fontWeight: 500,
  cursor: "pointer",
  "@media": {
    "screen and (min-width: 768px)": {
      fontSize: "14px !important",
    },
  },
});

export const DividerStyle = style({
  width: "100%",
  height: "0.5px",
  backgroundColor: "#202020",
  opacity: 0.3,
});
