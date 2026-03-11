---
title: "FaaSRank: A Reinforcement Learning Scheduler for Serverless Function-as-a-Service Platforms"
collection: publications
permalink: /publications/master-thesis
# excerpt: 'This paper is about the number 3. The number 4 is left for future work.'
# date: 2015-10-01
# venue: 'University of Washington, ProQuest Dissertations Publishing'
# paperurl: 'http://academicpages.github.io/files/paper3.pdf'
# citation: '**Hanfei Yu**'
---
**Hanfei Yu**  
*University of Washington, ProQuest Dissertations Publishing*

[\[Paper\]](https://www.proquest.com/openview/cb0b594bcb6061a2f70964d0ddeff212/1?pq-origsite=gscholar&cbl=18750&diss=y) [\[Code\]](https://hanfeiyu.github.io/publications/master-thesis)

## Abstract

In recent years, Function-as-a-Service (FaaS) platforms have gained popularity as a way to deploy serverless applications in the cloud instigating the rise of serverless computing. Current serverless FaaS platforms generally use simple, classic scheduling algorithms for distributing function invocations while ignoring FaaS characteristics such as rapid changes in resource utilization and the freeze-thaw life cycle. In this thesis, we present FaaSRank, a scheduling service for serverless FaaS platforms based on information monitored from servers and functions. FaaSRank automatically learns scheduling policies through experience using reinforcement learning (RL) and neural networks. To bridge the gap between FaaS scheduling and RL techniques, we develop a novel Score-Rank-Select architecture for FaaSRank.

We implement FaaSRank in Apache OpenWhisk, an open source serverless FaaS platform. We evaluate FaaSRank against other baseline schedulers including OpenWhisk’s default scheduler on two 13-node OpenWhisk clusters by adapting real-world serverless workload traces provided by Microsoft Azure. Our results show that FaaSRank minimizes the overall average function completion time by 9.25% and 10.10% over the default scheduler. This improvement is realized while reducing the average number of inflight function invocations by 59.62% and 70.43% freeing computational resources compared to the default scheduler for our experiments on two clusters, respectively.
