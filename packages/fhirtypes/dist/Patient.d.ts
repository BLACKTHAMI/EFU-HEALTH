/*
 * This is a generated file
 * Do not edit manually.
 */

import { Address } from './Address';
import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { ContactPoint } from './ContactPoint';
import { Extension } from './Extension';
import { HumanName } from './HumanName';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';

/**
 * Demographics and other administrative information about an individual
 * or animal receiving care or other health-related services.
 */
export interface Patient {

  /**
   * This is a Patient resource
   */
  readonly resourceType: 'Patient';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * An identifier for this patient.
   */
  identifier?: Identifier[];

  /**
   * Whether this patient record is in active use.
   * Many systems use this property to mark as non-current patients, such
   * as those that have not been seen for a period of time based on an
   * organization's business rules.
   *
   * It is often used to filter patient lists to exclude inactive patients
   *
   * Deceased patients may also be marked as inactive for the same reasons,
   * but may be active for some time after death.
   */
  active?: boolean;

  /**
   * A name associated with the individual.
   */
  name?: HumanName[];

  /**
   * A contact detail (e.g. a telephone number or an email address) by
   * which the individual may be contacted.
   */
  telecom?: ContactPoint[];

  /**
   * Administrative Gender - the gender that the patient is considered to
   * have for administration and record keeping purposes.
   */
  gender?: 'male' | 'female' | 'other' | 'unknown';

  /**
   * The date of birth for the individual.
   */
  birthDate?: string;

  /**
   * Indicates if the individual is deceased or not.
   */
  deceasedBoolean?: boolean;

  /**
   * Indicates if the individual is deceased or not.
   */
  deceasedDateTime?: string;

  /**
   * An address for the individual.
   */
  address?: Address[];

  /**
   * This field contains a patient's most recent marital (civil) status.
   */
  maritalStatus?: CodeableConcept;

  /**
   * Indicates whether the patient is part of a multiple (boolean) or
   * indicates the actual birth order (integer).
   */
  multipleBirthBoolean?: boolean;

  /**
   * Indicates whether the patient is part of a multiple (boolean) or
   * indicates the actual birth order (integer).
   */
  multipleBirthInteger?: number;

  /**
   * Image of the patient.
   */
  photo?: Attachment[];

  /**
   * A contact party (e.g. guardian, partner, friend) for the patient.
   */
  contact?: PatientContact[];

  /**
   * A language which may be used to communicate with the patient about his
   * or her health.
   */
  communication?: PatientCommunication[];

  /**
   * Patient's nominated care provider.
   */
  generalPractitioner?: Reference<Organization | Practitioner | PractitionerRole>[];

  /**
   * Organization that is the custodian of the patient record.
   */
  managingOrganization?: Reference<Organization>;

  /**
   * Link to another patient resource that concerns the same actual
   * patient.
   */
  link?: PatientLink[];
}

/**
 * Indicates if the individual is deceased or not.
 */
export type PatientDeceased = boolean | string;

/**
 * Indicates whether the patient is part of a multiple (boolean) or
 * indicates the actual birth order (integer).
 */
export type PatientMultipleBirth = boolean | number;

/**
 * A language which may be used to communicate with the patient about his
 * or her health.
 */
export interface PatientCommunication {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The ISO-639-1 alpha 2 code in lower case for the language, optionally
   * followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in
   * upper case; e.g. &quot;en&quot; for English, or &quot;en-US&quot; for American English
   * versus &quot;en-EN&quot; for England English.
   */
  language: CodeableConcept;

  /**
   * Indicates whether or not the patient prefers this language (over other
   * languages he masters up a certain level).
   */
  preferred?: boolean;
}

/**
 * A contact party (e.g. guardian, partner, friend) for the patient.
 */
export interface PatientContact {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The nature of the relationship between the patient and the contact
   * person.
   */
  relationship?: CodeableConcept[];

  /**
   * A name associated with the contact person.
   */
  name?: HumanName;

  /**
   * A contact detail for the person, e.g. a telephone number or an email
   * address.
   */
  telecom?: ContactPoint[];

  /**
   * Address for the contact person.
   */
  address?: Address;

  /**
   * Administrative Gender - the gender that the contact person is
   * considered to have for administration and record keeping purposes.
   */
  gender?: 'male' | 'female' | 'other' | 'unknown';

  /**
   * Organization on behalf of which the contact is acting or for which the
   * contact is working.
   */
  organization?: Reference<Organization>;

  /**
   * The period during which this contact person or organization is valid
   * to be contacted relating to this patient.
   */
  period?: Period;
}

/**
 * Link to another patient resource that concerns the same actual
 * patient.
 */
export interface PatientLink {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * The other patient resource that the link refers to.
   */
  other: Reference<Patient | RelatedPerson>;

  /**
   * The type of link between this patient resource and another patient
   * resource.
   */
  type: 'replaced-by' | 'replaces' | 'refer' | 'seealso';
}
