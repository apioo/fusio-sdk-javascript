/**
 * BackendDatabaseTableForeignKeyConstraint automatically generated by SDKgen please do not edit this file manually
 * {@link https://sdkgen.app}
 */

/**
 * This object represents a foreign key constraint on a relational database
 */
export interface BackendDatabaseTableForeignKeyConstraint {
    name?: string
    foreignTable?: string
    localColumnNames?: Array<string>
    foreignColumnNames?: Array<string>
}

