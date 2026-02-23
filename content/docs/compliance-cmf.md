---
title: "Compliance Bancario y la Circular CMF"
order: 3
---

## El Desafío Regulatorio en Chile

Para las instituciones financieras en Chile, la adopción de Inteligencia Artificial Generativa choca directamente con la **Circular 3.459 de la CMF**. Esta normativa exige niveles estrictos de **resiliencia operacional** y control sobre la **expatriación de datos críticos**.

El uso de LLMs comerciales (SaaS) suele ser rechazado por las áreas de Compliance debido a la falta de trazabilidad y el riesgo de fuga de información. **PROMPTC** fue diseñado para romper este bloqueo.

---

## 01. Soberanía de Datos (Circular 3.459)

PROMPTC garantiza que la inferencia pesada ocurra en nodos bajo control directo de la institución. 

### Implementación Técnica:
- **Tráfico Cifrado:** Uso de túneles **WireGuard (Tailscale)** para conectar el front-end con el nodo de cómputo.
- **Inferencia Air-Gapped:** Los datos del cliente (ej. números de cuenta, saldos) nunca viajan a servidores de terceros.
- **Auditoría Local:** Todos los logs de compilación se almacenan en el **servidor de logs interno**, cumpliendo con los periodos de retención exigidos.

---

## 02. Determinismo vs. Alucinaciones

La banca no permite "creatividad" en el análisis de riesgo o cumplimiento AML (Anti-Money Laundering). PROMPTC utiliza un motor de **validación estricta** para forzar que el output de la IA se ajuste a plantillas legales pre-aprobadas.

### Ejemplo de Configuración de Compliance:

```text
● ● ● xterm - root@promptc
# Definición de constraints para reporte de fraude SWIFT
{
  "compliance_rule": "CMF_CIRCULAR_3.459",
  "strict_mode": true,
  "required_fields": ["id_transaccion", "vector_riesgo", "normativa_aplicable"],
  "prohibited_terms": ["quizás", "probablemente", "podría ser"],
  "target_node": "100.90.6.101"
}
```

---

## 03. Ley 19.913 y Prevención de Lavado de Activos

Al integrar PROMPTC en el flujo de trabajo de los **Oficiales de Cumplimiento**, el sistema permite la compilación automática de reportes de operaciones sospechosas (ROS) basados en datos reales de transacciones, filtrados localmente.

### Flujo Seguro de Datos:
1. **Extracción:** Datos crudos del Core Bancario.
2. **Compilación:** PROMPTC inyecta las variables en la plantilla industrial.
3. **Validación:** El motor descarta cualquier "alucinación" que no cite artículos específicos de la **Ley 19.913**.
4. **Output:** Reporte técnico determinista listo para revisión humana.

---

## Conclusión Técnica

PROMPTC no es solo una herramienta de productividad; es un **enabler de cumplimiento**. Al transformar el prompt engineering en **Software Engineering determinista**, permitimos que la banca chilena escale su capacidad analítica sin comprometer su postura de ciberseguridad ante el regulador.

---
EOF // COMPLIANCE_UNIT_READY