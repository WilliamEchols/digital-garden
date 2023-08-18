---
id: 2dc49346-5cad-491b-ab06-1389b69398e5
---

# Cameron R. Wolfe, Ph.D. on Twitter: I have recently given some long-form lectures on language models, how they work, and the AI lands...
#Omnivore

[Read on Omnivore](https://omnivore.app/me/https-twitter-com-cwolferesearch-status-1690094725699710976-189e7ac64a7)
[Read Original](https://twitter.com/cwolferesearch/status/1690094725699710976)

# State
#Omnivore/inbox

# Content
I have recently given some long-form lectures on language models, how they work, and the AI landscape, which has given me a chance to more clearly organize key concepts for understanding language models. Here are the 15 key concepts that I’ve arrived at so far… AI Basics/History: LLMs aren’t everything, and there is a lot of AI research surrounding them. 1\. (Self-)supervised learning techniques have a common framework, including a task, a model, some data, and a training algorithm. 2\. AI has a long history (dating back to the early 20th century) of leveraging this framework to solve important problems. 3\. Deep learning (and language models, which are a small subset of deep learning) is an area of AI that has become especially successful due to the ability to leverage large-scale data/compute. Language Model Fundamentals: How do we create a good base model? 4\. The transformer architecture (and self-attention) is a fundamental advancement that empowered the recent explosion of language models. 5\. Using decoder-only transformers and next-token prediction, we can pre-train language models to gain a vast amount of knowledge and linguistic understanding. 6\. After pre-training, we have a foundation model that can be used to solve various tasks via in-context learning. 7\. To make these foundation models as good as possible, we need both large models (many parameters) and as much data as possible (i.e., large models alone are not enough). Modern Language Models: How do we go from a good base model to something like ChatGPT? 8\. Next-token prediction is not enough to create something like ChatGPT. Base Model output can be repetitive and uninteresting. We need to align the model to human desires/expectations. 9\. Supervised fine-tuning (SFT) performs alignment by fine-tuning the model (using next-token prediction) on examples of good responses to prompts. 10\. Reinforcement learning from human feedback (RLHF) aligns the language model directly based on human feedback to its responses. 11\. The best/top language models today are extensively aligned via a combination of SFT and RLHF. Applying Language Models: How to we apply language models to solving specific problems? 12\. Fine-tuning language models (using next-token prediction) on in-domain data is a great way to specialize these models for a specific application domain. 13\. In-domain fine-tuning is not always necessary because there is a lot we can accomplish via in-context learning! 14\. Especially when the underlying model is steerable, a lot can be done with more basic prompting techniques, such as zero/few-shot and instruction prompting. 15\. We should only use advanced prompting approaches after empirically confirming that we cannot solve a problem with simpler techniques. Start simple, perform tests, and add complexity only as needed.

[ ![](https://proxy-prod.omnivore-image-cache.app/0x0,sBnPNHiKzGTALvuIB7qOhCE6TM0rGNOs2qTepdnnfyF4/https://pbs.twimg.com/media/F3RrTIfWkAAV64E.jpg?name=small&format=webp) ](https://pbs.twimg.com/media/F3RrTIfWkAAV64E.jpg?name=small&format=webp)

For more details, I also created this GitHub gist with links to the main topics I’ve written about on language models. It’s organized by category and contains most of the topics I’ve covered on my newsletter. [gist.github.com/wolfecameron…](https://gist.github.com/wolfecameron/86d93139b585bd74d1f06ba61fec1eed)

 — [cwolferesearch](https://twitter.com/cwolferesearch) Cameron R. Wolfe, Ph.D. [August 11, 2023 at 8:15 PM UTC](https://twitter.com/cwolferesearch/status/1690094725699710976) 

