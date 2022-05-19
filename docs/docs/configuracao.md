---
layout: page
title: Configuração
permalink: /docs/configuracao/
nav_order: 4
---

# Configuração

O arquivo coda.tex está dividido entre as seções:

1. Configuração base
2. Pacotes
3. Dados para a capa
4. Configurações de imagens
5. Estilo do documento
   1. Destaque de sintaxe
   1. Estilo dos links
   1. Estilo da capa
   1. Estilo do corpo
6. Corpo do documento

## Configuração base

Se precisar alterar o tamanho da fonte ou o tamanho da página, modifique os valores nesta seção. O valor numérico `12pt` corresponde ao tamanho da fonte.

Por padrão, a página está configurada como `a4paper`.

Alguns valores disponíveis são:

|   valor       | largura   | altura    |
|---------------|-----------|-----------|
| a4paper       | 210 mm    | 297 mm    |
| a5paper       | 148 mm    | 210 mm    |
| b5paper       | 176 mm    | 250 mm    |
| letterpaper   | 216 mm    | 279.4 mm  |
| legalpaper    | 216 mm    | 355.6 mm  |

É possível especificar exatamente o tamanho desejado usando o pacote `geometry`. Mais informações sobre tamanhos de página estão disponíveis na [página do grupo TUG](https://tug.org/TUGboat/tb35-3/tb111thurnherr.pdf) (em inglês).

## Pacotes

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

## Dados para a capa

|   tag       |         descrição                                                                                  |
|--------|--------------------------------------------------------------|
| title     | Título do documento                                                                          |
| author    | Nome ou informação de autoria                                                      |
| date       | Data. Use `\today` para inserir a data atual automaticamente |

## Configurações de imagens

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

## Estilo do documento

Esta seção contém a maioria das configurações disponíveis.

### Destaque de sintaxe

Define as cores usadas para dar destaque à sintaxe do código.

Detalhes sobre os códigos de cores estão disponíveis no pacote `lstlisting` --> `lstdefinestyle`.

### Estilo dos links

```tex
\hypersetup{
    colorlinks=true,
    linkcolor=teal,
    filecolor=teal,
    urlcolor=teal
    }
```

### Estilo da capa

```tex
\fancypagestyle{plain}{
    \fancyhf{}
    \fancyhead{}
}
```

### Estilo do corpo

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

## Corpo do documento

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

Isto faz com que todo o conteúdo antes de `\end{minipage}` seja mantido em uma mesma página. Caso você tenha uma quantidade maior de texto, pode retirar estas tags ou usar mais de um conjunto para ter controle sobre quais elementos aparecerão em cada página.

