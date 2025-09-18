import { style } from "@vanilla-extract/css";

export const AwardStyle = style({
  display: "flex",
  flexDirection: "column",
});

export const HeaderStyle = style({
  // display: "flex",
  // gap: "8px",
});

export const NameStyle = style({
  fontSize: "16px",
  fontWeight: 500,
  marginRight: "8px",
  lineHeight: 1.4,
});

export const DayStyle = style({
  fontSize: "12.5px",
});

export const HostStyle = style({
  fontSize: "12px",
  opacity: 0.5,
  // fontStyle: "italic",
  // fontSynthesis: 'style'
});
