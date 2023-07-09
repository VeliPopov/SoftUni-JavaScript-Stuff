function extractFile(filePath) {

    let pathParts = filePath.split('\\');
    let fullFileName = pathParts[pathParts.length - 1];
    let fileNameParts = fullFileName.split('.');
    
    let extension = fileNameParts.pop();
    let fileName = fileNameParts.join('.');
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
