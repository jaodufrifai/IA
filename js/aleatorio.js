const nomes = ["Carimbo", "Bananilson Farofa", "Adolf Hitler", "Bóbi Gudis da Silva", "Joseph Goebbles", "João", "Pelé"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)