---
title: "Motor de Validación Idiomática (Anti-Spanglish)"
order: 4
---

## El Problema: Alucinaciones Idiomáticas

Los modelos de lenguaje (LLMs) actuales tienden a generar un híbrido de español e inglés técnico conocido como **Spanglish**, o peor aún, traducciones literales que carecen de validez en contextos legales o regulatorios chilenos.

Para un **Oficial de Cumplimiento** o un **Ingeniero de Faena**, la precisión terminológica es parte de la seguridad operacional.

---

## Estrategia de Compilación: Strict-Spanish Filter

PROMPTC utiliza una capa de interceptación en el compilador que aplica un **Diccionario de Restricciones Técnicas (TRD)**. Antes de que el prompt sea procesado por el nodo local (Ollama/vLLM), el compilador inyecta reglas de gramática industrial.

### Cómo funciona el motor:
1. **Detección de Tokens:** Identifica anglicismos comunes en la industria (ej. *deploy, rollback, pipeline*).
2. **Sustitución Determinista:** Fuerza el uso del término técnico formal aprobado por la RAE o estándares locales (ej. *despliegue, reversión, línea de procesos*).
3. **Constraint Injection:** Inyecta una instrucción de sistema de alta prioridad que penaliza el uso de muletillas de IA (ej. "Como IA, no puedo...", "Es importante notar que...").

---

## Ejemplo de Configuración de Filtro

Así es como defines el comportamiento del motor de lenguaje en tu archivo de configuración:

```text
● ● ● xterm - root@promptc
# Configuración del motor de validación idiomática
{
  "language_engine": "ES-CHILE-FORMAL",
  "anti_spanglish": {
    "enabled": true,
    "strict_level": "industrial",
    "forbidden": ["input", "output", "feedback", "feature"],
    "mapping": {
      "input": "entrada de datos",
      "output": "salida de información",
      "feedback": "retroalimentación técnica"
    }
  }
}
```

---

## Aplicación en Reportes CMF

Al compilar prompts para la **Circular 3.459**, el motor asegura que los informes de vulnerabilidades o resiliencia mantengan el tono sobrio exigido por el regulador.

### Resultado antes de PROMPTC:
> "El cloud provider reportó un issue en el cluster que causó un downtime."

### Resultado después de PROMPTC:
> "El proveedor de servicios en la nube informó una incidencia en el clúster de cómputo, resultando en una indisponibilidad del servicio."

---

## Beneficios de la Estandarización

- **Cero Retrabajo:** Los reportes salen listos para ser firmados por la gerencia.
- **Autoridad:** Refuerza la imagen de profesionalismo de la unidad técnica.
- **Soberanía:** Al controlar el lenguaje, también controlamos la interpretación legal de la información generada.

---
EOF // LANGUAGE_ENGINE_VERIFIED