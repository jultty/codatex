---
layout: page
title: Instalação
permalink: /docs/instalacao/
nav_order: 3
---

# Instalação

## Dependências

Para gerar um documento você vai precisar de uma distribuição LaTeX
instalada na sua máquina.

Abaixo são sugeridas duas opções populares:

- [TeX Live](https://tug.org/texlive)
- [MikTeX](https://miktex.org)

A principal diferença entre as duas opções é que a distribuição MikTex
obtém dependências automaticamente conforme forem necessárias.

Se deseja também gerar diagramas com código PlantUML,
é necessário ter o [Java](https://www.java.com/pt-BR/download/),
[Graphviz](https://graphviz.org/download/),
[Inkscape](https://inkscape.org/pt-br/releases/)
e `lualatex`.

Se você instalar uma distribuição LaTeX listada acima, não
é preciso instalar o `lualatex` à parte.

## Download

Para baixar todos os arquivos do repositório,
acesse o [GitHub](https://github.com/jultty/codatex)
e use o botão `Code` na opção `Download zip`.

Essa opção irá baixar o modelo, um documento de exemplo e também
essa página de documentação.

Caso deseje baixar apenas o modelo, selecione o arquivo
[`coda.tex`](https://github.com/jultty/codatex/blob/main/coda.tex).

### git

Você também pode clonar o repositório com o git usando:

```bash
git clone https://github.com/jultty/codatex.git
```

## Diagramas PlantUML

Para representar diagramas você pode usar imagens prontas
ou gerá-los através de um [código PlantUML](https://plantuml.com/)
no próprio corpo do seu documento.

A geração de diagramas com o pacote PlantUML torna a compilação
bem mais demorada e requer uma configuração especial,
mas permite que você modifique seus diagramas conforme trabalha no texto,
 sem precisar alterar e gerar arquivos de imagem várias vezes.

Se quer usar essa funcionalidade você precisa ter quatro dependências
extras configuradas:

- PlantUML
- Graphviz DOT
- Inkscape
- lualatex

O PlantUML é distribuído em um único arquivo `JAR` que você pode
baixar na [página oficial de download](https://plantuml.com/download) ou
no [repositório do GitHub](https://github.com/plantuml/plantuml/releases).

O [Graphviz](https://graphviz.org/download) e o
[Inkscape](https://inkscape.org/pt-br/releases/) possuem instaladores
para sistemas Windows

Se está em um sistema baseado em Linux, esses programas podem ser
instalados usando um grenciador de pacotes.

O GraphViz pode também ser baixado pelo Homebrew, se você preferir
ter uma versão mais atualizada, com o comando:

```bash
brew install graphviz
```

Por fim, `lualatex` já deve vir incluso com a sua distribuição LaTeX.
Para verificar se está instalado, utilize o comando abaixo no seu terminal:

```bash
lualatex -v
```

A versão testada para essa documentação foi 1.14.0.

### Variáveis de ambiente

Após baixar o arquivo `JAR` do PlantUML e instalar o Graphviz,
os caminhos para cada executável precisam estar salvos nas
variáveis de ambiente `PLANTUML_JAR` e `GRAPHVIZ_DOT`.

Se estiver em um sistema Linux ou similar você pode exportar
estas variáveis no arquivo `.bashrc` da sua pasta pessoal
adicionando as linhas:

```bash
export GRAPHVIZ_DOT="/caminho/para/graphviz/dot"
export PLANTUML_JAR="/caminho/para/plantuml/jar"
```

O caminho do arquivo `JAR` do PlantUML será aquele onde você
salvou o arquivo baixado anteriormente. Não há nenhuma restrição
quanto a onde especificamente ele deve ser salvo.

A localização do arquivo executável `dot` do GraphViz depende
do método de instalação utilizado.

Se você usou o Homebrew, o caminho pode se parecer com
`~/.linuxbrew/bin/dot`. Você também pode utilizar
o comando `which dot` para localizar o diretório de instalação.

Para sistemas Windows, as variáveis de ambiente podem ser alteradas em
Painel de Controle -> Configurações do sistema -> Variáveis de ambiente.

Por padrão, o arquivo `dot` será instalado na sua pasta
`Arquivos de programas`.

Mais informações estão disponíveis no
[repositório do pacote LaTeX plantuml](https://github.com/koppor/plantuml)
(em inglês).

