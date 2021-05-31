---
title: "Enhancing Observability of Serverless Computing with the Serverless Application Analytics Framework"
collection: publications
permalink: /publication/icpe-tutorial-saaf
# excerpt: 'This paper is about the number 3. The number 4 is left for future work.'
# date: 2015-10-01
venue: 'Companion of the ACM/SPEC International Conference on Performance Engineering (ICPE 2021)'
# paperurl: 'http://academicpages.github.io/files/paper3.pdf'
citation: 'Robert Cordingly, Navid Heydari, **Hanfei Yu**, Varik Hoang, Zohreh Sadeghi, Wes Lloyd'
---

[PDF](https://dl.acm.org/doi/abs/10.1145/3447545.3451173)[Code](https://github.com/wlloyduw/SAAF)

## Abstract

To improve the observability of workload performance, resource utilization, and infrastructure underlying serverless Function-as-a-Service (FaaS) platforms, we have developed the Serverless Application Analytics Framework (SAAF). SAAF provides a reusable framework supporting multiple programming languages that developers can leverage to inspect performance, resource utilization, scalability, and infrastructure metrics of function deployments to commercial and open-source FaaS platforms. To automate reproducible FaaS performance experiments, we provide the FaaS Runner as a multithreaded FaaS client. FaaS Runner provides a programmable client that can orchestrate over one thousand concurrent FaaS function calls. The ReportGenerator is then used to aggregate experiment output into CSV files for consumption by popular data analytics tools. SAAF and its supporting tools combined can assess forty-eight distinct metrics to enhance observability of serverless software deployments. In this tutorial paper, we describe SAAF and its supporting tools and provide examples of observability insights that can be derived.
