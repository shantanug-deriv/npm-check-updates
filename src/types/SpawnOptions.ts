import { Index } from './IndexType.js'

/** Options to the spawn node built-in. */
export interface SpawnOptions {
  cwd?: string
  env?: Index<string>
}
