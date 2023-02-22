type HashMap = {
  [key: string]: any
}

const LOCAL_STORAGE_KEY_PREFIX = '@OBJ_'

export const getObject = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(`${LOCAL_STORAGE_KEY_PREFIX}${key}`)
    return item && JSON.parse(item)
  } catch (error) {
    console.log(`Error on parse local storage key: ${key}`)
    return null
  }
}

export const setObject = <T = string>(key: string, obj: T): void => (
  localStorage.setItem(
    `${LOCAL_STORAGE_KEY_PREFIX}${key}`,
    JSON.stringify(obj),
  ))


export const removeObject = (key: string): void => (
  localStorage.removeItem(`${LOCAL_STORAGE_KEY_PREFIX}${key}`)
)

