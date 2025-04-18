/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ContactDetail } from './ContactDetail';
import { Extension } from './Extension';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { ResourceType } from './ResourceType';
import { UsageContext } from './UsageContext';

/**
 * A Capability Statement documents a set of capabilities (behaviors) of
 * a FHIR Server for a particular version of FHIR that may be used as a
 * statement of actual server functionality or a statement of required or
 * desired server implementation.
 */
export interface CapabilityStatement {

  /**
   * This is a CapabilityStatement resource
   */
  readonly resourceType: 'CapabilityStatement';

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
   * An absolute URI that is used to identify this capability statement
   * when it is referenced in a specification, model, design or an
   * instance; also called its canonical identifier. This SHOULD be
   * globally unique and SHOULD be a literal address at which at which an
   * authoritative instance of this capability statement is (or will be)
   * published. This URL can be the target of a canonical reference. It
   * SHALL remain the same when the capability statement is stored on
   * different servers.
   */
  url?: string;

  /**
   * The identifier that is used to identify this version of the capability
   * statement when it is referenced in a specification, model, design or
   * instance. This is an arbitrary value managed by the capability
   * statement author and is not expected to be globally unique. For
   * example, it might be a timestamp (e.g. yyyymmdd) if a managed version
   * is not available. There is also no expectation that versions can be
   * placed in a lexicographical sequence.
   */
  version?: string;

  /**
   * A natural language name identifying the capability statement. This
   * name should be usable as an identifier for the module by machine
   * processing applications such as code generation.
   */
  name?: string;

  /**
   * A short, descriptive, user-friendly title for the capability
   * statement.
   */
  title?: string;

  /**
   * The status of this capability statement. Enables tracking the
   * life-cycle of the content.
   */
  status: 'draft' | 'active' | 'retired' | 'unknown';

  /**
   * A Boolean value to indicate that this capability statement is authored
   * for testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  experimental?: boolean;

  /**
   * The date  (and optionally time) when the capability statement was
   * published. The date must change when the business version changes and
   * it must change if the status code changes. In addition, it should
   * change when the substantive content of the capability statement
   * changes.
   */
  date: string;

  /**
   * The name of the organization or individual that published the
   * capability statement.
   */
  publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  contact?: ContactDetail[];

  /**
   * A free text natural language description of the capability statement
   * from a consumer's perspective. Typically, this is used when the
   * capability statement describes a desired rather than an actual
   * solution, for example as a formal expression of requirements as part
   * of an RFP.
   */
  description?: string;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate capability statement instances.
   */
  useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the capability statement is
   * intended to be used.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * Explanation of why this capability statement is needed and why it has
   * been designed as it has.
   */
  purpose?: string;

  /**
   * A copyright statement relating to the capability statement and/or its
   * contents. Copyright statements are generally legal restrictions on the
   * use and publishing of the capability statement.
   */
  copyright?: string;

  /**
   * The way that this statement is intended to be used, to describe an
   * actual running instance of software, a particular product (kind, not
   * instance of software) or a class of implementation (e.g. a desired
   * purchase).
   */
  kind: 'instance' | 'capability' | 'requirements';

  /**
   * Reference to a canonical URL of another CapabilityStatement that this
   * software implements. This capability statement is a published API
   * description that corresponds to a business service. The server may
   * actually implement a subset of the capability statement it claims to
   * implement, so the capability statement must specify the full
   * capability details.
   */
  instantiates?: string[];

  /**
   * Reference to a canonical URL of another CapabilityStatement that this
   * software adds to. The capability statement automatically includes
   * everything in the other statement, and it is not duplicated, though
   * the server may repeat the same resources, interactions and operations
   * to add additional details to them.
   */
  imports?: string[];

  /**
   * Software that is covered by this capability statement.  It is used
   * when the capability statement describes the capabilities of a
   * particular software version, independent of an installation.
   */
  software?: CapabilityStatementSoftware;

  /**
   * Identifies a specific implementation instance that is described by the
   * capability statement - i.e. a particular installation, rather than the
   * capabilities of a software program.
   */
  implementation?: CapabilityStatementImplementation;

  /**
   * The version of the FHIR specification that this CapabilityStatement
   * describes (which SHALL be the same as the FHIR version of the
   * CapabilityStatement itself). There is no default value.
   */
  fhirVersion: '0.01' | '0.05' | '0.06' | '0.11' | '0.0.80' | '0.0.81' | '0.0.82' | '0.4.0' | '0.5.0' | '1.0.0' |
      '1.0.1' | '1.0.2' | '1.1.0' | '1.4.0' | '1.6.0' | '1.8.0' | '3.0.0' | '3.0.1' | '3.3.0' | '3.5.0' | '4.0.0' | '4.0.1';

  /**
   * A list of the formats supported by this implementation using their
   * content types.
   */
  format: string[];

  /**
   * A list of the patch formats supported by this implementation using
   * their content types.
   */
  patchFormat?: string[];

  /**
   * A list of implementation guides that the server does (or should)
   * support in their entirety.
   */
  implementationGuide?: string[];

  /**
   * A definition of the restful capabilities of the solution, if any.
   */
  rest?: CapabilityStatementRest[];

  /**
   * A description of the messaging capabilities of the solution.
   */
  messaging?: CapabilityStatementMessaging[];

  /**
   * A document definition.
   */
  document?: CapabilityStatementDocument[];
}

/**
 * A document definition.
 */
export interface CapabilityStatementDocument {

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
   * Mode of this document declaration - whether an application is a
   * producer or consumer.
   */
  mode: 'producer' | 'consumer';

  /**
   * A description of how the application supports or uses the specified
   * document profile.  For example, when documents are created, what
   * action is taken with consumed documents, etc.
   */
  documentation?: string;

  /**
   * A profile on the document Bundle that constrains which resources are
   * present, and their contents.
   */
  profile: string;
}

/**
 * Identifies a specific implementation instance that is described by the
 * capability statement - i.e. a particular installation, rather than the
 * capabilities of a software program.
 */
export interface CapabilityStatementImplementation {

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
   * Information about the specific installation that this capability
   * statement relates to.
   */
  description: string;

  /**
   * An absolute base URL for the implementation.  This forms the base for
   * REST interfaces as well as the mailbox and document interfaces.
   */
  url?: string;

  /**
   * The organization responsible for the management of the instance and
   * oversight of the data on the server at the specified URL.
   */
  custodian?: Reference<Organization>;
}

/**
 * A description of the messaging capabilities of the solution.
 */
export interface CapabilityStatementMessaging {

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
   * An endpoint (network accessible address) to which messages and/or
   * replies are to be sent.
   */
  endpoint?: CapabilityStatementMessagingEndpoint[];

  /**
   * Length if the receiver's reliable messaging cache in minutes (if a
   * receiver) or how long the cache length on the receiver should be (if a
   * sender).
   */
  reliableCache?: number;

  /**
   * Documentation about the system's messaging capabilities for this
   * endpoint not otherwise documented by the capability statement.  For
   * example, the process for becoming an authorized messaging exchange
   * partner.
   */
  documentation?: string;

  /**
   * References to message definitions for messages this system can send or
   * receive.
   */
  supportedMessage?: CapabilityStatementMessagingSupportedMessage[];
}

/**
 * An endpoint (network accessible address) to which messages and/or
 * replies are to be sent.
 */
export interface CapabilityStatementMessagingEndpoint {

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
   * A list of the messaging transport protocol(s) identifiers, supported
   * by this endpoint.
   */
  protocol: Coding;

  /**
   * The network address of the endpoint. For solutions that do not use
   * network addresses for routing, it can be just an identifier.
   */
  address: string;
}

/**
 * References to message definitions for messages this system can send or
 * receive.
 */
export interface CapabilityStatementMessagingSupportedMessage {

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
   * The mode of this event declaration - whether application is sender or
   * receiver.
   */
  mode: 'sender' | 'receiver';

  /**
   * Points to a message definition that identifies the messaging event,
   * message structure, allowed responses, etc.
   */
  definition: string;
}

/**
 * A definition of the restful capabilities of the solution, if any.
 */
export interface CapabilityStatementRest {

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
   * Identifies whether this portion of the statement is describing the
   * ability to initiate or receive restful operations.
   */
  mode: 'client' | 'server';

  /**
   * Information about the system's restful capabilities that apply across
   * all applications, such as security.
   */
  documentation?: string;

  /**
   * Information about security implementation from an interface
   * perspective - what a client needs to know.
   */
  security?: CapabilityStatementRestSecurity;

  /**
   * A specification of the restful capabilities of the solution for a
   * specific resource type.
   */
  resource?: CapabilityStatementRestResource[];

  /**
   * A specification of restful operations supported by the system.
   */
  interaction?: CapabilityStatementRestInteraction[];

  /**
   * Search parameters that are supported for searching all resources for
   * implementations to support and/or make use of - either references to
   * ones defined in the specification, or additional ones defined for/by
   * the implementation.
   */
  searchParam?: CapabilityStatementRestResourceSearchParam[];

  /**
   * Definition of an operation or a named query together with its
   * parameters and their meaning and type.
   */
  operation?: CapabilityStatementRestResourceOperation[];

  /**
   * An absolute URI which is a reference to the definition of a
   * compartment that the system supports. The reference is to a
   * CompartmentDefinition resource by its canonical URL .
   */
  compartment?: string[];
}

/**
 * A specification of restful operations supported by the system.
 */
export interface CapabilityStatementRestInteraction {

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
   * A coded identifier of the operation, supported by the system.
   */
  code: 'transaction' | 'batch' | 'search-system' | 'history-system';

  /**
   * Guidance specific to the implementation of this operation, such as
   * limitations on the kind of transactions allowed, or information about
   * system wide search is implemented.
   */
  documentation?: string;
}

/**
 * A specification of the restful capabilities of the solution for a
 * specific resource type.
 */
export interface CapabilityStatementRestResource {

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
   * A type of resource exposed via the restful interface.
   */
  type: ResourceType;

  /**
   * A specification of the profile that describes the solution's overall
   * support for the resource, including any constraints on cardinality,
   * bindings, lengths or other limitations. See further discussion in
   * [Using Profiles](profiling.html#profile-uses).
   */
  profile?: string;

  /**
   * A list of profiles that represent different use cases supported by the
   * system. For a server, &quot;supported by the system&quot; means the system
   * hosts/produces a set of resources that are conformant to a particular
   * profile, and allows clients that use its services to search using this
   * profile and to find appropriate data. For a client, it means the
   * system will search by this profile and process data according to the
   * guidance implicit in the profile. See further discussion in [Using
   * Profiles](profiling.html#profile-uses).
   */
  supportedProfile?: string[];

  /**
   * Additional information about the resource type used by the system.
   */
  documentation?: string;

  /**
   * Identifies a restful operation supported by the solution.
   */
  interaction?: CapabilityStatementRestResourceInteraction[];

  /**
   * This field is set to no-version to specify that the system does not
   * support (server) or use (client) versioning for this resource type. If
   * this has some other value, the server must at least correctly track
   * and populate the versionId meta-property on resources. If the value is
   * 'versioned-update', then the server supports all the versioning
   * features, including using e-tags for version integrity in the API.
   */
  versioning?: 'no-version' | 'versioned' | 'versioned-update';

  /**
   * A flag for whether the server is able to return past versions as part
   * of the vRead operation.
   */
  readHistory?: boolean;

  /**
   * A flag to indicate that the server allows or needs to allow the client
   * to create new identities on the server (that is, the client PUTs to a
   * location where there is no existing resource). Allowing this operation
   * means that the server allows the client to create new identities on
   * the server.
   */
  updateCreate?: boolean;

  /**
   * A flag that indicates that the server supports conditional create.
   */
  conditionalCreate?: boolean;

  /**
   * A code that indicates how the server supports conditional read.
   */
  conditionalRead?: 'not-supported' | 'modified-since' | 'not-match' | 'full-support';

  /**
   * A flag that indicates that the server supports conditional update.
   */
  conditionalUpdate?: boolean;

  /**
   * A code that indicates how the server supports conditional delete.
   */
  conditionalDelete?: 'not-supported' | 'single' | 'multiple';

  /**
   * A set of flags that defines how references are supported.
   */
  referencePolicy?: ('literal' | 'logical' | 'resolves' | 'enforced' | 'local')[];

  /**
   * A list of _include values supported by the server.
   */
  searchInclude?: string[];

  /**
   * A list of _revinclude (reverse include) values supported by the
   * server.
   */
  searchRevInclude?: string[];

  /**
   * Search parameters for implementations to support and/or make use of -
   * either references to ones defined in the specification, or additional
   * ones defined for/by the implementation.
   */
  searchParam?: CapabilityStatementRestResourceSearchParam[];

  /**
   * Definition of an operation or a named query together with its
   * parameters and their meaning and type. Consult the definition of the
   * operation for details about how to invoke the operation, and the
   * parameters.
   */
  operation?: CapabilityStatementRestResourceOperation[];
}

/**
 * Identifies a restful operation supported by the solution.
 */
export interface CapabilityStatementRestResourceInteraction {

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
   * Coded identifier of the operation, supported by the system resource.
   */
  code: 'read' | 'vread' | 'update' | 'patch' | 'delete' | 'history-instance' | 'history-type' | 'create' | 'search-type';

  /**
   * Guidance specific to the implementation of this operation, such as
   * 'delete is a logical delete' or 'updates are only allowed with version
   * id' or 'creates permitted from pre-authorized certificates only'.
   */
  documentation?: string;
}

/**
 * Definition of an operation or a named query together with its
 * parameters and their meaning and type. Consult the definition of the
 * operation for details about how to invoke the operation, and the
 * parameters.
 */
export interface CapabilityStatementRestResourceOperation {

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
   * The name of the operation or query. For an operation, this is the name
   * prefixed with $ and used in the URL. For a query, this is the name
   * used in the _query parameter when the query is called.
   */
  name: string;

  /**
   * Where the formal definition can be found. If a server references the
   * base definition of an Operation (i.e. from the specification itself
   * such as
   * ```http://hl7.org/fhir/OperationDefinition/ValueSet-expand```), that
   * means it supports the full capabilities of the operation - e.g. both
   * GET and POST invocation.  If it only supports a subset, it must define
   * its own custom [OperationDefinition](operationdefinition.html#) with a
   * 'base' of the original OperationDefinition.  The custom definition
   * would describe the specific subset of functionality supported.
   */
  definition: string;

  /**
   * Documentation that describes anything special about the operation
   * behavior, possibly detailing different behavior for system, type and
   * instance-level invocation of the operation.
   */
  documentation?: string;
}

/**
 * Search parameters for implementations to support and/or make use of -
 * either references to ones defined in the specification, or additional
 * ones defined for/by the implementation.
 */
export interface CapabilityStatementRestResourceSearchParam {

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
   * The name of the search parameter used in the interface.
   */
  name: string;

  /**
   * An absolute URI that is a formal reference to where this parameter was
   * first defined, so that a client can be confident of the meaning of the
   * search parameter (a reference to
   * [SearchParameter.url](searchparameter-definitions.html#SearchParameter.url)).
   * This element SHALL be populated if the search parameter refers to a
   * SearchParameter defined by the FHIR core specification or externally
   * defined IGs.
   */
  definition?: string;

  /**
   * The type of value a search parameter refers to, and how the content is
   * interpreted.
   */
  type: 'number' | 'date' | 'string' | 'token' | 'reference' | 'composite' | 'quantity' | 'uri' | 'special';

  /**
   * This allows documentation of any distinct behaviors about how the
   * search parameter is used.  For example, text matching algorithms.
   */
  documentation?: string;
}

/**
 * Information about security implementation from an interface
 * perspective - what a client needs to know.
 */
export interface CapabilityStatementRestSecurity {

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
   * Server adds CORS headers when responding to requests - this enables
   * Javascript applications to use the server.
   */
  cors?: boolean;

  /**
   * Types of security services that are supported/required by the system.
   */
  service?: CodeableConcept[];

  /**
   * General description of how security works.
   */
  description?: string;
}

/**
 * Software that is covered by this capability statement.  It is used
 * when the capability statement describes the capabilities of a
 * particular software version, independent of an installation.
 */
export interface CapabilityStatementSoftware {

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
   * Name the software is known by.
   */
  name: string;

  /**
   * The version identifier for the software covered by this statement.
   */
  version?: string;

  /**
   * Date this version of the software was released.
   */
  releaseDate?: string;
}
