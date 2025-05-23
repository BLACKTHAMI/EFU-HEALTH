/*
 * This is a generated file
 * Do not edit manually.
 */

import { Account } from './Account';
import { Annotation } from './Annotation';
import { CareTeam } from './CareTeam';
import { CodeableConcept } from './CodeableConcept';
import { Device } from './Device';
import { DiagnosticReport } from './DiagnosticReport';
import { Encounter } from './Encounter';
import { EpisodeOfCare } from './EpisodeOfCare';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { ImagingStudy } from './ImagingStudy';
import { Immunization } from './Immunization';
import { Medication } from './Medication';
import { MedicationAdministration } from './MedicationAdministration';
import { MedicationDispense } from './MedicationDispense';
import { Meta } from './Meta';
import { Money } from './Money';
import { Narrative } from './Narrative';
import { Observation } from './Observation';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Procedure } from './Procedure';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';
import { Substance } from './Substance';
import { SupplyDelivery } from './SupplyDelivery';
import { Timing } from './Timing';

/**
 * The resource ChargeItem describes the provision of healthcare provider
 * products for a certain patient, therefore referring not only to the
 * product, but containing in addition details of the provision, like
 * date, time, amounts and participating organizations and persons. Main
 * Usage of the ChargeItem is to enable the billing process and internal
 * cost allocation.
 */
export interface ChargeItem {

  /**
   * This is a ChargeItem resource
   */
  readonly resourceType: 'ChargeItem';

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
   * Identifiers assigned to this event performer or other systems.
   */
  identifier?: Identifier[];

  /**
   * References the (external) source of pricing information, rules of
   * application for the code this ChargeItem uses.
   */
  definitionUri?: string[];

  /**
   * References the source of pricing information, rules of application for
   * the code this ChargeItem uses.
   */
  definitionCanonical?: string[];

  /**
   * The current state of the ChargeItem.
   */
  status: 'planned' | 'billable' | 'not-billable' | 'aborted' | 'billed' | 'entered-in-error' | 'unknown';

  /**
   * ChargeItems can be grouped to larger ChargeItems covering the whole
   * set.
   */
  partOf?: Reference<ChargeItem>[];

  /**
   * A code that identifies the charge, like a billing code.
   */
  code: CodeableConcept;

  /**
   * The individual or set of individuals the action is being or was
   * performed on.
   */
  subject: Reference<Patient | Group>;

  /**
   * The encounter or episode of care that establishes the context for this
   * event.
   */
  context?: Reference<Encounter | EpisodeOfCare>;

  /**
   * Date/time(s) or duration when the charged service was applied.
   */
  occurrenceDateTime?: string;

  /**
   * Date/time(s) or duration when the charged service was applied.
   */
  occurrencePeriod?: Period;

  /**
   * Date/time(s) or duration when the charged service was applied.
   */
  occurrenceTiming?: Timing;

  /**
   * Indicates who or what performed or participated in the charged
   * service.
   */
  performer?: ChargeItemPerformer[];

  /**
   * The organization requesting the service.
   */
  performingOrganization?: Reference<Organization>;

  /**
   * The organization performing the service.
   */
  requestingOrganization?: Reference<Organization>;

  /**
   * The financial cost center permits the tracking of charge attribution.
   */
  costCenter?: Reference<Organization>;

  /**
   * Quantity of which the charge item has been serviced.
   */
  quantity?: Quantity;

  /**
   * The anatomical location where the related service has been applied.
   */
  bodysite?: CodeableConcept[];

  /**
   * Factor overriding the factor determined by the rules associated with
   * the code.
   */
  factorOverride?: number;

  /**
   * Total price of the charge overriding the list price associated with
   * the code.
   */
  priceOverride?: Money;

  /**
   * If the list price or the rule-based factor associated with the code is
   * overridden, this attribute can capture a text to indicate the  reason
   * for this action.
   */
  overrideReason?: string;

  /**
   * The device, practitioner, etc. who entered the charge item.
   */
  enterer?: Reference<Practitioner | PractitionerRole | Organization | Patient | Device | RelatedPerson>;

  /**
   * Date the charge item was entered.
   */
  enteredDate?: string;

  /**
   * Describes why the event occurred in coded or textual form.
   */
  reason?: CodeableConcept[];

  /**
   * Indicated the rendered service that caused this charge.
   */
  service?: Reference<DiagnosticReport | ImagingStudy | Immunization | MedicationAdministration | MedicationDispense |
      Observation | Procedure | SupplyDelivery>[];

  /**
   * Identifies the device, food, drug or other product being charged
   * either by type code or reference to an instance.
   */
  productReference?: Reference<Device | Medication | Substance>;

  /**
   * Identifies the device, food, drug or other product being charged
   * either by type code or reference to an instance.
   */
  productCodeableConcept?: CodeableConcept;

  /**
   * Account into which this ChargeItems belongs.
   */
  account?: Reference<Account>[];

  /**
   * Comments made about the event by the performer, subject or other
   * participants.
   */
  note?: Annotation[];

  /**
   * Further information supporting this charge.
   */
  supportingInformation?: Reference<Resource>[];
}

/**
 * Date/time(s) or duration when the charged service was applied.
 */
export type ChargeItemOccurrence = Period | string | Timing;

/**
 * Identifies the device, food, drug or other product being charged
 * either by type code or reference to an instance.
 */
export type ChargeItemProduct = CodeableConcept | Reference<Device | Medication | Substance>;

/**
 * Indicates who or what performed or participated in the charged
 * service.
 */
export interface ChargeItemPerformer {

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
   * Describes the type of performance or participation(e.g. primary
   * surgeon, anesthesiologiest, etc.).
   */
  function?: CodeableConcept;

  /**
   * The device, practitioner, etc. who performed or participated in the
   * service.
   */
  actor: Reference<Practitioner | PractitionerRole | Organization | CareTeam | Patient | Device | RelatedPerson>;
}
