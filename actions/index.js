export const RECEIVE_ENTRIES = 'receive_entries'
export const ADD_ENTRY = 'add_entry'

export function receiveEntries (entries) {
  return {
    type : RECEIVE_ENTRIES,
    entries,
  }
}

export function addEntry (entry) {
  return {
    type : ADD_ENTRY,
    entry,
  }
}
