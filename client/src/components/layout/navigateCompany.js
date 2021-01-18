const mapping = new Map([
    //tuba
    ["B&S","https://www.b-and-s.com/en/"],
    ["Miraphone","https://www.miraphone.de"],
    ["Yamaha","https://europe.yamaha.com/en/products/musical_instruments/winds/index.html"],
    ["Besson","https://www.besson.com/en/"],
    ["MeinlWeston","https://www.melton-meinl-weston.com/en/"],
    //mouthpeice
    ["DenisWick","https://www.deniswick.com"],
    //["Perantucci",],
    ["Bach","https://www.bachbrass.com"],

])


export default function( companyName ){
    const link = mapping.get(companyName);
    window.open(link, "_blank");
}