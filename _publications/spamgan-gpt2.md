---
title: "Leveraging GPT-2 for Classifying Spam Reviews with Limited Labeled Data via Adversarial Training"
collection: publications
permalink: /publication/spamgan-gpt2
# excerpt: 'This paper is about the number 1. The number 2 is left for future work.'
# date: 2020-12-24
venue: 'arXiv preprint'
# paperurl: 'http://academicpages.github.io/files/paper1.pdf'
citation: 'Athirai A. Irissappane, <b>Hanfei Yu</b>, Yankun Shen, Anubha Agrawal, Gray Stanton'
---

[PDF](https://arxiv.org/abs/2012.13400)[Code](https://github.com/airesearchuwt/spamGAN)

## Abstract

Online reviews are a vital source of information when purchasing a service or a product. Opinion spammers manipulate these reviews, deliberately altering the overall perception of the service. Though there exists a corpus of online reviews, only a few have been labeled as spam or non-spam, making it difficult to train spam detection models. We propose an adversarial training mechanism leveraging the capabilities of Generative Pre-Training 2 (GPT-2) for classifying opinion spam with limited labeled data and a large set of unlabeled
data. Experiments on TripAdvisor and YelpZip datasets show that the proposed model outperforms state-of-the-art techniques by at least 7% in terms of accuracy when labeled data is limited. The proposed model can also generate synthetic spam/non-spam reviews with reasonable perplexity, thereby, providing additional labeled data during training.
