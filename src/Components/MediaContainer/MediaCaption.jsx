import React from 'react';
import styled from 'styled-components';

const Caption = styled.p`
  text-align: left;
  line-height: 1.5em;
`;

export default function MediaCaption(props) {
  return <Caption>{props.caption}</Caption>;
}
