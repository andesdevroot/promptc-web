---
title: "Getting Started"
order: 1
---

## Introducción

**PROMPTC** es un compilador L7 diseñado para transformar el Prompt Engineering en una disciplina determinista y auditable. Como ingeniero y arquitecto de este sistema, mi objetivo principal fue garantizar la **Soberanía del Dato** en industrias críticas (Banca y Minería).

## Requisitos del Sistema

Antes de compilar e instalar el binario, necesitas asegurar el entorno local:

- **Host (Cliente):** macOS (M1/M2/Intel) o Linux (AMD64).
- **Entorno IDE:** `Claude Desktop` o `Cursor` (para la integración MCP).
- **Target Node (Inferencia):** Un nodo local ejecutando `Ollama` (Ej. Mac Mini M2).
- **Red:** `Tailscale` activo en ambas máquinas para crear el túnel seguro.

## Instalación del Binario

He diseñado PROMPTC como un binario estático en Go para que no dependas de librerías externas.

### Opción 1: Script Automático (Recomendado)

```bash
curl -fsSL [https://raw.githubusercontent.com/andesdevroot/promptc/main/install.sh](https://raw.githubusercontent.com/andesdevroot/promptc/main/install.sh) | bash
```

### Opción 2: Compilar desde el Código Fuente

Si prefieres auditar el código y compilarlo tú mismo:

```bash
git clone [https://github.com/andesdevroot/promptc.git](https://github.com/andesdevroot/promptc.git)
cd promptc
go build -o promptc cmd/main.go
sudo mv promptc /usr/local/bin/
```

Verifica la instalación ejecutando:

```bash
promptc --version
# Output esperado: PROMPTC MCP Engine v0.1.0-alpha
```

## Configuración de Entorno

PROMPTC se inyecta directamente en la configuración de Claude Desktop. Edita tu archivo `claude_desktop_config.json` y añade:

```json
{
  "mcpServers": {
    "PROMPTC": {
      "command": "/usr/local/bin/promptc",
      "args": [],
      "env": {
        "PROMPTC_MACMINI_IP": "100.90.x.x",
        "PROMPTC_ENV": "production"
      }
    }
  }
}
```

*Nota: Reemplaza la IP por la dirección Tailscale de tu nodo de inferencia.*