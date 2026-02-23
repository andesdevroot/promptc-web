---
title: "Scaling the MCP Pipeline: Por qué expandí el Scanner de Go a 10MB"
date: "2026-02-22"
excerpt: "El estándar de 64KB de Go no es suficiente para payloads industriales. Cómo resolví el límite de buffer en la comunicación JSON-RPC del protocolo MCP para integrar plantillas masivas."
tags: ["Golang", "Architecture", "MCP", "Performance"]
---

### El Límite Oculto de stdio

Cuando decidí construir **PROMPTC** como un servidor nativo del Model Context Protocol (MCP), la elección de Go (Golang) fue inmediata. Requería un binario estático, de alto rendimiento, capaz de integrarse directamente con `Claude Desktop` vía la entrada y salida estándar (`stdio`).

Sin embargo, al enfrentar el compilador a plantillas regulatorias reales del sector bancario (como la **CMF Circular 3.459**), el servidor comenzó a fallar silenciosamente. El pipeline JSON-RPC 2.0 se cortaba.

### El Diagnóstico: bufio.Scanner y los 64KB

En Go, la lectura estándar por consola suele implementarse con `bufio.NewScanner(os.Stdin)`. Lo que la documentación advierte en letra pequeña es que este scanner tiene un límite estricto de **64KB (MaxScanTokenSize)** por token.

Cuando Claude Desktop enviaba un payload con un prompt industrial rico en variables, o cuando Ollama (mi nodo local de inferencia vía Tailscale) retornaba la salida determinista, el JSON superaba este límite, truncando el mensaje y rompiendo el parseo.

### La Solución: Buffers Industriales

Para mantener el determinismo sin sacrificar la velocidad, reescribí el puente de transporte en el core del proyecto, inyectando un buffer dinámico pre-asignado.

```go
const maxCapacity = 10 * 1024 * 1024 // 10MB Buffer

scanner := bufio.NewScanner(os.Stdin)
buf := make([]byte, maxCapacity)
scanner.Buffer(buf, maxCapacity)
```

Al asignar un buffer con un techo de 10MB, garantizo que PROMPTC pueda tragar y compilar contextos masivos sin romper la tubería `stdio` que lo conecta con el cliente MCP.

### El Resultado: AI Privada sin Compromisos

El Prompt Engineering en industrias críticas no puede estar limitado por el I/O del sistema operativo. Con este ajuste en la arquitectura, PROMPTC procesa documentos legales completos y orquesta llamadas a nodos locales sin pérdida de datos, solidificando su rol como un verdadero L7 Gateway local-first.