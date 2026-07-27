//% color="#0FBC11" weight=97 icon="\uf00b"
//% block="Enums"
//% groups='["Simple", "Advanced"]'
namespace Enum {
    export let enums: { [key: string]: { [key: string]: number } } = {}

    /**
     * Sets an enum key and its assigned number value without returning a value.
     * @param e The enum category name
     * @param str The enum key name
     * @param val Optional custom number value. If omitted, increments from the last value (defaults to 0).
    */
    //% group="Advanced"
    //% blockId=enum_setEnumVarStatement block="set enum variable in $e name $str || with value $val"
    //% expandableArgumentMode="toggle"
    //% e.shadow="enum_enumShadow"
    //% str.shadow="enum_varShadow"
    //% weight=51
    export function setEnumVarStatement(e: string, str: string, val: number = null): void {
        setEnumVar(e, str, val);
    }

    /**
     * Adds or sets an enum key and its assigned number value.
     * @param e The enum category name
     * @param str The enum key name
     * @param val Optional custom number value. If omitted, increments from the last value (defaults to 0).
     */
    //% group="Advanced"
    //% blockId=enum_setEnumVar block="set enum variable in $e name $str || with value $val"
    //% expandableArgumentMode="toggle"
    //% e.shadow="enum_enumShadow"
    //% str.shadow="enum_varShadow"
    //% weight=50
    export function setEnumVar(e: string, str: string, val: number = null) {
        if (!enums[e]) enums[e] = {}
        if (val == null) val = getLastValue(e) + 1
        enums[e][str] = val
        return val
    }

    /**
     * Retrieves the number value assigned to an enum key.
     * @param e The enum category name
     * @param str The enum key name
     * @returns The number associated with the enum key, or null if it does not exist.
     */
    //% group="Advanced"
    //% blockId=enum_getEnumVar block="get number from enum $e name $str"
    //% e.shadow="enum_enumShadow"
    //% str.shadow="enum_varShadow"
    //% weight=100
    export function getEnumVar(e: string, str: string) {
        const en = enums[e]
        if (!en) return null

        const v = en[str]
        return v !== undefined ? v : null
    }

    /**
     * Gets an enum value, automatically registering and assigning it a number if it doesn't exist.
     * @param e The enum category name
     * @param str The enum key name
     * @param def Optional default value to assign if the key doesn't exist (defaults to auto-increment)
     * @returns The existing or newly created number value.
     */
    //% group="Simple"
    //% blockId=enum_enumVar block="enum $e name $str || default value $def"
    //% expandableArgumentMode="toggle"
    //% e.shadow="enum_enumShadow"
    //% str.shadow="enum_varShadow"
    //% weight=50
    export function enumVar(e: string, str: string, def: number = null) {
        let val = getEnumVar(e, str)
        if (val == null) val = setEnumVar(e, str, def)
        return val
    }

	/**
	 * Finds and returns the enum key name associated with a specific number value.
	 * @param e The enum category name
	 * @param val The number value to look up
	 * @returns The name of the key matching the number, or null if not found.
	 */
	//% group="Simple"
	//% blockId=enum_enumStr block="name from enum $e with value $val"
    //% e.shadow="enum_enumShadow"
	//% weight=40
	export function enumStr(e: string, val: number): string {
    	const en = enums[e]
    	if (!en) return null

    	const keys = Object.keys(en)
    	for (let i = 0; i < keys.length; i++) {
        	let key = keys[i]
    		if (en[key] === val) {
        		return key
        	}
    	}
    	return null
	}

    //% block="$name"
    //% blockId=enum_enumShadow
    //% blockHidden=true shim=TD_ID
    //% name.fieldEditor="autocomplete" name.fieldOptions.decompileLiterals=true
    //% name.fieldOptions.key="enumEnum"
    export function _enumShadow(name: string) {
        return name
    }

    //% block="$name"
    //% blockId=enum_varShadow
    //% blockHidden=true shim=TD_ID
    //% name.fieldEditor="autocomplete" name.fieldOptions.decompileLiterals=true
    //% name.fieldOptions.key="enumVar"
    export function _varShadow(name: string) {
        return name
    }

    export function getLastValue(e: string): number {
        if (!enums[e]) return -1
        const keys = Object.keys(enums[e])
        return keys.length === 0 ? -1 : enums[e][keys[keys.length - 1]]
    }
}
