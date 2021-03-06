
export function validirajEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

export function popunjenoSve(polja) {
    for (let p of polja)
        if (p == null || p === '') return false;

    return true;
}

export function jePozitivanCeoBroj(broj) {
    if (broj > 0 && Number.isInteger(broj)) return true;
    else return false;
}