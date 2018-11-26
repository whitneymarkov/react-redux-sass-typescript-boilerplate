
/**
 * Tests the equality of two objects across all fields given in the *fieldsToCheck* parameter
 * @param obj1
 * @param obj2
 * @param fieldsToCheck Fields to check equality on
 */
export const deepEqualityCheck = (obj1: { [key: string]: any }, obj2: { [key: string]: any }, fieldsToCheck: string[]) => {
    for (const field of fieldsToCheck) {
        if (obj1[field] !== obj2[field]) {
            return false;
        }
    }
    return true;
};
