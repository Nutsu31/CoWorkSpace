import React from "react";
import styled, { css } from "styled-components";

const Statistics = () => {
  return <StatisticWrapper>Statistics</StatisticWrapper>;
};

export default Statistics;
const StatisticWrapper = styled.div(
  () => css`
    width: 100%;
    height: 250px;
    display: flex;
    gap: 20px;
  `
);
