---
title: "FaaSRank: Learning to Schedule Functions in Serverless Platforms"
collection: publications
permalink: /publications/acsos2021-faasrank
# excerpt: 'This paper is about the number 3. The number 4 is left for future work.'
# date: 2015-10-01
# venue: 'University of Washington, ProQuest Dissertations Publishing'
# paperurl: 'http://academicpages.github.io/files/paper3.pdf'
# citation: '**Hanfei Yu**'
---
**Hanfei Yu** , Athirai A. Irissappane, Hao Wang, Wes J. Lloyd
*IEEE International Conference on Autonomic Computing and Self-Organizing Systems* ***(ACSOS 2021)***

<!---[\[Paper\]](https://hanfeiyu.github.io/publications/acsos2021-faasrank) [\[Code\]](https://hanfeiyu.github.io/publications/acsos2021-faasrank)-->
[To be appeared]

## Abstract

Current serverless Function-as-a-Service (FaaS) platforms generally use simple, classic scheduling algorithms for distributing function invocations while ignoring FaaS characteristics such as rapid changes in resource utilization and the freeze-thaw life cycle. In this paper, we present FaaSRank, a function scheduler for serverless FaaS platforms based on information monitored from servers and functions. FaaSRank automatically learns scheduling policies through experience using reinforcement learning (RL) and neural networks supported by our novel Score-Rank-Select architecture. We implemented FaaSRank in Apache OpenWhisk, an open source FaaS platform, and evaluated performance against other baseline schedulers including OpenWhisk's default scheduler on two 13-node OpenWhisk clusters. For training and evaluation, we adapted real-world serverless workload traces provided by Microsoft Azure. For the duration of test workloads, FaaSRank sustained on average a lower number of inflight invocations 59.62% and 70.43% as measured on two clusters respectively. We also demonstrate the generalizability of FaaSRank for any workload. When trained using a composite of 50 episodes each for 10 distinct random workloads, FaaSRank reduced average function completion time by 23.05% compared to OpenWhisk's default scheduler.
