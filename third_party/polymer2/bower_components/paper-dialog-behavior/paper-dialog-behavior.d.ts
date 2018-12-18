/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-dialog-behavior.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../iron-overlay-behavior/iron-overlay-behavior.d.ts" />

declare namespace Polymer {

  /**
   *   Use `Polymer.PaperDialogBehavior` and `paper-dialog-shared-styles.html` to
   *   implement a Material Design dialog.
   *
   *   For example, if `<paper-dialog-impl>` implements this behavior:
   *
   *       <paper-dialog-impl>
   *           <h2>Header</h2>
   *           <div>Dialog body</div>
   *           <div class="buttons">
   *               <paper-button dialog-dismiss>Cancel</paper-button>
   *               <paper-button dialog-confirm>Accept</paper-button>
   *           </div>
   *       </paper-dialog-impl>
   *
   *   `paper-dialog-shared-styles.html` provide styles for a header, content area, and
   *   an action area for buttons. Use the `<h2>` tag for the header and the `buttons`
   *   class for the action area. You can use the `paper-dialog-scrollable` element (in
   *   its own repository) if you need a scrolling content area.
   *
   *   Use the `dialog-dismiss` and `dialog-confirm` attributes on interactive controls
   *   to close the dialog. If the user dismisses the dialog with `dialog-confirm`, the
   *   `closingReason` will update to include `confirmed: true`.
   *
   *   ### Accessibility
   *
   *   This element has `role="dialog"` by default. Depending on the context, it may be
   *   more appropriate to override this attribute with `role="alertdialog"`.
   *
   *   If `modal` is set, the element will prevent the focus from exiting the element.
   *   It will also ensure that focus remains in the dialog.
   *
   *   
   */
  interface PaperDialogBehavior extends Polymer.IronOverlayBehavior {

    /**
     * If `modal` is true, this implies `no-cancel-on-outside-click`,
     * `no-cancel-on-esc-key` and `with-backdrop`.
     */
    modal: boolean|null|undefined;
    hostAttributes: object|null;
    ready(): void;
    _modalChanged(modal: any, readied: any): void;
    _updateClosingReasonConfirmed(confirmed: any): void;

    /**
     * Will dismiss the dialog if user clicked on an element with dialog-dismiss
     * or dialog-confirm attribute.
     */
    _onDialogClick(event: any): void;
  }

  const PaperDialogBehavior: object;
}
