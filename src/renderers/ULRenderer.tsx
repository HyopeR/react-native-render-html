import React from 'react';
import { TBlock } from '@native-html/transient-render-engine';
import { InternalBlockRenderer } from '../render/render-types';
import {
  InternalRendererProps,
  DefaultSupportedListStyleType
} from '../shared-types';
import ULElement, { ULElementProps } from '../elements/ULElement';
import { useRendererProps } from '../context/RenderersPropsProvider';

function getFallbackListStyleTypeFromNestLevel(
  nestLevel: number
): DefaultSupportedListStyleType {
  switch (nestLevel % 3) {
    case 0:
      return 'disc';
    case 1:
      return 'circle';
    default:
      return 'square';
  }
}

export function useULElementProps(
  props: InternalRendererProps<TBlock>
): ULElementProps {
  const config = useRendererProps('ul');
  return {
    ...props,
    getFallbackListStyleTypeFromNestLevel,
    ...config
  };
}

const ULRenderer: InternalBlockRenderer = (props) => {
  return React.createElement(ULElement, useULElementProps(props));
};

export default ULRenderer;
