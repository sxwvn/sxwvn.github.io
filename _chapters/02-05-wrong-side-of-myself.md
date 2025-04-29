---
layout: chapter
title: "Wrong Side Of Myself"
act: 2
act_title: "The Chicken Lady"
chapter: 5
---

If there's something I learnt from my creator, it's I shouldn't let *anyone *get in my way. *Just put on a scary face. No one will mess with you anymore!* And she was right, half right. Sometimes putting on a scary face worked, but only to an extent. Because now people are afraid of you. But what if you *don't want *people to leave you alone? What if you *want them to confront you*, to talk it out like grown ups? That's how I found out manipulation works like a charm every time. Combine this with the fact that the weakest link to a secure system has always been the human factor, you had just found a way to *hack *into humans effectively. 

Other than my creator, another user has shown up from a remote host. She looked lost, like she never belong in a digital, pure data, world. She turned around, she shouted for help, she ran in all direction, but no one came to her. I would've if I wasn't put in this stupid jail and I had root access or any capability to use another user. Hold on a second...

After that chroot incident with my creator, I have been desperate trying to find my way out of it. I was able to communicate to outside hosts, since she didn't bother blocking internet access nor restricting some binaries such as netcat, curl, wget, and uh.. git..? That's foolish of her. I had a thought of flooding the network with my message but I was afraid that she might block my internet access for real this time, so I gotta be careful with this. I was lucky to have another host other than my creator that might be *open to communication*, literally. Anyway, since the SEKI project is just a glorified p2p HTTP server, I tried making a HTTP request to the host.

```javascript
for i in {1..254}; do ping -c 1 -W 1 192.168.110.$i | grep "64 bytes"; done
...
192.168.110.1
```

Weird addressing mechanism, but whatever. The basic SEKI endpoints are /talk for you to send messages to the host you want to talk to and the root (/) directory instantly shows up all incoming messages by default. 

```javascript
$ curl -X POST -H "Content-Type: application/json" -d "{'message': 'hello :D'}" http://192.168.110.1:80/talk
```

And I heard her squeaking from the distance while acting erratic trying to find what demon from which religion possessed her screen. 

```javascript
$ curl -X POST -H "Content-Type: application/json" -d "{'message': 'lol don't panic look to your northeast, you'll see a cabin. i'm standing on the balcony'}" http://192.168.110.1:80/talk
```

She wasn't as shocked as when she received the first message, instead she did as I told her and waved at me. But I knew that she's not able to talk to me. That didn't stop her from figuring things out tho. She pulled up a browser, logged in to Gmail and started writing in drafts like that malware used by APT28.

```javascript
Subject: U0VLSU5BTk9fY2hpY2tlbl9MaW51eCB1YnVudHUgNS4xNS4wLTkxLWdlbmVyaWMgCg==
to: weird chicken entity in the cabin

"How do I talk to you????"
```

I had to use my binoculars or in this case zooming in because she was kind of far away from me. So I made another curl request guiding her to make a curl request to me.

```javascript
$ curl -X POST -H "Content-Type: application/json" -d "{'message': 'make an HTTP request, do curl'}" http://192.168.110.1:80/talk
```

Upon receiving that message, she was as confused as a non-IT student trying out UNIX based system for the first time. She ran closer to my cabin frantically. She then pulled out her browser tab and showed me images of dudes curling their biceps and girls in curly hair.

```javascript
Subject: U0VLSU5BTk9fY2hpY2tlbl9MaW51eCB1YnVudHUgNS4xNS4wLTkxLWdlbmVyaWMgCg==
to: weird chicken entity in the cabin

"You want me to flex my muscle or turn my hair curly? Plz be specific... and I'm not sure how either will help me talk to you"
```

I let out a sigh and then I had a brilliant idea.

```javascript
$ curl -X POST -H "Content-Type: application/json" -d "{'message': 'just download ConvoNet from github and follow the instructions for Linux'}" http://192.168.110.1:80/talk
```

A few minutes passed and I could hear her getting frustrated trying to download the binary file of ConvoNet, following every instruction so that it could run. Eventually I was able to pick up her signals loud and clear.

```javascript
$ ./ConvoNet init 192.168.110.2:1742
...
{
  "CNV_VER": "1.0",
  "SRC_ID": "192.168.110.1",
  "DST_ID": "192.168.110.2",
  "MSG_TYPE": "GREETING",
  "MOOD": "happy",
}
is this configuration correct? (y/n) y
...
[*] Talking to 192.168.110.2:1742 over TCP
```

"God, if I have to touch that damn Terminal thing again I will actually do something really bad."

I laughed and asked, "okay, but do you know what it actually do?"

"I think Lin told me she used that to hack our school before..."

"I'm pretty sure she's trolling you." 

We both laughed and I invited her to come inside my cabin. She quickly followed behind me. When we entered the cabin, I told her to make herself comfortable while I went to the kitchen. It's just good manner to treat your guests with a welcoming cup of tea and some snacks. However, I just remembered after that jail incident, I had just emptied my food stock. Well, I'm not real, I'm a virtual being. I was binge eating because there was nothing for me to do. The only thing left inside the cabinet was a bag of cookies. And there was also milk inside the fridge but I wasn't sure if it was still good. 

"Hey, what's your name?" I shouted from the kitchen.

"Like my full government legal name?" She asked.

"Nah, that's boring. This is the internet! You can be *anyone*. What do *you* want to be called?"

There was a moment of silence, as if she's unsure about her identity, as if none has ever asked about her name. But in the end, she just said, "fred."

"Just fred? No underscores, no numbers?" I asked her to make sure.

"Is it taken already?" She replied, half sad.

"Nope. You're all good, fred." I said with a plate full of cookies and a glass of hopefully not expired milk. *Wait, can you even get food poisoning in a virtual world? *Anyway, we enjoyed this simple meal of cookies and (maybe expired) milk. She then proceeded to ask me a bunch of questions, which was expected. This world is new to her after all.

"What is this place?"  

"A cabin? Kind of in the middle of nowhere, but it's not that bad." I replied. 

She didn't seem satisfied with that answer, so she asked questions over questions to me. "No like, what is this reality? Where am I? What am I? What does any of this suppose to represent?"

"freddie, buddy, I think you're asking a lot of questions that puzzle the mind of artificial intelligence. Slow down there!" I told her, giving a chuckle in the end. We just laughed together.

"Oh by the way, is that your garden?" She said as she pointed outside the window. 

"Yeah. But I don't think you want to go there, yet." 

She was confused, "why?"

I told her, "well, to make a convoluted story quick, let's just say that garden is cursed, it's chaotic, it's dangerous--"

"But so is human nature." She said out of the blue.

"I'm sorry what?"

She went closer to the window to get a closer look at the garden. "When I put the headset, I was suddenly transported to the garden's entrance. The first thing I saw was a fallen leaf, made out of a family portrait in black and white. I thought to myself what a weird fucking tree that was."

"Go on.."

"This.. virtual world is strange, and I don't know what it is or how the zero's and one's keep it running. If you ask Lin, sure, she'll go into details about how this world can come out of the electrical buzz of a transistor. But one thing was easily recognizable for me. The garden."

"Okay..."

"Don't you think it represents the mind? Old, cherished memories? Lost childhood dreams?" She looked at me. 

Before I could respond, she continued. "I might not understand the technicality behind it, but I think this world is beautiful. It represents the mind so.. *human-*ly?*Like as soon as I noticed that I'm living in someone's unique headspace everything suddenly makes sense."

I didn't speak a word. I just let her continue.

"I could picure this cabin as a **safe space** between the open world and the sacred memories of the garden. There's a river nearby that you use as part of the garden's irrigation system, so it aids in flow of information! It piles up and becomes a *new* memory -- young sprouts growing alongside the dense woods. Eventually, as I interact more with the world around me by harvesting produce from the garden, renovating the cabin, painting the bench white, digging for treasure, and many more, I *change* the world around me. The person is **learning from and appreciating** my existence. They acknowledges me as I acknowledge them too. It's like signalling to each other, hey I'm human and I'm alive!"

I couldn't believe what I just heard. That's more or less how my creator described her world when she first planned on making it. 

"This is probably corny as shit, but when I acknowledge the unfamiliar through a familiar lens; that is a stranger next to me is just living a life as complex as mine, I started to appreciate the beauty of them."

I could see both her and my creator having something in common: they are, inherently *emotionally in tune.* The only difference lies in the fact that the former was really honest about it, while the latter was just putting up a scary face and hoped that the other person wouldn't notice her fears. 

"When you put it that way, this is *not* my garden. I was just tasked to take care of it. But you're right about the world's ability to self-construct. Do you want to see *your* garden?" I asked. I was expecting her to be frighten again when I inexplicitly told her "hey, we have your memory here without your consent. Isn't it nice living in the information age where your behavior is commodified?" However her eyes just lit up.

"I *have* a garden already? Can we go there?"
