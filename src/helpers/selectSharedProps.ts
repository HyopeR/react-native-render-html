import { pickBy, pick, pipe, mergeRight } from 'ramda';
import { RenderHTMLProps, RenderHTMLAmbiantSharedProps } from '../shared-types';
import defaultSharedProps from '../context/defaultSharedProps';

const selectSharedProps: (
  props: Partial<RenderHTMLProps>
) => RenderHTMLAmbiantSharedProps = pipe(
  pick(Object.keys(defaultSharedProps)),
  pickBy((val) => val != null),
  mergeRight(defaultSharedProps) as any
);

export default selectSharedProps;
