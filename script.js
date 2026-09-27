
const catalogo = [
    {
        id: 1,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 2,
        titulo: "Interestelar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "aventura"],
        nota: 8.7,
        assistido: true
    },
    {
        id: 3,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["ficção científica", "terror"],
        nota: 8.6,
        assistido: false
    },
    {
        id: 4,
        titulo: "O Poderoso Chefão",
        tipo: "filme",
        ano: 1972,
        generos: ["drama"],
        nota: 9.2,
        assistido: true
    },
    {
        id: 5,
        titulo: "The Office",
        tipo: "serie",
        ano: 2005,
        generos: ["comédia"],
        nota: 8.9,
        assistido: false
    },
    {
        id: 6,
        titulo: "Matrix",
        tipo: "filme",
        ano: 1999,
        generos: ["ficção científica", "ação"],
        nota: 8.7,
        assistido: true
    }
];
// ===== B.2. Acesso e leitura dos dados =====
console.log("Catálogo completo:");
console.log(catalogo);

// Título do primeiro item
console.log("Título do primeiro item:", catalogo[0].titulo);

// Ano do último item
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);


// Segundo gênero do terceiro item (quando existir)
if (catalogo[2].generos[1]) {
    console.log("Segundo gênero do terceiro item:", catalogo[2].generos[1]);
} else {
    console.log("O terceiro item não possui um segundo gênero.");
}
// ===== B.3.A. Listagem com forEach =====
console.log("\n--- Listagem de títulos (forEach) ---");
catalogo.forEach(function(item) {
    console.log("- [" + item.tipo + "] " + item.titulo + " (" + item.ano + ")");
});

// ===== B.3.B. Transformação com map =====
const titulosEmCaixaAlta = catalogo.map(function(item) {
    return item.titulo.toUpperCase();
});

console.log("\n--- Títulos em maiúsculo (map) ---");
console.log(titulosEmCaixaAlta);

// ===== B.3.C. Seleção com filter =====
const naoAssistidos = catalogo.filter(function(item) {
    return item.assistido === false;
});

console.log("\n--- Itens não assistidos (filter) ---");
console.log(naoAssistidos);
console.log("Quantidade de itens não assistidos:", naoAssistidos.length);


// ===== B.3.D. Busca com find =====
const itemNotaAlta = catalogo.find(function(item) {
    return item.nota >= 9;
});

console.log("\n--- Busca por nota >= 9 (find) ---");
if (itemNotaAlta) {
    console.log("Título:", itemNotaAlta.titulo, "| Nota:", itemNotaAlta.nota);
} else {
    console.log("Nenhum item encontrado com nota maior ou igual a 9.");
}


// ===== B.3.E. Agregação com reduce =====
const somaNotas = catalogo.reduce(function(acumulador, item) {
    return acumulador + item.nota;
}, 0);

const mediaGeral = somaNotas / catalogo.length;

const assistidos = catalogo.filter(function(item) {
    return item.assistido === true;
});

const somaNotasAssistidos = assistidos.reduce(function(acumulador, item) {
    return acumulador + item.nota;
}, 0);

const mediaAssistidos = somaNotasAssistidos / assistidos.length;

console.log("\n--- Cálculo das médias (reduce) ---");
console.log("Média geral do catálogo:", mediaGeral.toFixed(2));
console.log("Média das notas dos assistidos:", mediaAssistidos.toFixed(2));

// ===== B.3.F. Checagens com some e every =====
const existeItemAntigo = catalogo.some(function(item) {
    return item.ano < 2000;
});

const todosTemGenero = catalogo.every(function(item) {
    return item.generos.length >= 1;
});

console.log("\n--- Checagens (some e every) ---");
console.log("Existe algum item com ano < 2000?", existeItemAntigo);
console.log("Todos os itens têm pelo menos 1 gênero?", todosTemGenero);


// ===== B.4. Saída na tela (DOM) =====
const totalItens = catalogo.length;

const totalFilmes = catalogo.filter(function(item) {
    return item.tipo === "filme";
}).length;

const totalSeries = catalogo.filter(function(item) {
    return item.tipo === "serie";
}).length;

const totalNaoAssistidos = naoAssistidos.length;

// Ranking: cópia do array, ordenada por nota (maior para menor), pegando os 3 primeiros
const ranking = [...catalogo].sort(function(a, b) {
    return b.nota - a.nota;
}).slice(0, 3);

let rankingHTML = "<ol>";
ranking.forEach(function(item) {
    rankingHTML += "<li>" + item.titulo + " - Nota: " + item.nota + "</li>";
});
rankingHTML += "</ol>";

const resumoHTML = `
    <h2>Resumo do Catálogo</h2>
    <p>Total de itens: ${totalItens}</p>
    <p>Filmes: ${totalFilmes} | Séries: ${totalSeries}</p>
    <p>Não assistidos: ${totalNaoAssistidos}</p>
    <p>Média geral de notas: ${mediaGeral.toFixed(2)}</p>
    <h3>Top 3 - Maiores notas</h3>
    ${rankingHTML}
`;

document.getElementById("output").innerHTML = resumoHTML;