let calculate = document.getElementById('submit');

calculate.onclick = function() {
    let x = document.getElementById('number').value;

    /*still need to account for the possibility a non-number value is entered;
    also, math operators seem to cause trouble sometimes with my syntax for w/e reason;
    code will be a lot nicer with js object instead of if/else methods*/

    /*length conversions */
    /*metric to imperial */

    if (document.getElementById('measures').value === 'millimeters') {
    document.getElementById('output').innerHTML = `${x} millimeters(mm) equals: ${x * 0.03937} inches(in).`;
    } else if (document.getElementById('measures').value === 'centimeters') {
    document.getElementById('output').innerHTML =`${x} centimeters(cm) equals: ${x * 0.3937} inches(in).`;
    } else if (document.getElementById('measures').value === 'meters') {
    document.getElementById('output').innerHTML =`${x} meters(m) equals: ${x * 1.0936} yards(yd).`;
    } else if (document.getElementById('measures').value === 'kilometers') {
    document.getElementById('output').innerHTML =`${x} kilometers(km) equals: ${x * 0.6214} miles.`;
    } 

    /*imperial to metric */

    else if (document.getElementById('measures').value === 'inches') {
    document.getElementById('output').innerHTML =`${x} inches(in) equals: ${x * 25.4} millimeters(mm) or ${x * 2.54} centimeters(cm).`;
    } else if (document.getElementById('measures').value === 'feet') {
    document.getElementById('output').innerHTML =`${x} feet(ft) equals: ${x * 3.048} centimeters(cm) or ${x * 0.3048} meters(m).`;
    } else if (document.getElementById('measures').value === 'yards') {
    document.getElementById('output').innerHTML =`${x} yards(yd) equals: ${x * 0.9144} meters(m).`;
    } else if (document.getElementById('measures').value === 'miles') {
    document.getElementById('output').innerHTML =`${x} miles equals: ${x * 1.6093} kilometers(km).`;
    }

    /*area conversions */
    /*metric to imperial */

    else if (document.getElementById('measures').value === 'square millimeters') {
    document.getElementById('output').innerHTML = `${x} square millimeters(mm²) equals: ${x * 0.001550} square inches(in²).`;
    } else if (document.getElementById('measures').value === 'square centimeters') {
    document.getElementById('output').innerHTML =`${x} square centimeters(cm²) equals: ${x * 0.1550} square inches(in²).`;
    } else if (document.getElementById('measures').value === 'square meters') {
    document.getElementById('output').innerHTML =`${x} square meters(m²) equals: ${x * 1.1960} square yards(yd²).`;
    } else if (document.getElementById('measures').value === 'hectares') {
    document.getElementById('output').innerHTML =`${x} hectares(ha) equals: ${x * 2.4711} acres.`;
    } else if (document.getElementById('measures').value === 'square kilometers') {
    document.getElementById('output').innerHTML =`${x} square kilometers(km²) equals: ${x * 0.3861} square miles.`;
    } 
    
    /*imperial to metric */
    
    else if (document.getElementById('measures').value === 'square inches') {
    document.getElementById('output').innerHTML = `${x} square inches(in²) equals: ${x * 6.4516} square centimeters(cm²).`;
    } else if (document.getElementById('measures').value === 'square feet') {
    document.getElementById('output').innerHTML =`${x} square feet(ft²) equals: ${x * 0.0929} square meters(m²).`;
    } else if (document.getElementById('measures').value === 'square yards') {
    document.getElementById('output').innerHTML =`${x} square yards(yd²) equals: ${x * 0.8361} square meters(m²).`;
    } else if (document.getElementById('measures').value === 'acres') {
    document.getElementById('output').innerHTML =`${x} acres equals: ${x * 0.404685642} hectares.`;
    } else if (document.getElementById('measures').value === 'square miles') {
    document.getElementById('output').innerHTML =`${x} square miles equals: ${x * 2.59} square kilometers(km²).`;
    } 

    /*volume conversions */
    /*metric to imperial */

    else if (document.getElementById('measures').value === 'cubic centimeters') {
    document.getElementById('output').innerHTML = `${x} cubic centimeters(cm³) equals: ${x * 0.0610} cubic inches(in³).`;
    } else if (document.getElementById('measures').value === 'cubic decimeters') {
    document.getElementById('output').innerHTML =`${x} cubic decimeters(dm³) equals: ${x * 61.023759} cubic inches(in³) or ${x * 0.0353} cubic feet(ft³).`;
    } else if (document.getElementById('measures').value === 'cubic meters') {
    document.getElementById('output').innerHTML =`${x} cubic meters(m³) equals: ${x * 1.3080} cubic yards(yd³).`;
    } else if (document.getElementById('measures').value === 'liters') {
    document.getElementById('output').innerHTML =`${x} liters(l) equals: ${x * 1.76} pints(pt).`;
    } else if (document.getElementById('measures').value === 'hectoliters') {
    document.getElementById('output').innerHTML =`${x} hectoliters(hl) equals: ${x * 21.997} gallons(gal).`;
    } 

    /*imperial to metric */
    
    else if (document.getElementById('measures').value === 'cubic inches') {
    document.getElementById('output').innerHTML = `${x} cubic inches(in³) equals: ${x * 16.387} cubic centimeters(cm³).`;
    } else if (document.getElementById('measures').value === 'cubic feet') {
    document.getElementById('output').innerHTML =`${x} cubic feet(ft³) equals: ${x * 0.0283} cubic meters(m³).`;
    } else if (document.getElementById('measures').value === 'fluid ounces') {
    document.getElementById('output').innerHTML =`${x} fluid ounces(fl oz) equals: ${x * 28.413} milliliters(ml).`;
    } else if (document.getElementById('measures').value === 'pints') {
    document.getElementById('output').innerHTML =`${x} pints(pt) equals: ${x * 0.5683} liters(l).`;
    } else if (document.getElementById('measures').value === 'gallons') {
    document.getElementById('output').innerHTML =`${x} gallons(gal) equals: ${x * 4.5461} liters(l).`;
    } 

    /*mass conversions */
    /*metric to imperial */

    else if (document.getElementById('measures').value === 'milligrams') {
    document.getElementById('output').innerHTML = `${x} milligrams(mg) equals: ${x * 0.0154} grain.`;
    } else if (document.getElementById('measures').value === 'grams') {
    document.getElementById('output').innerHTML =`${x} grams(g) equals: ${x * 0.0353} ounces(oz).`;
    } else if (document.getElementById('measures').value === 'kilograms') {
    document.getElementById('output').innerHTML =`${x} kilograms(kg) equals: ${x * 2.2046} pounds(lb).`;
    } else if (document.getElementById('measures').value === 'tonnes') {
    document.getElementById('output').innerHTML =`${x} tonnes(t) equals: ${x * 2204.62262} pounds(lb).`;
    }
    
    /*imperial to metric */
        
    else if (document.getElementById('measures').value === 'ounces') {
    document.getElementById('output').innerHTML = `${x} ounces(oz) equals: ${x * 28.35} grams(g) or ${x * 0.02835} koligrams(kg).`;
    } else if (document.getElementById('measures').value === 'pounds') {
    document.getElementById('output').innerHTML =`${x} pounds(lb) equals: ${x * 0.4536} kilograms(kg).`;
    }

    /*temperature conversions */

    else if (document.getElementById('measures').value === 'celsius') {
    document.getElementById('output').innerHTML = `${x} degrees celsius(°c) equals: ${(x * 9/5 + 32)} degrees fahrenheit(°f) or ${(x*1)+273.15} kelvin(k).`;
    } else if (document.getElementById('measures').value === 'fahrenheit') {
    document.getElementById('output').innerHTML =`${x} degrees fahrenheit(°f) equals: ${(x-32) * 5/9} degrees celsius(°c) or ${(x-32) * 5/9+273.15} kelvin(k).`;
    } else if (document.getElementById('measures').value === 'kelvin') {
    document.getElementById('output').innerHTML =`${x} kelvin(k) equals: ${x-273.15} degrees celsius(°c) or ${(x-273.15) * 9/5 + 32} degrees fahrenheit(°f).`;
    } 
    
    /*precaution in case something doesn't work as inteded */

    else {
    document.getElementById('output').innerHTML =`error.`;
    }
}