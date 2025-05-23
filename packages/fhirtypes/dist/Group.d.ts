/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Device } from './Device';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Medication } from './Medication';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';
import { Substance } from './Substance';

/**
 * Represents a defined collection of entities that may be discussed or
 * acted upon collectively but which are not expected to act
 * collectively, and are not formally or legally recognized; i.e. a
 * collection of entities that isn't an Organization.
 */
export interface Group {

  /**
   * This is a Group resource
   */
  readonly resourceType: 'Group';

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
   * A unique business identifier for this group.
   */
  identifier?: Identifier[];

  /**
   * Indicates whether the record for the group is available for use or is
   * merely being retained for historical purposes.
   */
  active?: boolean;

  /**
   * Identifies the broad classification of the kind of resources the group
   * includes.
   */
  type: 'person' | 'animal' | 'practitioner' | 'device' | 'medication' | 'substance';

  /**
   * If true, indicates that the resource refers to a specific group of
   * real individuals.  If false, the group defines a set of intended
   * individuals.
   */
  actual: boolean;

  /**
   * Provides a specific type of resource the group includes; e.g. &quot;cow&quot;,
   * &quot;syringe&quot;, etc.
   */
  code?: CodeableConcept;

  /**
   * A label assigned to the group for human identification and
   * communication.
   */
  name?: string;

  /**
   * A count of the number of resource instances that are part of the
   * group.
   */
  quantity?: number;

  /**
   * Entity responsible for defining and maintaining Group characteristics
   * and/or registered members.
   */
  managingEntity?: Reference<Organization | RelatedPerson | Practitioner | PractitionerRole>;

  /**
   * Identifies traits whose presence r absence is shared by members of the
   * group.
   */
  characteristic?: GroupCharacteristic[];

  /**
   * Identifies the resource instances that are members of the group.
   */
  member?: GroupMember[];
}

/**
 * Identifies traits whose presence r absence is shared by members of the
 * group.
 */
export interface GroupCharacteristic {

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
   * A code that identifies the kind of trait being asserted.
   */
  code: CodeableConcept;

  /**
   * The value of the trait that holds (or does not hold - see 'exclude')
   * for members of the group.
   */
  valueCodeableConcept?: CodeableConcept;

  /**
   * The value of the trait that holds (or does not hold - see 'exclude')
   * for members of the group.
   */
  valueBoolean?: boolean;

  /**
   * The value of the trait that holds (or does not hold - see 'exclude')
   * for members of the group.
   */
  valueQuantity?: Quantity;

  /**
   * The value of the trait that holds (or does not hold - see 'exclude')
   * for members of the group.
   */
  valueRange?: Range;

  /**
   * The value of the trait that holds (or does not hold - see 'exclude')
   * for members of the group.
   */
  valueReference?: Reference;

  /**
   * If true, indicates the characteristic is one that is NOT held by
   * members of the group.
   */
  exclude: boolean;

  /**
   * The period over which the characteristic is tested; e.g. the patient
   * had an operation during the month of June.
   */
  period?: Period;
}

/**
 * The value of the trait that holds (or does not hold - see 'exclude')
 * for members of the group.
 */
export type GroupCharacteristicValue = boolean | CodeableConcept | Quantity | Range | Reference;

/**
 * Identifies the resource instances that are members of the group.
 */
export interface GroupMember {

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
   * A reference to the entity that is a member of the group. Must be
   * consistent with Group.type. If the entity is another group, then the
   * type must be the same.
   */
  entity: Reference<Patient | Practitioner | PractitionerRole | Device | Medication | Substance | Group>;

  /**
   * The period that the member was in the group, if known.
   */
  period?: Period;

  /**
   * A flag to indicate that the member is no longer in the group, but
   * previously may have been a member.
   */
  inactive?: boolean;
}
