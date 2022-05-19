<br><br>
<h1 align="center">codaTeX</h1>

<div align="center">
<a href="https://app.netlify.com/sites/codatex/deploys">
  <img src="https://api.netlify.com/api/v1/badges/88311d2f-5965-482c-a52e-928e680ce936/deploy-status">
</a>
 </div>
 
 <br>

Modelo LaTeX para criar documentos de referência, estudo e pesquisa em programação.

Pré-configurado com as seguintes funcionalidades:

 - Blocos de código com destaque de sintaxe
 - Geração de diagramas por código PlantUML
 - Imagens, listas, links, e caracteres especiais

## Dependências

Você vai precisar de:

 - Uma instalação LaTeX como [TeX Live](https://tug.org/texlive), [MikTeX](https://miktex.org) ou equivalente
 - Para gerar diagramas com código PlantUML: [Java](https://www.java.com/pt-BR/download/), [Graphviz](https://graphviz.org/download/), [Inkscape](https://inkscape.org/pt-br/releases/) e `lualatex`, este último incluso por padrão nas distribuições mencionadas acima

## Download

Para baixar este repositório use o botão `Code` acima e escolha a opção `Download zip`.

Para clonar com git use:

```bash
git clone https://github.com/jultty/codatex.git
```

## Compilação

Para compilar o modelo:

```bash
lualatex --shell-escape coda.tex
```

Ou, se não for gerar diagramas com código PlantUML:

```
pdflatex coda.tex
```

## Documentação

Para mais informações, veja a [página de documentação](https://codatex.netlify.app).
