/* eslint-disable react/display-name */
import { forwardRef } from "react";
import styled from "styled-components";

export const StyledSectionBigHeading = styled(forwardRef((props, ref) => <h1 {...props} ref={ref} />))`
  font-family: Poppins;
  font-weight: 600;
  font-size: 3rem;
  line-height: 1.5rem;

  @media (min-width : 1024px) {
    line-height: 3.94rem;
  }
`;

export const StyledSectionParagraph = styled((props) => <p {...props} />)`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 400;
  margin : 0;

  @media (min-width: 1024px) {
    line-height: 1.5rem;
  }
`;

export const StyledSectionSubheading = styled(forwardRef((props, ref) => <h3 {...props} ref={ref} />))`
  font-family: Poppins;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 300;

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
`;
