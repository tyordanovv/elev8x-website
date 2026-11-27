---
lang: de
key: freight-enquiries
type: case
path: /de/referenzen/frachtanfragen/
parent: case-studies
order: 1
title: "Referenz: Frachtanfragen von 2 Stunden auf 17 Minuten | Elev8x"
description: "Wie eine Spedition die Zeit pro Frachtanfrage von 2 Stunden auf 17 Minuten gesenkt hat, mit einem digitalen Disponenten auf der TIMOCOM-API und dem Postfach des Teams."
nav: "Spedition: 2 h → 17 min pro Anfrage"
summary: "Ein digitaler Disponent auf der TIMOCOM-API fragt Frachtführer an, sammelt und vergleicht Angebote und schlägt das beste vor."
status: progress
eyebrow: "Referenz · Spedition"
h1: "Frachtanfragen: von 2 Stunden auf 17 Minuten"
lead: "Das Team einer Spedition brauchte für jede Anfrage 2 Stunden: Anfrage lesen, Frachtführer finden, Angebote einholen und vergleichen. Heute erledigt ein digitaler Disponent den Routineteil, und jede Anfrage braucht 17 Minuten Aufmerksamkeit eines Menschen."
results:
  - { value: "2 h → 17 min", label: "pro Anfrage" }
  - { value: "86 %", label: "weniger Zeit pro Anfrage" }
facts:
  - { label: "Branche", value: "Spedition" }
  - { label: "Prozess", value: "Frachtanfragen und Angebote von Frachtführern" }
  - { label: "Systeme", value: "TIMOCOM-API, Postfach des Teams" }
  - { label: "Digitaler Mitarbeiter", value: "Disponent" }
  - { label: "Status", value: "In Umsetzung" }
flow:
  title: "Frachtanfragen: von 2 Stunden auf 17 Minuten"
  caption: "Jeder Schritt ist nach Zuständigkeit eingefärbt. Menschen sehen nur Ladungen außerhalb der Limits, Neukunden und Reklamationen."
  before: { label: "Vorher: Ein Disponent macht jeden Schritt", metric: "2 h pro Anfrage", who: "Disponent" }
  after: { label: "Nachher: der digitale Disponent", metric: "17 min pro Anfrage" }
  steps:
    - { name: "Anfrage lesen", owner: ai }
    - { name: "Frachtführer auswählen", owner: code }
    - { name: "Anfragen verschicken", owner: code }
    - { name: "Angebote vergleichen", owner: ai }
    - { name: "Bestes Angebot vorschlagen", owner: code }
  exception:
    title: "Ihr Team übernimmt die Ausnahmen"
    text: "Ladungen über Ihrem Limit, Neukunden und Reklamationen."
related: ["freight-dispatcher", "freight-forwarding", "decision-automation", "ai-orchestrator"]
published: 2026-11-27
updated: 2026-11-27
---

## Das Problem

Jede Frachtanfrage durchlief denselben manuellen Ablauf. Ein Disponent las die Anfrage, wählte Frachtführer aus, verschickte Anfragen, wartete auf Angebote und verglich sie von Hand. Bei 2 Stunden pro Anfrage begrenzte die Kapazität des Teams, wie viele Ladungen es anbieten konnte.

## Was wir gebaut haben

Einen digitalen Disponenten auf der TIMOCOM-API und dem Postfach des Teams:

- **Code** wendet die Regeln für Frachtführer und die Preislimits an, verschickt die Anfragen und erfasst jedes Angebot.
- **KI** liest Anfragen und Antworten der Frachtführer in Freitext und vergleicht die Angebote nach Preis, Laufzeit und Zuverlässigkeit.
- **Das Team** bekommt das beste Angebot zur Buchung vorgeschlagen und übernimmt Ladungen über dem Limit, Neukunden und Reklamationen.

## Das Ergebnis

- **17 Minuten pro Anfrage statt 2 Stunden**, gemessen gegen die Ausgangsmessung vor dem Aufbau. Das sind 86 % weniger Zeit pro Anfrage.
- **Freie Kapazität für mehr Ladungen** mit demselben Team.
- **Eine vollständige Dokumentation** jeder Anfrage, jedes Angebots und jeder Entscheidung für den Tagesbericht des Orchestrators.

Das Projekt läuft noch. Wenn die nächsten Schritte live gehen, aktualisieren wir diese Seite mit den neuen Zahlen.
