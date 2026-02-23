---
title: "Arquitectura L7 y Ruteo vía Tailscale"
order: 2
---

## El Concepto: IA en el Borde (Edge AI)

Diseñé **PROMPTC** bajo una premisa fundamental: la inteligencia artificial industrial no puede depender de nubes públicas para procesar datos sensibles. 

A diferencia de un proxy tradicional, PROMPTC actúa como un **Gateway de Capa 7 (L7)**. Esto significa que el binario no solo mueve paquetes, sino que **inspecciona el protocolo JSON-RPC 2.0** del MCP para tomar decisiones de ruteo inteligentes.

---

## La Capa de Transporte: Túneles Privados

Para garantizar que el contexto nunca toque la red abierta, integré **Tailscale (WireGuard®)** como el backbone de transporte. 

### Beneficios de la Infraestructura
- **Aislamiento Total:** El nodo de inferencia (Ollama) no necesita puertos abiertos al mundo.
- **Identidad de Dispositivo:** Solo los nodos autenticados en la **Tailnet privada** pueden procesar prompts.
- **Latencia Optimizada:** Conexiones punto a punto (P2P) directas entre tu IDE y el hardware de inferencia.

---

## Flujo de Datos Industrial

El movimiento del dato sigue un camino estrictamente controlado y **auditable**:

1. **Captura:** El IDE (Claude Desktop) envía un prompt vía `stdio`.
2. **Interceptación:** PROMPTC recibe el JSON-RPC y aplica las **Plantillas Deterministas**.
3. **Encapsulamiento:** El payload se cifra y se envía por el túnel de Tailscale.
4. **Ejecución:** El nodo local (Mac Mini / Server) procesa el prompt en un entorno **Air-Gapped**.



---

## Implementación del Selector de Target

En el core de PROMPTC, el ruteo se define mediante **variables de entorno estrictas**. Esto permite desacoplar la lógica del negocio de la infraestructura física.

```go
// Lógica de ruteo L7 implementada en el SDK
func (o *OllamaProvider) getEndpoint() string {
    // Se fuerza el ruteo hacia la IP privada de la Tailnet
    ip := os.Getenv("PROMPTC_MACMINI_IP")
    if ip == "" {
        return "http://localhost:11434" // Solo para debug local
    }
    return fmt.Sprintf("http://%s:11434", ip)
}
```

## Conclusión sobre Seguridad

Esta arquitectura elimina la superficie de ataque. Al centralizar la **Soberanía del Dato** en el Gateway L7, las empresas pueden usar modelos de lenguaje avanzados cumpliendo con normativas como **CMF Circular 3.459** sin comprometer un solo byte en la nube pública.