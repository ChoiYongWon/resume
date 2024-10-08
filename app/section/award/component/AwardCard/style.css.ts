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
  lineHeight: 1.4
});

export const NameLinkStyle = style([NameStyle, {
  borderBottom: "1px solid #222222",
}]);


export const AwardTypeWrapperStyle = style({
  display: "inline-flex",
  verticalAlign: "text-bottom",
  gap: "8px",
});

export const AwardTypeStyle = style({
  padding: "2px 8px",
  fontSize: "12px",
  color: "#EB5757",
  fontWeight: "bold",
  borderRadius: "2px",
  backgroundColor: "#EDEDEB",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
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
