/*
 * This is a generated file
 * Do not edit manually.
 */

import { Extension } from './Extension';

/**
 * A human-readable summary of the resource conveying the essential
 * clinical and business information for the resource.
 */
export interface Narrative {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * The status of the narrative - whether it's entirely generated (from
   * just the defined data or the extensions too), or whether a human
   * authored it and it may contain additional data.
   */
  status: 'generated' | 'extensions' | 'additional' | 'empty';

  /**
   * The actual narrative content, a stripped down version of XHTML.
   */
  div: string;
}
