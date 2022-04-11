# codaTeX

Modelo LaTeX para criar documentos de referência, estudo e pesquisa em programação.

Pré-configurado com as seguintes funcionalidades:

 - Blocos de código com destaque de sintaxe
 - Geração de diagramas por código PlantUML
 - Imagens, listas, links, e caracteres especiais

## Dependências

Você vai precisar de:

 - Uma instalação LaTeX como [TeX Live](https://tug.org/texlive), [MikTeX](https://miktex.org) ou equivalente
 - Para gerar diagramas com código PlantUML: [Java](https://www.java.com/pt-BR/download/), [Graphviz](https://graphviz.org/download/), [Inkscape](https://inkscape.org/pt-br/releases/) e `lualatex`, este último incluso por padrão nas distribuições mencionadas acima
 
Instruções detalhadas de como configurar seu sistema para gerar os diagramas a partir de um código PlantUML estão disponíveis abaixo.

Existem também opções online que permitem gerar documentos no navegador como o [TeXLive](https://texlive.net) e o [Overleaf](https://overleaf.com).

Se você nunca usou LaTeX antes pode encontrar mais informações no [LearnLatex.org](https://www.learnlatex.org/pt/lesson-03).

## Download

Para baixar este repositório, contendo estas instruções e o arquivo `coda.tex`, use o botão verde `Code` acima e escolha a opção `Download zip`.

Para clonar com git use:

```bash
git clone https://github.com/jultty/codatex.git
```

## Compilação

Para compilar o código use:

```bash
lualatex --shell-escape coda.tex
```

Ou, se não for gerar diagramas com código PlantUML:

```
pdflatex coda.tex
```

## Documentação

### Blocos de código

Para usar os blocos de código, especifique a linguagem desejada
no início da tag de abertura:

```tex
\begin{lstlisting}[language=C++]

    // seu código aqui

\end{lstlisting}
```

### Imagens e diagramas

#### Imagens

Para incorporar imagens no documento, crie um diretório com o nome `img` no mesmo local do arquivo `coda.tex`.

Você pode especificar o nome da imagem com ou sem extensão:

```tex
\includegraphics[scale=0.6]{nome-da-imagem}
```

O valor especificado, `[scale=0.6]`, mostra como reduzir o tamanho da imagem. Use `1` para exibí-la em seu tamanho original.

#### Diagramas PlantUML

Para representar diagramas você pode usar imagens prontas como no exemplo acima ou gerá-los através de um [código PlantUML](https://plantuml.com/).

A geração de diagramas com o pacote PlantUML torna a compilação bem mais demorada e requer uma configuração especial, mas permite que você atualize seus diagramas de forma instantânea sem precisar alterar arquivos de imagem.

Para usar esta funcionalidade você precisa ter o PlantUML, o Graphviz e o Inkscape configurados no seu sistema:

Você pode obter o `JAR` do PlantUML na [página oficial de download](https://plantuml.com/download) ou no [repositório do GitHub](https://github.com/plantuml/plantuml/releases).

O [Graphviz](https://graphviz.org/download) e o [Inkscape](https://inkscape.org/pt-br/releases/) possuem instaladores para sistemas Windows e estão disponíveis na maioria dos gerenciadores de pacotes de sistemas baseados em Linux.

Após baixar o arquivo `JAR` e instalar o Graphviz, os caminhos para cada executável precisam estar salvos nas variáveis de ambiente `PLANTUML_JAR` e `GRAPHVIZ_DOT`.

Se estiver em um sistema Linux ou similar você pode exportar estas variáveis no arquivo `.bashrc` da sua pasta pessoal adicionando as linhas:

```bash
export GRAPHVIZ_DOT="/caminho/para/graphviz/dot"
export PLANTUML_JAR="/caminho/para/plantuml/jar"
```

Para sistemas Windows, as variáveis de ambiente podem ser alteradas em Painel de Controle -> Configurações do sistema -> Variáveis de ambiente.

Por padrão, o arquivo `dot` será instalado na sua pasta `Arquivos de programas`.

Mais informações estão disponíveis no [repositório do pacote plantuml](https://github.com/koppor/plantuml) (em inglês).

### Configurações

O arquivo coda.tex está dividido entre as seções:

 1. Configuração base
 2. Pacotes
 3. Dados para a capa
 4. Configurações de imagens
 5. Estilo do documento
    5.1. Destaque de sintaxe
    5.2. Estilo dos links
    5.3. Estilo da capa
    5.4. Estilo do corpo
 6. Corpo do documento

#### Configuração base

Se precisar alterar o tamanho da fonte ou o tamanho da página, modifique os valores nesta seção. O valor numérico `12pt` corresponde ao tamanho da fonte.

Por padrão, a página está configurada como `a4paper`.

Alguns valores disponíveis são:

|   valor       | largura   | altura    |
| a4paper       | 210 mm    | 297 mm    |
| a5paper       | 148 mm    | 210 mm    |
| b5paper       | 176 mm    | 250 mm    |
| letterpaper   | 216 mm    | 279.4 mm  |
| legalpaper    | 216 mm    | 355.6 mm  |

É possível especificar exatamente o tamanho desejado usando o pacote `geometry`. Mais informações sobre tamanhos de página estão disponíveis na [página do grupo TUG](https://tug.org/TUGboat/tb35-3/tb111thurnherr.pdf) (em inglês).

#### Pacotes

Você precisa dos seguintes pacotes LaTeX para compilar o modelo:

* babel
* listingsutf8
* xcolor
* hyperref
* fancyhdr
* graphicx
* graphics
* epstopdf
* plantuml

A depender da sua configuração, seu sistema LaTeX pode ter a resolução automática dos pacotes, como no caso da distribuição MikTeX. Se não for o caso, será necessário instalar estes pacotes para que o documento seja compilado.

Caso não vá utilizar os diagramas gerados a partir de código PlantUML é seguro remover os pacotes `plantuml`, `epstopdf` e `graphics`.

Se o seu documento não tem imagens de qualquer tipo, também é possível remover o pacote `graphicx`.

Se desejar manter a informação completa dos pacotes você também pode apenas comentá-los adicionado um `%` à frente do pacote ao invés de remover a linha. Por exemplo:

```tex
\usepackage[brazil]{babel}
\usepackage{listingsutf8}
\usepackage{xcolor}
\usepackage{hyperref}
\usepackage{fancyhdr}
%\usepackage{graphicx}
%\usepackage{graphics}
%\usepackage{epstopdf}
%\usepackage[output=svg]{plantuml}
```

#### Dados para a capa

|	tag		|			descrição											|
| title		| Título do documento											|
| author	| Nome ou informação de autoria									|
| date		| Data. Use `\today` para inserir a data atual automaticamente	|

#### Configurações de imagens

Se não quiser usar a pasta `img` para guardar as imagens, outro caminho pode ser especificado nesta seção:

```tex
\graphicspath{ {./img/} }
```

O código abaixo pode ser usado para alterar os parâmetros de linha de comando na conversão dos diagramas PlantUML. Se você não utilizará essa funcionalidade, e principalmente se remover ou comentar os pacotes relevantes, também remova ou comente este código para evitar erros de compilação:

```tex
\epstopdfDeclareGraphicsRule{.svg}{pdf}{.pdf}{
  inkscape -z --file=#1 --export-pdf=\OutputFile
}
```

#### Estilo do documento

Esta seção contém a maioria das configurações disponíveis.

##### Destaque de sintaxe

Define as cores usadas para dar destaque à sintaxe do código.

Parâmetros possíveis (ver pacote lstlisting -> lstdefinestyle)

##### Estilo dos links

```tex
\hypersetup{
    colorlinks=true,
    linkcolor=teal,
    filecolor=teal,
    urlcolor=teal
    }
```

##### Estilo da capa

```tex
\fancypagestyle{plain}{%
    \fancyhf{}%
    \fancyhead{}%
}
```

##### Estilo do corpo

Se desejar alterar onde o número da página é exibido, altere o valor `R` abaixo para `L` se desejar o número à esquerda, `C` se desejar que fique centralizado.

```tex
\pagestyle{fancy}
\fancyhf{}
\fancyhead[R]{\thepage}
\renewcommand{\headrulewidth}{0pt}
```

Se quiser que o número da página seja exibido no rodapé, troque `\fancyhead` por `\fancyfoot`. No código abaixo, o número da página é exibido centralizado no rodapé:

```tex
\pagestyle{fancy}
\fancyhf{}
\fancyfoot[C]{\thepage}
\renewcommand{\headrulewidth}{0pt}
```

### Corpo do documento

A partir de `\begin{document}` o corpo do documento começa a ser gerado.

Para criar seções sem numeração use como no exemplo:

```tex
\section*{Seção}
```

Caso deseje seções numeradas remova o asterisco.

Este exemplo possui uma única seção chamada "Situação 1" que está contida dentro das tags:

```tex
\begin{minipage}{\textwidth}
\end{minipage}
```

Isto faz com que todo o conteúdo antes de `\end{minipage} seja mantido em uma mesma página. Caso você tenha uma quantidade maior de texto, pode retirar estas tags ou usar mais de um conjunto para ter controle sobre quais elementos aparecerão em cada página.