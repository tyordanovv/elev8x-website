---
lang: en
key: home
type: home
path: /
title: "AI process automation for logistics and operations | Elev8x"
description: "Elev8x automates the decisions your team makes every day: rules as code, AI agents and one orchestrator that reports to your managers. Fixed price, EU-hosted."
nav: "Home"
h1: "Automate the decisions your team makes all day."
faq:
  - q: "Do we have to change our software?"
    a: "No. We connect to your TMS, ERP, mailbox and portals. Where a system has no interface, we work through its screens."
  - q: "How is it priced?"
    a: "A fixed price for each build, agreed before we start. After go-live, one monthly fee covers monitoring by the orchestrator and ongoing improvements."
  - q: "What happens when the AI is unsure?"
    a: "It does not guess. Every decision has limits, and anything outside them goes to a person with the context attached."
  - q: "Where does our data live?"
    a: "On EU servers, under a GDPR data processing agreement. On request, everything runs on your own infrastructure."
  - q: "What happens to the people in the role?"
    a: "That is your decision. A common path is moving them to exceptions, key customers and growth work while the digital role carries the routine volume."
  - q: "How soon do we see results?"
    a: "The automation check takes one to two weeks. The pilot goes live three to five weeks after that."
  - q: "Which languages do you work in?"
    a: "English, German and Bulgarian, both with your team and in the messages the automations send."
home:
  pill: "AI and process automation for logistics and operations"
  h1: ["Automate the ", "decisions", " your team makes all day."]
  lead: "We build rule-based automation and AI agents that take decision-heavy work off your team, up to entire roles. One orchestrator AI watches every process and reports to your managers. You get the result in hours saved, measured against a baseline."
  ctaSecondary: "See the results"
  tagline: "Code first. AI where it pays. · Fixed price · EU-hosted"
  dash:
    aria: "Sample orchestrator briefing"
    title: "Orchestrator"
    meta: "Daily briefing · 07:30"
    headline: ["6 processes running.", "2 decisions need you."]
    rows:
      - { name: "Freight enquiries", sub: "46 handled · 1 escalated", state: "run", stateLabel: "Running" }
      - { name: "Order intake", sub: "112 orders · 2 for review", state: "review", stateLabel: "Review" }
      - { name: "Carrier invoices", sub: "24 checked · 1 rate mismatch", state: "review", stateLabel: "Review" }
      - { name: "Customer status updates", sub: "96 sent", state: "run", stateLabel: "Running" }
    decisionLabel: "Needs your decision"
    decisionText: "Load Graz → Sofia: the best quote is 8% above your limit."
    approve: "Approve"
    retender: "Re-tender"
    chartTitle: "Decided automatically"
    chartMeta: "Last 7 days · sample"
    chartFrom: "Mon"
    chartTo: "Sun"
  builtFor:
    label: "Built for"
    items:
      - { label: "Freight forwarders", key: "freight-forwarding" }
      - { label: "Transport companies", key: "transport-companies" }
      - { label: "Fuel-station groups", key: "fuel-stations" }
      - { label: "Industrial shipping teams" }
    note: "EU-hosted · GDPR data processing agreement · EN / DE / BG"
  results:
    eyebrow: "Results"
    title: "Measured in hours, not promises."
    lead: "Every project starts with a baseline, so the result is measured, not estimated."
    items:
      - { value: "2 h → 17 min", label: "per freight enquiry for a freight forwarder, built on the TIMOCOM API", case: "freight-enquiries" }
      - { value: "6 h a week", label: "back for a fuel-station group across 2 sites, with one morning summary for the owner", case: "fuel-station-back-office" }
      - { value: "Call → deploy", label: "on Autolensio, customer calls become approved tasks that AI agents fix, test and deploy", case: "autolensio" }
  note:
    eyebrow: "Why we work this way"
    title: "We start with the decision, not the model."
    paras:
      - "Most AI projects begin with a tool and go looking for a problem. We begin with a decision your team makes every day: who makes it, how often, with which information, and what a wrong call costs."
      - "Where the logic is clear, we write it as code. Code is cheaper to run, gives the same answer every time and can be audited line by line. We bring in AI only where people today read messy emails and documents or weigh options, and we put firm limits around it."
      - "Above everything sits one orchestrator. It watches each process and tells your manager, in plain language, what was decided and what needs a person."
    signRole: "Founder, Elev8x"
  build:
    eyebrow: "What we build"
    title: "Three ways we take work off your team."
    lead: "Start with one decision. Connect it to the orchestrator. Grow into whole roles once the numbers prove it."
    typical: "Typical: "
    cards:
      - { key: "decision-automation", icon: "decision", num: "01", title: "Decision automation", text: "We turn the decisions your team makes every day into software: which carrier gets the load, whether an order is complete, whether an invoice is right. Clear logic runs as code, judgment on messy input goes to AI, the rest to a person.", typical: "carrier selection, order validation, quote pricing, invoice approval" }
      - { key: "ai-orchestrator", icon: "orchestrator", num: "02", title: "The orchestrator", text: "One AI supervisor above all your automations and agents. It watches every process, catches failures and anomalies, routes exceptions to the right person and sends your managers a daily briefing.", typical: "failure alerts, anomaly checks, escalation routing, agent coordination" }
      - { key: "digital-roles", icon: "roles", num: "03", title: "Digital roles", text: "When a position is mostly routine decisions, we automate the whole role, from reading the request to closing the case. Your team keeps the exceptions and the customer relationships.", typical: "freight dispatcher, order intake, invoice checker, customer success" }
  flow:
    eyebrow: "How a decision gets made"
    title: "Every decision takes the cheapest safe path."
    lead: "Code where the logic is clear, AI where the input is messy, people only for the exceptions."
    steps:
      - { tag: "Input", kind: "input", title: "Input arrives", text: "Emails, PDFs, portals, spreadsheets or your ERP. Nothing changes for the sender." }
      - { tag: "Code", kind: "code", title: "Rules check it", text: "Limits, policies and validation run as plain code. Same input, same result, every time." }
      - { tag: "AI", kind: "ai", title: "AI weighs the messy part", text: "Only where text is unstructured or options need weighing: reading a request, scoring carriers." }
      - { tag: "Code", kind: "code", title: "The decision executes", text: "Inside the guardrails you set, the system acts: it books, posts, approves or replies." }
      - { tag: "Human", kind: "team", title: "People get the exceptions", text: "Anything outside the rules lands with the right person, with the full context attached." }
    note: "The orchestrator records every step: the input, the rule or model that decided, the outcome and who approved it."
  orchestrator:
    eyebrow: "The orchestrator"
    title: "One AI watching every process. One report on your manager’s desk."
    lead: "As automations multiply, someone has to watch them. The orchestrator is an AI supervisor that checks every run, spots what looks wrong and keeps your managers informed, without another dashboard to babysit."
    items:
      - { k: "Watch", v: "Checks every run, queue and error, around the clock." }
      - { k: "Escalate", v: "Sends only real exceptions to the right person, with the context to decide fast." }
      - { k: "Report", v: "A daily briefing and a weekly summary for the manager, in plain language." }
      - { k: "Prove", v: "An audit trail for every decision: input, rule or model, outcome." }
    link: "How the orchestrator works"
    console:
      aria: "Sample orchestrator console"
      title: "orchestrator / today"
      live: "live"
      rows:
        - { name: "freight-enquiries", runs: "46 runs", state: "running", ok: true }
        - { name: "order-intake", runs: "112 runs", state: "2 in review", ok: false }
        - { name: "invoice-check", runs: "24 runs", state: "1 escalated", ok: false }
        - { name: "status-updates", runs: "96 runs", state: "running", ok: true }
        - { name: "station-close", runs: "2 sites", state: "running", ok: true }
      log:
        - { time: "07:02", text: "freight-enquiries → 18 carriers asked for load Graz–Sofia" }
        - { time: "07:09", text: "freight-enquiries → 6 quotes in, best one inside limit, booked" }
        - { time: "07:15", text: "order-intake → weight missing, sent to review" }
        - { time: "07:30", text: "briefing → sent to operations manager" }
        - { time: "07:31", text: "invoice-check → rate above contract, escalated", warn: true }
  roles:
    eyebrow: "Digital roles"
    title: "Replace a role, not just a task."
    lead: "Some positions consist mostly of routine decisions made from emails, PDFs and portals. We automate the whole role, end to end, and your team keeps only the exceptions."
    link: "All digital roles"
  commitmentsLabel: "Commitments"
  commitments:
    - { icon: "tag", value: "Fixed price", text: "One fixed price for the build, then a monthly fee for monitoring and improvements." }
    - { icon: "clock", value: "3–5 weeks", text: "From the automation check to a live pilot." }
    - { icon: "pulse", value: "24/7", text: "Every process watched by the orchestrator." }
    - { icon: "shield", value: "EU-hosted", text: "GDPR data processing agreement, or your own servers." }
  cases:
    eyebrow: "Proof"
    title: "Built for real operations, measured in hours."
    lead: "Every project starts with a baseline, so the result is measured, not estimated."
    quote: "“If an automation won’t save more than it costs, we tell you before you pay for anything.”"
    quoteBy: "Tihomir Yordanov, founder · our promise to every client"
    link: "All case studies"
  process:
    eyebrow: "How we work"
    title: "From first call to a running digital role."
    steps:
      - { time: "1–2 weeks", title: "Free automation check", text: "Two short sessions. We map one process, its decisions and their cost, and quote a fixed price." }
      - { time: "3–5 weeks", title: "Fixed-price pilot", text: "We automate that process end to end, on top of the systems you already use." }
      - { time: "Before launch", title: "Go live with guardrails", text: "Limits, approvals and fallbacks are agreed with you before anything runs on its own." }
      - { time: "Monthly", title: "Watched and improved", text: "The orchestrator monitors and reports. We fix, tune and extend every month." }
    priceStrong: "Fixed price for the build."
    priceText: "Then one monthly fee for orchestrator monitoring and ongoing improvements."
    link: "How we work and pricing"
  team:
    eyebrow: "Team"
    title: "Senior engineering, hands-on delivery."
    lead: "A small team on purpose: the person you talk to is the person who builds. Working across Germany, Austria, Switzerland and Bulgaria."
    role: "Founder and engineering lead"
    bio: "Senior software engineer who has built systems for a German banking group and a semiconductor maker in Austria. Designs and builds every Elev8x automation, and stays your contact from the first call to go-live."
    langs: "English · German · Bulgarian"
    link: "About Elev8x"
---
