import isExtractableFileDefault from 'extract-files/isExtractableFile.mjs';

// file object
// {
// 	this.uri = uri;
// 	this.name = name;
// 	this.type = type;
// }

export function isExtractableFile(value: any): boolean {
	return isExtractableFileDefault(value) || !!(value && value.uri && value.type);
}
