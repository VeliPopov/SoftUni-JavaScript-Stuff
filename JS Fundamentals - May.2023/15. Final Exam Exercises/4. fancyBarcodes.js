function fancyBarcodes(input) {

    let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/g;

    let n = Number(input.shift());

    for (let index = 0; index < n; index++) {
        let barcode = input[index];
        let match = pattern.exec(barcode);

        if (match) {
            let productGroup = match[1].match(/\d/g);
            if (productGroup) {
                console.log(`Product group: ${productGroup.join('')}`);
            } else {
                console.log('Product group: 00');
            }
        } else {
            console.log('Invalid barcode');
        }

        pattern.lastIndex = 0; // Reset RegExp state
    }
}

fancyBarcodes(["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]);
fancyBarcodes(["6", "@###Val1d1teM@###", "@#ValidIteM@#", "##InvaliDiteM##", "@InvalidIteM@", "@#Invalid_IteM@#", "@#ValiditeM@#"]);
