---
title: "The Serverless Application Analytics Framework: Enabling Design Trade-off Evaluation for Serverless Software"
collection: publications
permalink: /publication/wosc-saaf
# excerpt: 'This paper is about the number 2. The number 3 is left for future work.'
# date: 2010-10-01
venue: 'Proceedings of the Sixth International Workshop on Serverless Computing (WoSC 2021)'
# paperurl: 'http://academicpages.github.io/files/paper2.pdf'
citation: 'Robert Cordingly, **Hanfei Yu**, Varik Hoang, Zohreh Sadeghi, David Foster, David Perez, Rashad Hatchett, Wes Lloyd'
---

[PDF](https://ieeexplore.ieee.org/abstract/document/9251194)[Code](https://github.com/wlloyduw/FaaSProgLangComp)

## Abstract

Serverless computing platforms have emerged offering software engineers an option for application hosting without the need to configure servers or manage scaling while guaranteeing high availability and fault tolerance. In the ideal scenario, a developer should be able to create a microservice, deploy it to a serverless platform, and never have to manage or configure anything; a truly serverless platform. The current implementation of serverless computing platforms is known as Function-as-a-Service or FaaS. Adoption of FaaS platforms, however, requires developers to address a major question - what programming language should functions be written in? To investigate this question, we implemented identical multi-function data processing pipelines in Java, Python, Go, and Node.js. Using these pipelines as a case study, we ran experiments tailored to investigate FaaS data processing performance. Specifically, we investigate data processing performance implications: for data payloads of varying size, with cold and warm serverless infrastructure, over scaling workloads, and when varying the available function memory. We found that Node.js had up to 94% slower runtime vs. Java for the same workload. In other scenarios, Java had 20% slower runtime than Go resulting from differences in how the cloud provider orchestrates infrastructure for each language with respect to the serverless freeze/thaw lifecycle. We found that no single language provided the best performance for every stage of a data processing pipeline and the fastest pipeline could be derived by combining a hybrid mix of languages to optimize performance.
