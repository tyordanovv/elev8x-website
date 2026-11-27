---
lang: de
key: fuel-station-back-office
type: case
path: /de/referenzen/tankstellen-backoffice/
parent: case-studies
order: 2
title: "Referenz: 6 Stunden pro Woche zurück für Tankstellen | Elev8x"
description: "Wie ein Tankstellenbetreiber mit mehreren Standorten 6 Stunden pro Woche spart: Berichte zusammengeführt, Lieferungen abgeglichen, jeden Morgen eine Übersicht."
nav: "Tankstellenbetreiber: 6 h pro Woche zurück"
summary: "Tagesberichte, Lieferungen und Abgleiche aller Standorte, jeden Morgen für den Inhaber zusammengefasst."
status: live
eyebrow: "Referenz · Tankstellen"
h1: "Tankstellen-Backoffice: 6 Stunden pro Woche zurück"
lead: "Ein Tankstellenbetreiber mit mehreren Standorten erledigte Tagesberichte, Kraftstofflieferungen und Abgleiche von Hand. Heute macht das ein digitales Backoffice automatisch und schickt dem Inhaber jeden Morgen eine Übersicht."
results:
  - { value: "6 h", label: "pro Woche gespart" }
  - { value: "2", label: "Standorte" }
facts:
  - { label: "Branche", value: "Tankstellen" }
  - { label: "Standorte", value: "2" }
  - { label: "Prozess", value: "Tagesberichte, Lieferabgleich, Kassen- und Bestandsprüfung" }
  - { label: "Digitaler Mitarbeiter", value: "Tankstellen-Backoffice" }
  - { label: "Status", value: "Im Einsatz" }
flow:
  title: "Tankstellen-Papierkram: 6 Stunden pro Woche zurück"
  caption: "Jeder Schritt ist nach Zuständigkeit eingefärbt. Der Inhaber behält Lieferanten, Personal und Entscheidungen zu den Standorten."
  before: { label: "Vorher: von Hand an jedem Standort", metric: "Manuell, Standort für Standort", who: "Personal" }
  after: { label: "Nachher: das digitale Tankstellen-Backoffice", metric: "6 h pro Woche gespart" }
  steps:
    - { name: "Standortberichte einsammeln", owner: code }
    - { name: "Lieferscheine lesen", owner: ai }
    - { name: "Lieferungen abgleichen", owner: code }
    - { name: "Kassen- und Bestandsdifferenzen melden", owner: code }
    - { name: "Morgenübersicht verschicken", owner: code }
  exception:
    title: "Der Inhaber trifft die Entscheidungen"
    text: "Lieferanten, Personal und Entscheidungen zu den Standorten."
related: ["station-back-office", "fuel-stations", "ai-orchestrator", "decision-automation"]
published: 2026-11-27
updated: 2026-11-27
---

## Das Problem

Jeder Standort lieferte eigene Tagesberichte, Lieferscheine und Kassenzahlen. Sie zusammenzuführen, Kraftstofflieferungen mit Bestellungen abzugleichen und Kassen- oder Bestandsdifferenzen zu finden, kostete jede Woche Stunden an Handarbeit, und Differenzen fielen oft spät auf.

## Was wir gebaut haben

Ein digitales Tankstellen-Backoffice für beide Standorte:

- **Code** führt die Tagesberichte zusammen, gleicht Lieferungen mit Bestellungen ab und meldet Differenzen.
- **KI** liest Lieferscheine auf Papier und als PDF, sodass nichts abgetippt werden muss.
- **Der Inhaber** bekommt jeden Morgen eine Übersicht für alle Standorte und behält die Entscheidungen zu Lieferanten, Personal und Standorten.

## Das Ergebnis

- **6 Stunden pro Woche zurück**, gemessen gegen die Routine vor dem Aufbau. In diesem Tempo mehr als 300 Stunden im Jahr.
- **Kassen- und Bestandsdifferenzen am selben Tag gemeldet**, solange sie sich noch leicht klären lassen.
- **Jeden Morgen ein Gesamtbild des Geschäfts**, über beide Standorte.
