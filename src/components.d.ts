/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface LoadingSpinner {
      'color': string;
      'type': string;
    }
  }

  interface HTMLLoadingSpinnerElement extends StencilComponents.LoadingSpinner, HTMLStencilElement {}

  var HTMLLoadingSpinnerElement: {
    prototype: HTMLLoadingSpinnerElement;
    new (): HTMLLoadingSpinnerElement;
  };
  interface HTMLElementTagNameMap {
    'loading-spinner': HTMLLoadingSpinnerElement;
  }
  interface ElementTagNameMap {
    'loading-spinner': HTMLLoadingSpinnerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'loading-spinner': JSXElements.LoadingSpinnerAttributes;
    }
  }
  namespace JSXElements {
    export interface LoadingSpinnerAttributes extends HTMLAttributes {
      'color'?: string;
      'type'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
