export interface StorageDriver {
  upsertFile(filePath: string, content: Buffer | string, recordRevision: boolean): Promise<void>
  readFile(filePath: string): Promise<Buffer>
  deleteFile(filePath: string, recordRevision: boolean): Promise<void>
  directoryListing(folder: string, exlude?): Promise<string[]>
  listRevisions(pathPrefix: string): Promise<FileRevision[]>
  deleteRevision(filePath: string, revision: string): Promise<void>
}

export type FileRevision = {
  path: string
  revision: string
  created_by: string
  created_on: Date
}

export type PendingRevisions = {
  [rootFolder: string]: Array<FileRevision>
}

export interface ServerWidePendingRevisions {
  global: PendingRevisions
  bots: PendingRevisions[]
}

export * from './cache-invalidators'
