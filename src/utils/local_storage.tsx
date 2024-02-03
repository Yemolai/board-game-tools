export function getJSONFromStorage<T = Record<string, any>>(key: string): T | null {
  const serialized = localStorage.getItem(key)
  if (!serialized) {
    return null
  }
  try {
    return JSON.parse(serialized)
  }
  catch (_err: any) {
    // do something here
    console.trace('Failed to load and deserialize from localStorage', { key, serialized })
    return null
  }
}

export function setJSONToLocalStorage<T = Record<string, any>>(key: string, value: T): void {
  try {
    const serializedValue = JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
  }
  catch (_err: any) {
    // do something here
    console.trace('Failed to serialize and save value to localStorage', { key, value })
  }
}