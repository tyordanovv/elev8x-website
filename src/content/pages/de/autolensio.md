---
lang: de
key: autolensio
type: case
path: /de/referenzen/autolensio/
parent: case-studies
order: 3
title: "Referenz: vom Kundengespräch zum ausgerollten Fix | Elev8x"
description: "Bei Autolensio, unserer Plattform für Autohändler, personalisiert KI das Onboarding und macht aus Kundengesprächen Aufgaben, die Agenten umsetzen."
nav: "Autolensio: vom Kundengespräch zum Fix"
summary: "Neue Nutzer bekommen persönliche Follow-ups, Kundengespräche werden zu Aufgaben, die KI-Agenten umsetzen, testen und ausrollen."
status: own
eyebrow: "Referenz · Software und SaaS"
h1: "Autolensio: vom Kundengespräch zum ausgerollten Fix"
lead: "Autolensio ist unsere eigene Datenplattform für Autohändler in Bulgarien. Dort läuft der gesamte Elev8x-Ansatz im Produktivbetrieb: Onboarding- und Follow-up-E-Mails, Gesprächsanalyse, die Feedback in Aufgaben verwandelt, und ein Orchestrator, der freigegebene Arbeit von KI-Agenten umsetzen, testen und ausrollen lässt."
facts:
  - { label: "Produkt", value: "Autolensio, Datenplattform für den Autohandel" }
  - { label: "Nutzer", value: "Autohändler in Bulgarien" }
  - { label: "Prozesse", value: "Onboarding, Follow-ups, vom Feedback zum Deployment" }
  - { label: "Digitale Mitarbeiter", value: "Kundenbetreuung, Entwickler-Agent, QA-Agent" }
  - { label: "Mensch im Prozess", value: "Der Customer Manager gibt jede Aufgabe frei" }
  - { label: "Status", value: "Im Einsatz bei unserem eigenen Produkt" }
pipeline:
  title: "Von der Registrierung zum ausgerollten Fix"
  caption: "Jeder Schritt ist nach Zuständigkeit eingefärbt. Menschen entscheiden, was gebaut wird; Agenten erledigen die Routine."
  lanes:
    - label: "Jeder neue Nutzer"
      steps:
        - { name: "Registriert sich", owner: user, who: "Nutzer" }
        - { name: "Willkommens-E-Mail", owner: code }
        - { name: "Follow-ups passend zu den Suchen", owner: ai }
        - { name: "Suchvorschläge per E-Mail und in der App", owner: ai }
    - label: "Jedes Kundengespräch"
      steps:
        - { name: "Customer Manager spricht mit dem Kunden", owner: team, who: "Customer Manager" }
        - { name: "KI analysiert das Gespräch", owner: ai }
        - { name: "Aufgaben und Fehlermeldungen entworfen", owner: ai }
        - { name: "Angenommen oder angepasst", owner: team, who: "Customer Manager" }
    - label: "Jede freigegebene Aufgabe"
      steps:
        - { name: "Orchestrator übernimmt Aufgaben, die die Kriterien erfüllen", owner: ai, who: "Orchestrator" }
        - { name: "Entwickler-Agent schreibt den Fix", owner: ai }
        - { name: "QA-Agent testet ihn", owner: ai }
        - { name: "Ausgerollt", owner: code }
related: ["customer-success", "ai-orchestrator", "decision-automation", "digital-roles"]
published: 2026-11-27
updated: 2026-11-27
---

## Das Problem

Zwei Dinge kosten ein wachsendes SaaS-Unternehmen am meisten: neue Nutzer, die sich registrieren und nichts mehr hören, und Kundenfeedback, das in Gesprächsnotizen endet. Aus einem Gespräch Tickets, Fixes und ein Release zu machen, kostet meist Tage an Handarbeit, und vieles davon passiert nie.

## Was wir gebaut haben

**Onboarding, das jedem Nutzer folgt.** Jeder neue Nutzer bekommt sofort nach der Registrierung eine Willkommens-E-Mail. Follow-up-E-Mails richten sich nach dem, was er sucht, und Suchvorschläge erscheinen per E-Mail und in der App, passend zu seinen Präferenzen.

**Feedback, das zu Aufgaben wird.** Nach jedem Gespräch des Customer Managers analysiert die KI das Gespräch und entwirft Aufgaben und Fehlermeldungen. Der Customer Manager nimmt sie an oder passt sie an, ohne seine Freigabe entsteht nichts.

**Aufgaben, die zu ausgerollten Fixes werden.** Freigegebene Aufgaben, die die festgelegten Kriterien erfüllen, übernimmt der Orchestrator. Ein Entwickler-Agent schreibt den Fix, ein QA-Agent testet ihn, und die Änderung wird ausgerollt.

## Das Ergebnis für das Geschäft

- **Jede Registrierung bekommt eine persönliche Begrüßung und passende Follow-ups**, ohne dass jemand E-Mails schreibt.
- **Kundenfeedback wird direkt nach dem Gespräch zu nachverfolgter Arbeit**, statt in Notizen zu bleiben.
- **Routine-Fixes gehen über die Agenten vom Gespräch bis in die Produktion**, während Menschen entscheiden, was gebaut wird.
- **Der Customer Manager verbringt seine Zeit mit Kunden**, nicht mit dem Schreiben von Tickets.

## Warum das für Ihr Unternehmen zählt

Dasselbe Muster funktioniert für jedes Team, das Nutzer onboardet, mit Kunden spricht und Änderungen ausliefert: Softwarefirmen, Dienstleister und Key-Account-Teams. Beginnen Sie mit einem Schritt, zum Beispiel Aufgaben aus Gesprächsnotizen, und verbinden Sie den Rest, sobald er sich bewährt hat.
