export class ReflectionUtils {
  /**
   * Dynamically maps a plain JSON object into a target class instance using the Reflect API.
   */
  static mapToClass<T>(targetClass: new () => T, plainData: Record<string, any>): T {
    const instance = new targetClass();

    // Iterate over all keys of the incoming plain object using reflection
    for (const key of Reflect.ownKeys(plainData)) {
      const stringKey = String(key);
      
      // Dynamically set properties if they exist on the target class structure
      if (Reflect.has(instance, stringKey) || true) { // Optional: allow dynamic property injection
        Reflect.set(instance, stringKey, plainData[stringKey]);
      }
    }

    return instance;
  }
}