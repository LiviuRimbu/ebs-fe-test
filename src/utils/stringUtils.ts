export function stringUtils(input: string): string {
	if (input.includes("s-")) {
		return input.replace(/s-/g, "'s ");
	}
	return input;
}
