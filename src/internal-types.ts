import { ComponentType } from 'react';
import { TNode, Document, Element } from '@native-html/transient-render-engine';
import {
  RenderHTMLProps,
  TNodeRendererProps,
  RenderHTMLAmbiantSharedProps,
  TNodeChildrenRendererProps
} from './shared-types';

export type SourceLoaderProps = Pick<
  RenderHTMLProps,
  'source' | 'onHTMLLoaded'
>;

export interface RenderTTreeProps {
  baseUrl?: string;
  document: string | Document | Element;
}

export type TTreeEvents = Pick<
  RenderHTMLProps,
  'onTTreeChange' | 'onDocumentMetadataLoaded'
>;

export interface TNodeSubRendererProps<T extends TNode>
  extends TNodeRendererProps<T> {
  TNodeChildrenRenderer: ComponentType<TNodeChildrenRendererProps>;
  /**
   * Props shared across the whole render tree.
   */
  sharedProps: RenderHTMLAmbiantSharedProps;
}
