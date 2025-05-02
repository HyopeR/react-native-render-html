import CounterStyle from '@jsamr/counter-style';
import {
  decimal,
  decimalLeadingZero,
  lowerRoman,
  lowerAlpha,
  lowerGreek,
  upperAlpha,
  upperRoman
} from '@jsamr/counter-style/presets';
import DisclosureClosedSymbolRenderer from './symbolic/DisclosureClosedSymbolRenderer';
import DisclosureOpenSymbolRenderer from './symbolic/DisclosureOpenSymbolRenderer';
import CircleSymbolRenderer from './symbolic/CircleSymbolRenderer';
import DiscSymbolRenderer from './symbolic/DiscSymbolRenderer';
import SquareSymbolRenderer from './symbolic/SquareSymbolRenderer';
import type {
  DefaultSupportedListStyleType,
  ListStyleSpec
} from '../shared-types';

const unitaryRenderer = CounterStyle.cyclic('*').withSuffix(' ');

const lowerAlphaSpec = {
  type: 'textual',
  counterStyleRenderer: lowerAlpha
} as const;

const upperAlphaSpec = {
  type: 'textual',
  counterStyleRenderer: upperAlpha
} as const;

/**
 * Default list style specs supported by this library.
 *
 * @public
 */
const defaultListStyleSpecs: Record<
  DefaultSupportedListStyleType,
  ListStyleSpec
> = {
  'decimal-leading-zero': {
    type: 'textual',
    counterStyleRenderer: decimalLeadingZero
  },
  'disclosure-closed': {
    counterStyleRenderer: unitaryRenderer,
    type: 'unitary',
    Component: DisclosureClosedSymbolRenderer
  },
  'disclosure-open': {
    counterStyleRenderer: unitaryRenderer,
    type: 'unitary',
    Component: DisclosureOpenSymbolRenderer
  },
  'lower-alpha': lowerAlphaSpec,
  'lower-greek': {
    type: 'textual',
    counterStyleRenderer: lowerGreek
  },
  'lower-latin': lowerAlphaSpec,
  'lower-roman': {
    type: 'textual',
    counterStyleRenderer: lowerRoman
  },
  'upper-alpha': upperAlphaSpec,
  'upper-latin': upperAlphaSpec,
  'upper-roman': {
    type: 'textual',
    counterStyleRenderer: upperRoman
  },
  circle: {
    counterStyleRenderer: unitaryRenderer,
    type: 'unitary',
    Component: CircleSymbolRenderer
  },
  decimal: {
    type: 'textual',
    counterStyleRenderer: decimal
  },
  disc: {
    counterStyleRenderer: unitaryRenderer,
    type: 'unitary',
    Component: DiscSymbolRenderer
  },
  none: {
    counterStyleRenderer: CounterStyle.symbolic('').withSuffix(null),
    type: 'unitary',
    Component: () => null
  },
  square: {
    counterStyleRenderer: unitaryRenderer,
    type: 'unitary',
    Component: SquareSymbolRenderer
  }
};

export default defaultListStyleSpecs;
