---
lang: en
key: freight-enquiries
type: case
path: /case-studies/freight-enquiries/
parent: case-studies
order: 1
title: "Case study: freight enquiries from 2 hours to 17 minutes | Elev8x"
description: "How a freight forwarder cut the time per enquiry from 2 hours to 17 minutes with a digital freight dispatcher built on the TIMOCOM API and the team’s mailbox."
nav: "Freight forwarder: 2 h → 17 min per enquiry"
summary: "A digital freight dispatcher on the TIMOCOM API asks carriers, collects and compares quotes and proposes the best option."
status: progress
eyebrow: "Case study · Freight forwarding"
h1: "Freight enquiries: from 2 hours to 17 minutes"
lead: "A freight forwarder’s team spent 2 hours on every enquiry: reading the request, finding carriers, asking for quotes and comparing them. A digital freight dispatcher now handles the routine part, and each enquiry needs 17 minutes of a person’s time."
results:
  - { value: "2 h → 17 min", label: "per enquiry" }
  - { value: "86%", label: "less time per enquiry" }
facts:
  - { label: "Industry", value: "Freight forwarding" }
  - { label: "Process", value: "Freight enquiries and carrier quotes" }
  - { label: "Systems", value: "TIMOCOM API, the team’s mailbox" }
  - { label: "Digital role", value: "Freight dispatcher" }
  - { label: "Status", value: "In progress" }
flow:
  title: "Freight enquiries: from 2 hours to 17 minutes"
  caption: "Each step coloured by who does it. People only see loads outside the limits, new customers and disputes."
  before: { label: "Before: a dispatcher does every step", metric: "2 h per enquiry", who: "Dispatcher" }
  after: { label: "After: the digital freight dispatcher", metric: "17 min per enquiry" }
  steps:
    - { name: "Read the request", owner: ai }
    - { name: "Pick carriers", owner: code }
    - { name: "Send enquiries", owner: code }
    - { name: "Compare quotes", owner: ai }
    - { name: "Propose the best option", owner: code }
  exception:
    title: "Your team handles the exceptions"
    text: "Loads above your limit, new customers and disputes."
related: ["freight-dispatcher", "freight-forwarding", "decision-automation", "ai-orchestrator"]
published: 2026-11-27
updated: 2026-11-27
---

## The problem

Every freight enquiry went through the same manual cycle. A dispatcher read the request, picked carriers, sent enquiries, waited for quotes and compared them by hand. At 2 hours per enquiry, the team’s capacity set the limit on how many loads it could quote.

## What we built

A digital freight dispatcher on top of the TIMOCOM API and the team’s mailbox:

- **Code** applies the carrier rules and price limits, sends the enquiries and records every quote.
- **AI** reads free-text requests and carrier replies, and compares the quotes on price, transit time and reliability.
- **The team** gets the best option proposed for booking, and handles loads above the limit, new customers and disputes.

## The result

- **17 minutes per enquiry instead of 2 hours**, measured against the baseline taken before the build. That is 86% less time per enquiry.
- **Capacity freed for more loads** with the same team.
- **A full record of every enquiry**, quote and decision for the orchestrator’s daily briefing.

The project is still in progress. As the next steps go live, this page will be updated with the new numbers.
