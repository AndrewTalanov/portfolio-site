export function setStyles(...array) {

    let styles = '';

    array.forEach(el => {
        styles += el + " ";
    });
     
    return styles;
}
