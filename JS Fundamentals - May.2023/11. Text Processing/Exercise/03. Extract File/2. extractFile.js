function extractFile(filePath) {

    let lastSlashIndex = filePath.lastIndexOf('\\');
    let lastFullStopIndex = filePath.lastIndexOf('.');

    let fileName = filePath.substring(lastSlashIndex + 1, lastFullStopIndex);
    let extension = filePath.substring(lastFullStopIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`); 
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');