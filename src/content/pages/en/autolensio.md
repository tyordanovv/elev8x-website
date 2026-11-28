---
lang: en
key: autolensio
type: case
path: /case-studies/autolensio/
parent: case-studies
order: 3
title: "Case study: from customer call to deployed fix with AI agents | Elev8x"
description: "On Autolensio, our SaaS for car dealers, AI personalises follow-ups after sign-up and turns customer calls into approved tasks that agents fix, test and deploy."
nav: "Autolensio: customer call to deployed fix"
summary: "Sign-ups get personal follow-ups, and customer calls become approved tasks that AI agents fix, test and deploy."
status: own
eyebrow: "Case study · Software and SaaS"
h1: "Autolensio: from customer call to deployed fix"
lead: "Autolensio is our own data platform for car dealers in Bulgaria. It runs the full Elev8x approach in production: onboarding and follow-up emails, call analysis that turns feedback into tasks, and a digital worker that has AI agents fix, test and deploy the approved work."
facts:
  - { label: "Product", value: "Autolensio, automotive data platform" }
  - { label: "Users", value: "Car dealers in Bulgaria" }
  - { label: "Processes", value: "Onboarding, follow-ups, feedback to deployment" }
  - { label: "AI agents", value: "Customer success assistant, developer agent, QA agent" }
  - { label: "Human in the loop", value: "The customer manager approves every task" }
  - { label: "Status", value: "Running on our own product" }
pipeline:
  title: "From sign-up to deployed fix"
  caption: "Each step coloured by who does it. People decide what gets built; agents do the routine work."
  lanes:
    - label: "Every new user"
      steps:
        - { name: "Signs up", owner: user, who: "User" }
        - { name: "Welcome email", owner: code }
        - { name: "Follow-ups based on searches", owner: ai }
        - { name: "Suggested searches by email and in the app", owner: ai }
    - label: "Every customer call"
      steps:
        - { name: "Customer manager calls the customer", owner: team, who: "Customer manager" }
        - { name: "AI analyses the conversation", owner: ai }
        - { name: "Tasks and defects drafted", owner: ai }
        - { name: "Accepted or adjusted", owner: team, who: "Customer manager" }
    - label: "Every approved task"
      steps:
        - { name: "The digital worker picks up tasks that meet the criteria", owner: ai, who: "Digital worker" }
        - { name: "Developer agent writes the fix", owner: ai }
        - { name: "QA agent tests it", owner: ai }
        - { name: "Deployed", owner: code }
related: ["customer-success", "digital-worker", "decision-automation", "solutions"]
published: 2026-11-27
updated: 2026-11-27
---

## The problem

Two things cost a growing SaaS business the most: new users who sign up and hear nothing, and customer feedback that ends up in call notes. Turning a call into tickets, fixes and a release usually takes days of manual work, and much of it never happens.

## What we built

**Onboarding that follows each user.** Every new user gets a welcome email as soon as they register. Follow-up emails are based on what they search, and suggested searches appear by email and in the app, based on each user’s preferences.

**Feedback that turns into tasks.** After each customer manager call, AI analyses the conversation and drafts tasks and defect reports. The customer manager accepts or adjusts them, so nothing is created without a person’s approval.

**Tasks that turn into deployed fixes.** Approved tasks that meet the set criteria are picked up by the digital worker. A developer agent writes the fix, a QA agent tests it, and the change is deployed.

## The result for the business

- **Every sign-up gets a personal welcome and relevant follow-ups**, without anyone writing emails.
- **Customer feedback becomes tracked work right after the call**, instead of staying in notes.
- **Routine fixes go from conversation to production through the agents**, while people decide what gets built.
- **The customer manager spends time with customers**, not writing tickets.

## Why it matters for your business

The same pattern works for any team that onboards users, talks to customers and ships changes: software companies, service providers and account teams. Start with one step, for example call notes into tasks, and connect the rest once it proves itself.
