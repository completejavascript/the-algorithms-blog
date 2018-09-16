import { rhythm } from "../utils/typography";
import styled, { css } from "styled-components";

export const GridContainer = styled.div`
  width: 1024px;
  max-width: 100%;
  margin: 0 auto;
  padding-left: 0.35rem;
  padding-right: 0.35rem;
`

export const GridContainerFull = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const GridRow = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`

const getWidthString = span => {
  if (!span) return;

  const width = span / 12 * 100;
  return `width: ${width}%`;
}

export const GridColumn = styled.div`
  float: left;
  padding: ${rhythm(0.3)};

  ${({ xs }) => xs ? getWidthString(xs) : "width: 100%"};

  @media (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }

  @media (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`