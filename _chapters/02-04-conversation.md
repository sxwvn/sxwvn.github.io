---
layout: chapter
title: "Conversation"
act: 2
act_title: "The Chicken Lady"
chapter: 4
---

The next time she got back to our shared garden I told her loud and clear, "when you're done, meet me at the cabin. You know where to find me." At first she was a bit confused and maybe even shocked that her creation can boldly demand her creator. But at last, she agreed to come. She entered the cabin an hour later with the shovel still in her grip. 

"Is something wrong? Did you forget your user password? Do you suspect someone unauthorized has been to your garden? Wait, I've given you the necessary permissions and all that, right?" 

*I had a conversation with a normal looking me. She has an occupation working as an engineer.*

"Is that everything you could think of? You see your existence through the lens of you job, your duty, as a security engineer."

"Well I was just asking. Anyway I have a suspicious looking memory dump I have to analyze, so could you please just get straight to the point?"

It started raining hard outside of the cabin, which accelerated the trees' growth in the garden. Usually the tree grows in a controllable manner, or I'm still able to repress its growth. But the things she buried lately, I don't know what's inside of them. 

 *Her head is full of questions and deadlines to meet*

"It's just.. it's about the recent burials you made. It started innocently. It started as a way to not let the unpleasant past disturb you. But now you have gone to--"

"Alright, I see where this is going." 

"--deny your feelings.."

"Look, it's not your business to tell me what I can and can't do with my life."

"You've engineered yourself to appear rock solid, devoid of any emotions that you deem as weak and ugly. But it's only hurting you."

These trees are a menace to my land! They infected other patches of my farm. They killed my wheat, my carrots, my potatoes, no! Not the potatoes! Their branches kept twisting and turning. Their roots explored far beyond the boundaries of the fences I put. Some grew out of the soil where they come as if they're the hands of the undead trying to rise from hell.  

"How can I get hurt if all the bad things that ever happened to me are buried far from my reach?"

One of the twisting branches knocked the window near where we sat. As if it served a reminder that no matter how far my creator ran, they follow close. She screamed in terror. 

"What the hell is that!? What is happening in your garden?" 

She looked terrified, to which I stood up and replied,

"That?" I pointed to the window.

"That is the consequences of your actions. The more you try to push it away, the stronger it becomes!"

"Well put them further away! Isolate them, use Mandatory Access Control or something! As my guardian and *hero *I instructed you to put them away. So just do what is expected--" 

"And I'll happily serve you but not this time. You're hurting yourself!"

Something about that sentence struck her. Now she's visibly in disbelief. *Her creation had disobeyed her.* She stood up from her chair. 

"After all we've been through, I thought I could trusted you. You fucking demon!"

And just like that, she turned around to the only exit out of this room. She was about to turn the door knob when she suddenly spawned a terminal and

``` bash
$ ./make-jail.sh
Completed! Jail with standard dependencies has been created under /jail
```

"Wait, what are you trying to-"

``` bash
$ sudo nano /etc/passwd
...
chicken:x:1002:1002::/home/chicken:/usr/local/bin/jail-script
...
SAVE TO BUFFER? Y/N: Y
```

Before she hit enter, I screamed,

"ARE YOU TRYING TO JAIL ME WITH CHROOT YOU FUCKING COWARD?!"

``` bash
$ sudo cat /usr/local/bin/jail-script

#!/bin/bash
exec sudo chroot --userspec=chicken:chicken /jail /bin/bash

$ chmod+x /usr/local/bin/jail-script
```

But she continued on. And for each line of command she stripped me out of my power and autonomy.

``` bash
$ sudo visudo
...
chicken ALL=(ALL) NOPASSWD: /usr/local/bin/jail-script

$ sudo nano /etc/pam.d/su
...
auth required pam_wheel.so

$ sudo gpasswd -d chicken wheel
```

For one last time, before she truly left my sight, I said,

*"*You can go as far as you can. In fact, you just jailed me. You can rewrite this partition with zeroes. You can burn the small device inside your brain and destroy any physical trace of my existence. But *I'm not your demon.* I am something much *more important.* We will meet again, very soon.*"*

*I had a conversation with myself. She was wearing this weird looking chicken mask. Told me she's not just a thing in the past. And the time that we met won't be the last....*
